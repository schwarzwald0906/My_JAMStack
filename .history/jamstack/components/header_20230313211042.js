// import Logo from './logo'
import HamburgerMenu from './hamburgerMenu'
// import Nav from './nav'
import styles from 'styles/header.module.css'
import Logo from './logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div class={styles.headerContainer}>
        <Logo />
        {/* <Nav /> */}
        <hamburgerMenu />
      </div>
    </header>
  )
}
