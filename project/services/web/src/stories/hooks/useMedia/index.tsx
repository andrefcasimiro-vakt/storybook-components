import { useState, useEffect } from 'react'

const useMedia = (breakpoints: number[], values: any[], defaultValue: any) => {

  const mediaQueries = breakpoints.map((breakpoint: number) => window.matchMedia(`${breakpoint}`))

  const getValue = () => {
    const index = mediaQueries.findIndex((mediaQuery) => mediaQuery.matches)

    if (typeof values[index] !== 'undefined') {
      return values[index]
    }

    return defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      const handler = () => setValue(getValue)

      mediaQueries.forEach((mediaQuery) => mediaQuery.addListener(handler))

      return () => mediaQueries.forEach((mediaQuery) => mediaQuery.removeListener(handler))
    },
    []
  )

  return value
}

export default useMedia
