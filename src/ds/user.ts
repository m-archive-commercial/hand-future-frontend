/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IHero } from '~/ds/hero'


export interface IUserWithId extends IHero {
	email?: string
	role?: 'user' | 'admin'
	cover?: string
}

export type IUserWithEmail = Omit<IUserWithId, 'id'> & { email: string }
export type IUser = IUserWithId | IUserWithEmail
