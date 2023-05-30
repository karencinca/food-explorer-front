import Menu from '../../assets/icons/Menu'
import LogoTitle from '../../assets/icons/LogoTitle'
import Receipt from '../../assets/icons/Receipt'
import { Container } from './styles'
 
const HeaderUser = ({ menuOpen, setMenuOpen }) => {

  return (
    <Container>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </button>
        <LogoTitle />
        <Receipt />

        
    </Container>
  )
}

export default HeaderUser