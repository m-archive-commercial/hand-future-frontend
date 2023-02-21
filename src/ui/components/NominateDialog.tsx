import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import Image from 'next/image'

export interface NominateDialogProps {
  hero: {
    name: string
    avatar: string
  }
  user: {
    name: string
    avatar: string
    message: string
  }
}

const DialogDemo = (props: NominateDialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="badge badge-outline badge-secondary">点击提名</button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className=" data-[state=open]:animate-overlayShow fixed inset-0"/>
      <Dialog.Content
        className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className=" m-0 text-[17px] font-medium">
          提名卡片
        </Dialog.Title>

        <div className={'flex justify-around items-center m-8'}>
          <div>被提名者：{props.hero.name}</div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={props.hero.avatar} alt={props.hero.name} width={64} height={64}/>
            </div>
          </div>
        </div>


        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className=" w-[90px] text-right text-[15px]" htmlFor="username">
            提名者留言：
          </label>
          <input
            className=" shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              生成卡片
            </button>
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <button
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

export default DialogDemo
