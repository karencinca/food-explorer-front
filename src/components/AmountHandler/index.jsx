import { Container } from './styles'
import Minus from '../../assets/icons/Minus'
import Plus from '../../assets/icons/Plus'
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
      <button onClick={deleteItemHandler}>
        <Minus />
      </button>
      <span>{counter}</span>
      <button onClick={addItemHandler}>
        <Plus />
      </button> 
    </Container>
  )
}

export default AmountHandler