import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'styles/checkBox.module.css'

export default function CheckBox({ msg }) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSquareCheck} className={styles.item} />
      <p>{msg}</p>
    </div>
  )
}
