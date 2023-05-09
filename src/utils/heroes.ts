/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IUser } from '~/ds/user'

import backendAPI from './api'


export const fetchUser = async (id: string): Promise<IUser> => {
	const res = await backendAPI.get('/user', {
		params: {
			id,
		},
	})
	return res.data
}


export const getHeroRoute = (id: string): string =>
	`/heroes/${id}`
