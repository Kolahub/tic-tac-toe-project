import { useState } from 'react'

function Player({ initialName, symbol, isActive }) {   
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function clickHandler () {
        setIsEditing((editing) => !editing)
    }

    function changeHandler(e) {
        setPlayerName(e.target.value)
    }
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className='player'>
            {!isEditing ? <span className='player-name'>{playerName}</span> : <input type="text" required placeholder={initialName} onChange={changeHandler} />}
            <span className="player=symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player