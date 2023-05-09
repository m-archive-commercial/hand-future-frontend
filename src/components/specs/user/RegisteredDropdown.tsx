/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { BaseAvatar } from '../../shared/BaseAvatar'
import { resetAuth, selectAvatar, selectUser } from '../../../states/features/userSlice'

import ProfileDialog from './ProfileDialog'

export const RegisteredDropdown = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const avatar = useSelector(selectAvatar)

  if (!user.basic) {
    console.error('BUG: user should be inited in RegisteredDropdown')
    return <div/>
  }

  return (
    // avatar with image
    <div className="dropdown dropdown-end">
      <div  role="button" tabIndex={0} className="m-1">
        <BaseAvatar name={user.basic.nickname} url={avatar} size="md"/>
      </div>

      <ul className="w-24 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">

        <li>
          <Link href={'/user/' + user.basic.username}>资料</Link>
        </li>
        {/*<li>*/}
        {/*  <ProfileDialog/>*/}
        {/*</li>*/}

        {/* todo: following */}
        {/* <li><a>Following</a></li> */}

        <li>
          <button type="button" onClick={() => {dispatch(resetAuth())}}>注销</button>
        </li>

      </ul>
    </div>
  )
}

export default RegisteredDropdown
