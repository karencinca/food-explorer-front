import { Container } from "./styles"
import Input from '../Input'
import Close from "../../assets/icons/Close"
import Search from '../../assets/icons/Search'
import Footer from "../Footer"

const MenuUser = ({ isOpen, setMenuOpen }) => {
    
    if (isOpen) {
        return (
            <Container>
              <div className="menu-header">
                  <div className="icon-menu">
                    <button onClick={() => setMenuOpen(!isOpen)}>
                      <Close />
                    </button>
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
              <Footer />
          </Container>
        )
    } else {
        <></>
    }
}

export default MenuUser