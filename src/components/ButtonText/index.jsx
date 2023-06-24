import { Container } from "./styles"

const ButtonText = ({ children }) => {
  return (
    <Container type="button">
        {children}
    </Container>
  )
}

export default ButtonText