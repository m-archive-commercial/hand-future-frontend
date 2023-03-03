/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import backendAPI from '../../../utils/api'
import { selectAvatar, setUser } from '../../../redux/features/userSlice'
import { BaseAvatar } from '../../shared/BaseAvatar'

import type { ChangeEvent} from 'react'

export const UserAvatar = () => {
  const refAvatar = useRef<HTMLInputElement>(null)
  const avatar = useSelector(selectAvatar)
  const dispatch = useDispatch()
  if (!avatar) {return <div/>}

  const onFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log('file input changed: ', e.target.files)
    if (!e.target.files) {return}
    const file = e.target.files[0]
    console.log({ file })
    if (!file) {return}
    // failed to avoid using FormData, ref: https://stackoverflow.com/a/64582388/9422455
    const formData = new FormData()
    formData.append('file', file)
    const resUploadAvatar = await backendAPI.post(
      '/files/upload',
      formData
    )
    console.log({ resUploadAvatar })
    const resUpdateUser = await backendAPI.patch(
      '/user/update',
      { 'avatar': resUploadAvatar.data.data }
    )
    console.log({ resUpdateUser })
    dispatch(setUser(resUpdateUser.data.data))
  }

  return (
    <button type="button" onClick={() => refAvatar.current?.click()}>
      <input
        type="file"
        accept="image/*"
        ref={refAvatar}
        className="hidden"
        onChange={onFileInputChange}
      />
      <BaseAvatar size="md" url={avatar}/>
    </button>
  )
}

export default UserAvatar
