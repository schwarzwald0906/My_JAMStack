import styles from 'styles/footer.module.css'
import utilStyles from 'styles/utils.module.css'
import Image from 'next/image'
import icon from 'public/images/icon.png'
import Container from 'components/container'
import Contact from 'components/molecules/contact'

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
          <p style={{ fontFamily: 'Agenda' }}>© 2023 FLUXUS LOCUS</p>
        </Container>
      </div>
    </footer>
  )
}
