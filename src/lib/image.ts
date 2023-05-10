import { BACKEND_ENDPOINT } from '~/lib/env'

export const getServerImagePath = (imageId?: string): string | undefined => imageId ? BACKEND_ENDPOINT + imageId : undefined
