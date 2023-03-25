import Container from 'components/container'
import Logo from 'components/atom/logo'
import Nav from 'components/atom/nav'
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
