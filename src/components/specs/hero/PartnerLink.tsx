import { IconLoaderQuarter } from '@tabler/icons-react'
import Link from 'next/link'

import { useGetHeroQuery } from '~/states/api/heroApi'

export const PartnerLink = ({ id }: { id: string }) => {
	const { currentData } = useGetHeroQuery(id)
	
	return currentData ? (
		<Link href={`/user/${id}`} className="bg-primary rounded-md px-3 py-1">
			{currentData.name}
		</Link>
	) : <IconLoaderQuarter className={'animate-spin'}/>
}
