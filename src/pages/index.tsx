/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { useGetGraphDataQuery } from '~/states/api/heroApi'

import RootLayout from '../components/layouts/RootLayout'

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
	() => import('../components/specs/graph/Graph'),
	{ ssr: false },
)

export const Home = (): JSX.Element => {
	const { data } = useGetGraphDataQuery()
	
	useEffect(() => {
		console.log('graph data: ', data)
	}, [data])
	
	return (
		<RootLayout>
			{data ? <Graph data={data}/> : <>Loading...</>}
		</RootLayout>
	)
}

export default Home


