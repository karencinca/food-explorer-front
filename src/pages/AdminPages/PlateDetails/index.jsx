import { useState, useEffect } from 'react'
import { Container } from './styles'
import { useParams } from 'react-router-dom'
import Header from '../../../components/Header'
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import AmountHandler from '../../../components/AmountHandler'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import Menu from '../../../components/Menu'
import IngredientTag from '../../../components/IngredientTag'

import { api } from '../../../services/api'

const PlateDetails = (props) => {
const [menuOpen, setMenuOpen] = useState(false)
const [data, setData] = useState(null)

const params = useParams()

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
        isAdmin={props.isAdmin}
        />

        <div className="content">
            <div className="back-btn">
                <img src={CaretLeft} alt="" />
                <a href="/">voltar</a>
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
                            !props.isAdmin &&
                            <AmountHandler />
                        }
                        <Button 
                            className="button" 
                            title={props.isAdmin ? 'Editar prato' : `incluir R$ ${data.price}`} />
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