import { baseApi } from '~/states/api/baseApi'
import { IHero } from '~/ds/hero'
import { IGraphData } from '~/ds/panel_3dgraph'


export const heroApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getGraphData: build.query<IGraphData, void>({
			query: () => `/hero/graph_data`,
		}),
		
		getHeroesList: build.query<IHero[], void>({
			query: () => `/user/?only_heroes=1`,
		}),
		
	}),
})


export const {
	useGetGraphDataQuery,
	useGetHeroesListQuery,
} = heroApi
