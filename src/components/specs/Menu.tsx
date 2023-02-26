/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { it } from 'node:test'

import { isMainMenuItem } from '../../ds/menu'

import type { IMenuItem} from '../../ds/menu'

/**
 * small:
 *             <li><a>Item 1</a></li>
 *
 *             <li tabIndex={0}>
 *               <a className="justify-between">
 *                 Parent
 *                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
 *                      viewBox="0 0 24 24">
 *                   <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
 *                 </svg>
 *               </a>
 *               <ul className="p-2">
 *                 <li><a>Submenu 1</a></li>
 *                 <li><a>Submenu 2</a></li>
 *               </ul>
 *             </li>
 *
 * large:
 *           <li><a>Item 1</a></li>
 *           <li tabIndex={0}>
 *             <a>
 *               Parent
 *               <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
 *                    viewBox="0 0 24 24">
 *                 <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
 *               </svg>
 *             </a>
 *             <ul className="p-2">
 *               <li><a>Submenu 1</a></li>
 *               <li><a>Submenu 2</a></li>
 *             </ul>
 *           </li>
 */

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
