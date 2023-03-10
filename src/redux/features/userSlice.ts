/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { createSlice } from '@reduxjs/toolkit'

import backendAPI from '../../utils/api'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserProfile } from '../../ds/user'
import type { AppState } from '../store'
import type { IWork } from '../../ds/work'

export interface UserState {
  token?: string
  basic?: UserProfile
  works: IWork[]
  avatar?: string
  role?: string
}

const initialState: UserState = {
  token: undefined,
  basic: undefined,
  role: undefined,
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
      backendAPI.defaults.headers.common.Authorization = `Bearer ${token}` // inject token into headers
    },
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.basic = action.payload
      // todo: bind async getWork to after setUser
    },
    setWorks: (state, action: PayloadAction<IWork[]>) => {
      state.works = action.payload
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload
    },
  },
})

export const { setToken, resetAuth, setUser, setWorks, setAvatar } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUser = (state: AppState): UserState => state.user
export const selectAvatar = (state: AppState): string => state.user.avatar || ''
