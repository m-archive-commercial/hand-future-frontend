/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { createSlice } from '@reduxjs/toolkit'

import type { IHero } from '../../ds/hero'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../store'

export interface HeroesSlice {
  data: IHero[]
}

const initialState: HeroesSlice = {
  data: []
}

export const heroesSlice = createSlice(({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<IHero[]>) => {
      console.log('set heroes = ', action.payload)
      state.data = action.payload
    }
  }
}))

export const { setHeroes } = heroesSlice.actions

export const heroesReducer = heroesSlice.reducer

export const selectHeroes = (state: AppState) => state.heroes.data
