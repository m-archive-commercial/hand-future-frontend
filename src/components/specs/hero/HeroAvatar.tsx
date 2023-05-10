/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from 'react'

import { useUpdateUserMutation } from '~/states/api/userApi'

import backendAPI from '../../../utils/api'

import type { HTMLAttributes } from 'react'
import type { IHero } from '~/ds/hero'


export const HeroImageUploader = ({ hero, field, ...props }: HTMLAttributes<HTMLDivElement> & {
	field: 'cover' | 'avatar'
	hero: IHero
}): JSX.Element => {
	const ref = useRef<HTMLInputElement>(null)
	const [updateHero] = useUpdateUserMutation()
	
	return (
		<input {...props} ref={ref} hidden type="file" accept={'image/*'} onChange={async (e) => {
			if (!e.target.files) {
				return
			}
			const file = e.target.files[0]
			console.log({ file })
			const formData = new FormData()
			formData.append('file', e.target.files[0])
			const resUploadImage = await backendAPI.post('/files/upload', formData)
			const imgPath = resUploadImage.data
			console.log({ resUploadImage, field, imgPath })
			await updateHero({ id: hero.id, [field]: imgPath })
		}}
		/>
	)
}
