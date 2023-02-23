'use client'

import dynamic from 'next/dynamic'
import RootLayout from '../ui/layouts/root'


// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
  () => import('../ui/components/Graph'),
  { ssr: false }
)

export const Home = () => (
  <RootLayout>
    <Graph/>
  </RootLayout>
)

export default Home
