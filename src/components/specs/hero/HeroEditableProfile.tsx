/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useState } from 'react'

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import Link from 'next/link'

import Image from 'next/image'

import BaseAvatar from '../../shared/BaseAvatar'
import { WorkPresentation } from '../work/presentations'

import backendAPI from '../../../utils/api'

import { HeroAddWork } from './HeroAddWork'

import { Section } from '../../shared/Section'

import type { IWork } from '../../../ds/work'

import type { IHero } from '../../../ds/hero'

export const HeroEditableProfile = ({ hero, works }: {
  hero: IHero
  works: IWork[]
}): JSX.Element => {
  const [heroState, setHeroState] = useState<IHero>(hero)

  console.log('works: ', works)

  return (
    <div className="w-full h-full lg:max-w-screen-lg flex flex-col gap-2">

      {/* cover */}
      <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
        <label htmlFor="change_cover" className="cursor-pointer">
          <AspectRatio.Root ratio={16 / 5}>
            <Image
              className="h-full w-full object-cover"
              src={hero.cover || hero.avatar}
              alt="cover"
              width={640} height={480}
            />
            <input id="change_cover" hidden type="file" accept={'image/*'} onChange={async (e) => {
            if (!e.target.files) {
              return
            }
            const file = e.target.files[0]
            console.log({ file })
            const formData = new FormData()
            formData.append('file', e.target.files[0])
            const resUploadAvatar = await backendAPI.post('/files/upload', formData)
            console.log({ resUploadAvatar })
            const newCover = resUploadAvatar.data.data
            console.log({ newCover })
            await backendAPI.patch('/heroes/update', {
              id: heroState.id,
              cover: newCover
            })
            setHeroState({...heroState, cover: newCover})
          }}
            />
          </AspectRatio.Root>
        </label>

        <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

          <div className="inline-flex items-center gap-4">
            <BaseAvatar url={heroState.avatar} name={heroState.name} size="lg"/>
            <p className="text-white text-2xl">{heroState.name}</p>
          </div>

          <p className="text-white text-lg">{heroState.title}</p>

          <p className="mt-8 text-white text-md text-gray-100">{heroState.description}</p>

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
      <div className="gap-2 grid md:grid-cols-2">
        {works.map((work) => <WorkPresentation key={work.id} work={work}/>)}
      </div>

      <HeroAddWork user_id={hero.id}/>

    </div>

  )
}
