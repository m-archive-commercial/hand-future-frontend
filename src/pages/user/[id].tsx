/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/query'

import { useGetHeroQuery, useGetWorksQuery } from '~/states/api/heroApi'
import { HeroEditableProfile } from '~/components/specs/hero/HeroEditableProfile'

import RootLayout from '../../components/layouts/RootLayout'

export const HeroProfilePage = () => {
	const router = useRouter()
	
	const id = router.query.id as string | undefined
	const { currentData: hero } = useGetHeroQuery(id ?? skipToken)
	const { currentData: works = [] } = useGetWorksQuery(id ?? skipToken)
	
	return (
		<RootLayout>
			{
				hero ? <HeroEditableProfile hero={hero} works={works}/> : 'Loading...'
			}
		</RootLayout>
	)
}

export default HeroProfilePage
