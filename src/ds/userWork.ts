/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

export enum UserWorkType {
  text = 'text',
  image = 'image',
  bilibiliVideo = 'bilibiliVideo',
  wechatArticle = 'wechatArticle',
  others = 'others'
}

export interface UserWork {
  id: string
  type: UserWorkType
  title: string
  description?: string
  content?: string
  connections: string[] // id[]
}
