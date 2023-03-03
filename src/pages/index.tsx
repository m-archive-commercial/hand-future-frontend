/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'

import RootLayout from '../components/layouts/root'
import backendAPI from '../utils/api'
import { fetchHeroes } from '../utils/heroes'
import { IHero } from '../ds/hero'

import type { GraphData } from 'react-force-graph-3d'

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
  () => import('../components/specs/graph/Graph'),
  { ssr: false }
)

export const Home = ({data}: {data: IHero[]}): JSX.Element => (
  <RootLayout>
    <Graph data={data}/>
  </RootLayout>
)

export default Home


export const getServerSideProps: GetServerSideProps = async () => ({ props: { data: await fetchHeroes()} })

// export const getServerSideProps  = async  (): Promise<{props: {data: GraphData}}> => {
//   const res=  await backendAPI.get('/data')
//   const {data} = res
//   console.log('server: ', data)
//   return {
//     props: {
//       data
//     }
//   }
// }
