/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { mockConnections, mockDesc, mockTitle } from './hero'
import { genRandomImage } from '../utils/random'

/**
 * 在enum中明确声明val等于key的好处是，方便使用 Object.keys(enum_variable) 遍历，否则需要做判断 key/val 的工作
 * 具体参考：https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons
 */
export enum WorkType {
  typography_plain = 'typography_plain',
  typography_horizontal_bg = 'typography_horizontal_bg',
  typography_horizontal = 'typography_horizontal',
  typography_vertical = 'typography_vertical',
  bilibiliVideo = 'bilibiliVideo',
  wechatArticle = 'wechatArticle',
  // others = 'others'
}

export interface IWork {
  id: string
  type: WorkType
  title: string
  cover?: string
  description?: string
  content?: string
  connections: string[] // id[]
}

export const mockWork = (type: WorkType): IWork => ({
  id: '',
  type,
  title: mockTitle(),
  description: mockDesc(),
  content: mockDesc(),
  connections: mockConnections(),
  cover: genRandomImage({})
})

export const mockAllTypeOfWorks = (): IWork[] => {
  const workTypes = Object.keys(WorkType)
  console.log({WorkType, workTypes})
  return workTypes.map((val) => mockWork(val as WorkType))
}

export const SAMPLE_WORKS = mockAllTypeOfWorks()
