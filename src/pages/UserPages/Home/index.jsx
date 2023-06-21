import { useState } from 'react'
import Footer from '../../../components/Footer'
import MenuUser from '../../../components/MenuUser'
import { Container } from './styles'
import Banner from '../../../components/Banner'
import ScrollPlates from '../../../components/ScrollPlates'
import PlatePreview from '../../../components/PlatePreview'
import HeaderUser from '../../../components/HeaderUser'

const HomeUser = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Container>
      <HeaderUser setMenuOpen={setMenuOpen} />

      <div className='content'>
          <Banner />
          <ScrollPlates title="Refeições">
            <PlatePreview />
            <PlatePreview />
            <PlatePreview />
          </ScrollPlates>
          <ScrollPlates title="Pratos principais">
            <PlatePreview />
            <PlatePreview />
            <PlatePreview />
          </ScrollPlates>
        </div>

        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Footer />
    </Container>
  )
}

export default HomeUser