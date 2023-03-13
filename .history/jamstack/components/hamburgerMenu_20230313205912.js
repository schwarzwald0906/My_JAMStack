import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburger}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}
