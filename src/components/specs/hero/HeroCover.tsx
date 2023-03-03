/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useRef } from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

import backendAPI from '../../../utils/api'

import type { IHero } from '../../../ds/hero'

export const HeroCover = ({ hero, setHero }: {
  hero: IHero
  setHero: (hero: IHero) => void
}): JSX.Element => {
  const coverRef = useRef<HTMLInputElement>(null)
  return (
    <AspectRatio.Root ratio={16 / 5}>
      <Image
        className="h-full w-full object-cover"
        src={hero.cover || hero.avatar}
        alt="cover"
        width={640} height={480}
      />
      <button type="button" className="btn btn-primary btn-sm absolute bottom-2 right-2"
        onClick={() => {coverRef.current?.click()}}
      >
        Change Cover
      </button>

    </AspectRatio.Root>
  )
}
