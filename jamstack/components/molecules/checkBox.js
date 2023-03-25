import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import styles from 'styles/checkBox.module.css'

export default function CheckBox({ msg }) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.item} icon={faSquareCheck} size="lg" />
      <p>{msg}</p>
    </div>
  )
}
