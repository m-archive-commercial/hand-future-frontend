/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/query'
import { useState } from 'react'

import { useGetWorksQuery } from '~/states/api/heroApi'
import { HeroProfileEditMode } from '~/components/specs/hero/HeroProfileEditMode'
import { useGetUserByEmailQuery } from '~/states/api/userApi'
import { HeroProfileReadMode } from '~/components/specs/hero/HeroProfileReadMode'
import { useAdmin, useSelf } from '~/hooks/use-user'
import { Button } from '~/components/ui/button'

import RootLayout from '../../components/layouts/RootLayout'

export const UserPage = () => {
	const router = useRouter()
	const email = router.query.email as string | undefined
	
	const { currentData: user = null } = useGetUserByEmailQuery(email ?? skipToken)
	const { currentData: works = [] } = useGetWorksQuery(user?.id ?? skipToken)
	
	const [editModel, setEditModel] = useState(false)
	
	const isAdmin = useAdmin()
	const isSelf = useSelf(user?.id)
	const editable = isAdmin || isSelf
	
	return (
		<RootLayout>
			
			{
				!user
					? 'User Not Exists!'
					: editModel ? <HeroProfileEditMode user={user} works={works}/>
						: <HeroProfileReadMode user={user} works={works}/>
			}
			
			{editable && (
				<Button size={'sm'} className={'absolute top-2 right-2 z-auto'} onClick={() => setEditModel(!editModel)}>
					{editModel ? '编辑模式' : '阅读模式'}
				</Button>
			)}
		</RootLayout>
	)
}

export default UserPage
