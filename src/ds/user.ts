/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

export interface UserLogin {
  username: string
  password: string
}

export interface UserRegister extends UserLogin {
  email: string
  nickname: string
  avatar: string
}

export interface UserSocial {
  following: number
  followed: number
  likes: number
}

export interface UserProfile extends UserRegister {
  desc?: string
  sex?: string
  city?: string
  social: UserSocial // todo: potential error since not init
}

export const INIT_USER: UserRegister = {
  username: '',
  password: '',
  email: '',
  nickname: '',
  avatar: ''
}

export interface TokenData {
  access_token: string // aka. ey...
  token_type: string // aka. bearer
}
