import { baseApi } from '~/states/api/baseApi'
import { IWork } from '~/ds/work'

export const TAG_WORK = 'work' as const
export const ID_ALL = '*' as const

export const workApi = baseApi
	.enhanceEndpoints({
		addTagTypes: [TAG_WORK],
	})
	.injectEndpoints({
		overrideExisting: true,
		endpoints: (build) => ({
			
			listWorks: build.query<IWork[], string>({
				query: (arg) => `/work/?user_id=${arg}`,
				providesTags: (result) => [...(result || []).map((item) => ({ type: TAG_WORK, id: item.id })), { type: TAG_WORK, id: ID_ALL }],
			}),
			
			addWork: build.mutation<void, Omit<IWork, 'id'>>({
				query: (body) => ({
					url: `/work/`,
					method: 'POST',
					body,
				}),
				invalidatesTags: [{ type: TAG_WORK, id: ID_ALL }],
			}),
			
			updateWork: build.mutation<void, IWork>({
				query: (body) => ({
					url: `/work/`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (result, error, arg, meta) => [{ type: TAG_WORK, id: arg.id }],
			}),
			
		}),
	})


export const {
	useListWorksQuery,
	useAddWorkMutation,
	useUpdateWorkMutation,
} = workApi
