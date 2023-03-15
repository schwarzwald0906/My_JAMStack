// import Nav from './nav'
import styles from 'styles/header.module.css'
import Logo from './logo'
import Nav from './nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <div class={styles.headerContainer}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}
