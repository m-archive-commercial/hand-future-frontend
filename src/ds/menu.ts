/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

export interface ISubMenuItem {
  name: string
  path: string
}

export interface IMainMenuItem {
  name: string
  children: (ISubMenuItem | IMainMenuItem)[]
}

export const isMainMenuItem = (item: IMenuItem): item is IMainMenuItem =>
  'children' in item
export type IMenuItem = ISubMenuItem | IMainMenuItem
