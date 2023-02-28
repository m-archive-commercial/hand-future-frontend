/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import { IconUser } from '@tabler/icons-react'

import Image from 'next/image'

export const SIZE_TYPES = ['sm', 'md', 'lg', 'xl', '2xl'] as const
export type SIZE_TYPE = typeof SIZE_TYPES[number]

export const tSizeMap = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
  '2xl': 'text-6xl'
}

const WSizeMap: { [key: string]: number } = {
  'sm': 12,
  'md': 16,
  'lg': 64,
  'xl': 128,
  '2xl': 256
}

export const BaseAvatar = ({ id, url, name, size = 'sm', customClasses, ...props }: HTMLAttributes<HTMLDivElement> & {
  id?: string
  url?: string
  name?: string
  size?: SIZE_TYPE
  customClasses?: string
}): JSX.Element => (
  <div
    id={id}
    className={clsx(
           'avatar rounded-full',
           // 'border-2 border-base-500',
           !url && 'placeholder',
           'cursor-pointer',
           customClasses
         )}
    {...props}
  >

    <div className={clsx(
        'rounded-full',
        // size === 'sm' ? 'w-12 h-12' : size == 'md' ? 'w-16 h-16' : 'w-20 h-20',
        // 'w-36 h-36',
        // wSizeMap[size],
        // hSizeMap[size],
        url ? ''// 'ring ring-primary ring-offset-base-100 ring-offset-2'
          : 'bg-neutral-focus text-neutral-content'
      )}
    >
      {
          url ?
            // <img src={url} alt={name || 'avatar'}/>
            <Image src={url} alt={name || 'avatar'} width={WSizeMap[size]} height={WSizeMap[size]}/>
            :
            <div className="w-12 h-12 flex justify-center items-center">
              {
                name
                  ? <span className={tSizeMap[size]}>{name[0]}</span>
                  : <IconUser/>
              }
            </div>
        }
    </div>
  </div>
  )

export default BaseAvatar
