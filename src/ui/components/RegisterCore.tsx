import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import Link from 'next/link'
import InputText from './InputText'
import backendAPI from '../../supports/utils/api'
import { AxiosError } from 'axios'
import { INIT_USER, TokenData, UserProfile } from '../../supports/ds/user'

import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { BaseAvatar } from '../base_components/BaseAvatar'
import { selectAvatar, setAvatar, setToken, setUser, setWorks } from '../../supports/features/userSlice'


export interface RegisterProps {
  isRegistered: boolean
  dispatchSetRegister: Function
  dispatchClose?: Function
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

  const SwitchLoginAndRegister = ({ text, desc }: { text: string, desc: string }) => <div
    className="text-center mt-4 ">{desc}
    <button onClick={() => dispatchSetRegister()}
            className="badge badge-secondary  hover:text-primary hover:cursor-pointer transition duration-200">{text}
    </button>
  </div>

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (curUser.username.trim() === '') return toast.error('Username is required!')
    if (curUser.password.trim() === '') return toast.error('Password is required!')
    if (!isRegistered && curUser.nickname.trim() === '') return toast.error('Nickname is required!')
    if (!isRegistered && curUser.email.trim() === '') return toast.error('Email is required!')
    if (!isRegistered && avatar === undefined) return toast.error('Avatar is required!')
    setLoading(true)
    console.log('registering ...')

    let registerForm = new FormData()
    registerForm.append('username', curUser.username)
    registerForm.append('password', curUser.password)

    try {
      // 登录
      if (isRegistered) {
        console.log('【登录】申请token……')

        // 更新token
        const resToken = await backendAPI.post('/user/token', registerForm)
        console.log({ resToken })
        const token = (resToken.data as TokenData).access_token
        dispatch(setToken(token))
        toast('登录成功！')

        // 获取用户信息，并刷新 AppState.auth.user
        const resReadUser = await backendAPI.get('/user/me')
        const { username } = (resReadUser.data as UserProfile)
        console.log({ resReadUser })
        dispatch(setUser(resReadUser.data))

        // 获取作品信息，并刷新 并刷新 AppState.auth.works
        const resGetWorks = await backendAPI.get('/works', { params: { username } })
        console.log({ resGetWorks })
        dispatch(setWorks(resGetWorks.data.data.data)) // {data: {status, data: {size, data}}}

      }
      // 注册 step 1. 发送邮件
      else if (!isRegistering) {
        console.log('【注册】基本信息入表……')
        registerForm.append('nickname', curUser.nickname)
        registerForm.append('email', curUser.email)
        // todo: 弄清楚这里为什么 type hint 无效
        registerForm.append('avatar', avatar!)

        await backendAPI.post('/user/register', registerForm)
        setRegistering(true)
        toast(`已发送验证码到邮箱：${curUser.email}，有效期10分钟！`)
      }
      // 注册 step 2. 验证注册
      else {
        console.log('【注册】激活邮件验证码')
        if (isRegistering && code.trim() === '') return toast.error('Activation Code is required!')
        let activationForm = new FormData()
        activationForm.append('username', curUser.username)
        activationForm.append('code', code)
        await backendAPI.post('/user/activate', activationForm)
        setRegistering(false)
        dispatchSetRegister()
        toast.success('注册成功，快登陆吧！')
        /**
         * todo: close popup window; intercept token into axios header; load avatar
         */
      }
    } catch (e) {
      console.error(e)
      if (e instanceof AxiosError) {
        toast.error(e.response?.data.detail)
      }
    } finally {
      setLoading(false)
    }
  }

  const update = ({ type, value }: { type: string, value: string }) => {
    setCurUser({ ...curUser, [type]: value })
    if (type === 'code') setCode(value)
  }

  const onAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return
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
          <InputText type="username" defaultValue={curUser.username} update={update}/>
          <InputText type="password" defaultValue={curUser.password} update={update}/>

          {/* register extra */}
          {!isRegistered && <>

            <div className={'flex justify-between items-center'}>
              <div className={'flex-grow flex-1'}>
                {/* 昵称 */}
                <InputText type="nickname" defaultValue={curUser.nickname} update={update}/>


                {/* 邮箱 */}
                <InputText type="email" defaultValue={curUser.email} update={update}/>

                {
                  isRegistering &&
                  <InputText type="code" defaultValue={code} update={update}/>
                }
              </div>

              {/* 头像 */}
              <div className={`form-control m-4 flex flex-col items-center`}>
                <label className="label">
                  <span className={'label-text text-base-content '}>Avatar</span>
                </label>

                <div className={' flex justify-between items-center gap-2'}
                     onClick={() => refInputAvatar.current?.click()}>
                  <BaseAvatar size={'sm'} url={avatar}/>
                  <input type={'file'} accept={'image/*'} className={'hidden'} ref={refInputAvatar}
                         onChange={onAvatarChange}/>
                </div>
              </div>
            </div>

          </>}


          {/* todo: forget-password */}
          {false && <div className="text-right text-primary"><Link href="/forgot-password"><span
            className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
          </div>}

          <button type="submit" className={'btn mt-2 w-full btn-primary' + (loading ? ' loading' : '')}>
            {isRegistered ? '登录' : '注册'}
          </button>

          {
            isRegistered
              ? <SwitchLoginAndRegister desc={'还没有账号？ '} text={'注册'}/>
              : <SwitchLoginAndRegister desc={'已经有账号了？'} text={'登录'}/>
          }

        </div>
      </form>

    </div>

  )
}

export default RegisterCore
