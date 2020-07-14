import React, { useState } from 'react'
import { players, initialState } from '../../constants'
import { calculateResult } from '../../helpers'
import { SquareInterface, PlayerInterface, ChangeSquareInterface } from '../../types'
import { Board } from '../index'

export default function App() {
  const [squares, setSquares] = useState<Array<SquareInterface[]>>(initialState)
  const [player, setPlayer] = useState<PlayerInterface>(players[0])
  const [gameStep, setGameStep] = useState<number>(0)
  const [totalScore, setTotalScore] = useState<any>({ [players[0].name]: 0, [players[1].name]: 0 })
  const [winner, setWinner] = useState<PlayerInterface | null>(null)

  const handleChangeSquare = ({ value, index, line }: ChangeSquareInterface) => {
    const currentGameStep = gameStep + 1
    setGameStep(currentGameStep)
    setPlayer(players[currentGameStep % 2])
    const newSquares = squares
    newSquares[line][index] = { value }
    const isWinner: boolean = calculateResult(value, newSquares)
    if (isWinner) {
      const winnerPlayer = players.find((player) => player.util === value)
      if (winnerPlayer) {
        setWinner(winnerPlayer)
        setTotalScore({ ...totalScore, [winnerPlayer.name]: totalScore[winnerPlayer.name] + 1 })
      }
    } else {
      setSquares(newSquares)
    }
  }

  const clearSquares = () => {
    const currentSquares = squares
    currentSquares.map((squareLine) => {
      return squareLine.map((square) => {
        return (square.value = null)
      })
    })
    setSquares(currentSquares)
  }

  const handleStartNewGame = (e: any) => {
    e.preventDefault()
    clearSquares()
    setPlayer(players[0])
    setWinner(null)
    setGameStep(0)
  }

  return (
    <div className="App">
      <h1>Game tic-tac-toe</h1>
      <h2>Total score</h2>
      <table>
        <thead>
          <tr>
            <th>{players[0].name}</th>
            <th>{players[1].name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalScore[players[0].name]}</td>
            <td>{totalScore[players[1].name]}</td>
          </tr>
        </tbody>
      </table>
      {winner && <h3>Winner {winner.name}</h3>}
      <div>
        <button onClick={handleStartNewGame}>Start new game</button>
      </div>
      <p>
        Current step on player <strong>{player.name}</strong> with value <strong>{player.util}</strong>
      </p>
      <Board squares={squares} onChangeSquare={handleChangeSquare} player={player} />
    </div>
  )
}
