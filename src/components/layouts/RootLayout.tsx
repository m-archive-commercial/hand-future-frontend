/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useHotkeys } from "@mantine/hooks";
import { useAtom } from "jotai";
import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { ApiVersion, apiVersionAtom } from "~/store/system";
import { trpc } from "../../lib/trpc";
import { ConfigCard } from "../config-card";
import { InitHeroes } from "../specs/admin/InitHeroes";

import Header from "../specs/layout/Header";
import NavBar from "../specs/layout/NavBar";
import { Dialog, DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

/**
 * 关于如何定义props，ref: /app-playground/app/layouts/layout.tsx
 */
export const RootLayout = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const [open, setOpen] = useState(false);

  useHotkeys([
    [
      "mod+shift+P",
      () => {
        console.log("toggle dev panel");
        setOpen(!open);
      },
    ],
  ]);

  const initData = trpc.graph.init.useMutation();

  const [apiVersion, setApiVersion] = useAtom(apiVersionAtom);

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />

      <NavBar />

      <div
        className="flex-1 flex flex-col justify-center items-center relative p-2"
        {...props}
      >
        {children}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <ConfigCard title={"API"}>
            <Label>API Version</Label>
            <Select
              value={apiVersion}
              onValueChange={(s: ApiVersion) => setApiVersion(s)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"v1" as ApiVersion}>V1</SelectItem>
                  <SelectItem value={"v2" as ApiVersion}>V2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/*<Label>Countdown Time</Label>*/}
            {/*<Input*/}
            {/*  value={smsCountdownSeconds}*/}
            {/*  onChange={(event) =>*/}
            {/*    setSmsCountdownSeconds(Number(event.currentTarget.value))*/}
            {/*  }*/}
            {/*  type={"number"}*/}
            {/*/>*/}
          </ConfigCard>

          <InitHeroes />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RootLayout;
