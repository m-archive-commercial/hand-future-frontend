/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

import { getServerImagePath } from '~/utils/image'
import { COVER_HEIGHT, COVER_WIDTH } from '~/config/cover'
import { useAdmin } from '~/hooks/use-role'
import { PartnerLink } from '~/components/specs/hero/PartnerLink'
import { useUpdateUserMutation } from '~/states/api/userApi'

import BaseAvatar from '../../shared/BaseAvatar'
import { WorkPresentation } from '../work/presentations'
import { Section } from '../../shared/Section'

import { HeroAddWork } from './HeroAddWork'
import { HeroImageUploader } from './HeroAvatar'


import type { IWork } from '~/ds/work'
import type { IHero } from '~/ds/hero'


export const HeroEditableProfile = ({ hero, works }: {
	hero: IHero
	works: IWork[]
}): JSX.Element => {
	const isAdmin = useAdmin()
	
	const [updateUser] = useUpdateUserMutation()
	
	// todo: onChange setState; onBlue: update (with backend)
	const updateField = async (field: string, val: string) => {
		const data = {
			id: hero.id,
			[field]: val,
		} as unknown as IHero // todo: more robust
		await updateUser(data)
	}
	const [isEditingName, setEditingName] = useState(false)
	const [isEditingTitle, setEditingTitle] = useState(false)
	const [isEditingDesc, setEditingDesc] = useState(false)
	
	
	return (
		<div className="w-full grow flex flex-col gap-2">
			
			{/* cover with frontend captains */}
			<div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
				
				<AspectRatio.Root ratio={16 / 5}>
					<Image
						className="h-full w-full object-cover"
						src={getServerImagePath(hero.avatar) || '/bg/fading-blue-background.jpg'}
						alt="cover"
						width={COVER_WIDTH}
						height={COVER_HEIGHT}
					/>
					{
						isAdmin && (
							<label className="btn btn-primary btn-sm absolute bottom-2 right-2">
								更改封面
								<HeroImageUploader hero={hero} field="cover"/>
							</label>
						)
					}
				</AspectRatio.Root>
				
				<div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">
					
					<div className="flex items-center gap-4 text-4xl">
						<label>
							<BaseAvatar url={getServerImagePath(hero.avatar)} name={hero.name} size="lg"/>
							{isAdmin && <HeroImageUploader hero={hero} field="avatar"/>}
						</label>
						{
							isAdmin && isEditingName
								? <input
									placeholder="No Name Found !"
									type="text"
									className="input input-ghost"
									defaultValue={hero.name}
									onChange={(e) => updateField('name', e.target.value)}
									onBlur={() => setEditingName(false)}
								/>
								: <p onClick={() => setEditingName(true)}>{hero.name}</p>
						}
					</div>
					
					<div className="text-lg">
						{
							isAdmin && isEditingTitle
								? (
									<textarea
										className={'w-[320px]'}
										placeholder="No Title Found !"
										defaultValue={hero.title}
										onChange={(e) => updateField('title', e.target.value)}
										onBlur={() => setEditingTitle(false)}
									/>
								)
								: (
									<div onClick={() => setEditingTitle(true)}>
										{(hero.title || '').split('\n').map((line, index) => (
											<p key={index}>{line}</p>
										))}
									</div>
								)
						}
					</div>
					
					<div className="mt-8 text-xs">
						{
							isAdmin && isEditingDesc
								? <textarea
									className={'w-[320px]'}
									placeholder="No Description Found !"
									value={hero.description}
									onChange={(e) => updateField('description', e.target.value)}
									onBlur={() => setEditingDesc(false)}
								/>
								: <p onClick={() => setEditingDesc(true)}>{hero.description || 'No Description Found !'}</p>
						}
					</div>
					
					<div className="mt-8 flex items-center gap-2">
						<span>携手嘉宾：</span>
						{
							hero.partners?.length ?
								hero.partners.map((id) => <PartnerLink id={id} key={id}/>)
								: '暂无！'
						}
					</div>
				
				</div>
			</div>
			
			<Section title="作品集合"/>
			
			{/*  works */}
			{
				works.length
					?
					<div className="gap-4 grid md:grid-cols-2">
						{works.map((work) => <WorkPresentation key={work.id} work={work}/>)}
					</div>
					:
					<div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
						暂无作品，赶快上传一个吧！
					</div>
			}
			
			{isAdmin && <HeroAddWork user_id={hero.id}/>}
		
		</div>
	
	)
}
