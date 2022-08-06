import { useState } from "react";

//import { AddCategory, GifGrid } from "./components";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ '' ])

  const onAddCategory = ( onAddCategory ) => {
    if(!categories.includes( onAddCategory )) setCategories( categories.concat( onAddCategory ) )
    //O
    //setCategories([...categories, inputCategory])
    //o
    //setCategories( cat => [...cat, inputCategory]) , setCategories( cat => [inputCategory, ...cat])
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      {/* < AddCategory setCategories = { setCategories }/> */}

      < AddCategory onAddCategory = { onAddCategory }/>

      {
        categories.map( category => (
          <GifGrid key      = { category } 
                   category = { category } />
        ))
      }
      
    </>
  )
}
