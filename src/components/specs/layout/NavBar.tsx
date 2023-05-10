/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { Avatar, AvatarFallback } from '~/components/ui/avatar'
import { useAdmin } from '~/hooks/use-role'

import RegisteredDropdown from '../account/RegisteredDropdown'
import settings from '../../../../config/sys/settings.json'

import { MenuItem } from './Menu'

import type { IMenuItem } from '../../../ds/menu'

export const SVG_PATH_ARROW_RIGHT = 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'
export const SVG_PATH_ARROW_DOWN = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'

export const NavBar = (): JSX.Element => {
	
	const { data: sessionData } = useSession()
	const isAdmin = useAdmin()
	
	const menus = (settings.menus as IMenuItem[])
		.filter((menuItem) => (
			!menuItem.admin || isAdmin
		))
		.map((menuItem) => (
			<MenuItem
				key={menuItem.name}
				item={menuItem}
				icon={SVG_PATH_ARROW_RIGHT}
			/>
		))
	
	return (
		<div className="navbar bg-theme border-b-2 w-full inline-flex justify-between">
			
			{/* 大屏：logo；小屏：折叠菜单 */}
			<div>
				
				{/* 小屏菜单 + logo >> dropdown 就是一行，里面可以包含其他东西 */}
				<div className="dropdown">
					{/* 小屏下的菜单logo >> */}
					<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
						     stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
						</svg>
					</div>
					{/* 小屏下的菜单logo << */}
					
					<ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						{menus}
					</ul>
				</div>
				{/* 小屏菜单 << */}
				
				{/* logo 应该始终位于左边，所以可以和小屏菜单封装在同一个组件里 */}
				<p className="ml-2 normal-case text-xl">携手未来</p>
			</div>
			
			{/* 导航栏 */}
			<div className="hidden md:flex flex-1 justify-center">
				<ul className="menu menu-horizontal px-1">
					{menus}
				</ul>
			</div>
			
			{/* 尾部 （搜索栏+头像） */}
			<div className="inline-flex items-center gap-2">
				{/* <div className="form-control flex-1 md:block"> */}
				{/*  <input type="text" placeholder="Search" className="input input-bordered"/> */}
				{/* </div> */}
				{
					sessionData
						? <RegisteredDropdown/>
						: (
							<Link href={'/auth/signin'}>
								<Avatar>
									<AvatarFallback>登录</AvatarFallback>
								</Avatar>
							</Link>
						)
					// <RegisterDialog/>
				}
			
			</div>
		
		</div>
	)
}

export default NavBar
