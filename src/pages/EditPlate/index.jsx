import { Container } from "./styles"
import { useState, useEffect } from "react"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import CaretLeft from '../../assets/icons/CaretLeft.svg'
import { FiUpload } from 'react-icons/fi'
import Input from "../../components/Input"
import AddIngredientTag from "../../components/AddIngredientTag"
import Footer from '../../components/Footer'
import Button from "../../components/Button"
import Search from "../../assets/icons/Search"

import { useNavigate, useParams } from "react-router-dom"

import { api } from "../../services/api"

const EditPlate = ({ isAdmin }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const [plate, setPlate] = useState(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState('')
    const [updatedImage, setUpdatedImage] = useState(null)

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('')

    const navigate = useNavigate()
    const params = useParams()

    function goBack() {
        navigate(-1)
    }
    
    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
        setUpdatedImage(file);
        setFileName(file.name);
    }
    
    function handleAddIngredient() {
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient('');
      }
    
      function handleRemoveIngredient(deleted) {
        setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== deleted));
      }

      async function handleEditPlate() {
        if (!image) {
          return alert("Selecione a imagem do prato.")
        }
    
        if (!title) {
          return alert("Digite o nome do prato.")
        }
    
        if (!category) {
          return alert("Selecione a categoria do prato.")
        }
    
        if (ingredients.length === 0) {
          return alert("Informe pelo menos um ingrediente do prato.")
        }
    
        if (newIngredient) {
          return alert(
            "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
          )
        }
    
        if (!price) {
          return alert("Digite o preço do prato.");
        }
    
        if (!description) {
          return alert("Digite a descrição do prato.");
        }
    
        try {
          const updatedPlate = {
            title: title,
            category: category,
            price: price,
            description: description,
            ingredients: ingredients,
          }
      
          if (image) {
            const formData = new FormData()
            formData.append("image", image)
      
            await api.patch(`/plates/${params.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
          }
      
          await api.patch(`/plates/${params.id}`, updatedPlate)
      
          alert("Prato atualizado com sucesso!");
          navigate(-1);
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível atualizar o prato.");
          }
        }
    }
    
      async function handleRemovePlate() {
        const confirm = window.confirm("Deseja realmente remover o prato?");
      
        if (confirm) {
    
          try {
            await api.delete(`/plates/${params.id}`);
            navigate("/");
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível excluir o prato.");
            }
          }
        }
      }

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/plates/${params.id}`)
            setPlate(response.data)
        }
    
        fetchPlate()
    }, [params.id])

    useEffect(() => {
        if (plate) {
          setFileName(plate.image);
          setImage(plate.image);
          setTitle(plate.title);
          setCategory(plate.category);
          setPrice(plate.price);
          setDescription(plate.description);
      
          const allIngredients = plate.ingredients.map((ingredient) => ingredient.name);
          setIngredients(allIngredients)
        }
      }, [plate])

    return (
        <Container>
            <Header
            setMenuOpen={setMenuOpen} 
            isAdmin={isAdmin}
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

                <h2>
                    Editar prato
                </h2>

                <form>
                  <div className="first-line">
                    <div className="input-wrapper image-plate">
                        <p className="label-title">Imagem do prato</p>
                        <label htmlFor="plate-image" className="image-file" id="image-file">
                            {<FiUpload 
                                size={24}
                            />}
                            {fileName || 'Selecione imagem'}
                        <Input 
                            type="file" 
                            id='plate-image' 
                            onChange={handleImageChange}
                            />
                        </label>
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
                            <select 
                            name="category" 
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            >
                                <option value="">-- Selecione --</option>
                                <option value="meal">Refeição</option>
                                <option value="salad">Salada</option>
                                <option value="dessert">Sobremesa</option>
                            </select>
                    </div>
                  </div>
                  <div className="second-line">
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
                        value={price} 
                        onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                  </div>
                    <div className="input-wrapper plate-description">
                        <label htmlFor="description" id="description-input">Descrição</label>
                        <textarea
                        type='text' 
                        id='description' 
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                        defaultValue={description} 
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="buttons">
                        <Button 
                        title='Excluir prato'
                        className='delete'
                        onClick={handleRemovePlate}
                        />

                        <Button 
                        title='Salvar alterações'
                        className='save'
                        onClick={handleEditPlate}
                        />
                    </div>
                        
                </form>
            </div>
            <Footer />
            <Menu
             isOpen={menuOpen} 
             setMenuOpen={setMenuOpen}
             isAdmin={isAdmin} 
             />
        
        </Container>
  )
}

export default EditPlate