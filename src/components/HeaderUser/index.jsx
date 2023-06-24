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
      <div className='cart-wrapper'>
        <Receipt />
        <div className='cart-number'> <span>0</span></div>
      </div>
    </Container>
  )
}

export default HeaderUser