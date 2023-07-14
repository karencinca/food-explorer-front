import { AiOutlineMenu } from 'react-icons/ai'
import LogoTitle from '../../assets/icons/LogoTitle'
import Receipt from '../../assets/icons/Receipt'
import Search from '../../assets/icons/Search'
import SignOut from '../../assets/icons/SignOut'
import Input from '../Input'
import Button from '../Button'
import { Container } from './styles'
import { useMediaQuery } from 'react-responsive'
 
const HeaderUser = ({ menuOpen, setMenuOpen }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return (
    <Container>
      {
        (!menuOpen && !isDesktop) &&
        <AiOutlineMenu 
          onClick={() => setMenuOpen(!menuOpen)}
          size={24} />
      }

      <LogoTitle
      className='logo-title'
      />

    {isDesktop &&
      <Input
        icon={Search} 
        placeholder='Busque por pratos ou ingredientes'
      />
    }

      {!isDesktop &&
        <div className='cart-wrapper'>
          <Receipt />
          <div className='cart-number'> <span>0</span></div>
        </div>
      }

      {isDesktop && 
        <Button
          className='orders-btn' 
          icon={Receipt}
          title='Pedidos (0)'
        />
      }

      {isDesktop &&
      <button className='sign-out'>
        <SignOut 
        />
      </button>
      }
    </Container>
  )
}

export default HeaderUser