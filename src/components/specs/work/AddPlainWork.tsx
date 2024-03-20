/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Work } from "@prisma/client";
import React from "react";
import { MyImageUploader } from "~/components/specs/general";
import { Input } from "~/components/ui/input";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { bindData } from "~/lib/utils";

export const AddPlainWork = ({
  data,
  setData,
}: {
  data: Work;
  setData: (data: Work) => void;
}): JSX.Element => {
  const bindChange = bindData(data, setData);

  return (
    <>
      <div className="inline-flex w-full items-center gap-2">
        <Label htmlFor="title" className={"w-16"}>
          标题
        </Label>
        <Input
          name={"title"}
          id="title"
          defaultValue={data.title}
          onChange={bindChange("title")}
        />
      </div>

      <div className="inline-flex w-full items-center gap-2">
        <Label htmlFor="description" className={"w-16"}>
          摘要
        </Label>
        <Input
          name={"description"}
          id="description"
          defaultValue={data.title}
          onChange={bindChange("description")}
        />
      </div>

      <div className="inline-flex w-full items-center gap-2">
        <Label htmlFor="content" className={"w-16"}>
          内容
        </Label>
        <Textarea
          name={"content"}
          id="content"
          defaultValue={data.content}
          onChange={bindChange("content")}
        />
      </div>

      <div className="inline-flex w-full items-center gap-2">
        <Label htmlFor="cover" className={"w-16"}>
          封面
        </Label>
        <MyImageUploader
          name={"cover"}
          id={"cover"}
          onUploaded={bindChange("cover")}
        />
      </div>
    </>
  );
};
