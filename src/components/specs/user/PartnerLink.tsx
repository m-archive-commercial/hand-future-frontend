import { IconLoaderQuarter } from '@tabler/icons-react'
import Link from 'next/link'

import { useGetUserQuery } from '~/states/api/heroApi'
import { Button } from '~/components/ui/button'

export const PartnerLink = ({ id }: { id: string }) => {
	const { currentData } = useGetUserQuery(id)
	
	return currentData ? (
		<Link href={`/user/${id}`}>
			<Button size={'sm'} variant={'link'}>{currentData.name}</Button>
		</Link>
	) : <IconLoaderQuarter className={'animate-spin'}/>
}
