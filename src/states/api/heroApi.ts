import { baseApi } from '~/states/api/baseApi'
import { IHero } from '~/ds/hero'
import { IGraphData } from '~/ds/panel_3dgraph'


export const heroApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getGraphData: build.query<IGraphData, void>({
			query: () => `/hero/graph_data`,
		}),
		
		listHeroes: build.query<IHero[], void>({
			query: () => `/hero/`,
		}),
		
	}),
})


export const {
	useGetGraphDataQuery,
	useListHeroesQuery,
} = heroApi
