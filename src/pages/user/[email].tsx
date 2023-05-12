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
import { HeroProfileReadMode } from '~/components/specs/hero/HeroProfileReadMode'
import { useGetUserByEmailQuery } from '~/states/api/userApi'
import { useAdmin, useSelf } from '~/hooks/use-user'

import RootLayout from '../../components/layouts/RootLayout'

export const UserPage = () => {
	const router = useRouter()
	const email = router.query.email as string | undefined
	
	const isAdmin = useAdmin()
	const isSelf = useSelf(email)
	const editable = isAdmin || isSelf
	const [isEditing, setEditing] = useState(false)
	
	const { currentData: user = null } = useGetUserByEmailQuery(email ?? skipToken)
	const { currentData: works = [] } = useGetWorksQuery(user?.id ?? skipToken)
	
	return (
		<RootLayout>
			{
				!user ? 'loading...'
					: editable
						? <HeroProfileEditMode user={user} works={works}/>
						: <HeroProfileReadMode user={user} works={works}/>
			}
		</RootLayout>
	)
}

export default UserPage
