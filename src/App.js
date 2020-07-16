import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import IngredientsList from './components/IngredientsList';

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [recipeData, setRecipeData] = useState("")
  const [allRecipes, setAllRecipes] = useState([])
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0)
  const [recipeName, setRecipeName] = useState("test")
  useEffect(() => {
    if (searchValue) {
      const url = `https://api.edamam.com/search?q=${searchValue}&app_id=28899030&app_key=83a0e2aedc9afc0e98aaf027034eb4c2&from=0&to=50&health=vegan`
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data.hits)
          setAllRecipes(data.hits)
        })
    }
  }, [searchValue])
  useEffect(() => {
    if (allRecipes[0]) {
      const currentRecipe = allRecipes[currentRecipeIndex].recipe
      const currentIngredients = allRecipes[currentRecipeIndex].recipe.ingredients
      const currentName = allRecipes[currentRecipeIndex].recipe.label
      console.log(currentRecipe)
      setRecipeData(currentRecipe)
      setIngredients(currentIngredients)
      setRecipeName(currentName)
    }
  }, [allRecipes, currentRecipeIndex])
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchValue(inputValue)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const getDifferentRecipe = () => {
    setCurrentRecipeIndex(currentRecipeIndex + 1)
  }
  const deleteItem = (e) => {
    console.log(e.target.id)
    const parsedId = parseInt(e.target.id)
  //   setIngredients(()=>{
  //     const newIngredients = [...ingredients]
  //     delete newIngredients[i]
  //     return newIngredients
  // })
    const newIngredients = ingredients.filter((ingredient, i)=>{
      return i !== parsedId  
    })
    setIngredients(newIngredients)
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
      recipe={recipeData}
      getDifferentRecipe={getDifferentRecipe}
      recipeName={recipeName}
      deleteItem={deleteItem}
    />
  </>
);
}

export default App;
