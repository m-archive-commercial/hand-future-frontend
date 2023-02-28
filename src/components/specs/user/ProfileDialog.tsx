/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import ProfileCore from './ProfileCore'
import MyDialog from '../../shared/MyDialog'

export const ProfileDialog = ():JSX.Element => (
  <MyDialog trigger="Profile" title="编辑资料">
    <ProfileCore/>
  </MyDialog>
)

export default ProfileDialog
