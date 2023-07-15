// import { useRef } from 'react'
import { Container } from './styles'
import { useMediaQuery } from 'react-responsive'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { useRef } from 'react'

const ScrollPlates = ({ title, children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const scroll = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    scroll.current.scrollLeft -= scroll.current.offsetWidth
  }

  function handleRightClick(e) {
    e.preventDefault()
    scroll.current.scrollLeft += scroll.current.offsetWidth
  }

  return (
    <Container>
        <h2>{title}</h2>
        <div className='cards'>

          <div className='scroll' ref={scroll}>
          {children}
          </div>

          {isDesktop && <div className="linear-gradient-left">
            <RxCaretLeft 
            className='caret-left'
            onClick={handleLeftClick}
            />
          </div>}
          {isDesktop && <div className="linear-gradient-right">
            <RxCaretRight 
            className='caret-right'
            onClick={handleRightClick}
            />
          </div>}
        </div>
    </Container>
  )
}

export default ScrollPlates