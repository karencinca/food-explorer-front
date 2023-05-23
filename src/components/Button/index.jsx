import { Container } from "./styles";

const Button = ({ title, icon: Icon, ...rest }) => {
    return (
        <Container type="button" {...rest}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}

export default Button