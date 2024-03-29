/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import { genPascalWithSpace } from '../../lib/algo'

export interface InputAction {
	type: string
	value: string
}

export interface InputTextProps {
	label?: string
	labelStyle?: string
	type: string
	containerStyle?: string
	defaultValue?: string
	placeholder?: string
	update: (props: InputAction) => void
	addonRight?: React.ReactNode
	rows?: number
	cols?: number
	maxLength?: number
	id?: string
}

const InputText = (props: InputTextProps) => {
	const { type, update } = props
	const updateInputValue = (value: string) => {
		update({ type, value })
	}
	
	return (
		<div className="form-control w-full">
			<label className="input-group" htmlFor={props.id}>
				<span className="w-28">{props.label ?? genPascalWithSpace(type)}</span>
				<textarea
					id={props.id}
					rows={props.rows} cols={props.cols} maxLength={props.maxLength}
					placeholder={props.placeholder} className="textarea bordered min-w-0 flex-1"
					onChange={(e) => updateInputValue(e.target.value)}
				/>
			</label>
		</div>
	)
	
}

export default InputText
