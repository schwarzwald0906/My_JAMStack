import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      FLUXUS LOCUS
    </Link>
  )
}
