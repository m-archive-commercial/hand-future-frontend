import { useState, useEffect } from 'react'

export interface Dimension {
  width: number,
  height: number
}

export default function useWindowDimensions(): Dimension {

  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions(): Dimension {
    const width = hasWindow ? window.innerWidth : 0
    const height = hasWindow ? window.innerHeight : 0
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
