/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Tabs } from '@radix-ui/react-tabs'

import { useAddWorkMutation } from '~/states/api/workApi'
import { ICreateWork, mockWork, SourcePlatform, TypographyLayout, TypographyLayouts } from '~/ds/work'
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { AddBilibiliWork } from '~/components/specs/work/AddBilibiliWork'

import { Section } from '../../shared/Section'
import { ConnectionsLine } from '../../shared/ConnectionsLine'
import settings from '../../../ds/settings'

import { genPlainWorkPresentation, WorkPresentation } from './WorkPresentation'
import { AddPlainWork } from './AddPlainWork'
import { AddWechatWork } from './AddWechatWork'


export const AddWork = ({ user_id }: {
	user_id: string
}): JSX.Element => {
	const [addWork] = useAddWorkMutation()
	const [work, setWork] = useState<ICreateWork<SourcePlatform>>(mockWork(user_id))
	console.log({ work })
	
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>新增作品</Button>
			</DialogTrigger>
			
			<DialogContent className="sm:w-screen md:max-w-[1080px] overflow-auto grid md:grid-cols-3 gap-2">
				
				<Section title="输入" className="col-span-2">
					<form onSubmit={async (event) => {
						event.preventDefault()
						console.log('submitting data: ', work)
						await addWork(work)
						toast.success('新作品上传成功')
					}}>
						<Tabs defaultValue={SourcePlatform.plain}>
							<TabsList className={'w-full'}>
								<TabsTrigger value={SourcePlatform.plain}>手动</TabsTrigger>
								<TabsTrigger value={SourcePlatform.wechatArticle}>微信</TabsTrigger>
								<TabsTrigger value={SourcePlatform.bilibiliVideo}>Bilibili</TabsTrigger>
							</TabsList>
							
							<TabsContent value={SourcePlatform.plain} className={'flex flex-col gap-2'}><AddPlainWork data={work} setData={setWork}/></TabsContent>
							<TabsContent value={SourcePlatform.wechatArticle}><AddWechatWork data={work as ICreateWork<SourcePlatform.wechatArticle>}
							                                                                 setData={setWork}/></TabsContent>
							<TabsContent value={SourcePlatform.bilibiliVideo}><AddBilibiliWork data={work as ICreateWork<SourcePlatform.bilibiliVideo>}
							                                                                   setData={setWork}/></TabsContent>
						
						</Tabs>
						<Button type={'submit'} className={'w-full mt-4'} size={'sm'}>提交</Button>
					</form>
				</Section>
				
				<Section title="预览" className="col-span-1">
					{work && <WorkPresentation work={work}/>}
				</Section>
				
				<Section title="数据核验" className="col-span-2">
					{work && genPlainWorkPresentation(work)}
				</Section>
				
				<Section title="控制区" className="col-span-1">
					
					<div className="flex flex-col gap-2">
						<div className="inline-flex items-center py-2 gap-2">
							<Label className="text-sm shrink-0">布局</Label>
							
							<Select defaultValue={work.layout} onValueChange={(_: TypographyLayout) => setWork({ ...work, layout: _ })}>
								<SelectTrigger><SelectValue/></SelectTrigger>
								<SelectContent>
									{
										TypographyLayouts
											.map((_) => (
												<SelectItem key={_} value={_}>{_}</SelectItem>
											))
									}
								</SelectContent>
							</Select>
						</div>
					</div>
					
					{settings.features.enable_connection_between_works &&
			  <ConnectionsLine connections={work.connections} enableAdd/>}
				
				</Section>
			
			</DialogContent>
		</Dialog>
	)
	
}
