import MyDialog from '../BaseComponents/MyDialog'
import ProfileCore from './ProfileCore'
import React from 'react'

export const ProfileDialog = () => <MyDialog
  trigger={'Profile'}
  title={'编辑资料'}
  content={<ProfileCore/>}
/>

export default ProfileDialog
