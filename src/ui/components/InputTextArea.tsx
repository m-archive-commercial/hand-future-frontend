import { useState } from 'react'
import _ from 'lodash'
import { genPascalWithSpace } from '../../supports/utils/algo'

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

function InputText(props: InputTextProps) {
  const { type, update } = props
  const updateInputValue = (value: string) => {
    update({ type, value })
  }

  return <div className={'form-control mt-4 w-full'}>
    <label className="input-group">
      <span className={'w-28'}>{props.label ?? genPascalWithSpace(type)}</span>
      <textarea
        id={props.id}
        rows={props.rows} cols={props.cols} maxLength={props.maxLength}
        placeholder={props.placeholder} className="textarea bordered min-w-0 flex-1"
        onChange={(e) => updateInputValue(e.target.value)}/>
    </label>
  </div>

}


export default InputText
