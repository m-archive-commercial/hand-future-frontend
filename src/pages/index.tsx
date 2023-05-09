/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { GraphData } from 'react-force-graph-3d'

import { useGetGraphDataQuery } from '~/states/api/heroApi'

import RootLayout from '../components/layouts/RootLayout'

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
	() => import('../components/specs/graph/Graph'),
	{ ssr: false },
)

export const Home = (): JSX.Element => {
	const { data: graphData } = useGetGraphDataQuery(undefined, { refetchOnMountOrArgChange: true })
	
	const [data, setData] = useState<GraphData>()
	
	useEffect(() => {
		console.log('graphData', graphData)
		if (graphData) {
			setData(graphData)
		}
	}, [graphData])
	
	console.log('indexed graph data', data)
	// we need to expand the data, since Graph would mutate the data, while the rtk query data is immutable
	return (
		<RootLayout>
			{data ? <Graph data={data}/> : 'Loading...'}
		</RootLayout>
	)
}

export default Home


