import { Container } from './styles'
import { useMediaQuery } from 'react-responsive'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'

const ScrollPlates = ({ title, children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <Container>
        <h2>{title}</h2>
        <div className='cards'>
          {children}
          {isDesktop && <div className="linear-gradient-left">
            <RxCaretLeft 
            className='caret-left' />
          </div>}
          {isDesktop && <div className="linear-gradient-right">
            <RxCaretRight 
            className='caret-right'/>
          </div>}
        </div>
    </Container>
  )
}

export default ScrollPlates