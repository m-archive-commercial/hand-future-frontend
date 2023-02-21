import type { NextPage } from 'next'
import dynamic from 'next/dynamic'


// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(
  () => import('../ui/components/Graph'),
  { ssr: false }
)

export const Home = () => <Graph/>

export default Home
