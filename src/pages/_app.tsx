/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Provider } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

import { store } from '../states/store'

import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { USE_PERSISTOR } from '~/config'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const MyApp = ({ Component, pageProps }: AppProps) => (
	<Provider store={store}>
		{
			USE_PERSISTOR ? (
				<PersistGate persistor={persistStore(store)} loading={null}>
					<Component {...pageProps} />
				</PersistGate>
			) : <Component {...pageProps}/>
		}
		
		<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT}/>
	</Provider>
)

export default MyApp
