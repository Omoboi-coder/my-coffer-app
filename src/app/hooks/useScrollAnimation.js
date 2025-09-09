import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // This makes it animate every time it enters/leaves viewport
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '-50px 0px', // Start animation 50px before element is visible
        ...options
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options])

  return [ref, isVisible]
}