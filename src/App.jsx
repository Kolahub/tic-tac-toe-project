import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { useState } from "react"
function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handelSelectSquare (rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' )
    setGameTurns((prevTurns) => {
      let curPlayer = 'X'
      console.log(prevTurns, '⭐⭐⭐');
      if(prevTurns.length > 0 && prevTurns[0].player === 'X')  {
        curPlayer = 'O'
      }
      const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: curPlayer}, ...prevTurns]
      console.log(updatedTurn, '❤️❤️❤️');
      return updatedTurn;
    })
  }

  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
        initialName='Player 1'
        symbol='X'
        isActive = {activePlayer === 'X'}
        />
        <Player 
        initialName='Plyer 2'
        symbol='O'
        isActive = {activePlayer === 'O'}
        />
      </ol>
      <GameBoard onSelectSquare={handelSelectSquare} 
      turns ={gameTurns}
      />
    </div>
    <Log />
   </main>
  )
}

export default App
