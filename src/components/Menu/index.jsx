import { useAuth } from '../../hooks/auth'
import { Container } from "./styles"
import Input from '../Input'
import { AiOutlineClose } from 'react-icons/ai'
import Search from '../../assets/icons/Search'
import { USER_ROLE } from '../../utils/roles'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Menu = ({ isOpen, setMenuOpen }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const closeMenu = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setMenuOpen(false)
            setIsAnimating(false)
        }, 500)
    }

    
    function newPlate() {
        closeMenu()
        navigate('newplate')
    }

    useEffect(() => {
        if (!isOpen) {
            setIsAnimating(false)
        }
    }, [isOpen])

        return (
            <Container>
                <div className={`menu ${isOpen ? 'open' : 'closed'} ${isAnimating ? 'closing' : ''}`}>
                    <div className="menu-header">
                        <div className="icon-menu">
                            <AiOutlineClose 
                                size={24}
                                onClick={closeMenu}
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

                </div>
          </Container>
        )
}

export default Menu