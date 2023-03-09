import Header from './header'
import Footer from './footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
