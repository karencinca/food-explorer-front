import { useState, useEffect } from 'react'
import { Container } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import CaretLeft from '../../assets/icons/CaretLeft.svg'
import AmountHandler from '../../components/AmountHandler'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import IngredientTag from '../../components/IngredientTag'
import Input from '../../components/Input'
import Search from '../../assets/icons/Search'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

const PlateDetails = () => {
const [menuOpen, setMenuOpen] = useState(false)
const [data, setData] = useState(null)

const params = useParams()

const { user } = useAuth()

const navigate = useNavigate()

function goBack() {
    navigate(-1)
}

function editPlate(id) {
    navigate(`/editplate/${id}`)
}

useEffect(() => {
    async function fetchPlate() {
        const response = await api.get(`/plates/${params.id}`)
        setData(response.data)
    }

    fetchPlate()
}, [])

    return (
    <Container>
        <Header
            setMenuOpen={setMenuOpen} 
            >
                <Input 
                icon={Search} 
                placeholder='Busque por pratos ou ingredientes'
                onChange={goBack}
                />
        </Header>

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <span onClick={goBack}>voltar</span>
            </div>
        {
            data && 
                <main className="plate">
                    <div className="image-container">
                        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato" />
                    </div>

                    <div className="description-container">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        {
                            data.ingredients &&
                                <div className='ingredients-container'>
                                    {
                                    data.ingredients.map(ingredient => (
                                        <IngredientTag 
                                        key={String(ingredient.id)}
                                        title={ingredient.name} />
                                    ))
                                    }
                                </div>
                        }
                        <div>
                        {
                            user.role !== USER_ROLE.ADMIN &&
                            <AmountHandler />
                        }
                        <Button 
                            className="button" 
                            title={user.role === USER_ROLE.ADMIN ? 'Editar prato' : `incluir R$ ${data.price}`} 
                            onClick={() => editPlate(data.id)}
                        />
                        </div>
                    </div>
                </main>
        }
        </div>
        <Menu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer />
    </Container>
  )
}

export default PlateDetails