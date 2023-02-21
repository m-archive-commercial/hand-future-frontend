/**
 * icon ref: https://tabler-icons.io/
 */
import { IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { avatarSizeMap, hSizeMap, SIZE_TYPE, tSizeMap, wSizeMap } from '../../supports/ds/visual'
import Image from 'next/image'


export interface AvatarProps {
  id?: string
  url?: string
  name?: string
  size?: SIZE_TYPE
  customClasses?: string
}

const WSizeMap: Record<string, number> = {
  'sm': 12,
  'md': 16,
  'lg': 64,
  'xl': 128,
  '2xl': 256
}

export const BaseAvatar = (props: AvatarProps) => {
  const { name, url, size = 'sm' } = props

  return <div id={props.id}
              className={clsx(
                'avatar rounded-full',
                // 'border-2 border-base-500',
                !url && 'placeholder',
                'cursor-pointer',
                props.customClasses
              )}
  >

    <div className={clsx(
      'rounded-full',
      // size === 'sm' ? 'w-12 h-12' : size == 'md' ? 'w-16 h-16' : 'w-20 h-20',
      // wSizeMap[size],
      // hSizeMap[size],
      url ? ''// 'ring ring-primary ring-offset-base-100 ring-offset-2'
        : 'bg-neutral-focus text-neutral-content'
    )}>
      {
        url ? <Image src={url} alt={name || 'avatar'} width={WSizeMap[size]} height={WSizeMap[size]}/>
          : <div className={'w-12 h-12 flex justify-center items-center'}>
            {
              name
                ? <span className={tSizeMap[size]}>{name[0]}</span>
                : <IconUser/>
            }
          </div>
      }
    </div>
  </div>
}

export default BaseAvatar

