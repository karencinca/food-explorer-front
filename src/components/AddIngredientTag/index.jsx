import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

const AddIngredientTag = ({ isNew, value, onClick, ...rest}) => {
  return (
    <Container isNew={isNew} className='tag-container'>
         <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button 
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
    </Container>
  )
}

export default AddIngredientTag