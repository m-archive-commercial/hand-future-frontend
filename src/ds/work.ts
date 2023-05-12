/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


import { mockConnections, mockDesc, mockTitle } from '~/mock/hero'
import { genRandomImage } from '~/lib/random'


export enum SourcePlatform {
	plain = 'plain',
	bilibiliVideo = 'bilibiliVideo',
	wechatArticle = 'wechatArticle',
}

export interface WorkSource<T extends SourcePlatform> {
	platform: T
	url: T extends SourcePlatform.plain ? undefined : string
}

/**
 * 在enum中明确声明val等于key的好处是，方便使用 Object.keys(enum_variable) 遍历，否则需要做判断 key/val 的工作
 * 具体参考：https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons
 */
export enum TypographyLayout {
	typography_plain = 'typography_plain',
	typography_horizontal_bg = 'typography_horizontal_bg',
	typography_horizontal = 'typography_horizontal',
	typography_vertical = 'typography_vertical',
}

export const TypographyLayouts = Object.keys(TypographyLayout) as string[] as TypographyLayout[]

export interface ICreateWork<T extends SourcePlatform> {
	user_id: string
	layout: TypographyLayout
	title: string
	cover: string
	description: string
	content: string
	connections: string[] // id[]
	source: WorkSource<T>
}

export interface IWork extends ICreateWork<SourcePlatform> {
	id: string
}

export const mockWork = (
	user_id: string,
	type: TypographyLayout = TypographyLayout.typography_horizontal_bg,
): ICreateWork<SourcePlatform.plain> => ({
	user_id,
	layout: type,
	title: mockTitle(),
	description: mockDesc(),
	content: mockDesc(),
	connections: mockConnections(),
	cover: genRandomImage({}),
	source: {
		platform: SourcePlatform.plain,
		url: undefined,
	},
})
