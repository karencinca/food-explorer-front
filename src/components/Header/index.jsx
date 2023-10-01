import { Container } from './styles'
import { useAuth } from '../../hooks/auth'
import { AiOutlineMenu } from 'react-icons/ai'
import LogoTitle from '../../assets/icons/LogoTitle'
import LogoAdmin from '../../assets/icons/LogoAdmin'
import LogoAdminMobile from '../../assets/icons/LogoAdminMobile'
import Receipt from '../../assets/icons/Receipt'

import SignOut from '../../assets/icons/SignOut'

import Button from '../Button'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
 
const Header = ({ menuOpen, setMenuOpen, children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const { user, signOut } = useAuth()

  return (
    <Container>
      {
        (!menuOpen && !isDesktop) &&
        <AiOutlineMenu 
          onClick={() => setMenuOpen(!menuOpen)}
          size={24} 
          />
        }

        {(isDesktop && user.role === USER_ROLE.ADMIN) &&
          <LogoAdmin />
        }

        {(!isDesktop && user.role === USER_ROLE.ADMIN) &&
          <LogoAdminMobile />
        }

        {user.role !== USER_ROLE.ADMIN &&
          <LogoTitle />
        }
        

      {isDesktop &&
        <div className='inputbar'>
          {children}
        </div>
      }

      {(!isDesktop && user.role !== USER_ROLE.ADMIN) &&
        <div className='cart-wrapper'>
          <Receipt />
          <div className='cart-number'> <span>0</span></div>
        </div>
      }



        {(isDesktop && user.role === USER_ROLE.ADMIN) &&
            <Link to="/newplate">
              <Button
              className='orders-btn' 
              title='Novo prato'
              /> 
            </Link>
        }

          {(isDesktop && user.role !== USER_ROLE.ADMIN) &&
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

export default Header