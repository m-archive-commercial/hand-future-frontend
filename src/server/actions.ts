import { Client, collectPaginatedAPI } from "@notionhq/client";
import { promises } from "fs";
import * as path from "path";
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

  const fp = path.join(__dirname, "data.json");
  console.log(`-- dumping data info ${fp}`);
  await promises.writeFile(fp, JSON.stringify(data, null, 2));
  console.log("-- dumped");
};

void readNotion();
