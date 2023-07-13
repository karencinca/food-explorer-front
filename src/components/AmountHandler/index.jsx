import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const AmountHandler = () => {
  const [counter, setCounter] = useState(0)

  const addItemHandler = () => {
    setCounter(counter + 1)
  }

  const deleteItemHandler = () => {
    setCounter(counter - 1)

    if(counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <Container>
        <AiOutlineMinus 
          size='24px'
          onClick={deleteItemHandler}
        />
      <span>{counter}</span>
        <AiOutlinePlus 
          size='24px'
          onClick={addItemHandler}
        />
    </Container>
  )
}

export default AmountHandler