/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useSession } from 'next-auth/react'
import { skipToken } from '@reduxjs/toolkit/query'

import { useGetUserQuery } from '~/states/api/userApi'

export const useAdmin = (): boolean => {
	
	const { data: sessionData } = useSession()
	const { data: userData } = useGetUserQuery(sessionData?.user.id ?? skipToken)
	
	return userData?.role === 'admin'
}
