import React from 'react';
import './Character.css'

const Character = props => {
    console.log(props);
    return (
        <div className="stats">
        <p>Name: {props.Character.name}</p>
        <p> Gender: {props.Character.gender}</p>
        <p> Height: {props.Character.height}</p>
        <p> Birth Year: {props.Character.birth_year}</p>
        </div>
    )
}





export default Character;