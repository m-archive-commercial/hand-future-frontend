/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import MDialog from '../shared/MDialog'
import ProfileCore from './ProfileCore'

export const ProfileDialog = () => <MDialog
  trigger="Profile"
  title="编辑资料"
  content={<ProfileCore/>}
                                   />

export default ProfileDialog
