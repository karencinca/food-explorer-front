import { useState } from "react"
import { Container } from "./styles"
import HeaderUser from "../../../components/HeaderUser"
import MenuUser from "../../../components/MenuUser"
import CaretLeft from '../../../assets/icons/CaretLeft.svg'
import Input from "../../../components/Input"
import AddIngredientTag from "../../../components/AddIngredientTag"

const AddNewPlate = () => {
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
                    Novo prato
                </h2>

                <form>
                    <div className="input-wrapper">
                        <label htmlFor="plate-image">Imagem do prato</label>
                        <Input type="file" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="plate-name">Nome</label>
                        <Input />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category">
                            <option value="meal">Refeição</option>
                            <option value="salad">Salada</option>
                            <option value="dessert">Sobremesa</option>
                        </select>
                    </div>

                    <AddIngredientTag 
                    isNew
                    value="Pão Naan" />
                </form>
            </div>


            <MenuUser isOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        </Container>
  )
}

export default AddNewPlate