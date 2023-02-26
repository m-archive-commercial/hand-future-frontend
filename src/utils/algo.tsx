/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import _ from 'lodash'

export const genPascalWithSpace = (s: string): string => {
  let ret = ''
  let i = 0
  for (const c of s) {
    if (i === 0 || c <= 'Z' || c === ' ') {
      ret += ` ${  _.toUpper(c)}`
    } else {
      ret += c
    }
    i += 1
  }
  ret = ret.replace(/\s+/g, ' ')
  return ret
}
