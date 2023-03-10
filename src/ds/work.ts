/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { v4 } from 'uuid'

import { genRandomImage } from '../utils/random'

import { mockConnections, mockDesc, mockTitle } from './hero'

export enum SourcePlatform {
  plain = 'plain',
  bilibiliVideo = 'bilibiliVideo',
  wechatArticle = 'wechatArticle',
}

export interface WorkSource {
  platform: SourcePlatform
  url?: string
}

/**
 * 在enum中明确声明val等于key的好处是，方便使用 Object.keys(enum_variable) 遍历，否则需要做判断 key/val 的工作
 * 具体参考：https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons
 */
export enum TypographyLayout {
  typography_plain = 'typography_plain',
  typography_horizontal_bg = 'typography_horizontal_bg',
  typography_horizontal = 'typography_horizontal',
  typography_vertical = 'typography_vertical',
}

export const TypographyLayouts = Object.keys(TypographyLayout) as string[] as TypographyLayout[]

export interface IWork {
  id: string
  user_id: string
  layout: TypographyLayout
  title: string
  cover: string
  description: string
  content: string
  connections: string[] // id[]
  source: WorkSource
}

export const mockWork = (
  user_id: string,
  type: TypographyLayout = TypographyLayout.typography_horizontal_bg): IWork => ({
  id: v4(),
  user_id,
  layout: type,
  title: mockTitle(),
  description: mockDesc(),
  content: mockDesc(),
  connections: mockConnections(),
  cover: genRandomImage({}),
  source: {
    platform: SourcePlatform.plain
  }
})
