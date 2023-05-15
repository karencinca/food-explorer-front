import { Input } from "../../components/Input"
import Logo from '../../components/Logo'
import { Container } from './styles'

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
        </div>
    </Container>
  )
}

export default SignIn