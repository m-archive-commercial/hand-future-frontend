/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from 'react'

import backendAPI from '../../../utils/api'
import { useRefresh } from '../../../utils/router'

import type { HTMLAttributes } from 'react'
import type { IHero } from '../../../ds/hero'

export const HeroImageUploader = ({ hero, setHero, field, ...props }: HTMLAttributes<HTMLDivElement> & {
	field: string
	hero: IHero
	setHero: (hero: IHero) => void
}): JSX.Element => {
	const refresh = useRefresh()
	const ref = useRef<HTMLInputElement>(null)
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
			
			const resUpdateImage = await backendAPI.patch('/heroes/update', {
				id: hero.id,
				[field]: imgPath,
			})
			console.log({ resUpdateImage })
			
			setHero({ ...hero, [field]: imgPath })
			refresh()
		}}
		/>
	)
}
