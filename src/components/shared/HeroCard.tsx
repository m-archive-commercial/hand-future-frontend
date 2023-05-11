/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Image from 'next/image'
import Link from 'next/link'

import { getServerImagePath } from '~/lib/image'

import type { IHero } from '../../ds/hero'

export interface HeroCardProps {
	data: IHero
}

export const HeroCard = ({ data }: HeroCardProps): JSX.Element => (
	(
		<div className="card w-64 h-96 bg-base-100 image-full2">
			<figure><Image src={getServerImagePath(data.avatar) || ''} alt="avatar" width={512} height={512}/></figure>
			<div className="card-body">
				<h2 className="card-title">
					{data.name}
					<div className="badge badge-outline">{data.cities}</div>
				</h2>
				<p>{data.title}</p>
				<div className="card-actions justify-end">
					<Link href={`/heroes/${data.email}`} className="badge badge-outline">
						查看详情
					</Link>
					
					{/*  我要提名 */}
					{/* <Dialog hero={{ name: data.name, avatar: data.avatar }} */}
					{/*  user={{ name: 'test', avatar: 'xx', message: '好想好想……' }} */}
					{/* /> */}
				
				</div>
			</div>
		
		</div>
	)
)

export default HeroCard
