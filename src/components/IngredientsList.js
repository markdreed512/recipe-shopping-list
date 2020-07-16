import React from 'react'

function IngredientsList(props) {
    return (
        <>
            <h2>{props.recipeName}</h2>
            <button onClick={props.getDifferentRecipe}>Next recipe</button>
            <a href={props.recipe.url} target="blank"><button>Go to Recipe</button></a>
            <ul>
                {props.ingredients.map((ingredient, i) => {

                    return <li key={i}>{ingredient.text}</li>
                })}
            </ul>
        </>
    )
}

export default IngredientsList
