import React from 'react'
import { SquareInterface, PlayerInterface, ChangeSquareInterface } from '../../types'
import { Square } from '../index'
import { Container } from './board-components'

interface BoardInterface {
  player: PlayerInterface
  squares: Array<SquareInterface[]>
  onChangeSquare: (value: ChangeSquareInterface) => void
}

export default function Board({ player, squares, onChangeSquare }: BoardInterface) {
  return (
    <Container>
      {squares.map((squareLine, indexLine) => {
        return (
          <div key={indexLine}>
            {squareLine.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  line={indexLine}
                  player={player}
                  square={square}
                  onChangeSquare={onChangeSquare}
                />
              )
            })}
          </div>
        )
      })}
    </Container>
  )
}
