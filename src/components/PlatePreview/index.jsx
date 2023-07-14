import { Container, Details } from "./styles"
import Button from '../Button'
import AmountHandler from "../AmountHandler"
import { FiHeart } from 'react-icons/fi'
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const PlatePreview = (props) => {
  const [isFav, setIsFav] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1024 })
 
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
              <h3 className="plate-title">{props.title + ' >'}</h3>
              {isDesktop && <p className="plate-description">{props.description}</p>}
            </Details>
            <span className="price">R$ {props.price}</span>
            <div className="stepper-button-wrapper">
              <AmountHandler />
              <Button title="incluir" />
            </div>
        </div>
    </Container>
  )
}

export default PlatePreview