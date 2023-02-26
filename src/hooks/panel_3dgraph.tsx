/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { ReactNode} from 'react'
import { useState } from 'react'

const lineClass = 'w-full inline-flex'
const labelClass = 'px-2 w-52 shrink-0'
const inputClass = 'flex-1 min-w-0 max-w-[48px]'

export const useBooleanOption = (label: string, init: boolean | undefined = undefined): [boolean | undefined, ReactNode] => {
  const [val, setVal] = useState<boolean | undefined>(init)
  // console.log({ val })
  return [
    val,
    <div key={label} className={lineClass}>
      <span className={labelClass}>{label}</span>
      <input className={inputClass} type="checkbox" checked={val} onChange={() => setVal(val !== true)}/>
    </div>
  ]
}

export const useNumberOption = (label: string, init: number | undefined = undefined): [number | undefined, ReactNode] => {
  const [val, setVal] = useState<number | undefined>(init)
  // console.log({ val })
  return [
    val,
    <div key={label} className={lineClass}>
      <span className={labelClass}>{label}</span>
      <input className={inputClass} type="number" value={val} onChange={(v) => {
        setVal(v.currentTarget.valueAsNumber)
      }}
      />
    </div>
  ]
}

export const useSelectOption = <T extends string | number, >(label: string, init: T, choices: T[]): [T, ReactNode] => {
  const [val, setVal] = useState<T>(init)
  // console.log({ val })
  return [
    val,
    <div key={label} className={lineClass}>
      <span className={labelClass}>{label}</span>
      <select className={inputClass}
        defaultValue={init} onChange={(e) => {setVal(choices[e.target.selectedIndex])}}
      >
        {choices.map((choice) => (
          <option key={choice} value={choice}>{choice}</option>
        ))}
      </select>
    </div>
  ]
}

export const useColorOption = (label: string, init = undefined): [string | undefined, ReactNode] => {
  const [val, setVal] = useState<string | undefined>(init)
  // console.log({ val })

  return [
    val,
    <div key={label} className={lineClass}>
      <span className={labelClass}>{label}</span>
      <input className={inputClass} type="color" value={val} onChange={(v) => setVal(v.currentTarget.value)}/>
    </div>
  ]
}
