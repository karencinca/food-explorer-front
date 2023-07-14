import { Container } from "./styles"
import Input from '../Input'
import { AiOutlineClose } from 'react-icons/ai'
import Search from '../../assets/icons/Search'

const MenuUser = ({ isOpen, setMenuOpen }) => {
    
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
                      <li>Sair</li>
                  </nav>
      
              </div>
          </Container>
        )
    } else {
        <></>
    }
}

export default MenuUser