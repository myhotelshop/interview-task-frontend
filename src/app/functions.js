const sumAll = numbers => {
  let points = 0
  numbers.forEach(number => {
    points = points + number
  })
  return points
}

const isThreeOfKind = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 3
}

const threeOfKindPoints = numbers => {
  return isThreeOfKind(numbers) ? sumAll(numbers) : 0
}

const isFourOfKind = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 4
}

const fourOfKindPoints = numbers => {
  return isFourOfKind(numbers) ? sumAll(numbers) : 0
}

// *** NOT DONE *** //
const isFullHouse = numbers => {
  return true
}

const fullHousePoints = numbers => {
  return isFullHouse(numbers) ? 25 : 0
}

const isSmallStraight = numbers => {
  // 1-2-3-4
  // 2-3-4-5
  // 3-4-5-6
  const sortedArray = numbers.sort((a, b) => a > b)
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers + 1 >= 4
}

const smallStraightPoints = numbers => {
  return isSmallStraight(numbers) ? 30 : 0
}

const isLargeStraight = numbers => {
  // 1-2-3-4-5
  // 2-3-4-5-6
  const sortedArray = numbers.sort((a, b) => a > b)
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers + 1 >= 5
}

const largeStraightPoints = numbers => {
  return isLargeStraight(numbers) ? 40 : 0
}

const isYahtzee = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })

  return sameNumbers + 1 >= 6
}

const yahtzeePoints = numbers => {
  return isYahtzee(numbers) ? 50 : 0
}

const isChange = numbers => {
  const sortedArray = numbers.sort((a, b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 2
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
    label: 'Full House (Unfinished)',
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
