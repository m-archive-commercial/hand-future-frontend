/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import _ from 'lodash'

import { ICreateWork, SourcePlatform } from '~/ds/work'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { WECHAT_ARTICLE_URL_PLACEHOLDER } from '~/config'
import { Button } from '~/components/ui/button'

import backendAPI from '../../../lib/api'


const parseWechatArticleUrl = async (url: string): Promise<ICreateWork<SourcePlatform.wechatArticle> | null> => {
	try {
		const res = await backendAPI.get(`/wechat/article?url=${url}`)
		const { data: wechatData } = res
		console.log('parsed wechat article: ', wechatData)
		return {
			cover: wechatData.cover_url,
			source: {
				platform: SourcePlatform.wechatArticle,
				url: wechatData.url,
			},
			content: '', // todo: fetch more in wechat article to fill the content field
			description: wechatData.desc,
			title: wechatData.title,
		} as ICreateWork<SourcePlatform.wechatArticle>
	} catch (err) {
		console.error(err)
		if (err instanceof AxiosError) {
			// 有两种返回候选
			// 1. 通用：         err.message // 406
			// 2. 基于 fastapi： err.response?.data.detail // invalid url
			toast.error(err.response?.data.detail)
		}
		return null
	}
}

export const HeroInputWechat = ({ data, setData }: {
	data: ICreateWork<SourcePlatform.wechatArticle>
	setData: (data: ICreateWork<SourcePlatform.wechatArticle>) => void
}): JSX.Element => {
	return (
		<>
			<div className="inline-flex w-full items-center gap-2">
				<Label htmlFor="title" className={'w-16'}>链接</Label>
				<Input
					name={'title'}
					id="title"
					placeholder={WECHAT_ARTICLE_URL_PLACEHOLDER}
					defaultValue={data.source.url}
					onChange={(event) => setData(_.merge({}, data, { source: { url: event.target.value } }))}
				/>
				
				<Button type={'button'} className={'shrink-0'} onClick={async () => {
					if (!data.source.url) return toast.error('URL is required')
					const result = await parseWechatArticleUrl(data.source.url)
					if (result) setData({ ...data, ...result })
				}}>解析</Button>
			</div>
		
		</>
	)
	
}
