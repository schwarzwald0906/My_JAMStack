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
      <div className={utilStyles.sideBySideCenter}>
        <figure className={styles.image}>
          <Image
            src={icon}
            alt=""
            layout="responsive"
            sizes="(min-width: 339px) 339px, (min-width: 339px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <Container className={styles.flexContainer}>
          <Contact />
          <p>© 2022 FLUXUS_LOCUS</p>
        </Container>
      </div>
    </footer>
  )
}
