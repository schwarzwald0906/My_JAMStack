import styles from 'styles/square.module.css'

export default function Square({ digit }) {
  const isMobile = window.innerWidth < 768
  const size = isMobile ? 26 : 35
  const overlap = isMobile ? 5 : 7
  return (
    <div
      className={styles.squareContainer}
      style={{ '--size': `${size}px`, '--overlap': `${overlap}px` }}
    >
      <div className={styles.squareBackground} />
      <div className={styles.squareOverlay} />
      <div className={styles.squareText}>{digit}</div>
    </div>
  )
}
