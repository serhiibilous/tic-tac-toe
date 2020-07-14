import { SquareInterface } from './types'

export const calculateResult = (value: 'x' | 0, squaresArray: Array<SquareInterface[]>) => {
  const squaresLength = squaresArray.length
  let winnerCombination: boolean = false
  let topLeftRightBottomCombination: SquareInterface[] = []
  let topRightLeftBottomCombination: SquareInterface[] = []
  for (let i = 0; i < squaresLength; i++) {
    winnerCombination = squaresArray[i].every((squareItem) => squareItem.value === value)
    if (winnerCombination) return winnerCombination

    let valuesOfVerticalLine: SquareInterface[] = []
    for (let index = 0; index < squaresLength; index++) {
      valuesOfVerticalLine.push(squaresArray[index][i])
    }
    winnerCombination = valuesOfVerticalLine.every((squareItem) => squareItem.value === value)
    if (winnerCombination) return winnerCombination

    topLeftRightBottomCombination.push(squaresArray[i][i])
    topRightLeftBottomCombination.push(squaresArray[i][squaresLength - 1 - i])
  }

  winnerCombination = topRightLeftBottomCombination.every((squareItem) => squareItem.value === value)
  if (winnerCombination) return winnerCombination

  winnerCombination = topLeftRightBottomCombination.every((squareItem) => squareItem.value === value)
  if (winnerCombination) return winnerCombination

  return winnerCombination
}
