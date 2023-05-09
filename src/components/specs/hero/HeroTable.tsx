/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx'

import { HeroLineView } from '~/components/specs/hero/HeroLineView'

import type { IHero } from '../../../ds/hero'


export interface HeroTableProps {
	heroes: IHero[]
	searchKey?: string
	pageSize?: number
	pageNumber?: number
	onClickHero?: (id: string) => void
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
						.filter((hero) => !searchKey || hero.name.includes(searchKey))
						// .filter((value, i) => i >= pageNumber * pageSize && i < (pageNumber + 1) * pageSize)
						.map((hero) => <HeroLineView key={hero.id} hero={hero} onClickHero={onClickHero}/>)
				}
				
				</tbody>
			
			</table>
		</div>
	)
}

export default HeroTable
