/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import { trpc } from "~/lib/trpc";

import RootLayout from "../components/layouts/RootLayout";
import { apiVersionAtom } from "../store/system"; // ref: https://nextjs.org/docs/advanced-features/dynamic-import

// ref: https://nextjs.org/docs/advanced-features/dynamic-import
const Graph = dynamic(() => import("../components/specs/graph/Graph"), {
  ssr: false,
});

export default function Home() {
  const [apiVersion] = useAtom(apiVersionAtom);
  const { data } = trpc.graph.read.useQuery({ apiVersion });
  console.log("-- server data: ", data);

  // we need to expand the data, since Graph would mutate the data, while the rtk query data is immutable
  return (
    <RootLayout className={"p-0"}>
      {data ? <Graph data={data} /> : "Loading..."}
    </RootLayout>
  );
}
