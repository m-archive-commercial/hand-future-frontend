import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { ReactNode } from 'react'

/**
 * 关于如何定义props，ref: /app-playground/app/layouts/layout.tsx
 */
export const RootLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className={'w-screen h-screen flex flex-col'}>
      <Header/>

      <NavBar/>

      <div className={'flex-1 flex justify-center items-center'}>
        {children}
      </div>

    </div>
  )
}

export default RootLayout
