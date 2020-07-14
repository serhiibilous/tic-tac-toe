export interface SquareInterface {
  value: 'x' | 0 | null
}

export interface PlayerInterface {
  name: 'Player 1' | 'Player 2'
  util: 'x' | 0
}

export interface ChangeSquareInterface {
  value: 'x' | 0
  line: number
  index: number
}
