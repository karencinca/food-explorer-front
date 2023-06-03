import HeaderUser from '../../../components/HeaderUser'
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import Image from '../../../assets/meals/Mask group.png'
import { Container } from './styles'
import AmountHandler from '../../../components/AmountHandler'
import Button from '../../../components/Button'

const PlateDetails = () => {
  return (
    <Container>
        <HeaderUser />

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <a href="/">Voltar</a>
            </div>

            <div className="image-container">
                <img src={Image} alt="Imagem do prato" />
                <h2>Salada Ravanello</h2>
            </div>

            <div className="description-container">
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                <div className='ingredients-container'>
                    <span>alface</span>
                    <span>cebola</span>
                    <span>pão naan</span>
                    <span>pepino</span>
                    <span>rabanete</span>
                    <span>tomate</span>
                </div>
            </div>

            <div className="order-container">
                <AmountHandler />
                <Button title="pedir" />
            </div>
        </div>
    </Container>
  )
}

export default PlateDetails