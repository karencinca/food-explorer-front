import { Container, Details } from "./styles"
import Button from '../Button'
import AmountHandler from "../AmountHandler"
import { FiHeart } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from '../../utils/roles'
import { api } from '../../services/api'

import { useNavigate } from "react-router-dom"

const PlatePreview = (props) => {
  const [isFav, setIsFav] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const priceWithComma = (props.price).toString().replace(".", ",")

  const navigate = useNavigate()
  const { user } = useAuth()

  function favToggle() {
    setIsFav(prevState => !prevState)
  }

  function editPlate(id) {
    navigate(`/editplate/${id}`)
  }

  return (
    <Container>
      {
        user.role === USER_ROLE.ADMIN ? 
          <BsPencil
            className='edit-pencil' 
            size={24}
            onClick={() => editPlate(props.id)}
          />
        :
          <FiHeart 
            className='fav-heart' 
            size={24}
            fill={isFav ? '#FFFAF1' : 'none'} 
            onClick={favToggle}
          />
      }
        <div>
            <Details onClick={props.onClick}>
              <img src={`${api.defaults.baseURL}/files/${props.image}`} alt='foto do prato' />
              <h3 className="plate-title">{props.title + ' >'}</h3>
              {isDesktop && <p className="plate-description">{props.description}</p>}
            </Details>
            <span className="price">R$ {priceWithComma}</span>
            <div className="stepper-button-wrapper">
              {user.role !== USER_ROLE.ADMIN && <AmountHandler />}
              {user.role !== USER_ROLE.ADMIN && <Button title="incluir" />}
            </div>
        </div>
    </Container>
  )
}

export default PlatePreview