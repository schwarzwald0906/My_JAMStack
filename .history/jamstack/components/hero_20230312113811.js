import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <h1> className={styles.title}</h1>
        <p> className=className={styles.subtitle}</p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}
