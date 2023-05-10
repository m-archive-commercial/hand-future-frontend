import { baseApi } from '~/states/api/baseApi'
import { IHero } from '~/ds/hero'


export const TAG_USER = 'user'

export const userApi = baseApi
	.enhanceEndpoints({
		addTagTypes: [TAG_USER],
	})
	.injectEndpoints({
		overrideExisting: true,
		endpoints: (build) => ({
			getUser: build.query<IHero, string>({
				query: (userId) => `/user/?user_id=${userId}`,
				providesTags: (result, error, arg) => [{ type: TAG_USER, id: arg }],
			}),
			
			updateUser: build.mutation<void, IHero>({
				query: (data) => ({
					url: `/user/update`,
					body: data,
				}),
				invalidatesTags: (result, error, arg, meta) => [{ type: TAG_USER, id: arg.id }],
			}),
			
		}),
	})


export const {
	useGetUserQuery,
	useUpdateUserMutation,
} = userApi
