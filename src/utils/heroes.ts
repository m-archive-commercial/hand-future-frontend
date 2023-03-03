/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import backendAPI from './api'

import type { IHero } from '../ds/hero'

export const fetchHeroes = async (): Promise<IHero[]> => {
  const res = await backendAPI.get('/heroes/list')
  // console.log({ res })
  return res.data.list
}

export const fetchHero = async (id: string): Promise<IHero> => {
  const res = await backendAPI.get(`/heroes/?id=${id}`)
  return res.data
}


export const getHeroRoute = (id: string): string =>
  `/heroes/${id}`
