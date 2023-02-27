/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { mockConnections, mockDesc, mockTitle } from './hero'
import { genRandomImage } from '../utils/random'

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
export enum WorkLayout {
  typography_plain = 'typography_plain',
  typography_horizontal_bg = 'typography_horizontal_bg',
  typography_horizontal = 'typography_horizontal',
  typography_vertical = 'typography_vertical',
}

export interface IWork {
  id: string
  layout: WorkLayout
  title: string
  cover?: string
  description?: string
  content?: string
  connections: string[] // id[]
  source: WorkSource
}

export const mockWork = (type: WorkLayout): IWork => ({
  id: '',
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

export const mockAllTypeOfWorks = (): IWork[] => {
  const workTypes = Object.keys(WorkLayout)
  console.log({ WorkType: WorkLayout, workTypes })
  return workTypes.map((val) => mockWork(val as WorkLayout))
}

export const SAMPLE_WORKS = mockAllTypeOfWorks()
