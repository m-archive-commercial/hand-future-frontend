/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { IconLoaderQuarter } from '@tabler/icons-react'

import { useUser } from '~/hooks/use-user'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'


export const RegisteredDropdown = () => {
	const user = useUser()
	
	if (!user) return <IconLoaderQuarter className={'animate-spin'}/>
	
	
	return (
		// avatar with image
		<div className="dropdown dropdown-end">
			<div role="button" tabIndex={0} className="m-1">
				<Avatar>
					<AvatarImage src={user.avatar}/>
					<AvatarFallback>{user.name}</AvatarFallback>
				</Avatar>
			</div>
			
			<ul className="w-24 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
				
				<li>
					<Link href={'/user/' + user.id}>资料</Link>
				</li>
				
				<li>
					<button type="button" onClick={() => signOut()}>注销</button>
				</li>
			
			</ul>
		</div>
	)
}

export default RegisteredDropdown
