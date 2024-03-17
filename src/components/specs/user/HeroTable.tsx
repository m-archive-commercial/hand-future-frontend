/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx'


import { BaseAvatar } from '~/components/shared/BaseAvatar'
import { normalizeImageUri } from '~/lib/image'

import type { IHero } from '../../../schema/hero'


export interface HeroTableProps {
	heroes: IHero[]
	searchKey?: string
	pageSize?: number
	pageNumber?: number
	onClickHero?: (id: string) => void
}

export const HeroLineView = ({
	                             hero, onClickHero,
                             }: {
	                             hero: IHero,
	                             onClickHero?: (id: string) => void
                             },
) => {
	
	return (
		<tr onClick={() => {onClickHero && onClickHero(hero.id)}}>
			
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded-full w-12 h-12">
							<BaseAvatar url={normalizeImageUri(hero.avatar || '')} text={hero.name}/>
						</div>
					</div>
					<div>
					</div>
				</div>
			</td>
			
			<td>
				<div className="font-bold">{hero.name}</div>
				<div className="text-sm opacity-50">{hero.cities}</div>
			</td>
		</tr>
	)
}


export const HeroTable = (props: HeroTableProps) => {
	const { heroes, pageSize = 10, pageNumber = 0, searchKey, onClickHero } = props
	return (
		<div className="overflow-auto max-w-[360px] max-h-[60vh]">
			<table className={clsx(
				// 'block',
				'table',
				// 'table-zebra',
				// 'table-compact'
			)}
			>
				<thead>
				<tr>
					<th>Avatar</th>
					<th>Name</th>
				</tr>
				</thead>
				
				<tbody>
				{
					heroes
						.filter((hero) => !searchKey || hero.name?.includes(searchKey))
						// .filter((value, i) => i >= pageNumber * pageSize && i < (pageNumber + 1) * pageSize)
						.map((hero) => <HeroLineView key={hero.id} hero={hero} onClickHero={onClickHero}/>)
				}
				
				</tbody>
			
			</table>
		</div>
	)
}

export default HeroTable
