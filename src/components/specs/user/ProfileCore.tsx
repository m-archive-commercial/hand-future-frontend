/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import { useSelector } from 'react-redux'

import { selectUser } from '../../../redux/features/userSlice'
import UserAvatar from './UserAvatar'

export const SocialCell = (props: { text: string, cnt: number }) => (
  <div className="mr-4">
    <div className="text-lg font-medium">{props.cnt}</div>
    <div className="text-md text-gray-500">{props.text}</div>
  </div>
)

export const ProfileCore = (): JSX.Element => {
  const user = useSelector(selectUser)
  if (!user.basic) {
    console.error('BUG: user not init after profile')
    return <div/>
  }

  return (
    <div className="overflow-y-auto max-h-[70vh] pb-8">
      <div className="flex flex-wrap justify-between">
        <div id="row_avatar-name-id" className="flex items-center mb-4">
          <div className="flex">

            <UserAvatar/>

            <div id="col_name-id" className="ml-4">
              <div className="text-2xl">{user.basic.nickname}</div>
              <div className="text-gray-500">id: {user.basic.username}</div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div id="row_social-opers" className="flex items-center flex-grow ml-4">
            <SocialCell text="Following" cnt={user.basic.social.following}/>
            <SocialCell text="Followed" cnt={user.basic.social.followed}/>
            <SocialCell text="Likes" cnt={user.basic.social.likes}/>
            {/* 控制最后一个element轴向的位置，没有flex，需要用margin */}
            {/* <div id={'edit-profile'} className={'badge p-4 badge-outline badge-secondary text-white ml-auto mr-4'}>Edit */}
            {/*  Profile */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <div id="row_profile" className="text-gray-500 m-2">
        {
          user.basic.desc || 'Click here to fill in the profile'
        }
      </div>

      <div className="divider"/>

      <div className="flex flex wrap justify-around">
        {
          // todo: add work id
          user.works.map((work, index) => (
            <div key={index} className="w-2/5">
              <h3>{work.title}</h3>
              {
                // work.type === 'bilibiliVideo' && <BilibiliVideo bvid={work.content} enableDanmu={0}/>
              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ProfileCore
