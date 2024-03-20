/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IconUser } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { IHeroDetail } from "../../schema/user";

export const BaseAvatar = ({ url, text }: { url?: string; text?: string }) => {
  return (
    <Avatar>
      <AvatarImage src={url} />
      <AvatarFallback>{text ? text.slice(0, 2) : <IconUser />}</AvatarFallback>
    </Avatar>
  );
};

export const UserAvatar = ({ user }: { user: IHeroDetail }) => {
  return (
    <Avatar>
      <AvatarImage src={user?.avatar ?? undefined} />
      <AvatarFallback>
        {!user ? "登录" : (user.name || user.id).slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};
