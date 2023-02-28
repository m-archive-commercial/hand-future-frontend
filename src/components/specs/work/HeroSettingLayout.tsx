/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

import * as Label from '@radix-ui/react-label'

import { TypographyLayout, TypographyLayouts  } from '../../../ds/work'

import type { IWork } from '../../../ds/work'

export const HeroSettingLayout = ({ data, setData }: {
  data: IWork
  setData: (data: IWork) => void
}): JSX.Element => {

  const updateLayout = (_: TypographyLayout) => {
    setData({ ...data, layout: _ })
  }

  return (
    <div className="flex items-center gap-[15px] px-5">
      <Label.Root className="text-[15px] font-medium leading-[35px] text-primary" htmlFor="typography-layout">
        Typography Layout
      </Label.Root>
      <select
        className="select select-primary select-sm max-w-xs"
        defaultValue={data.layout || TypographyLayout.typography_horizontal_bg}
        onChange={(e) => updateLayout(e.target.value as TypographyLayout)}
      >
        {
          TypographyLayouts
            .map((_) => (
              <option key={_} value={_}>{_}</option>
            ))
        }
      </select>
    </div>
  )

}
