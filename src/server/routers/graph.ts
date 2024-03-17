import { procedure, router } from "../trpc";

export const graphRouter = router({
  init: procedure.query(async ({}) => {
    return "hello world";
  }),
});
