import Container from './container'
import styles from 'styles/footer.module.css'
// import './styles/utils.module.css'
import utilStyles from 'styles/utils.module.css'
import Contact from './contact'
import Image from 'next/image'
import icon from 'images/icon.png'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={utilStyles.center}>
        <figure className={styles.image}>
          <Image
            src={icon}
            alt="icon"
            layout="fixed"
            width={250}
            height={250}
          />
        </figure>
        <Container>
          <Contact />
          <p>© 2022 FLUXUS LOCUS</p>
        </Container>
      </div>
    </footer>
  )
}
