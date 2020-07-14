import { PlayerInterface, SquareInterface } from './types'

export const players: PlayerInterface[] = [
  {
    name: 'Player 1',
    util: 'x',
  },
  {
    name: 'Player 2',
    util: 0,
  },
]

export const initialState: Array<SquareInterface[]> = [
  [{ value: null }, { value: null }, { value: null }],
  [{ value: null }, { value: null }, { value: null }],
  [{ value: null }, { value: null }, { value: null }],
]
