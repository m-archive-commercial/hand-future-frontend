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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { UserAvatar } from '~/components/shared/BaseAvatar'


export const RegisteredDropdown = () => {
	const user = useUser()
	
	if (!user) return <IconLoaderQuarter className={'animate-spin'}/>
	
	
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={user}/>
			</DropdownMenuTrigger>
			
			<DropdownMenuContent>
				
				<Link href={'/user/' + user.email}>
					<DropdownMenuItem>
						资料
					</DropdownMenuItem>
				</Link>
				
				<DropdownMenuItem onClick={() => signOut()}>
					注销
				</DropdownMenuItem>
			
			</DropdownMenuContent>
		</DropdownMenu>
	
	)
}

export default RegisteredDropdown
