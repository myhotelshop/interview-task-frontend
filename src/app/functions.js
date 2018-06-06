const sumAll = numbers => {
  let points = 0
  numbers.forEach(number => {
    points = points + number
  })
  return points
}

const isThreeOfKind = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5) return false
  if (isFullHouse(numbers)) return true
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers === 2
}

const threeOfKindPoints = numbers => {
  return isThreeOfKind(numbers) ? sumAll(numbers) : 0
}

const isFourOfKind = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5 || isFullHouse(numbers)) return false
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers === 3
}

const fourOfKindPoints = numbers => {
  return isFourOfKind(numbers) ? sumAll(numbers) : 0
}

const isFullHouse = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5) return false
  const isFirstTwoAreSame = sortedArray[0] === sortedArray[1]
  const isLastTwoAreSame = sortedArray[3] === sortedArray[4]
  const isFirstThreeAreSame = isFirstTwoAreSame && sortedArray[1] === sortedArray[2]
  const isLastThreeAreSame = isLastTwoAreSame && sortedArray[2] === sortedArray[3]
  if (isFirstThreeAreSame && isLastTwoAreSame && sortedArray[2] !== sortedArray[3]) {
    return true
  } else if (isFirstTwoAreSame && isLastThreeAreSame && sortedArray[1] !== sortedArray[2]) {
    return true
  } else {
    return false
  }
}

const fullHousePoints = numbers => {
  return isFullHouse(numbers) ? 25 : 0
}

const isSmallStraight = numbers => {
  // 1-2-3-4
  // 2-3-4-5
  // 3-4-5-6
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5) return false
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers === 3
}

const smallStraightPoints = numbers => {
  return isSmallStraight(numbers) ? 30 : 0
}

const isLargeStraight = numbers => {
  // 1-2-3-4-5
  // 2-3-4-5-6
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5) return false
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers === 4
}

const largeStraightPoints = numbers => {
  return isLargeStraight(numbers) ? 40 : 0
}

const isYahtzee = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  if (sortedArray.length > 5) {
    return false
  }
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 5
}

const yahtzeePoints = numbers => {
  return isYahtzee(numbers) ? 50 : 0
}

const isChange = numbers => {
  return isThreeOfKind(numbers) ||
  isFourOfKind(numbers) ||
  isFullHouse(numbers) ||
  isSmallStraight(numbers) ||
  isLargeStraight(numbers) ||
  isYahtzee(numbers)
}

const chancePoints = numbers => {
  return isChange(numbers) ? sumAll(numbers) : 0
}

//
// ** ALL GLOBAL FUNCTIONS THAT ARE BEING USED IN THE APP ** //
//
export const getRandomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1
}

export const getRandomNumberArray = () => {
  return [
    getRandomDiceNumber(),
    getRandomDiceNumber(),
    getRandomDiceNumber(),
    getRandomDiceNumber(),
    getRandomDiceNumber()
  ]
}

export const getTotalPoints = numbers => {
  return (
    threeOfKindPoints(numbers) +
    fourOfKindPoints(numbers) +
    fullHousePoints(numbers) +
    smallStraightPoints(numbers) +
    largeStraightPoints(numbers) +
    yahtzeePoints(numbers) +
    chancePoints(numbers)
  )
}

export const patterns = [
  {
    label: 'Three Of A Kind',
    isMatch: isThreeOfKind,
    points: threeOfKindPoints
  },
  {
    label: 'Four Of A Kind',
    isMatch: isFourOfKind,
    points: fourOfKindPoints
  },
  {
    label: 'Full House',
    isMatch: isFullHouse,
    points: fullHousePoints
  },
  {
    label: 'Small Straight',
    isMatch: isSmallStraight,
    points: smallStraightPoints
  },
  {
    label: 'Large Straight',
    isMatch: isLargeStraight,
    points: largeStraightPoints
  },
  {
    label: 'Yahtzee',
    isMatch: isYahtzee,
    points: yahtzeePoints
  },
  {
    label: 'Chance',
    isMatch: isChange,
    points: chancePoints
  }
]
