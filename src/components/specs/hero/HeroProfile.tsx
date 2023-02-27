/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import BaseAvatar from '../../shared/BaseAvatar'
import { genWorkPresentation } from '../work/supports'

import type { IHero } from '../../../ds/hero'

export const HeroProfile = ({hero}: {
  hero: IHero
}): JSX.Element => (
  <div className="w-full h-full lg:max-w-screen-lg flex flex-col gap-2">

    {/* cover */}
    <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
      <AspectRatio.Root ratio={16 / 9}>
        <img
          className="h-full w-full object-cover"
          src={hero.cover || hero.avatar}
          alt="cover"
        />
      </AspectRatio.Root>

      <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

        <div className="inline-flex items-center gap-4">
          <BaseAvatar url={hero.avatar} name={hero.name} size="lg"/>
          <p className="text-white text-2xl">{hero.name}</p>
        </div>

        <p className="text-white text-lg">{hero.title}</p>

        <p className="mt-8 text-white text-md text-gray-100">{hero.description}</p>

        <div className="mt-8 flex flx-wrap gap-2">
          {
                //  todo: support click to jump
                hero.connections?.map((connection) => (
                  <div className="bg-primary rounded-md px-3 py-1" key={connection}>
                    {connection}
                  </div>
                ))
              }
        </div>

      </div>
    </div>

    {/*  works */}
    <div className="gap-2 grid md:grid-cols-2">
      {hero.works?.map(genWorkPresentation)}
    </div>

  </div>

  )
