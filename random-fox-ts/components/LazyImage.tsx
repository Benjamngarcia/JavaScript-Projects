import { useRef, useEffect, useState } from "react"
import type { ImgHTMLAttributes } from "react"

type LazyImageProps = { src: string }
type ImageNative =  ImgHTMLAttributes<HTMLLabelElement>
type Props = LazyImageProps & ImageNative

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    //nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        //onIntersection -> setImage
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })

    //observe node
    if (node.current) {
      observer.observe(node.current)
    }
    //desconectar
    return () => observer.disconnect()
  }, [src])

  
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img ref={node} src={currentSrc} {...imgProps}/>
  )
}