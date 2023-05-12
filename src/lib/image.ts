import { BACKEND_ENDPOINT } from '~/lib/env'

export const normalizeImageUri = (imageId: string): string =>
	imageId.startsWith('/')
		? BACKEND_ENDPOINT + imageId
		: imageId
