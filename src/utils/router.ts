/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useRouter } from 'next/router'

export const useRefresh = () => {
  const router = useRouter()
  router.replace(router.asPath)
}
