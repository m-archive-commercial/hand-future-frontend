import { IHero } from '../ds/hero'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'

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
