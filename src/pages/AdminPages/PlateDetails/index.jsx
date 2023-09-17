import Header from '../../../components/Header'
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import { Container } from './styles'
import AmountHandler from '../../../components/AmountHandler'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import Menu from '../../../components/Menu'
import { useState } from 'react'
import IngredientTag from '../../../components/IngredientTag'

import { api } from '../../../services/api'

const PlateDetails = (props) => {
const [menuOpen, setMenuOpen] = useState(false)



  return (
    <Container>
        <Header 
        setMenuOpen={setMenuOpen} 
        isAdmin={props.isAdmin}
        />

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <a href="/">voltar</a>
            </div>

            <div className="plate">

                <div className="image-container">
                    <img src={`${api.defaults.baseURL}/files/${props.image}`} alt="Imagem do prato" />
                    <h2>{props.title}</h2>
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
        <Menu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer />
    </Container>
  )
}

export default PlateDetails