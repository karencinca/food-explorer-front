import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const AmountHandler = () => {
  const [counter, setCounter] = useState(0)

  const counterWithZero = counter < 10 ? counter.toString().padStart(2, '0') : counter
  
  const addItemHandler = () => {
    setCounter(prevState => prevState + 1)
  }
  
  const deleteItemHandler = () => {
    setCounter(prevState => prevState - 1)
    
    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <Container>
        <AiOutlineMinus
          className='icon' 
          size='24px'
          onClick={deleteItemHandler}
        />
      <span>{counterWithZero}</span>
        <AiOutlinePlus
          className='icon' 
          size='24px'
          onClick={addItemHandler}
        />
    </Container>
  )
}

export default AmountHandler