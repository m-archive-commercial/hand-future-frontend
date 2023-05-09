/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NextFontWithVariable } from '@next/font'

export const FONT_WEIGHTS = [
	'font-thin',
	'font-extralight',
	'font-light',
	'font-normal',
	'font-medium',
	'font-semibold',
	'font-bold',
	'font-extrabold',
	'font-black',
] as const

export type FONT_WEIGHT = typeof FONT_WEIGHTS[number]


export interface IFontItem {
	name: string
	font?: NextFontWithVariable
}
