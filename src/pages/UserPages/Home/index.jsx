import { useState } from 'react'
import Footer from '../../../components/Footer'
import MenuUser from '../../../components/MenuUser'
import { Container } from './styles'
import Banner from '../../../components/Banner'
import ScrollPlates from '../../../components/ScrollPlates'
import PlatePreview from '../../../components/PlatePreview'
import HeaderUser from '../../../components/HeaderUser'

import api from '../../../../api'

const HomeUser = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const plates = api.map(item => {
    return (
      <PlatePreview 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <Container>
      <HeaderUser setMenuOpen={setMenuOpen} />

      <div className='content'>
          <Banner />
          <div className='plates'>
            <ScrollPlates title="Refeições">
              {plates}
            </ScrollPlates>
            <ScrollPlates title="Pratos principais">
              {plates}
            </ScrollPlates>
          </div>
        </div>

        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Footer />
    </Container>
  )
}

export default HomeUser