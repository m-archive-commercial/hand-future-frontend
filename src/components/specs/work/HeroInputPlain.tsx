/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { toast } from 'react-toastify'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../shared/MyAccordion'
import { SourcePlatform } from '../../../ds/work'
import backendAPI from '../../../lib/api'
import { SimpleInputLine } from '../../shared/SimpleInputLine'

import { HeroControls } from './HeroControls'

import type { IWork } from '../../../ds/work'

export const HeroInputPlain = ({ data, setData, onSubmit }: {
	data: IWork
	setData: (data: IWork) => void
	onSubmit: any
}): JSX.Element => (
	<AccordionItem value={SourcePlatform.plain}>
		<AccordionTrigger>手动输入一篇文章 </AccordionTrigger>
		<AccordionContent>
			<form className="flex flex-col gap-2" onSubmit={async (event) => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				const formProps = Object.fromEntries(formData)
				console.log({ data, formData, formProps })
				if (!formProps.title) {
					toast.error('标题是必填项！')
					return
				}
				// 要把 cover 从 file 转成 uri
				const { coverFile, ...targetFormProps } = formProps
				if ((coverFile as File).size) {
					const avatarFormData = new FormData()
					avatarFormData.append('file', coverFile)
					const avatarRes = await backendAPI.post('/files/upload', avatarFormData)
					console.log({ avatarRes })
					const cover = avatarRes.data.data as string
					setData({ ...data, cover, ...targetFormProps } as unknown as IWork)
				} else {
					setData({ ...data, ...targetFormProps } as unknown as IWork)
				}
			}}
			>
				{/* title */}
				<SimpleInputLine id="title" label="标题" required placeholder={data.title}/>
				{/* description */}
				<SimpleInputLine id="description" label="摘要" required placeholder={data.description}/>
				{/* content */}
				<label className="input-group" htmlFor="content">
					<span className="w-28">内容<span className="text-red-500 pl-1">*</span></span>
					<textarea id="content" name="content" className="input input-bordered min-w-0 flex-1"
					          placeholder={data.content}
					/>
				</label>
				{/* avatar */}
				<label className="input-group" htmlFor="coverFile">
					<span className="w-28">封面<span className="text-red-500 pl-1">*</span></span>
					<input id="cover" name="coverFile" type="file" accept="image/" className="flex-1 ml-4"
					       placeholder={data.cover}
					/>
				</label>
				
				<HeroControls onSubmit={onSubmit}/>
			
			</form>
		</AccordionContent>
	</AccordionItem>
)
