import React from 'react'

function IngredientsList(props) {
    return (
        <>
            <h2>{props.recipeName}</h2>
            <button onClick={props.getDifferentRecipe}>Next recipe</button>
            <a href={props.recipe.url} target="blank"><button>Go to Recipe</button></a>
            <table>
                {props.ingredients.map((ingredient, i) => {
                    return (
                        <tr key={i}>
                            <input type="checkbox" />
                            <td>
                                {ingredient.text}
                            </td>
                            <button onClick={props.deleteItem} id={i}>X</button>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default IngredientsList
