/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef, useState } from 'react'
import Link from 'next/link'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

import BaseAvatar from '../../shared/BaseAvatar'
import { WorkPresentation } from '../work/presentations'
import { Section } from '../../shared/Section'
import backendAPI from '../../../utils/api'
import { useRole } from '../../../hooks/role'

import { HeroAddWork } from './HeroAddWork'
import { HeroCover } from './HeroCover'
import { HeroImageUploader } from './HeroAvatar'


import type { IWork } from '../../../ds/work'
import type { IHero } from '../../../ds/hero'

export const HeroEditableProfile = ({ hero, works }: {
  hero: IHero
  works: IWork[]
}): JSX.Element => {
  const [heroState, setHeroState] = useState<IHero>(hero)
  const isAdmin = useRole() === 'admin'

  const updateField = async (field: string, val: string) => {
    const data = {
      id: hero.id,
      [field]: val,
    }
    await backendAPI.patch('/heroes/update', data)
    setHeroState({ ...hero, [field]: val })
  }
  const [isEditingName, setEditingName] = useState(false)
  const [isEditingTitle, setEditingTitle] = useState(false)
  const [isEditingDesc, setEditingDesc] = useState(false)

  return (
    <div className="w-full h-full lg:max-w-screen-lg flex flex-col gap-2">

      {/* cover with frontend captains */}
      <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">

        <AspectRatio.Root ratio={16 / 5}>
          <Image
            className="h-full w-full object-cover"
            src={(hero.cover || hero.avatar) + "?raw=true"}
            alt="cover"
            width={640} height={480}
          />
          {
            isAdmin && (
              <label className="btn btn-primary btn-sm absolute bottom-2 right-2">
                更改封面
                <HeroImageUploader field="cover" hero={heroState} setHero={setHeroState}/>
              </label>
            )
          }
        </AspectRatio.Root>

        <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

          <div className="inline-flex items-center gap-4 text-2xl">
            <label>
              <BaseAvatar url={hero.avatar} name={hero.name} size="lg"/>
              {isAdmin && <HeroImageUploader field="avatar" hero={heroState} setHero={setHeroState}/>}
            </label>
            {
              isAdmin && isEditingName
                ? <input
                  placeholder="No Name Found !"
                  type="text"
                  className="input input-ghost" value={heroState.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  onBlur={() => setEditingName(false)}
                />
                : <p onClick={() => setEditingName(true)}>{heroState.name}</p>
            }
          </div>

          <div className="text-lg">
            {
              isAdmin && isEditingTitle
                ? (
                  <textarea
                    className={'w-[320px]'}
                    placeholder="No Title Found !"
                    value={heroState.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    onBlur={() => setEditingTitle(false)}
                  />
                )
                : (
                  <div onClick={() => setEditingTitle(true)}>
                    {heroState.title.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                )
            }
          </div>

          <div className="mt-8 text-md">
            {
              isAdmin && isEditingDesc
                ? <textarea
                  className={'w-[320px]'}
                  placeholder="No Description Found !"
                  value={heroState.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  onBlur={() => setEditingDesc(false)}
                />
                : <p onClick={() => setEditingDesc(true)}>{heroState.description || "No Description Found !"}</p>
            }
          </div>

          <div className="mt-8 flex flx-wrap gap-2">
            {
              heroState.connections?.map((connection) => (
                <Link href={`/heroes/${connection}`} className="bg-primary rounded-md px-3 py-1" key={connection}>
                  {connection}
                </Link>
              ))
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
