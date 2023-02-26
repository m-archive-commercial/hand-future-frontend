/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

export interface IHero {
  id: string
  name: string
  title: string
  cities: string
  avatar: string
}

export interface IShareCard extends IHero {
  articleTitle: string
  articleContent: string
}
