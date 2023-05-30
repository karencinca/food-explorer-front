import MacaronsMobile from '../../assets/images/macarons-mobile.png'
import { Container } from './styles'

const Banner = () => {
  return (
    <div>
        <Container>
            <div className="image">
                <img src={MacaronsMobile} alt="macarons" />
            </div>
            <div className="text">
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    </div>
  )
}

export default Banner