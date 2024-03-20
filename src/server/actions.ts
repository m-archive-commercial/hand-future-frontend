import { Client, collectPaginatedAPI } from "@notionhq/client";
import { promises } from "fs";
import { flatten } from "lodash";
import * as path from "path";
import { GraphData } from "react-force-graph-3d";
import { env } from "../env";
import { persistHeroAvatar, user2hero, user2heroRelation } from "../lib/user";
import { IUserInNotion } from "../schema/user";
import prisma from "./db";

const notion = new Client({
  auth: env.NOTION_TOKEN,
});

export const initNotion = async (options?: { dumpJson?: boolean }) => {
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

  await prisma.$transaction(async (prisma) => {
    await Promise.all(
      usersInNotion.map(user2hero).map(async (_user) => {
        const user = await persistHeroAvatar(_user);

        await prisma.hero.upsert({
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
        });
      }),
    );

    await prisma.heroRelation.deleteMany();

    await prisma.heroRelation.createMany({
      data: flatten(usersInNotion.map(user2heroRelation)),
    });
  });
};

export const readNotion = async (): Promise<GraphData> => {
  const nodes = await prisma.hero.findMany({
    where: {
      // 只显示有头像的
      avatar: { not: null },
    },
  });
  const nodeIds = nodes.map((i) => i.id);
  return {
    nodes,
    links: (
      await prisma.heroRelation.findMany({
        where: {
          // 存在的node才可以有link，否则three报错
          fromId: { in: nodeIds },
          toId: {
            in: nodeIds,
            //  确保只有单向，否则three报错
            gt: prisma.heroRelation.fields.fromId,
          },
        },
      })
    ).map((r) => ({
      source: r.fromId,
      target: r.toId,
    })),
  };
};

void readNotion();
