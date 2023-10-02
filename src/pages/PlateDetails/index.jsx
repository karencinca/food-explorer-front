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
import Receipt from '../../assets/icons/Receipt'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

const PlateDetails = () => {
const [menuOpen, setMenuOpen] = useState(false)
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

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
        try {
            setLoading(true)
            const response = await api.get(`/plates/${params.id}`)
            setData(response.data)
        } catch (error) {
            console.error('Error fetching dish', error)
        } finally {
            setLoading(false)
        }
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

        {loading && <div className='loader-container'><div className='loader'></div></div>} 

            {(!loading && data) && 
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
                        <div className="stepper-button-wrapper">
                        {
                            user.role !== USER_ROLE.ADMIN &&
                            <AmountHandler />
                        }
                        {
                            user.role === USER_ROLE.ADMIN &&
                            <Button 
                                className='button' 
                                title='Editar prato'  
                                onClick={() => editPlate(data.id)}
                            />
                        }

                        {
                            user.role !== USER_ROLE.ADMIN &&
                            <Button 
                                className='button'
                                title={`incluir ∙ R$ ${data.price}`}
                                icon={Receipt}
                            />
                        }
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