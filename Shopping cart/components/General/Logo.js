import Image from 'next/image';

const Logo = (props) => {
  const { width, height, className } = props

  return (
    <Image src="/store-icon.svg" className={className} width={width} height={height} alt="Ben Store icon"/>
  )
}

export default Logo