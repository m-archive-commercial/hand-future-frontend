/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'
import { toast } from 'react-toastify'

import { SourcePlatform } from '../../../ds/work'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../../shared/MyAccordion'
import { SimpleInputLine } from '../../shared/SimpleInputLine'
import { getBvidFromUrl, SAMPLE_BILIBILI_VIDEO_URL } from '../../shared/BilibiliVideo'

import { HeroControls } from './HeroControls'


import type { IWork} from '../../../ds/work'

export const HeroInputBilibili = ({ data, setData, onSubmit }: {
  data: IWork
  setData: (data: IWork) => void
  onSubmit: any
}): JSX.Element => (
  <AccordionItem value={SourcePlatform.bilibiliVideo}>
    <AccordionTrigger>A Bilibili Video </AccordionTrigger>

    <AccordionContent>
      <form className="flex flex-col gap-2" onSubmit={async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formProps = Object.fromEntries(formData)
        const url = formProps.url as string
        console.log({ formData, formProps })
        if (!url) {
          toast.error('URL is required')
          return
        }
        const bvid = getBvidFromUrl(url)
        if(!bvid){
          toast.error('URL is invalid!')
          return
        }
          // todo: craw bilibili basic info to construct a unified data structure
          setData({
            ...data,
            ...{
              id: url,
              cover: '',
              source: {
                platform: SourcePlatform.bilibiliVideo,
                url
              },
              content: '', // todo: fetch more in wechat article to fill the content field
              description: '',
              title: '',
            }
          })
      }}
      >

        <SimpleInputLine id="url" label="Source" required placeholder={SAMPLE_BILIBILI_VIDEO_URL}/>
        <HeroControls onSubmit={onSubmit}/>

      </form>
    </AccordionContent>
  </AccordionItem>
)
