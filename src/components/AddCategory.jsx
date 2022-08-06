import { useState } from "react"

export const AddCategory = ( { onAddCategory } ) => {

    const [inputValue, setinputValue] = useState('')

    const onValueChange = ( event ) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //setCategories( categories => [ inputValue , ...categories] );
        onAddCategory( inputValue.trim() )
        setinputValue('');
    } 
  return (
    <form onSubmit ={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value ={ inputValue }
            onChange = { onValueChange }
        />
    </form>
    
  )
}
