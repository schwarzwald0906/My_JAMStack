import Image from 'next/image'
import styles from 'styles/imageGrid.module.css'

export default function ImageGrid() {
  return (
    <div className={'showOnlyDesktop'}>
      <div className={styles.imageRow}>
        <Image
          src="/images/topPage/customer1.jpg"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/topPage/customer2.jpg"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/topPage/customer3.jpg"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/topPage/customer4.jpg"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  )
}
