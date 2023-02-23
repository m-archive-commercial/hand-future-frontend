import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfile } from '../ds/user'
import { AppState } from '../store'
import backendAPI from '../utils/api'
import { UserWork } from '../ds/userWork'

export interface UserState {
  token?: string
  basic?: UserProfile
  works: UserWork[]
  avatar?: string
}

const initialState: UserState = {
  token: undefined,
  basic: undefined,
  works: [],
  avatar: undefined
}

/**
 * pass query, async thunk: ref: https://stackoverflow.com/a/60325032/9422455
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.token = undefined
      state.basic = undefined
      state.works = []
      backendAPI.defaults.headers.common.Authorization = undefined
    },
    setToken: (state, action: PayloadAction<string>) => {
      const token = action.payload
      state.token = token
      backendAPI.defaults.headers.common.Authorization = 'Bearer ' + token // inject token into headers
    },
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.basic = action.payload
      // todo: bind async getWork to after setUser
    },
    setWorks: (state, action: PayloadAction<UserWork[]>) => {
      state.works = action.payload
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload
    }
  },
})

export const { setToken, resetAuth, setUser, setWorks, setAvatar } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state: AppState) => state.user
export const selectAvatar = (state: AppState) => state.user.avatar
