/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx'
import Image from 'next/image'
import { toast } from 'react-toastify'
import Link from 'next/link'

import { SourcePlatform, TypographyLayout } from '../../../ds/work'
import settings from '../../../ds/settings'
import { useRole } from '../../../hooks/role'
import backendAPI from '../../../utils/api'
import { useRefresh } from '../../../utils/router'
import { BilibiliVideo, getBvidFromUrl } from '../../shared/BilibiliVideo'
import MyDialog from '../../shared/MyDialog'
import { ConnectionsLine } from '../../shared/ConnectionsLine'

import type { IWork } from '../../../ds/work'

const genWorkContent = (work: IWork): JSX.Element => (
  <div className="prose p-2">
    <h2>{work.title}</h2>
    <blockquote>{work.description}</blockquote>
  </div>
)

const PlainLine = ({ title, content }: {
  title: string
  content: string
}): JSX.Element => (
  <div className="flex border-b">
    <p className="w-28 shrink-0 text-primary text-lg">{title}</p>
    <p className="flex-1">{content}</p>
  </div>
)
export const genPlainWorkPresentation = (work: IWork): JSX.Element => (
  <div className="flex flex-col gap-2 p-2">
    <PlainLine title="id" content={work.id}/>
    <PlainLine title="user_id" content={work.user_id}/>
    <PlainLine title="layout" content={work.layout}/>
    <PlainLine title="title" content={work.title}/>
    <PlainLine title="description" content={work.description}/>
    <PlainLine title="content" content={work.content}/>
    <PlainLine title="cover" content={work.cover}/>
    {
      settings.features.enable_connection_between_works && (
        <PlainLine title="connections" content={work.connections?.join('/')}/>
      )
    }
  </div>
)

export const genInnerWorkPresentation = (work: IWork): JSX.Element => {
  console.log('generating work presentation: ', work)

  if (work.source.platform === SourcePlatform.bilibiliVideo) {
    return (
      <BilibiliVideo video={{
        bvid: getBvidFromUrl(work.id)!,
      }}
      />
    )
  }

  switch (work.layout) {
    case TypographyLayout.typography_plain:
      return (
        <article className="p-2 prose lg:prose-xl max-h-[72] overflow-y-hidden">
          <h2 className="my-8 text-xl font-semibold">{work.title}</h2>
          <blockquote className="text-lg font-medium">{work.description}</blockquote>
          {
            // m1: multi line
            // m2: combine, is it ok ? NO ! it is not ok!
            work.content
              .split('\n')
              .filter((ele, i) => i < 9)
              .map((para, index) => (
                <p key={index} className="text-sm font-medium text-gray-500 truncate ...">{para}</p>
              ))
          }
        </article>
      )
    // todo: horizontal 在上传界面还有点bug
    case TypographyLayout.typography_horizontal:
      return (
        <>
          <Image
            className="w-full object-cover"
            src={work.cover}
            alt={work.title}
            width={320} height={240}
          />

          <h2 className="p-2 text-xl font-semibold text-black">{work.title}</h2>
        </>
      )
    case TypographyLayout.typography_horizontal_bg:
      return (
        <>
          <Image
            className="h-full w-full object-cover brightness-50"
            src={work.cover}
            alt={work.title}
            width={320} height={240}
          />
          <p
            className="text-2xl font-semibold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >{work.title}
          </p>
        </>
      )
    case TypographyLayout.typography_vertical:
      return (
        <div className="w-full h-full flex gap-2">
          <Image src={work.cover} alt={work.title} className="w-2/5 h-full object-cover"
                 width={320} height={240}
          />

          {genWorkContent(work)}
        </div>
      )
    default:
      throw new Error('not implemented')
  }
}
export const WorkPresentation = ({ work }: { work: IWork }): JSX.Element => {
  const isAdmin = useRole() === 'admin'
  const refresh = useRefresh()

  const onDelete = async () => {
    await backendAPI.delete(`/works?id=${work.id}`)
    toast.success(`deleted work of id=${work.id}`)
    refresh()
  }

  console.log('work presentation: ', work)

  const detailBtn = <button type="button" className="btn btn-primary btn-xs">详情</button>

  return (
    <div key={work.title} className="bg-gray-50 rounded-2xl overflow-hidden relative border-2 border-primary">
      {genInnerWorkPresentation(work)}

      <div className="absolute bottom-2 right-2 flex w-full justify-end gap-2">

        {isAdmin && <button type="button" className="btn btn-error btn-xs" onClick={onDelete}>删除</button>}

        {/* 纯文本 */}
        {
          work.source.platform === SourcePlatform.plain && (
            <MyDialog trigger={detailBtn} asChild>
              <article className="w-[80vw] p-2 prose lg:prose-xl max-h-[72] overflow-y-hidden">
                <h2 className="my-8 text-xl font-semibold">{work.title}</h2>

                {
                  work.cover && (
                    <Image src={work.cover} alt={work.title} width={300} height={200} className="w-full object-contain"/>
                  )
                }

                <blockquote className="text-lg font-medium">{work.description}</blockquote>

                {
                  work.content.split('\n')
                    .map((para, index) => (
                      <p key={index} className="text-sm font-medium text-gray-500 ">{para}</p>
                    ))
                }

                {
                  settings.features.enable_connection_between_works && (
                    <ConnectionsLine connections={work.connections}/>
                  )
                }

              </article>
            </MyDialog>
          )
        }

        {/* 微信 */}
        {
          work.source.platform === SourcePlatform.wechatArticle &&
          <a target="_blankg" rel="noreferrer" href={work.source.url!}>{detailBtn}</a>
        }

        {/* 视频没有 detail 页 */}

      </div>

    </div>
  )

}
