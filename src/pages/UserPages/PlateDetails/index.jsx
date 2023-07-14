import HeaderUser from '../../../components/HeaderUser'
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import Image from '../../../../public/meals/mask-group.png'
import { Container } from './styles'
import AmountHandler from '../../../components/AmountHandler'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import MenuUser from '../../../components/MenuUser'
import IngredientTag from '../../../components/IngredientTag'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PlateDetails = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
        <HeaderUser setMenuOpen={setMenuOpen} />

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <Link to="/">voltar</Link>
            </div>

            <div className="plate">

                <div className="image-container">
                    <img src={Image} alt="Imagem do prato" />
                    <h2>Salada Rvanello</h2>
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
                </div>

                <div className="order-container">
                    <AmountHandler />
                    <Button title="pedir" />
                </div>
            </div>
        </div>
        <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer />
    </Container>
  )
}

export default PlateDetails