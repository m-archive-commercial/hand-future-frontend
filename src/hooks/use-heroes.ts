import { trpc } from "../lib/trpc";

export const useInitHeroesMutation = trpc.graph.init.useMutation;
export const useListHeroesQuery = trpc.graph.listHeroes.useQuery;
