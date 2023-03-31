/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { toast } from 'react-toastify'

import { mockWork, SourcePlatform } from '../../../ds/work'
import MyDialog from '../../shared/MyDialog'
import { Section } from '../../shared/Section'
import { genPlainWorkPresentation, WorkPresentation } from '../work/presentations'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../../shared/MyAccordion'
import { HeroInputPlain } from '../work/HeroInputPlain'
import { HeroInputWechat } from '../work/HeroInputWechat'
import { HeroSettingLayout } from '../work/HeroSettingLayout'
import { ConnectionsLine } from '../../shared/ConnectionsLine'
import settings from '../../../ds/settings'
import backendAPI from '../../../utils/api'
import { useRefresh } from '../../../utils/router'
import { HeroInputBilibili } from '../work/HeroInputBilibili'

import type { IWork } from '../../../ds/work'

export const HeroAddWork = ({ user_id }: {
  user_id: string
}): JSX.Element => {
  const [work, setWork] = useState<IWork>(mockWork(user_id))
  const refresh = useRefresh()
  console.log({ work })

  const Trigger = (
    <button type="button" className="w-full rounded-xl px-3 py-3 bg-primary text-white">增加一个新的作品</button>
  )

  const onSubmit = async () => {
    console.log('submitting data: ', work)
    const res = await backendAPI.patch('/works/update', work)
    setWork(mockWork(user_id))
    console.log('updated work: ', res.data)
    toast.success('新作品上传成功')
  }

  return (
    <MyDialog
      asChild={true}
      trigger={Trigger}
      title="新增一个作品"
      onOpenChange={(open) => {
      if (!open) {
        refresh()
      }
    }}
    >

      <div className="w-[80vw] grid md:grid-cols-3 gap-2">

        <Section title="输入" className="col-span-2">
          <Accordion.Root type="single" collapsible
            className="w-full bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
          >
            <HeroInputPlain data={work} setData={setWork} onSubmit={onSubmit}/>

            <HeroInputWechat data={work} setData={setWork} onSubmit={onSubmit}/>

            <HeroInputBilibili data={work} setData={setWork} onSubmit={onSubmit}/>

          </Accordion.Root>
        </Section>

        <Section title="预览" className="col-span-1">
          {work && <WorkPresentation work={work}/>}
        </Section>

        <Section title="数据核验" className="col-span-2">
          {work && genPlainWorkPresentation(work)}
        </Section>

        <Section title="控制区" className="col-span-1">

          <div className="flex flex-col gap-2">
            <HeroSettingLayout data={work} setData={setWork}/>
          </div>

          {settings.features.enable_connection_between_works &&
            <ConnectionsLine connections={work.connections} enableAdd/>}

        </Section>

      </div>

    </MyDialog>
  )
}
