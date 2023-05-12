import { baseApi } from '~/states/api/baseApi'
import { IUser } from '~/ds/user'
import { normalizeImageUri } from '~/lib/image'


export const TAG_USER = 'user' as const

const userHelper = {
	providesTags: (result: IUser | null | undefined) => {
		console.log({ result })
		return [{ type: TAG_USER, id: result?.id }]
	},
	transformResponse: (response: IUser | null) => {
		if (!response) return response
		for (const field of ['cover', 'avatar'] as const) {
			const value = response[field]
			if (value)
				response[field] = normalizeImageUri(value)
		}
		return response
	},
}

export const userApi = baseApi
	.enhanceEndpoints({
		addTagTypes: [TAG_USER],
	})
	.injectEndpoints({
		overrideExisting: true,
		endpoints: (build) => ({
			getUser: build.query<IUser | null, { id?: string, email?: string }>({
				query: (arg) => ({
					url: `/user/`,
					params: arg,
				}),
				...userHelper,
			}),
			
			updateUser: build.mutation<void, IUser>({
				query: (data) => {
					console.log('updateUser', { data })
					return ({
						url: `/user/update`,
						body: data,
						method: 'PATCH',
					})
				},
				invalidatesTags: (result, error, arg, meta) => [{ type: TAG_USER, id: arg.id }],
			}),
		}),
	})


export const {
	useGetUserQuery,
	useUpdateUserMutation,
} = userApi
