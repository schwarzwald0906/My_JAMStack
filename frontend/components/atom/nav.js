import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href="/">
            <a onClick={closeNav}>ホーム</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a onClick={closeNav}>FLUXUS LOCUSについて</a>
          </Link>
        </li>
        {/* <li>
          <Link legacyBehavior href="/blog">
            <a onClick={closeNav}>ブログ</a>
          </Link>
        </li> */}
        <li>
          <Link legacyBehavior href="/plan">
            <a onClick={closeNav}>プラン・料金</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/access">
            <a onClick={closeNav}>アクセス</a>
          </Link>
        </li>
        <li>
          <a onClick={closeNav} href="https://fluxus-locus.net/pcreserve.php">
            WEB予約
          </a>
        </li>
      </ul>
    </nav>
  )
}
