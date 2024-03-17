/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/query'
import { useState } from 'react'
import clsx from 'clsx'

import { HeroProfileEditMode } from '~/components/specs/user/HeroProfileEditMode'
import { HeroProfileReadMode } from '~/components/specs/user/HeroProfileReadMode'
import { useAdmin, useSelf } from '~/hooks/use-user'
import { useListWorksQuery } from '../../store/states/api/workApi'
import { useGetUserQuery } from '../../store/states/api/userApi'
import { Switch } from '~/components/ui/switch'

import RootLayout from '../../components/layouts/RootLayout'

export const UserPage = () => {
	const router = useRouter()
	const email = router.query.email as string | undefined
	const id = router.query.id as string | undefined
	
	const query = { 'email': email, 'id': id }
	const isEmpty = !query.email && !query.id
	console.log({ id, email, isEmpty })
	const { currentData: user = null } = useGetUserQuery(isEmpty ? skipToken : query)
	const { currentData: works = [] } = useListWorksQuery(user?.id ?? skipToken)
	
	const [editMode, setEditMode] = useState<boolean>(false)
	
	const isAdmin = useAdmin()
	const isSelf = useSelf(user?.id)
	const editable = isAdmin || isSelf
	
	
	return (
		<RootLayout>
			
			{
				!user
					? 'User Not Exists!'
					: editMode ? <HeroProfileEditMode user={user} works={works}/>
						: <HeroProfileReadMode user={user} works={works}/>
			}
			
			{editable && (
				<div className={'absolute top-2 right-2 z-auto inline-flex items-center gap-2'}>
					<span className={clsx('text-gray-500', !editMode && 'text-gray-700 font-bold')}>访客模式</span>
					<Switch checked={editMode} onClick={() => setEditMode(!editMode)}/>
					<span className={clsx('text-gray-500', editMode && 'text-gray-700 font-bold')}>编辑模式</span>
				</div>
			)}
		</RootLayout>
	)
}

export default UserPage
