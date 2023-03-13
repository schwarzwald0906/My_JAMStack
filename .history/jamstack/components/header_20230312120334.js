import Logo from './logo'
import Nav from './nav'

export default function Header() {
  return (
    <header className={styles.text}>
      <Logo ={styles.title}/>
      <Nav ={styles.title}/>
    </header>
  )
}
