import Container from 'components/container'
import Logo from 'components/molecules/logo'
import Nav from 'components/molecules/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div class={styles.headerContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
