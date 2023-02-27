/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { WorkLayout } from '../../../ds/work'

import type { IWork} from '../../../ds/work'

export const genPlainWorkPresentation = (work: IWork): JSX.Element => (
  <div className="p-2">
    <h2 className="my-8 text-xl font-semibold">{work.title}</h2>
    <p className="text-sm font-medium">{work.description}</p>
  </div>
)
export const genInnerWorkPresentation = (work: IWork): JSX.Element => {
  switch (work.layout) {
    case WorkLayout.typography_plain:
      return genPlainWorkPresentation(work)
    case WorkLayout.typography_horizontal:
      return (
        <>
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={work.cover}
              alt={work.description || work.title}
            />
          </AspectRatio.Root>

          <p className="p-2 text-xl font-semibold">{work.title}</p>
        </>
      )
    case WorkLayout.typography_horizontal_bg:
      return (
        <>
          <img
            className="h-full w-full object-cover brightness-50"
            src={work.cover}
            alt={work.description || work.title}
          />
          <p
            className="text-2xl font-semibold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >{work.title}
          </p>
        </>
      )
    case WorkLayout.typography_vertical:
      return (
        <div className="w-full h-full flex gap-2">
          <img src={work.cover} alt={work.title} className="w-2/5 h-full object-cover"/>
          {genPlainWorkPresentation(work)}
        </div>
      )
    default:
      return (
        <>
          <div>id: {work.id}</div>
          <div>type: {work.layout}</div>
          <div>title: {work.title}</div>
          <div>desc: {work.description}</div>
          <div>content: {work.content}</div>
          <div>cover: {work.cover}</div>
          <div>connections: {work.connections.join('/')}</div>
        </>
      )
  }
}
export const genWorkPresentation = (work: IWork): JSX.Element => (
  <div key={work.title} className="bg-cyan-100 rounded-md relative overflow-y-hidden h-80">
    {genInnerWorkPresentation(work)}
    <button type="button"
      className="absolute right-2 bottom-2 text-xs rounded-md px-2 py-1 bg-primary text-white"
    >
      Detail
    </button>
  </div>
)
