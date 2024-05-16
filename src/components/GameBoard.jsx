import { useState } from "react"

const initilaGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initilaGameBoard
    
    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }
    // const [gameBoard, setGameBoard] = useState(initilaGameBoard)

    // function handelSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevgameBoard) => {
    //     const updatedBoard = [...prevgameBoard.map(innerArray => [...innerArray])]
    //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //     return updatedBoard;
    //     })

    //     onSelectSquare()
    // }
    
  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
            ))}
            </ol>
        </li>
        ))}
    </ol>
  )
}

export default GameBoard