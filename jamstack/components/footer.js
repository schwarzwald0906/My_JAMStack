import Container from './container'
import Logo from './logo'
import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <Container className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
      </Container>
    </footer>
  )
}
