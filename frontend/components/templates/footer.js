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
          <p style={{ fontFamily: 'Agenda' }}>© 2023 FLUXUS LOCUS</p>
          <p style={{ fontFamily: 'Agenda' }}>桜木町駅南口徒歩５分</p>
        </Container>
      </div>
    </footer>
  )
}
