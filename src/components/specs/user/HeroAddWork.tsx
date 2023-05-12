/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { toast } from 'react-toastify'

import { useAddWorkMutation } from '~/states/api/workApi'
import { mockWork } from '~/ds/work'
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'

import { Section } from '../../shared/Section'
import { genPlainWorkPresentation, WorkPresentation } from '../work/presentations'
import { HeroInputPlain } from '../work/HeroInputPlain'
import { HeroInputWechat } from '../work/HeroInputWechat'
import { HeroSettingLayout } from '../work/HeroSettingLayout'
import { ConnectionsLine } from '../../shared/ConnectionsLine'
import settings from '../../../ds/settings'
import { HeroInputBilibili } from '../work/HeroInputBilibili'

import type { IWork } from '~/ds/work'


export const HeroAddWork = ({ user_id }: {
	user_id: string
}): JSX.Element => {
	const [addWork] = useAddWorkMutation()
	
	const [work, setWork] = useState<IWork>(mockWork(user_id))
	console.log({ work })
	
	const onSubmit = async () => {
		console.log('submitting data: ', work)
		await addWork(work)
		toast.success('新作品上传成功')
	}
	
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>新增作品</Button>
			</DialogTrigger>
			
			<DialogContent className="sm:w-screen md:max-w-[1080px] overflow-auto grid md:grid-cols-3 gap-2">
				
				<Section title="输入" className="col-span-2">
					<Accordion.Root type="single" collapsible
					                className="w-full bg-mauve6 rounded-md shadow-[0_2px_10px] shadow-black/5"
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
			
			</DialogContent>
		</Dialog>
	)
	
}
