import { useState } from 'react'
import _ from 'lodash'
import { genPascalWithSpace } from '../../supports/utils/algo'
import clsx from 'clsx'

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
  update: (props: InputAction) => void
  addonRight?: React.ReactNode
  maxLen?: number
  textClasses?: string
  id?: string
}

function InputText(props: InputTextProps) {
  const { type = 'text', update } = props
  const updateInputValue = (value: string) => {
    update({ type, value })
  }

  return <div className={'form-control mt-4 w-full'}>
    <label className="input-group">
      <span className={'w-28'}>{props.label ?? genPascalWithSpace(type)}</span>

      {/* min-w-0 is important, since the input has minimum width */}
      <input id={props.id}
             maxLength={props.maxLen} type={props.type} defaultValue={props.defaultValue}
             placeholder={props.placeholder}
             className={clsx('input input-bordered', 'min-w-0 flex-1', props.textClasses)}
             onChange={(e) => updateInputValue(e.target.value)}/>
    </label>
  </div>

}


export default InputText
