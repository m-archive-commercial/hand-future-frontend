/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useState, useEffect } from 'react'

export interface Dimension {
  width: number,
  height: number
}

export default function useWindowDimensions(): Dimension {

  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = (): Dimension => {
    const width = hasWindow ? window.innerWidth : 0
    const height = hasWindow ? window.innerHeight : 0
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {

    if (!hasWindow) {
      return
    }

    window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
    // todo: hook dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow])

  return windowDimensions
}
