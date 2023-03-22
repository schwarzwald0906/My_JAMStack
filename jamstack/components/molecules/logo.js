import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <h1>FLUXUS LOCUS</h1>
    </Link>
  )
}
