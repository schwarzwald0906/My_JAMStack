// import Logo from './logo'

// import Nav from './nav'
import styles from 'styles/header.module.css'
import HamburgerMenu from './hamburgerMenu'
import Logo from './logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div class={styles.headerContainer}>
        <Logo />
        {/* <Nav /> */}
        <HamburgerMenu />
      </div>
    </header>
  )
}
