import { Client, collectPaginatedAPI } from "@notionhq/client";
import { env } from "../env";

const notion = new Client({
  auth: env.NOTION_TOKEN,
});

export const readNotion = async () => {
  console.log("-- initing data...");
  // full data, ref: https://github.com/ramnes/notion-sdk-py#utility-functions
  const data = await collectPaginatedAPI(notion.databases.query, {
    database_id: env.NOTION_DATABASE_ID,
  });
  console.log("-- inited data: ", data);
};

void readNotion();
