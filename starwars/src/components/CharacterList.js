import React from 'react'
import Character from './Character'

const CharacterList = props => {
    console.log(props);
    return (
        <div className="list">
        {props.characterList.map(char => 
          <Character key={char.created} Character={char}/>  
            )}
        </div>
    )
}




export default CharacterList;