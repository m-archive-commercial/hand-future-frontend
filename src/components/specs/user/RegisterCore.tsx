/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef, useState } from 'react'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import InputText from '../../shared/InputText'
import backendAPI from '../../../utils/api'
import { INIT_USER } from '../../../ds/user'
import { BaseAvatar } from '../../shared/BaseAvatar'
import { selectAvatar, setAvatar, setToken } from '../../../states/features/userSlice'

import type { TokenData } from '../../../ds/user'
import type { ChangeEvent, FormEvent } from 'react'

export interface RegisterProps {
	isRegistered: boolean
	dispatchSetRegister: any
	dispatchClose?: any
}

export const RegisterCore = (props: RegisterProps) => {
	const {
		isRegistered,
		dispatchSetRegister,
	} = props
	
	const [loading, setLoading] = useState(false)
	const [curUser, setCurUser] = useState(INIT_USER)
	const [code, setCode] = useState('') // activation code
	const [isRegistering, setRegistering] = useState(false)
	
	const avatar = useSelector(selectAvatar)
	const dispatch = useDispatch()
	const refInputAvatar = useRef<HTMLInputElement>(null)
	
	const SwitchLoginAndRegister = ({ text, desc }: { text: string, desc: string }) => (
		<div className="text-center mt-4 ">{desc}
			<button type="button" onClick={() => dispatchSetRegister()}
			        className="badge badge-secondary  hover:text-primary hover:cursor-pointer transition duration-200"
			>
				{text}
			</button>
		</div>
	)
	
	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (curUser.username.trim() === '') {
			toast.error('用户名是必填项！')
			return
		}
		if (curUser.password.trim() === '') {
			toast.error('密码是必填项！')
			return
		}
		if (!isRegistered && curUser.nickname.trim() === '') {
			toast.error('昵称是必填项！')
			return
		}
		if (!isRegistered && curUser.email.trim() === '') {
			toast.error('邮箱是必填项！')
			return
		}
		if (!isRegistered && avatar === undefined) {
			toast.error('头像是必填项！')
			return
		}
		setLoading(true)
		console.log('registering ...')
		
		const registerForm = new FormData()
		registerForm.append('username', curUser.username)
		registerForm.append('password', curUser.password)
		
		try {
			// 登录
			if (isRegistered) {
				console.log('【登录】申请token……')
				
				// 更新token
				const resToken = await backendAPI.post('/auth/token', registerForm)
				console.log({ resToken })
				const token = (resToken.data as TokenData).access_token
				dispatch(setToken(token))
				toast('登录成功！')
			}
			// 注册 step 1. 发送邮件
			else if (!isRegistering) {
				console.log('【注册】基本信息入表……')
				registerForm.append('nickname', curUser.nickname)
				registerForm.append('email', curUser.email)
				// todo: 弄清楚这里为什么 type hint 无效
				registerForm.append('avatar', avatar!)
				
				await backendAPI.post('/auth/register', registerForm)
				setRegistering(true)
				toast(`已发送验证码到邮箱：${curUser.email}，有效期10分钟！`)
			}
			// 注册 step 2. 验证注册
			else {
				console.log('【注册】激活邮件验证码')
				if (isRegistering && code.trim() === '') {
					toast.error('验证码是必填项！')
					return
				}
				const activationForm = new FormData()
				activationForm.append('username', curUser.username)
				activationForm.append('code', code)
				await backendAPI.post('/auth/activate', activationForm)
				setRegistering(false)
				dispatchSetRegister()
				toast.success('注册成功，快登陆吧！')
				/**
				 * todo: close popup window; intercept token into axios header; load avatar
				 */
			}
		} catch (_e) {
			console.error(_e)
			if (_e instanceof AxiosError) {
				toast.error(_e.response?.data?.detail || _e.message)
			}
		} finally {
			setLoading(false)
		}
	}
	
	const update = ({ type, value }: { type: string, value: string }) => {
		setCurUser({ ...curUser, [type]: value })
		if (type === 'code') {setCode(value)}
	}
	
	const onAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || !e.target.files.length) {return}
		const formData = new FormData()
		formData.append('file', e.target.files[0])
		const resUploadAvatar = await backendAPI.post('/files/upload', formData)
		console.log({ resUploadAvatar })
		dispatch(setAvatar(resUploadAvatar.data.data))
	}
	
	return (
		
		<div className="bg-base-200 p-10">
			<form onSubmit={(e) => submitForm(e)}>
				
				<div className="mb-4">
					
					{/* login */}
					<InputText label={'用户名'} type="username" defaultValue={curUser.username} update={update}/>
					<InputText label={'密码'} type="password" defaultValue={curUser.password} update={update}/>
					
					{/* register extra */}
					{!isRegistered && (
						<div className="flex justify-between items-center">
							<div className="flex-grow flex-1">
								{/* 昵称 */}
								<InputText label={'昵称'} type="nickname" defaultValue={curUser.nickname} update={update}/>
								
								{/* 邮箱 */}
								<InputText label={'邮箱'} type="email" defaultValue={curUser.email} update={update}/>
								
								{
									isRegistering &&
					<InputText label={'验证码'} type="code" defaultValue={code} update={update}/>
								}
							</div>
							
							{/* 头像 */}
							<div className="form-control m-4 flex flex-col items-center">
								<span className="label label-text text-base-content ">头像</span>
								
								<div tabIndex={0} role="button" className=" flex justify-between items-center gap-2"
								     onClick={() => refInputAvatar.current?.click()}
								>
									<BaseAvatar size="sm" url={avatar}/>
									<input type="file" accept={'image/*'} className="hidden" ref={refInputAvatar}
									       onChange={onAvatarChange}
									/>
								</div>
							</div>
						</div>
					)}
					
					{/* todo: forget-password */}
					{/* <div className="text-right text-primary"> */}
					{/*  <Link href="/forgot-password"> */}
					{/*    <span */}
					{/*      className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200" */}
					{/*    >Forgot Password? */}
					{/*    </span> */}
					{/*  </Link> */}
					{/* </div> */}
					
					<button type="submit" className={`btn mt-2 w-full btn-primary${loading ? ' loading' : ''}`}>
						{isRegistered ? '登录' : isRegistering ? '激活' : '注册'}
					</button>
					
					{
						isRegistered
							? <SwitchLoginAndRegister desc="还没有账号？ " text="注册"/>
							: <SwitchLoginAndRegister desc="已经有账号了？" text="登录"/>
					}
				
				</div>
			</form>
		
		</div>
	
	)
}

export default RegisterCore
