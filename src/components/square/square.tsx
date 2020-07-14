import React from 'react'
import { ChangeSquareInterface, PlayerInterface, SquareInterface } from '../../types'
import { Container } from './square-components'

interface SquareParamsInterface {
  player: PlayerInterface
  square: SquareInterface
  line: number
  index: number
  onChangeSquare: (value: ChangeSquareInterface) => void
}

export default function Square({ player, square, line, index, onChangeSquare }: SquareParamsInterface) {
  const handleClickOnSquare = ({ value, index, line }: ChangeSquareInterface) => {
    onChangeSquare({ value, line, index })
  }

  return <Container onClick={() => handleClickOnSquare({ value: player.util, line, index })}>{square.value}</Container>
}
