import { useState } from "react"
import Input from "../../components/Input"
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { Container } from './styles'
import ButtonText from "../../components/ButtonText"
import { Link, useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import { useMediaQuery } from "react-responsive"

const SignIn = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 })

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro.")
            }
        })
    }

  return (
    <Container>
        <div className="logo">
            <Logo />
        </div>
        <div className="content">
            {isDesktop && <h2>Crie sua conta</h2>}
            <div className="form">
                <div className="input-wrapper">
                    <label htmlFor="name">Seu nome</label>
                    <Input 
                        placeholder="Exemplo: Maria da Silva" 
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
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
                <Button 
                    title="Criar conta" 
                    onClick={handleSignUp}    
                />
                <ButtonText>
                    <Link to="/">Já tenho uma conta</Link>
                </ButtonText>
            </div>
        </div>
    </Container>
  )
}

export default SignIn