import { useState } from "react"
import { Container } from "./styles"
import HeaderUser from "../../../components/HeaderUser"
import MenuUser from "../../../components/MenuUser"
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import { FiUpload } from 'react-icons/fi'
import Input from "../../../components/Input"
import AddIngredientTag from "../../../components/AddIngredientTag"
import Footer from '../../../components/Footer'
import Button from "../../../components/Button"

import { useNavigate } from "react-router-dom"

import { api } from "../../../services/api"

const AddNewPlate = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')

    const navigate = useNavigate()

    async function handleNewPlate() {
        await api.post("/plates", {
            title,
            price,
            category,
            description
        })
        alert("Prato cadastrado com sucesso!")
        navigate("/")
    }

    function handleAddIngredient() { 
        if (newIngredient.length <= 0) {
            alert('Adicione o ingrediente')
            return
        } else { 
            setIngredients(prevState => [...prevState, newIngredient])
            setNewIngredient('')
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    return (
        <Container>
            <HeaderUser setMenuOpen={setMenuOpen} />

            <div className="content">
                <div className="back-btn">
                    <img src={CaretLeft} alt="" />
                    <a href="/">voltar</a>
                </div>

                <h2>
                    Novo prato
                </h2>

                <form>
                    <div className="input-wrapper image-plate">
                        <p className="label-title">Imagem do prato</p>
                        <label htmlFor="plate-image" className="image-file" id="image-file">
                            {<FiUpload 
                                size={24}
                            />}
                            {isAdmin ? 'Selecione imagem para alterá-la' : 'Selecione imagem'}
                        </label>
                        <Input type="file" id='plate-image' />
                    </div>
                    <div className="input-wrapper name-plate">
                        <label htmlFor="plate-name" className="label-title">Nome</label>
                        <Input
                        id='plate-name' 
                        placeholder='Ex.: Salada Ceasar'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper category-plate">
                        <label htmlFor="category" id="category-input">Categoria</label>
                        <div className="select-wrapper">
                            <select 
                            name="category" 
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            >
                                <option value="meal">Refeição</option>
                                <option value="salad">Salada</option>
                                <option value="dessert">Sobremesa</option>
                            </select>
                        </div>
                    </div>
                        <div className="input-wrapper ingredients-container">
                            <p className="label-title">Ingredientes</p>
                            <div className="ingredients-wrapper">

                                {
                                    ingredients.map((ingredient, index) => (
                                        <AddIngredientTag 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }

                                <AddIngredientTag 
                                    isNew
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient} 
                                />
                            </div>
                        </div>
                    <div className="input-wrapper plate-price">
                        <label htmlFor="price" id="price-input">Preço</label>
                        <Input 
                        type='text' 
                        id='price' 
                        placeholder='R$ 00,00' 
                        onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper plate-description">
                        <label htmlFor="description" id="description-input">Descrição</label>
                        <textarea
                        type='text' 
                        id='description' 
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' 
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                        
                    <Button 
                    title='Salvar alterações'
                    className='save-button'
                    onClick={handleNewPlate}
                    />
                </form>
            </div>
            <Footer />
            <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        </Container>
  )
}

export default AddNewPlate

