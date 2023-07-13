import { Container, Details } from "./styles"
import Button from '../Button'
import AmountHandler from "../AmountHandler"
import { FiHeart } from 'react-icons/fi'
import { useState } from "react"

const PlatePreview = (props) => {
  const [isFav, setIsFav] = useState(false)
 
  function favToggle() {
    setIsFav(prevState => !prevState)
  }

  return (
    <Container>
        <FiHeart 
          className='fav-heart' 
          size={24}
          fill={isFav ? '#FFFAF1' : 'none'} 
          onClick={favToggle}
        />
        <div>
            <Details to="/plateDetails/:id">
              <img src={`/public/meals/${props.img}`} alt='foto do prato' />
              <h3>{props.title} </h3>
            </Details>
            <span>R$ {props.price}</span>
            <AmountHandler />
            <Button title="incluir" />
        </div>
    </Container>
  )
}

export default PlatePreview