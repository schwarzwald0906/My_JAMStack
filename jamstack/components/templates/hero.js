import Image from 'next/image'
import styles from 'styles/hero.module.css'
import hero from 'images/homeHero.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      {imageOn && (
        <figure>
          <Image
            src={hero}
            alt=""
            layout="responsive"
            width={1440}
            height={500}
          />
        </figure>
      )}
      <div className={styles.hero}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}
