import { z } from "zod";
import backendAPI from "../../lib/api";
import { heroDetailSchema, IHeroDetail } from "../../schema/user";
import { apiVersionSchema } from "../../store/system";
import { initNotion, readNotion } from "../actions";
import prisma from "../db";
import { procedure, router } from "../trpc"; // Initializing a client

export const graphRouter = router({
  init: procedure
    .input(z.object({ apiVersion: apiVersionSchema }))

    .mutation(async ({ input }) => {
      if (input.apiVersion === "v1")
        return await backendAPI.post("/hero/init_from_notion");

      return initNotion();
    }),

  read: procedure
    .input(z.object({ apiVersion: apiVersionSchema }))
    .query(async ({ input }) => {
      if (input.apiVersion === "v1")
        return (await backendAPI.get("/hero/graph_data/")).data;

      return readNotion();
    }),

  getHero: procedure
    .input(z.object({ heroId: z.string() }))
    .query<IHeroDetail | null>(async ({ input }) => {
      return prisma.hero.findUnique({
        where: { id: input.heroId },
        ...heroDetailSchema,
      });
    }),
});
