/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypographyLayoutType, Work } from "@prisma/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  BilibiliVideo,
  getBvidFromUrl,
} from "~/components/shared/BilibiliVideo";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

import settings from "../../../schema/settings";

import { SourcePlatform } from "../../../schema/work";
import { useDeleteWorkMutation } from "../../../store/states/api/workApi";
import { ConnectionsLine } from "../../shared/ConnectionsLine";

export const PlainLine = ({
  title,
  content,
}: {
  title: string;
  content: string;
}): JSX.Element => (
  <div className="flex border-b">
    <p className="w-28 shrink-0 text-primary text-lg">{title}</p>
    <p className="flex-1">{content}</p>
  </div>
);

export const genWorkContent = (work: Work): JSX.Element => (
  <div className="prose p-2">
    <h2>{work.title}</h2>
    <blockquote>{work.description}</blockquote>
  </div>
);
export const genPlainWorkPresentation = (work: Work): JSX.Element => (
  <div className="flex flex-col gap-2 p-2">
    {/*<PlainLine title="id" content={work.id}/>*/}
    <PlainLine title="HeroId" content={work.heroId} />
    <PlainLine title="Layout" content={work.layout} />
    <PlainLine title="Title" content={work.title} />
    <PlainLine title="Description" content={work.description} />
    <PlainLine title="Content" content={work.content} />
    <PlainLine title="Cover" content={work.cover} />
    {settings.features.enable_connection_between_works && (
      <PlainLine title="Connections" content={work.connections?.join("/")} />
    )}
  </div>
);
export const genInnerWorkPresentation = (work: Work): JSX.Element => {
  // console.log('generating work presentation: ', work)

  if (work.source === SourcePlatform.bilibiliVideo) {
    return <BilibiliVideo video={{ bvid: getBvidFromUrl(work.source.url) }} />;
  }

  switch (work.layout) {
    case TypographyLayoutType.typography_plain:
      return (
        <article className="p-2 prose lg:prose-xl max-h-[72] overflow-y-hidden">
          <h2 className="my-8 text-xl font-semibold">{work.title}</h2>
          <blockquote className="text-lg font-medium">
            {work.description}
          </blockquote>
          {
            // m1: multi line
            // m2: combine, is it ok ? NO ! it is not ok!
            work.content
              .split("\n")
              .filter((ele, i) => i < 9)
              .map((para, index) => (
                <p
                  key={index}
                  className="text-sm font-medium text-gray-500 truncate ..."
                >
                  {para}
                </p>
              ))
          }
        </article>
      );
    // todo: horizontal 在上传界面还有点bug
    case TypographyLayoutType.typography_horizontal:
      return (
        <>
          <Image
            className="w-full object-cover"
            src={work.cover}
            alt={work.title}
            width={320}
            height={240}
          />

          <h2 className="p-2 text-xl font-semibold text-black">{work.title}</h2>
        </>
      );
    case TypographyLayoutType.typography_horizontal_bg:
      return (
        <>
          <Image
            className="h-full w-full object-cover brightness-50"
            src={work.cover}
            alt={work.title}
            width={320}
            height={240}
          />
          <p className="text-2xl font-semibold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {work.title}
          </p>
        </>
      );
    case TypographyLayoutType.typography_vertical:
      return (
        <div className="w-full h-full flex gap-2">
          <Image
            src={work.cover}
            alt={work.title}
            className="w-2/5 h-full object-cover"
            width={320}
            height={240}
          />

          {genWorkContent(work)}
        </div>
      );
    default:
      throw new Error("not implemented");
  }
};
export const WorkPresentation = ({
  work,
  isEditable,
}: {
  work: Work;
  isEditable: boolean;
}): JSX.Element => {
  const [deleteWork] = useDeleteWorkMutation();

  // console.log('work presentation: ', work)

  const detailBtn = (
    <button type="button" className="btn btn-primary btn-xs">
      详情
    </button>
  );

  return (
    <div
      key={work.title}
      className="bg-gray-50 overflow-hidden relative border border-primary rounded-lg h-[240px]"
    >
      {genInnerWorkPresentation(work)}

      <div className="absolute bottom-2 right-2 flex w-full justify-end gap-2">
        {isEditable && (
          <button
            type="button"
            className="btn btn-error btn-xs"
            onClick={async () => {
              await deleteWork(work.id!);
              toast(`deleted work(id=${work.id})`);
            }}
          >
            删除
          </button>
        )}

        {/* 纯文本 */}
        {work.source.platform === SourcePlatform.plain && (
          <Dialog>
            <DialogTrigger asChild>{detailBtn}</DialogTrigger>
            <DialogContent>
              <article className="w-full prose lg:prose-xl overflow-auto">
                <h2 className="my-8 text-lg font-semibold">{work.title}</h2>

                {work.cover && (
                  <Image
                    src={work.cover + "?raw=true"}
                    alt={work.title}
                    width={300}
                    height={200}
                    className="w-full object-contain"
                  />
                )}

                <blockquote className="text-lg font-medium">
                  {work.description}
                </blockquote>

                {work.content.split("\n").map((para, index) => (
                  <p key={index} className="text-sm font-medium text-gray-500 ">
                    {para}
                  </p>
                ))}

                {settings.features.enable_connection_between_works && (
                  <ConnectionsLine connections={work.connections} />
                )}
              </article>
            </DialogContent>
          </Dialog>
        )}

        {/* 微信 */}
        {work.source.platform === SourcePlatform.wechatArticle && (
          <a target="_blankg" rel="noreferrer" href={work.source.url!}>
            {detailBtn}
          </a>
        )}

        {/* 视频没有 detail 页 */}
      </div>
    </div>
  );
};
