import { Container } from "./styles"
import Input from '../../../components/Input'
import Close from "../../../assets/icons/Close"
import Search from '../../../assets/icons/Search'
import Footer from "../../../components/Footer"

const Menu = () => {
  return (
    <Container>
        <div className="menu-header">
            <div className="icon-menu">
                <Close />
                <span>Menu</span>
            </div>
        </div>

        <div className="content">
            <Input 
                icon={Search} 
                placeholder="Busque por pratos ou ingredientes"
            />

            <nav>
                <li>Novo prato</li>
                <li>Sair</li>
            </nav>

        </div>
        <Footer />
    </Container>
  )
}

export default Menu