import { readNotion } from "../actions";
import { procedure, router } from "../trpc"; // Initializing a client

export const graphRouter = router({
  init: procedure.query(async ({}) => {
    return readNotion();
  }),
});
