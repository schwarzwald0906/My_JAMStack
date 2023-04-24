import styles from 'styles/social.module.css'
import utilStyles from 'styles/utils.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faYoutube,
  faLine,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
  return (
    <div className={utilStyles.center}>
      <ul className={styles.list}>
        <li>
          <a href="https://www.instagram.com/gyo_fluxus/?hl=ja">
            <FontAwesomeIcon icon={faInstagram} className={styles.item} />
            {/* <span className="sr-only">Instagram</span> */}
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCgu-GRLA8aAkEirFmV-w8yA">
            <FontAwesomeIcon icon={faYoutube} className={styles.item} />
            {/* <span className="sr-only">Youtube</span> */}
          </a>
        </li>
        <li>
          <a href="https://line.me/ti/p/SSyesj0DOk">
            <FontAwesomeIcon icon={faLine} className={styles.item} />
            {/* <span className="sr-only">Line</span> */}
          </a>
        </li>
      </ul>
    </div>
  )
}
