import React from 'react'

const Character = props => {
    console.log(props);
    return (
        <div className="stats">
        <p>{props.Character.name}</p>
        </div>
    )
}





export default Character;