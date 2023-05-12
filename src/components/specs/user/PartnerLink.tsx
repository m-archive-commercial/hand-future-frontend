import { IconLoaderQuarter } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '~/components/ui/button'
import { useGetUserByIdQuery } from '~/states/api/userApi'

export const PartnerLink = ({ id }: { id: string }) => {
	const { currentData } = useGetUserByIdQuery(id)
	
	return currentData ? (
		<Link href={`/user/${id}`}>
			<Button size={'sm'} variant={'link'}>{currentData.name}</Button>
		</Link>
	) : <IconLoaderQuarter className={'animate-spin'}/>
}
