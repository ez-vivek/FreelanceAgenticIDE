
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    const animate = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  return lenisRef
}
