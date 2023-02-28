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

import { HeroAddWork } from './HeroAddWork'

import { Section } from '../../shared/Section'

import { HeroCover } from './HeroCover'

import { HeroImageUploader } from './HeroAvatar'

import backendAPI from '../../../utils/api'

import { useRole } from '../../../hooks/role'

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
      [field]: val
    }
    await backendAPI.patch('/heroes/update', data)
    setHeroState({ ...hero, [field]: val })
  }

  return (
    <div className="w-full h-full lg:max-w-screen-lg flex flex-col gap-2">

      {/* cover with frontend captains */}
      <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">

        <AspectRatio.Root ratio={16 / 5}>
          <Image
            className="h-full w-full object-cover"
            src={hero.cover || hero.avatar}
            alt="cover"
            width={640} height={480}
          />
          {
            isAdmin && (
            <label className="btn btn-primary btn-sm absolute bottom-2 right-2">
              Change Cover
              <HeroImageUploader field="cover" hero={heroState} setHero={setHeroState}/>
            </label>
            )
          }
        </AspectRatio.Root>

        <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

          <div className="inline-flex items-center gap-4 text-2xl">
            <label>
              <BaseAvatar url={hero.avatar} name={hero.name} size="lg"/>
              <HeroImageUploader field="avatar" hero={heroState} setHero={setHeroState}/>
            </label>
            {
              isAdmin
                ? <input
                    placeholder="No Name Found !"
                    type="text" className="input input-ghost" value={heroState.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                : <p>{heroState.name}</p>
            }
          </div>

          <div className="text-lg">
            {
            isAdmin
              ? <input
                  placeholder="No Title Found !"
                  type="text"
                  className="input input-ghost" value={heroState.title}
                  onChange={(e) => updateField('title', e.target.value)}
                />
              : <p>{heroState.title}</p>
          }
          </div>

          <div className="mt-8 text-md">
            {
            isAdmin
              ? <input
                  placeholder="No Description Found !"
                  type="text"
                  className="input input-ghost"
                  value={heroState.description} onChange={(e) => updateField('description', e.target.value)}
                />
              : <p>{heroState.description}</p>
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

      <Section title="Collection of Works"/>

      {/*  works */}
      {
        works.length
          ?
            <div className="gap-4 grid md:grid-cols-2">
              {works.map((work) => <WorkPresentation key={work.id} work={work}/>)}
            </div>
          :
            <div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
              Empty Here
            </div>
      }

      {isAdmin && <HeroAddWork user_id={hero.id}/>}

    </div>

  )
}
