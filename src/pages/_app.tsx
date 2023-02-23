import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../supports/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { toast, ToastContainer } from 'react-toastify'
import localFont from '@next/font/local'
import backendAPI from '../supports/utils/api'
import { useEffect } from 'react'
import { setHeroes } from '../supports/features/heroesSlice'
import { IHero } from '../supports/ds/hero'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)} loading={null}>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT}/>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
