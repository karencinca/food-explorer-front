import { Container } from "./styles" 

const Input = ({ icon, ...rest }) => {
    return (
        <Container>
            {icon && (
                <div className="icon-container">
                    {icon}
                </div>
            )}
            <input
            {...rest}
            />
        </Container>
    )
}

export default Input