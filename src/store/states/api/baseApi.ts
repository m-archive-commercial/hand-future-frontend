// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BACKEND_ENDPOINT } from '../../../lib/env'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BACKEND_ENDPOINT,
	}),
	endpoints: (builder) => ({}),
})

