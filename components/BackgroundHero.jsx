import Image from 'next/image'
import fundo1 from '../public/fundo-hero-section.png'
 
export default function BackgroundHero() {
  return (
    <Image
      alt="background image"
      src={fundo1}
      placeholder="blur"
      quality={100}
      fill
      
      style={{
        objectFit: 'cover',
      }}
    />
  )
}