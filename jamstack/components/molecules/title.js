import Square from './square'
import styles from 'styles/title.module.css'

export default function Title({ digit, msg }) {
  return (
    <div className={styles.container}>
      <Square digit={digit} className={styles.item} />
      <h4
        style={{
          marginLeft: '14px',
          marginTop: '3px',
          //   fontSize: '15px',
        }}
      >
        {msg}
      </h4>
    </div>
  )
}
