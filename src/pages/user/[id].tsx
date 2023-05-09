/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router'

import { useGetHeroQuery, useGetWorksQuery } from '~/states/api/heroApi'

import RootLayout from '../../components/layouts/RootLayout'
import { HeroEditableProfile } from '../../components/specs/hero/HeroEditableProfile'

export const HeroProfilePage = (): JSX.Element => {
	const router = useRouter()
	
	const { id } = router.query
	const { data: hero } = useGetHeroQuery(id as string)
	const { data: works = [] } = useGetWorksQuery(id as string)
	
	return (
		<RootLayout>
			{
				hero ? <HeroEditableProfile hero={hero} works={works}/> : 'Loading...'
			}
		</RootLayout>
	)
}

export default HeroProfilePage
