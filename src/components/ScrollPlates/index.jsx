import { Container } from './styles'

const ScrollPlates = ({ title, children }) => {
  return (
    <Container>
        <h2>{title}</h2>
        <div className='cards'>
          {children}
        </div>
    </Container>
  )
}

export default ScrollPlates