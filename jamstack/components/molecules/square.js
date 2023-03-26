import { useEffect, useState } from 'react'
import styles from 'styles/square.module.css'

export default function Square({ digit }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
