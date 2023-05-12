import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { skipToken } from '@reduxjs/toolkit/query'

import { User } from '@/ds/user'
import { useGetUserByIdQuery } from '~/states/api/userApi'


export const useUserId = (): string | undefined => {
	const { data } = useSession()
	return data?.user.id
}

export const useUser = (): User => {
	const [user, setUser] = useState<User>(null)
	const userId = useUserId()
	
	const { data: userData } = useGetUserByIdQuery(userId ?? skipToken)
	// console.log({ userData })
	
	useEffect(() => {
		if (!userData) return
		setUser(userData)
	}, [userData])
	
	return user
}

export const useSelf = (id: string | undefined): boolean => {
	const yourId = useUserId()
	return id ? yourId === id : false
}

export const useAdmin = (): boolean => {
	const user = useUser()
	return user?.role === 'admin'
}
