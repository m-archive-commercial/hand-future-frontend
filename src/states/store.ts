/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { PersistConfig } from 'redux-persist/es/types'

import { baseApi } from '~/states/api/baseApi'
import { heroApi } from '~/states/api/heroApi'
import { isClient } from '~/utils/server'

import { userReducer } from './features/userSlice'

const rootReducer = combineReducers({
	user: userReducer,
	[baseApi.reducerPath]: baseApi.reducer,
	[heroApi.reducerPath]: heroApi.reducer,
})


const reducer = persistReducer({
	key: 'root',
	version: 2,
	storage, // storage 不能在server端被调用
} as PersistConfig<any>, rootReducer)

const logger = createLogger({
	// 消除 RTK Query 框架层面的一些 logger
	// predicate: (getState, action, logEntry) => ![
	// 	'config',
	// 	// 'executeQuery',
	// 	'internalSubscriptions',
	// ].find((s) => action.type.includes(s)),
	//
	predicate: (getState, action, logEntry) => {
		// console.log({ action })
		return ![PERSIST, REHYDRATE, REGISTER].includes(action.type)
	},
})

let middlewares = [
	baseApi.middleware,
	heroApi.middleware,
]
if (isClient()) {
	// persist logger 在 server 端好像没啥意义
	middlewares.push(logger)
}

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActionPaths: ['payload', 'register', 'rehydrate', 'err'],
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	})
		.concat(middlewares),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
