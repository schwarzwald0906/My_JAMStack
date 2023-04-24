import Footer from './templates/footer'
import Header from './templates/header'
import styles from 'styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
