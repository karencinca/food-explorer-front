import Menu from '../../assets/icons/Menu'
import LogoTitle from '../../assets/icons/LogoTitle'
import Receipt from '../../assets/icons/Receipt'
import { Container } from './styles'
 
const HeaderUser = () => {
  return (
    <Container>
        <Menu />
        <LogoTitle />
        <Receipt />
    </Container>
  )
}

export default HeaderUser