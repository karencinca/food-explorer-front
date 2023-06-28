import { Container, Details } from "./styles"
import Button from '../Button'
import Heart from '../../assets/icons/Heart.svg'
import AmountHandler from "../AmountHandler"

const PlatePreview = (props) => {
  return (
    <Container>
        <img src={Heart} alt="add as favorite" />
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