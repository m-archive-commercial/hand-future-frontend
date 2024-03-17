import { Client, collectPaginatedAPI } from "@notionhq/client";
import { promises } from "fs";
import * as path from "path";
import { env } from "../env";
import { userInNotion2DB } from "../lib/user";
import { IUserInNotion } from "../schema/user";
import prisma from "./db";

const notion = new Client({
  auth: env.NOTION_TOKEN,
});

export const readNotion = async (options?: { dumpJson?: boolean }) => {
  console.log("-- initing data...");
  // full data, ref: https://github.com/ramnes/notion-sdk-py#utility-functions
  const usersInNotion = (await collectPaginatedAPI(notion.databases.query, {
    database_id: env.NOTION_DATABASE_ID,
  })) as IUserInNotion[];

  if (options?.dumpJson) {
    const fp = path.join(__dirname, "data.json");
    console.log(`-- dumping data info ${fp}`);
    await promises.writeFile(fp, JSON.stringify(usersInNotion, null, 2));
    console.log("-- dumped");
  }

  const users = usersInNotion.map(userInNotion2DB);
  await prisma.$transaction(
    users.map((user) =>
      prisma.hero.upsert({
        where: { id: user.id },
        create: {
          ...user,
          user: {
            create: {},
          },
        },
        update: {
          ...user,
        },
      }),
    ),
    {},
  );
};

void readNotion();
