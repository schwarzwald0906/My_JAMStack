import Image from 'next/image'
import styles from 'styles/imageComponent.module.css'
import homeHero from 'public/images/homeHero.png'

export default function ImageComponent({ imageName }) {
  //   const homeHero = imageName
  return (
    <figure className={styles.figure}>
      <Image
        className={styles.image}
        src={homeHero}
        alt={imageName}
        layout="responsive"
        objectPosition="top"
        objectFit="cover"
      />
    </figure>
  )
}
