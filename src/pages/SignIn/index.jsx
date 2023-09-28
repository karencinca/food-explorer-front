import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import Input from "../../components/Input"
import Button from '../../components/Button'
import Logo from "../../components/Logo"
import { Container } from './styles'
import ButtonText from "../../components/ButtonText"
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"

const SignIn = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

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
                  <Input 
                    placeholder="Exemplo: exemplo@email.com" 
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                  />
              </div>
              <div className="input-wrapper">
                  <label htmlFor="password">Senha</label>
                  <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                  />
              </div>
              <Button className="login-button" title="Entrar" onClick={handleSignIn} />
              
                <ButtonText>
                  <Link to="/register">Criar uma conta</Link>
                </ButtonText>  
          </div>
        </div>
    </Container>
  )
}

export default SignIn