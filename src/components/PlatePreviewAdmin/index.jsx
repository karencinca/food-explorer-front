import { Container } from "./styles"
import Image from '../../assets/meals/Mask group.png'
import Pencil from '../../assets/icons/Pencil.svg'

const PlatePreviewAdmin = () => {
  return (
    <Container>
        <img src={Pencil} alt="add as favorite" />
        <div>
            <img src={Image} alt='foto do prato' />
            <h3>Salada Ravanello </h3>
            <span>R$ 49,97</span>
        </div>
    </Container>
  )
}

export default PlatePreviewAdmin