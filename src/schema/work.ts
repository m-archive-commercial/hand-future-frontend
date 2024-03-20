/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Prisma, TypographyLayoutType, Work } from "@prisma/client";
import { v4 } from "uuid";
import { genRandomImage } from "../lib/random";
import { mockConnections, mockDesc, mockTitle } from "../mock/hero";

export enum SourcePlatform {
  plain = "plain",
  bilibiliVideo = "bilibiliVideo",
  wechatArticle = "wechatArticle",
}

export interface WorkSource<T extends SourcePlatform> {
  platform: T;
  url: T extends SourcePlatform.plain ? undefined : string;
}

// /**
//  * 在enum中明确声明val等于key的好处是，方便使用 Object.keys(enum_variable) 遍历，否则需要做判断 key/val 的工作
//  * 但我现在其实喜欢type了（2024-03-18）
//  * 具体参考：https://stackoverflow.com/questions/39372804/how-can-i-loop-through-enum-values-for-display-in-radio-buttons
//  */
// export enum TypographyLayoutType {
//   typography_plain = "typography_plain",
//   typography_horizontal_bg = "typography_horizontal_bg",
//   typography_horizontal = "typography_horizontal",
//   typography_vertical = "typography_vertical",
// }

export const TypographyLayouts = Object.keys(
  TypographyLayoutType,
) as string[] as TypographyLayoutType[];

export interface ICreateWork<T extends SourcePlatform> {
  user_id: string;
  layout: TypographyLayoutType;
  title: string;
  cover: string;
  description: string;
  content: string;
  connections: string[]; // id[]
  source: WorkSource<T>;
}

export interface IWork<T extends SourcePlatform = SourcePlatform>
  extends ICreateWork<T> {
  id?: string;
}

export const mockWork = (
  heroId: string,
  type: TypographyLayoutType = TypographyLayoutType.typography_horizontal_bg,
): Work => ({
  id: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  heroId,

  layout: type,
  title: mockTitle(),
  description: mockDesc(),
  content: mockDesc(),
  connections: mockConnections(),
  cover: genRandomImage({}),
  source: {
    platform: SourcePlatform.plain,
    url: undefined,
  },
});

export const workDetailSchema = Prisma.validator<Prisma.WorkDefaultArgs>()({
  include: {
    hero: true,
    fromWorks: true,
    toWorks: true,
  },
});
export type IWorkDetail = Prisma.WorkGetPayload<typeof workDetailSchema>;

export const createWorkTrans = (
  work: Prisma.WorkUncheckedCreateInput,
): ICreateWork<any> => ({
  ...work,
  user_id: work.heroId,
  layout: work.layout ?? TypographyLayoutType.typography_horizontal_bg,
  connections: [],
});

export const workDetail2interface = (work: IWorkDetail): IWork => ({
  ...work,
  user_id: work.heroId,
});
