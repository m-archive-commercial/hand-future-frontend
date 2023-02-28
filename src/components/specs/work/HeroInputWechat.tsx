/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import { AxiosError } from 'axios'

import { toast } from 'react-toastify'

import { AccordionContent, AccordionItem, AccordionTrigger } from '../../shared/MyAccordion'

import { SourcePlatform } from '../../../ds/work'
import backendAPI from '../../../utils/api'

import { SimpleInputLine } from '../../shared/SimpleInputLine'

import { HeroControls } from './HeroControls'

import type { IWork } from '../../../ds/work'

export const SAMPLE_WECHAT_ARTICLE_URL = 'https://mp.weixin.qq.com/s/5eONLhWjvh2Pj1yK2LSd9g'

export const HeroInputWechat = ({ data, setData, onSubmit }: {
  data: IWork
  setData: (data: IWork) => void
  onSubmit: any
}): JSX.Element => (
  <AccordionItem value={SourcePlatform.wechatArticle}>
    <AccordionTrigger>A Wechat Article </AccordionTrigger>

    <AccordionContent>
      <form className="flex flex-col gap-2" onSubmit={async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formProps = Object.fromEntries(formData)
        const {url} = formProps
        console.log({ formData, formProps })
        if (!url) {
          toast.error('wechat article source is required')
          return
        }
        try {
          const res = await backendAPI.get(`/wechat/article?url=${url}`)
          const { data: wechatData } = res
          console.log('parsed wechat article: ', wechatData)
          setData({
            ...data,
            ...{
              id: wechatData.url,
              cover: wechatData.cover_url,
              source: {
                platform: SourcePlatform.wechatArticle,
                url: wechatData.url
              },
              content: '', // todo: fetch more in wechat article to fill the content feild
              description: wechatData.desc,
              title: wechatData.title,
            }
          })
        } catch (err) {
          console.error(err)
          if (err instanceof AxiosError) {
            // 有两种返回候选
            // 1. 通用：         err.message // 406
            // 2. 基于 fastapi： err.response?.data.detail // invalid url
            toast.error(err.response?.data.detail)
          }
        }
      }}
      >

        <SimpleInputLine id="url" label="Source" required placeholder={SAMPLE_WECHAT_ARTICLE_URL}/>
        <HeroControls onSubmit={onSubmit}/>

      </form>
    </AccordionContent>
  </AccordionItem>
)
