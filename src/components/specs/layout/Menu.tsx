/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isMainMenuItem } from '../../../ds/menu'

import type { IMenuItem } from '../../../ds/menu'


export interface MenuProps {
	item: IMenuItem
	icon: string
}

/**
 * z-index 是最大的，保证导航栏不被覆盖
 *
 * @param {ISubMenuItem | IMainMenuItem} item
 * @param {string} icon
 * @returns {JSX.Element}
 * @constructor
 */
export const MenuItem = ({ item, icon }: MenuProps) => !isMainMenuItem(item)
	? <li className="z-50"><a href={item.path}>{item.name}</a></li>
	: (
		<li className="z-50">
			<div role="link" className="justify-between">
				{item.name}
				<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
				     viewBox="0 0 24 24"
				>
					<path d={icon}/>
				</svg>
			</div>
			<ul className="p-2">
				{item.children.map((subItem) => <MenuItem item={subItem} icon={icon} key={subItem.name}/>)}
			</ul>
		</li>
	)
