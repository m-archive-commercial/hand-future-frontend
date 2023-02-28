/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import _ from 'lodash'

import { loremIpsum } from 'lorem-ipsum'

import type { IWork } from './work'

export interface IHero {
  id: string
  name: string
  title: string
  cities: string
  avatar: string
  description: string

  /**
   * 基于作品的二度链接
   */
  connections: string[]
  cover?: string
}

export interface IShareCard extends IHero {
  articleTitle: string
  articleContent: string
}

export const mockName = (): string => loremIpsum({
  units: 'words',
  count: 1
})

export const mockTitle = (): string => loremIpsum({
  count: 4,
  units: 'words'
})

export const mockDesc = (): string => loremIpsum({
  paragraphUpperBound: 4,
  paragraphLowerBound: 2,
  units: 'paragraphs'
})

export const mockConnections = (): string[] => _.uniq(Array.from(Array(Math.ceil(1 + Math.random() * 5))).map(() => mockName()))

export const getSampleHero = (): IHero => ({
  'id': '',
  'avatar': '/avatar/003.png',
  'cities': '',
  'name': mockName(),
  'title': mockTitle(),
  description: mockDesc(),
  connections: mockConnections(),
  cover: '/cover_growth.jpg',
})
