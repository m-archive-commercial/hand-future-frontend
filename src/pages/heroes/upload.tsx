/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import RootLayout from '../../components/layouts/root'

import { getSampleHero } from '../../ds/hero'

import UserAvatar from '../../components/specs/user/UserAvatar'
import BaseAvatar from '../../components/shared/BaseAvatar'

import type { IHero } from '../../ds/hero'

export const HeroesUpload = (): JSX.Element => {
  const hero: IHero = getSampleHero()

  return (
    <RootLayout>

      <div className="w-full h-full lg:max-w-screen-lg">

        {/* cover */}
        <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={hero.avatar}
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio.Root>

          <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

            <div className="inline-flex items-center gap-4">
              <BaseAvatar url={hero.avatar} name={hero.name} size="lg"/>
              <p className="text-white text-2xl">{hero.name}</p>
            </div>

            <p className="text-white text-lg">{hero.title}</p>

            <p className="mt-8 text-white text-md text-gray-200">{hero.description}</p>

            <div className="mt-8 inline-flex gap-2">
              {
              //  todo: support click to jump
              hero.connections.map((connection) => (
                <div className="badge bg-primary" key={connection}>
                  {connection}
                </div>
              ))
            }
            </div>

          </div>
        </div>
      </div>

    </RootLayout>
  )

}

export default HeroesUpload
