/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useRouter } from 'next/router'

export const useRefresh = (): () => void => {
  const router = useRouter()
  return () => router.replace(router.asPath)
}
