import Logo from './logo'
// import Nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div class={styles.headerContainer}>
        <Logo />
        {/* <Nav /> */}
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
}