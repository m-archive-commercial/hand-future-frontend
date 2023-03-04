/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import MyDialog from '../../shared/MyDialog'

import ProfileCore from './ProfileCore'

export const ProfileDialog = ():JSX.Element => (
  <MyDialog trigger="资料" title="编辑资料">
    <ProfileCore/>
  </MyDialog>
)

export default ProfileDialog
