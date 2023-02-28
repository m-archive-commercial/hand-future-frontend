/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { ForwardedRef } from 'react'
import React from 'react'

import clsx from 'clsx'

import * as Accordion from '@radix-ui/react-accordion'

import { ChevronDownIcon } from '@radix-ui/react-icons'

import type { AccordionContentProps, AccordionItemProps, AccordionTriggerProps } from '@radix-ui/react-accordion'

export const AccordionItem = React.forwardRef((
  {
    children,
    className,
    ...props
  }: AccordionItemProps & React.RefAttributes<HTMLDivElement>, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Accordion.Item
      className={clsx(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
))
export const AccordionTrigger = React.forwardRef((
  {
    children,
    className,
    ...props
  }: AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={clsx(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
))
export const AccordionContent = React.forwardRef((
  {
    children,
    className,
    ...props
  }: AccordionContentProps & React.RefAttributes<HTMLDivElement>, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Accordion.Content
      className={clsx(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
))
