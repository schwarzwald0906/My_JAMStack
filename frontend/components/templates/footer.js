import styles from 'styles/footer.module.css'
import utilStyles from 'styles/utils.module.css'
import Image from 'next/image'
import icon from 'public/images/icon.png'
import Container from 'components/container'
import Contact from 'components/atom/contact'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={utilStyles.center}>
        <figure className={styles.image}>
          <Image
            src={icon}
            alt="icon"
            layout="fixed"
            width={150}
            height={150}
          />
        </figure>
        <Container>
          <Contact />
          <br />
          <p className={styles.description}>
            {[
              'TEL：070-8351-6230',
              <br />,
              '住所：神奈川県横浜市中区太田町６丁目８６ Opa Rivage705',
              <br />,
              '営業時間：9時30分～20時00分 水曜日 定休日',
            ]}
          </p>
          <br />
          <p style={{ fontFamily: 'Agenda' }}>© 2023 FLUXUS LOCUS</p>
        </Container>
      </div>
    </footer>
  )
}
