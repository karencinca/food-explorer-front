import { Container } from './styles'
import Minus from '../../assets/icons/Minus'
import Plus from '../../assets/icons/Plus'

const AmountHandler = () => {
  return (
    <Container>
        <Minus />
        <span>01</span>
        <Plus />
    </Container>
  )
}

export default AmountHandler