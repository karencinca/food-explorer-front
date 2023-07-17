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

const EditPlate = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Container>
            <HeaderUser setMenuOpen={setMenuOpen} />

            <div className="content">
                <div className="back-btn">
                    <img src={CaretLeft} alt="" />
                    <a href="/">voltar</a>
                </div>

                <h2>
                    Editar prato
                </h2>

                <form>
                    <div className="input-wrapper image-plate">
                        <p className="label-title">Imagem do prato</p>
                        <label htmlFor="plate-image" className="image-file" id="image-file">
                            {<FiUpload 
                                size={24}
                            />}
                            Selecione imagem para alterá-la
                        </label>
                        <Input type="file" id='plate-image' />
                    </div>
                    <div className="input-wrapper name-plate">
                        <label htmlFor="plate-name" className="label-title">Nome</label>
                        <Input
                        id='plate-name' 
                        placeholder='Ex.: Salada Ceasar'
                        />
                    </div>
                    <div className="input-wrapper category-plate">
                        <label htmlFor="category" id="category-input">Categoria</label>
                        <div className="select-wrapper">
                            <select name="category" id="category">
                                <option value="meal">Refeição</option>
                                <option value="salad">Salada</option>
                                <option value="dessert">Sobremesa</option>
                            </select>
                        </div>
                    </div>
                        <div className="input-wrapper ingredients-container">
                            <p className="label-title">Ingredientes</p>
                            <div className="ingredients-wrapper">
                                <AddIngredientTag 
                                    className='ingredient-tag'
                                    value="Pão Naan" 
                                    />
                                <AddIngredientTag 
                                    className='ingredient-tag'
                                    
                                    value="Pão Naan" 
                                />
                                <AddIngredientTag 
                                    isNew
                                    value="Adicionar" 
                                />
                            </div>
                        </div>
                    <div className="input-wrapper plate-price">
                        <label htmlFor="price" id="price-input">Preço</label>
                        <Input 
                        type='text' 
                        id='price' 
                        placeholder='R$ 00,00' 
                        />
                    </div>
                    <div className="input-wrapper plate-description">
                        <label htmlFor="description" id="description-input">Descrição</label>
                        <textarea
                        type='text' 
                        id='description' 
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
                    </div>

                    <div className="buttons-container">
                        <Button 
                        title='Excluir prato'
                        className='delete-button'
                        />
                        
                        <Button 
                        title='Salvar alterações'
                        className='save-button'
                        />
                    </div>
                </form>
            </div>
            <Footer />
            <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Container>
  )
}

export default EditPlate