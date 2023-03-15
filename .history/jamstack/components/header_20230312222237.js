import Logo from './logo'
import Nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      {/* <Nav /> */}
      <FontAwesomeIcon icon={faBars} />
    </header>
  )
}
