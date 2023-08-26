import { useAuth } from '../../hooks/auth'
import { AiOutlineMenu } from 'react-icons/ai'
import LogoTitle from '../../assets/icons/LogoTitle'
import LogoAdmin from '../../assets/icons/LogoAdmin'
import Receipt from '../../assets/icons/Receipt'
import Search from '../../assets/icons/Search'
import SignOut from '../../assets/icons/SignOut'
import Input from '../Input'
import Button from '../Button'
import { Container } from './styles'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { Link } from 'react-router-dom'
 
const HeaderUser = ({ menuOpen, setMenuOpen }) => {
  const [isAdmin, setIsAdmin] = useState(true)
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const { signOut } = useAuth()

  return (
    <Container>
      {
        (!menuOpen && !isDesktop) &&
        <AiOutlineMenu 
          onClick={() => setMenuOpen(!menuOpen)}
          size={24} 
          />
        }

        {/* <Link to="/"> */}
          {isAdmin ? <LogoAdmin /> : <LogoTitle />}
        {/* </Link> */}

      {isDesktop &&
        <Input
          icon={Search} 
          placeholder='Busque por pratos ou ingredientes'
        />
      }

      {(!isDesktop && !isAdmin) &&
        <div className='cart-wrapper'>
          <Receipt />
          <div className='cart-number'> <span>0</span></div>
        </div>
      }

      {isDesktop &&
        isAdmin ?
          <Link to="/newplate">
            <Button
            className='orders-btn' 
            title='Novo prato'
            /> 
          </Link> :
          <Button
          className='orders-btn' 
          icon={Receipt}
          title='Pedidos (0)'
          />
      }

      {isDesktop &&
      <button className='sign-out' onClick={signOut}>
        <SignOut />
      </button>
      }
    </Container>
  )
}

export default HeaderUser