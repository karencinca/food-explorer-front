import Input from "../../components/Input"
import Button from '../../components/Button'
import Logo from "../../components/Logo"
import { Container } from './styles'
import ButtonText from "../../components/ButtonText"
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"

const SignIn = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container>
        <div className="logo">
            <Logo />
        </div>
        <div className="content">
          {isDesktop && <h2>Faça login</h2>}
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
        </div>
    </Container>
  )
}

export default SignIn