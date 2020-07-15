import React from 'react'

function Form(props) {
   
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleInputChange} value = {props.inputValue} placeholder="enter dish" />
            <button >search</button>
        </form>
    )
}

export default Form
