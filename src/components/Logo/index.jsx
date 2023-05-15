import { Container } from './styles'
import Polygon from '../../assets/icons/Polygon.svg'

const Logo = () => {
  return (
    <Container>
        <img src={Polygon} alt="polígono" />
        <span>food explorer</span>
    </Container>
  )
}

export default Logo