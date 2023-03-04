/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GraphData } from 'react-force-graph-3d'

import backendAPI from './api'

import type { IHero } from '../ds/hero'

export const fetchHeroGraphData = async (): Promise<GraphData> => {
  const res = await backendAPI.get('/heroes2/graph_data')
  return res.data
}

export const fetchHeroes = async (): Promise<IHero[]> => {
  const res = await backendAPI.get('/heroes/list')
  return res.data
}

export const fetchHero = async (id: string): Promise<IHero> => {
  const res = await backendAPI.get(`/heroes/?id=${id}`)
  return res.data
}


export const getHeroRoute = (id: string): string =>
  `/heroes/${id}`
