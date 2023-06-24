import { Container, Details } from "./styles"
import Button from '../Button'
import Image from '../../assets/meals/Mask group.png'
import Heart from '../../assets/icons/Heart.svg'
import AmountHandler from "../AmountHandler"

const PlatePreview = () => {
  return (
    <Container>
        <img src={Heart} alt="add as favorite" />
        <div>
            <Details to="/plateDetails/:id">
              <img src={Image} alt='foto do prato' />
              <h3>Salada Ravanello </h3>
            </Details>
            <span>R$ 49,97</span>
            <AmountHandler />
            <Button title="incluir" />
        </div>
    </Container>
  )
}

export default PlatePreview