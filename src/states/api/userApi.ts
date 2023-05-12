import { baseApi } from '~/states/api/baseApi'
import { IUser } from '~/ds/user'


export const TAG_USER = 'user'

export const userApi = baseApi
	.enhanceEndpoints({
		addTagTypes: [TAG_USER],
	})
	.injectEndpoints({
		overrideExisting: true,
		endpoints: (build) => ({
			getUserByEmail: build.query<IUser, string>({
				query: (arg) => `/user/?email=${arg}`,
				providesTags: (result, error, arg) => [{ type: TAG_USER, id: result?.id }],
			}),
			
			getUserById: build.query<IUser, string>({
				query: (arg) => `/user/?id=${arg}`,
				providesTags: (result, error, arg) => [{ type: TAG_USER, id: result?.id }],
			}),
			
			updateUser: build.mutation<void, IUser>({
				query: (data) => ({
					url: `/user/update`,
					body: data,
					method: 'PATCH',
				}),
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
