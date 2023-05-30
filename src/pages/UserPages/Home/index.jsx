import { useState } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/HeaderUser'
import MenuUser from '../../../components/MenuUser'
import { Container } from './styles'
import Banner from '../../../components/Banner'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Container>
        <Header setMenuOpen={setMenuOpen} />

        <div className='content'>
          <Banner />
        </div>

        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer />
    </Container>
  )
}

export default Home