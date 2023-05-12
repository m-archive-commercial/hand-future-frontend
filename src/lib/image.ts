import { BACKEND_ENDPOINT } from '~/lib/env'

export const normalizeImageUri = (imageId: string | null | undefined): string | undefined =>
	!imageId
		? undefined
		: imageId.startsWith('/')
			? BACKEND_ENDPOINT + imageId
			: imageId
