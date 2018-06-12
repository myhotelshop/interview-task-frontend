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
  expect (isThreeOfKind([1, 1, 1, 1, 1])).toBe(true)
  expect (isThreeOfKind([1, 1, 1, 1, 2])).toBe(true)
  expect (isThreeOfKind([1, 1, 1, 2, 3])).toBe(true)
  expect (isThreeOfKind([1, 2, 3, 4, 5])).toBe(false)
  expect (isThreeOfKind([1, 2, 3, 4, 4])).toBe(false)
  expect (isThreeOfKind([1, 3, 3, 5, 5])).toBe(false)
})

test ('Get isFourOfKind', () => {
  expect (isFourOfKind([1, 1, 1, 1, 5])).toBe(true)
  expect (isFourOfKind([1, 1, 1, 1, 1])).toBe(true)
  expect (isFourOfKind([2, 2, 1, 2, 2])).toBe(true)
  expect (isFourOfKind([2, 1, 1, 2, 3])).toBe(false)
  expect (isFourOfKind([2, 1, 1, 1, 3])).toBe(false)
  expect (isFourOfKind([1, 2, 3, 4, 5])).toBe(false)
})

test ('Get isFullHouse', () => {
  expect (isFullHouse([1, 1, 1, 4, 4])).toBe(true)
  expect (isFullHouse([1, 4, 4, 4, 1])).toBe(true)
  expect (isFullHouse([3, 4, 3, 4, 3])).toBe(true)
  expect (isFullHouse([3, 4, 5, 4, 3])).toBe(false)
  expect (isFullHouse([1, 2, 3, 4, 4])).toBe(false)
  expect (isFullHouse([1, 2, 4, 4, 4])).toBe(false)
  expect (isFullHouse([1, 2, 4, 5, 6])).toBe(false)
})

test ('Get isSmallStraight', () => {
  expect (isSmallStraight([1, 2, 3, 4, 6])).toBe(true)
  expect (isSmallStraight([1, 2, 3, 4, 4])).toBe(true)
  expect (isSmallStraight([2, 3, 4, 5, 5])).toBe(true)
  expect (isSmallStraight([1, 3, 4, 5, 5])).toBe(false)
  expect (isSmallStraight([1, 2, 3, 6, 6])).toBe(false)
  expect (isSmallStraight([1, 2, 4, 5, 6])).toBe(false)
})

test ('Get isLargeStraight', () => {
  expect (isLargeStraight([1, 2, 3, 4, 5])).toBe(true)
  expect (isLargeStraight([2, 3, 4, 5, 6])).toBe(true)
  expect (isLargeStraight([1, 3, 1, 1, 5])).toBe(false)
  expect (isLargeStraight([1, 1, 3, 3, 3])).toBe(false)
})

test ('Get isYahtzee', () => {
  expect (isYahtzee([3, 3, 3, 3, 3])).toBe(true)
  expect (isYahtzee([1, 1, 1, 1, 1])).toBe(true)
  expect (isYahtzee([1, 1, 1, 1, 3])).toBe(false)
  expect (isYahtzee([1, 1, 3, 3, 3])).toBe(false)
})

test ('Get isChance', () => {
  expect (isChance([1, 1, 2, 4, 6])).toBe(true)
  expect (isChance([1, 1, 1, 3, 6])).toBe(true)
  expect (isChance([2, 2, 4, 4, 6])).toBe(true)
  expect (isChance([1, 3, 4, 5, 6])).toBe(false)
  expect (isChance([1, 2, 3, 5, 6])).toBe(false)
  expect (isChance([2, 3, 4, 5, 6])).toBe(false)
})
