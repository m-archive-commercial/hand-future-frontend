import { IconLoaderQuarter } from '@tabler/icons-react'
import Link from 'next/link'

import { useGetHeroQuery } from '~/states/api/heroApi'
import { Button } from '~/components/ui/button'

export const PartnerLink = ({ id }: { id: string }) => {
	const { currentData } = useGetHeroQuery(id)
	
	return currentData ? (
		<Link href={`/user/${id}`}>
			<Button size={'sm'} variant={'link'}>{currentData.name}</Button>
		</Link>
	) : <IconLoaderQuarter className={'animate-spin'}/>
}
