import {
  isThreeOfKind,
  isFourOfKind,
  isFullHouse,
  isSmallStraight,
  isLargeStraight,
  isYahtzee,
  isChance
} from '../app/functions'

test ('Get isThreeOfKind', () => {
  expect (isThreeOfKind([1, 1, 1, 4, 5])).toBe(true)
})

test ('Get isFourOfKind', () => {
  expect (isFourOfKind([1, 1, 1, 1, 5])).toBe(true)
})

test ('Get isFullHouse', () => {
  expect (isFullHouse([1, 1, 1, 4, 4])).toBe(true)
})

test ('Get isSmallStraight', () => {
  expect (isSmallStraight([2, 3, 4, 5, 5])).toBe(true)
})

test ('Get isLargeStraight', () => {
  expect (isLargeStraight([2, 3, 4, 6, 5])).toBe(true)
})

test ('Get isYahtzee', () => {
  expect (isYahtzee([3, 3, 3, 3, 3])).toBe(true)
})

test ('Get isChance', () => {
  expect (isChance([1, 1, 1, 6, 5])).toBe(true)
})
