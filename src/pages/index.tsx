/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import dynamic from 'next/dynamic'

import RootLayout from '../components/layouts/root'

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
  () => import('../components/specs/Graph'),
  { ssr: false }
)

export const Home = () => (
  <RootLayout>
    <Graph/>
  </RootLayout>
)

export default Home
