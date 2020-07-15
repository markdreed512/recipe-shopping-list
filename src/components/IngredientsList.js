import React from 'react'

function IngredientsList(props) {
    console.log(props.recipe || "nope")
    return (
        <>
            <a href={props.recipe.uri}>Go to Recipe</a>
            <ul>
                {props.ingredients.map((ingredient, i) => {
                    
                    return <li key={i}>{ingredient.text}</li>
                })}
            </ul>
        </>
    )
}

export default IngredientsList
