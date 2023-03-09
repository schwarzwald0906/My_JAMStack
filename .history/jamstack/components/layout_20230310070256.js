import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
