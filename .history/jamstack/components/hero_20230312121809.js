import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}
