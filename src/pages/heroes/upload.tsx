/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import RootLayout from '../../components/layouts/root'

import { getSampleHero } from '../../ds/hero'

import BaseAvatar from '../../components/shared/BaseAvatar'

import { SAMPLE_WORKS, WorkType } from '../../ds/work'

import type { IWork } from '../../ds/work'
import type { IHero } from '../../ds/hero'

const genPlainWorkPresentation = (work: IWork): JSX.Element => (
  <div className="p-2">
    <h2 className="my-8 text-xl font-semibold">{work.title}</h2>
    <p className="text-sm font-medium">{work.description}</p>
  </div>
)
export const genInnerWorkPresentation = (work: IWork): JSX.Element => {
  switch (work.type) {
    case WorkType.typography_plain:
      return genPlainWorkPresentation(work)
    case WorkType.typography_horizontal:
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
    case WorkType.typography_horizontal_bg:
      return (
        <>
          <img
            className="h-full w-full object-cover brightness-50"
            src={work.cover}
            alt={work.description || work.title}
          />
          <p className="text-2xl font-semibold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{work.title}</p>
        </>
      )
    case WorkType.typography_vertical:
      return (
        <div className="w-full h-full flex gap-2">
          <img src={work.cover} alt={work.title} className="w-2/5 h-full object-cover"/>
          {genPlainWorkPresentation(work)}
        </div>
      )
    case WorkType.bilibiliVideo:
    case WorkType.wechatArticle:
    case WorkType.others:
    default:
      return (
        <>
          <div>id: {work.id}</div>
          <div>type: {work.type}</div>
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

export const HeroesUpload = (): JSX.Element => {
  const hero: IHero = getSampleHero()
  const works: IWork[] = SAMPLE_WORKS

  return (
    <RootLayout>

      <div className="w-full h-full lg:max-w-screen-lg flex flex-col gap-2">

        {/* cover */}
        <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
          <AspectRatio.Root ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={hero.avatar}
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio.Root>

          <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm">

            <div className="inline-flex items-center gap-4">
              <BaseAvatar url={hero.avatar} name={hero.name} size="lg"/>
              <p className="text-white text-2xl">{hero.name}</p>
            </div>

            <p className="text-white text-lg">{hero.title}</p>

            <p className="mt-8 text-white text-md text-gray-100">{hero.description}</p>

            <div className="mt-8 flex flx-wrap gap-2">
              {
                //  todo: support click to jump
                hero.connections.map((connection) => (
                  <div className="bg-primary rounded-md px-3 py-1" key={connection}>
                    {connection}
                  </div>
                ))
              }
            </div>

          </div>
        </div>

        {/*  works */}
        <div className="gap-2 grid md:grid-cols-2">
          {works.map(genWorkPresentation)}
        </div>

      </div>

    </RootLayout>
  )

}

export default HeroesUpload
