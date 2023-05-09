/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from 'next/dynamic'
import { GraphData } from 'react-force-graph-3d'
import { GetServerSideProps } from 'next'

import backendAPI from '~/utils/api'

import RootLayout from '../components/layouts/RootLayout'

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
	() => import('../components/specs/graph/Graph'),
	{ ssr: false },
)

export const Home = (
	{ data }: { data: GraphData },
): JSX.Element => {
	/**
	 * todo: 不知道为什么不可以客户端rtk query获取 data list，以后再说吧
	 *
	 * 	let { data } = useGetGraphDataQuery(undefined, { refetchOnMountOrArgChange: true })
	 */
	
	
	console.log('indexed graph data', data)
	// we need to expand the data, since Graph would mutate the data, while the rtk query data is immutable
	return (
		<RootLayout>
			{data ? <Graph data={data}/> : 'Loading...'}
		</RootLayout>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await backendAPI.get('/hero/graph_data/')
	return ({ props: { data } })
}



