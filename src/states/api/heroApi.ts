import { baseApi } from '~/states/api/baseApi'
import { IHero } from '~/ds/hero'
import { IWork } from '~/ds/work'
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
		
		getHero: build.query<IHero, string>({
			query: (userId) => `/user/?user_id=${userId}`,
		}),
		
		getWorks: build.query<IWork[], string>({
			query: (userId) => `/works/?user_id=${userId}`,
		}),
	}),
})


export const {
	useGetGraphDataQuery,
	useGetHeroesListQuery,
	useGetHeroQuery,
	useGetWorksQuery,
} = heroApi
