import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { skipToken } from '@reduxjs/toolkit/query'

import { User } from '@/ds/user'
import { useGetUserQuery, useLazyGetUserQuery } from '@/states/api/userApi'
import { ID } from '@/ds/general'


export const useUser = (): User => {
	const [user, setUser] = useState<User>(null)
	
	const { data: sessionData } = useSession()
	console.log({ sessionData })
	
	const { data: userData } = useGetUserQuery(sessionData?.user.id ?? skipToken)
	console.log({ userData })
	
	useEffect(() => {
		if (!userData) return
		setUser(userData)
	}, [userData])
	
	return user
}


export const useLazyUser = (): [User, (id: ID) => void] => {
	const { data: session } = useSession()
	const id = session?.user.id
	
	const [getUser, { data: userData = null }] = useLazyGetUserQuery()
	
	useEffect(() => {
		if (!id) return
		getUser(id)
	}, [id])
	
	return [userData, getUser]
}

export const useUserId = (): ID | null => {
	const user = useUser()
	return user ? user.email : null
}
