/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import clsx from 'clsx'

import { genPascalWithSpace } from '../../lib/algo'

export interface InputAction {
	type: string
	value: string
}

export interface InputTextProps {
	label?: string
	labelStyle?: string
	type?: string
	containerStyle?: string
	defaultValue?: string
	placeholder?: string
	update?: (props: InputAction) => void
	addonRight?: React.ReactNode
	maxLen?: number
	textClasses?: string
	id?: string
}

const InputText = (props: InputTextProps) => {
	const { type = 'text', update } = props
	const updateInputValue = (value: string) => {
		if (update) {update({ type, value })}
	}
	
	return (
		<div className="form-control w-full">
			<label className="input-group" htmlFor={props.id}>
				<span className="w-28">{props.label ?? genPascalWithSpace(type)}</span>
				<input
					id={props.id}
					maxLength={props.maxLen}
					type={props.type}
					defaultValue={props.defaultValue}
					placeholder={props.placeholder}
					// min-w-0 is important, since the input has minimum width */}
					className={clsx('input input-bordered', 'min-w-0 flex-1', props.textClasses)}
					onChange={(e) => updateInputValue(e.target.value)}
				/>
			</label>
		</div>
	)
	
}

export default InputText
