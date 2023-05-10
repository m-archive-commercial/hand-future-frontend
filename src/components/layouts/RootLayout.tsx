/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


import Header from '../specs/layout/Header'
import NavBar from '../specs/layout/NavBar'

import type { ReactNode } from 'react'

/**
 * 关于如何定义props，ref: /app-playground/app/layouts/layout.tsx
 */
export const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
	<div className="w-screen md:w-[1080px] mx-auto min-h-screen flex flex-col">
		<Header/>
		
		<NavBar/>
		
		<div className="flex-1 flex flex-col justify-center items-center py-1">
			{children}
		</div>
	
	</div>
)

export default RootLayout
