import HeaderUser from '../../../components/HeaderUser'
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import Image from '../../../assets/meals/Mask group.png'
import { Container } from './styles'
import AmountHandler from '../../../components/AmountHandler'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import MenuUser from '../../../components/MenuUser'
import { useState } from 'react'
import IngredientTag from '../../../components/IngredientTag'

const PlateDetailsAdmin = () => {
const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
        <HeaderUser setMenuOpen={setMenuOpen} />

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <a href="/">voltar</a>
            </div>

            <div className="plate">

                <div className="image-container">
                    <img src={Image} alt="Imagem do prato" />
                    <h2>Salada Ravanello</h2>
                </div>

                <div className="description-container">
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <div className='ingredients-container'>
                        <IngredientTag title="alface" />
                        <IngredientTag title="cebola" />
                        <IngredientTag title="pão naan" />
                        <IngredientTag title="pepino" />
                        <IngredientTag title="rabanete" />
                        <IngredientTag title="tomate" />
                    </div>
                    
                <Button title="Editar prato" />
                </div>

            </div>
        </div>
        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer />
    </Container>
  )
}

export default PlateDetailsAdmin