import { useAuth } from '../../hooks/auth'
import { Container } from "./styles"
import Input from '../Input'
import { AiOutlineClose } from 'react-icons/ai'
import Search from '../../assets/icons/Search'
import { USER_ROLE } from '../../utils/roles'
import { useNavigate } from 'react-router-dom'

const Menu = ({ isOpen, setMenuOpen }) => {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    function newPlate() {
        navigate('newplate')
    }
    
    if (isOpen) {
        return (
            <Container>
              <div className="menu-header">
                  <div className="icon-menu">
                      <AiOutlineClose 
                        size={24}
                        onClick={() => setMenuOpen(!isOpen)}
                      />
                      <span>Menu</span>
                  </div>
              </div>
      
              <div className="content">
                  <Input 
                      icon={Search}
                      placeholder="Busque por pratos ou ingredientes"
                  />
      
                  <nav>
                      {user.role === USER_ROLE.ADMIN && <li onClick={newPlate}>Novo prato</li>}
                      <li onClick={signOut}>Sair</li>
                  </nav>
      
              </div>
          </Container>
        )
    } else {
        <></>
    }
}

export default Menu