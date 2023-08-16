import { useAuth } from '../../hooks/auth'
import { Container } from "./styles"
import Input from '../Input'
import { AiOutlineClose } from 'react-icons/ai'
import Search from '../../assets/icons/Search'
import { useState } from "react"

const MenuUser = ({ isOpen, setMenuOpen }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const { signOut } = useAuth()
    
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
                      {isAdmin && <li>Novo prato</li>}
                      <li onClick={signOut}>Sair</li>
                  </nav>
      
              </div>
          </Container>
        )
    } else {
        <></>
    }
}

export default MenuUser