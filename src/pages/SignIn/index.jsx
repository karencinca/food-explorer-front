import Input from "../../components/Input"
import Button from '../../components/Button'
import Logo from "../../components/Logo"
import { Container } from './styles'
import ButtonText from "../../components/ButtonText"
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <Container>
        <Logo />
        <div className="form">
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <Input placeholder="Exemplo: exemplo@email.com" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Senha</label>
                <Input placeholder="No mínimo 6 caracteres" />
            </div>
            <Button title="Entrar" />
            
              <ButtonText>
                <Link to="/register">Criar uma conta</Link>
              </ButtonText>
            
        </div>
    </Container>
  )
}

export default SignIn