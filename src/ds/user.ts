/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IHero } from '~/ds/hero'


export interface IUserId extends IHero {
	email?: string
	role?: 'user' | 'admin'
	cover?: string
}

export type IUserEmail = Omit<IUserId, 'id'> & { email: string }
export type IUser = IUserId | IUserEmail
export type User = IUser | null
