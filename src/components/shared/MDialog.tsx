/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { ReactNode} from 'react'
import React, { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

export interface DialogProps {
  trigger: ReactNode
  title?: ReactNode
  content?: ReactNode
  open?: boolean
}

export const MDialog = (props: DialogProps) => (
  <Dialog.Root>
      
    <Dialog.Trigger>
      {props.trigger}
    </Dialog.Trigger>

    <Dialog.Portal>
      {/* 继承下来的bg是透明的，因此需要用bg-base，否则padding会泄露下方的元素； dark mode 可以考虑使用 bg-gray-800  */}
      <Dialog.Content
        className="max-w-[80vw] min-w-[480px] z-50 bg-base-100 p-[25px] data-[state=open]:animate-contentShow fixed top-[15%] left-[50%] max-h-[85vh]  translate-x-[-50%] rounded-[6px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
      >
        <Dialog.Title className=" m-0 text-[17px] font-medium">

          {props.title}

        </Dialog.Title>

        <div className="divider"/>

        {props.content}

        <Dialog.Close asChild>
          <button
            type="button"
            className=" hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon/>
          </button>
        </Dialog.Close>

      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default MDialog
