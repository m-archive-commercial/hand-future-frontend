/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { HTMLAttributes, ReactNode } from 'react'

export const Section = ({ title, ...props }: HTMLAttributes<HTMLDivElement> & {
  title: string
}): JSX.Element => (
  <div {...props}>
    <p className="text-xl text-gray-600 font-bold w-full border-b mt-2 pl-2">
      {title}
    </p>
    {props.children}
  </div>
)
