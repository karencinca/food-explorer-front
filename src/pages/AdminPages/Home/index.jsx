import { useState } from 'react'
import Footer from '../../../components/Footer'
import MenuUser from '../../../components/MenuUser'
import { Container, Content } from './styles'
import Banner from '../../../components/Banner'
import ScrollPlates from '../../../components/ScrollPlates'
import HeaderUser from '../../../components/HeaderUser'
import PlatePreviewAdmin from '../../../components/PlatePreviewAdmin'

const HomeAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Container>
            <HeaderUser setMenuOpen={setMenuOpen} 
            />

            <Content>
                <div className='content'>
                    <Banner />
                    <ScrollPlates title="Refeições">
                        <PlatePreviewAdmin />
                        <PlatePreviewAdmin />
                        <PlatePreviewAdmin />
                    </ScrollPlates>
                    <ScrollPlates title="Pratos principais">
                        <PlatePreviewAdmin />
                        <PlatePreviewAdmin />
                        <PlatePreviewAdmin />
                    </ScrollPlates>
                </div>

                <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </Content>

            <Footer />
        </Container>
  )
}

export default HomeAdmin