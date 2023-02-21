/**
 * configureStore with redux-persist: https://stackoverflow.com/a/63818121/9422455
 */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { userReducer } from './features/user/userSlice'
import { heroesReducer } from './features/user/heroesSlice'


const reducers = combineReducers({
  user: userReducer,
  heroes: heroesReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]

})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
