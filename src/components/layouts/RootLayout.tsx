/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useHotkeys } from "@mantine/hooks";
import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { InitHeroes } from "../specs/admin/InitHeroes";

import Header from "../specs/layout/Header";
import NavBar from "../specs/layout/NavBar";
import { Dialog, DialogContent } from "../ui/dialog";

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
          <InitHeroes />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RootLayout;
