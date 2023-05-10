/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useSelector } from 'react-redux'

import { selectUser } from '../states/features/userSlice'

export const useRole = (): string | undefined => {
  const user = useSelector(selectUser)
  return user.basic?.role
}


export const useAdmin = (): boolean => {
  const role = useRole()
  return role === 'admin'
}
