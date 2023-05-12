/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useListHeroesQuery } from '~/states/api/heroApi'

import RootLayout from '../../components/layouts/RootLayout'
import HeroCard from '../../components/shared/HeroCard'

export const HeroesGallery = (): JSX.Element => {
	
	const { data: heroes = [] } = useListHeroesQuery()
	console.log('HeroesGallery: ', heroes)
	
	return (
		(
			<RootLayout>
				<div className="p-4  w-full flex flex-wrap justify-around justify-items-center gap-4">
					{
						heroes.map((hero) => (
							<HeroCard data={hero} key={hero.id}/>
						))
					}
				</div>
			</RootLayout>
		)
	)
}
export default HeroesGallery
