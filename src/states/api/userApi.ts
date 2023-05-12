import { baseApi } from '~/states/api/baseApi'
import { IUserEmail, IUserId } from '~/ds/user'
import { normalizeImageUri } from '~/lib/image'


export const TAG_USER = 'user' as const

const userHelper = {
	providesTags: (result: IUserId | null | undefined) => {
		console.log({ result })
		return [{ type: TAG_USER, id: result?.id }]
	},
	transformResponse: (response: IUserId | null) => {
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
			getUser: build.query<IUserId | null, { id?: string, email?: string }>({
				query: (arg) => ({
					url: `/user/`,
					params: arg,
				}),
				...userHelper,
			}),
			
			updateUser: build.mutation<void, IUserId>({
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
			
			updateUserViaEmail: build.mutation<void, IUserEmail>({
				query: (data) => {
					console.log('updateUser', { data })
					return ({
						url: `/user/update_via_email`,
						body: data,
						method: 'PATCH',
					})
				},
			}),
			
			
		}),
	})


export const {
	useGetUserQuery,
	useUpdateUserMutation,
	useUpdateUserViaEmailMutation,
} = userApi
