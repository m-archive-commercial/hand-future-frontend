import { trpc } from "../../../lib/trpc";
import { IHero } from "../../../schema/hero";
import { IGraphData } from "../../../schema/panel_3dgraph";
import { baseApi } from "./baseApi";

export const TAG_HERO = "hero" as const;

export const heroApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [TAG_HERO],
  })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      listHeroes: build.query<IHero[], void>({
        query: () => `/hero/`,
        providesTags: [TAG_HERO],
      }),

      getGraphData: build.query<IGraphData, void>({
        query: () => `/hero/graph_data`,
        providesTags: [TAG_HERO],
      }),

      initHeroes: build.mutation<void, void>({
        query: () => ({
          url: `/hero/init_from_notion`,
          method: "POST",
        }),
        invalidatesTags: [TAG_HERO],
      }),
    }),
  });

export const {
  // useInitHeroesMutation,
  useGetGraphDataQuery,
  useListHeroesQuery,
} = heroApi;

export const useInitHeroesMutation = trpc.graph.init.useMutation;
