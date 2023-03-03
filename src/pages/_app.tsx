/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { toast, ToastContainer } from 'react-toastify'

import { store } from '../redux/store'

import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)} loading={null}>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT}/>
    </PersistGate>
  </Provider>
)

export default MyApp
