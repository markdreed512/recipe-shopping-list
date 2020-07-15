import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import IngredientsList from './components/IngredientsList';

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [recipe, setRecipe] = useState("")

  useEffect(()=>{
      if(searchValue){
          const url = `https://api.edamam.com/search?q=${searchValue}&app_id=28899030&app_key=83a0e2aedc9afc0e98aaf027034eb4c2`
          fetch(url)
          .then((response)=>{
              console.log(url)
              return response.json()
          })
          .then((data)=>{
              setIngredients(data.hits[0].recipe.ingredients)
              setRecipe(data.hits[0].recipe)
          })
      }
  },[searchValue])
  const handleSubmit = (e) => {
      e.preventDefault()
      setSearchValue(inputValue)
    
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
}
  return (
    <>
      <Form 
        handleSubmit={handleSubmit} 
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        />
      <IngredientsList 
        ingredients={ingredients}
        recipe={recipe}
      />
    </>
  );
}

export default App;
