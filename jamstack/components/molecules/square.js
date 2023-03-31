import styles from 'styles/square.module.css'

export default function Square({ digit }) {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.squareBackground} />
      <div className={styles.squareOverlay}>{digit}</div>
    </div>
  )
}
