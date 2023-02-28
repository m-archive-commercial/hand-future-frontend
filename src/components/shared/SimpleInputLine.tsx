/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { HTMLAttributes } from 'react'
import React from 'react'

export const SimpleInputLine = ({ label, id, required, ...props }: HTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  required?: boolean
}): JSX.Element => (
  <label className="input-group" htmlFor={id}>
    <span className="w-28">
      {label}
      {required && <span className="text-red-500 pl-1">*</span>}
    </span>
    <input id={id} name={id} className="input input-bordered min-w-0 flex-1" {...props}/>
  </label>
)
