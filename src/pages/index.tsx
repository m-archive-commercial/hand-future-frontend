import type { NextPage } from 'next'
import NavBar from '../ui/components/NavBar'
import Header from '../ui/components/Header'
import RootLayout from '../ui/layouts/root'
import { ForceGraph3D } from 'react-force-graph'

const Home: NextPage = () => {
  return (
    <RootLayout>
      <div className={'text-6xl'}>

        welcome

        {/*<ForceGraph3D*/}
        {/*/>*/}

      </div>
    </RootLayout>
  )
}

export default Home
