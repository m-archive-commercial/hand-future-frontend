import { baseApi } from '~/states/api/baseApi'
import { IUser } from '~/ds/user'
import { normalizeImageUri } from '~/lib/image'


export const TAG_USER = 'user' as const

const userHelper = {
	providesTags: (result: IUser | undefined) => [{ type: TAG_USER, id: result?.id }],
	transformResponse: (response: IUser) => {
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
			getUserByEmail: build.query<IUser, string>({
				query: (arg) => `/user/?email=${arg}`,
				...userHelper,
			}),
			
			getUserById: build.query<IUser, string>({
				query: (arg) => `/user/?id=${arg}`,
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
	useGetUserByEmailQuery,
	useGetUserByIdQuery,
	useLazyGetUserByEmailQuery,
	useLazyGetUserByIdQuery,
	useUpdateUserMutation,
} = userApi
