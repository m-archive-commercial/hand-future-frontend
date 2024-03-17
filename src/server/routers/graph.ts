import { Client } from "@notionhq/client";
import { env } from "~/env";
import { procedure, router } from "../trpc";

// Initializing a client
const notion = new Client({
  auth: env.NOTION_TOKEN,
});

export const graphRouter = router({
  init: procedure.query(async ({}) => {
    return "hello world";
  }),
});
