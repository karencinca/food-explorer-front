import { useMediaQuery } from 'react-responsive'
import MacaronsMobile from '../../assets/images/macarons-mobile.png'
import Macarons from '../../assets/images/macarons.png'
import { Container } from './styles'

const Banner = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <div>
        <Container>
            <img src={isDesktop ? Macarons : MacaronsMobile} alt="macarons" className='macarons-image' />
            <div className="text">
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    </div>
  )
}

export default Banner