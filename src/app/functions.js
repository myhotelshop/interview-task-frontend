import i18n from '../i18n'

// Global summer function
const sumAll = numbers => {
  let points = 0
  numbers.forEach(number => {
    points = points + number
  })
  return points
}

// Global sorter function
const getSortedArray = numbers => {
  return numbers.sort((a, b) => a - b)
}

// Returns a uniq array of found same numbers
const getSameNumberArray = sortedArray => {
  const foundSameNumbers = []
  sortedArray.reduce((a, b) => {
    if (a === b) !foundSameNumbers.includes(b) && foundSameNumbers.push(b)
    return b
  })

  return foundSameNumbers
}

// Global consecutive number counter
const getConsecutiveNumberCount = numbers => {
  const sortedArray = getSortedArray(numbers)
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if (a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })
  return consecutiveNumbers + 1
}

export const isThreeOfKind = numbers => {
  let result = false
  getSameNumberArray(numbers).forEach(number => {
    if (numbers.filter(e => e === number).length >= 3) result = true
  })
  return result
}

const threeOfKindPoints = numbers => {
  return isThreeOfKind(numbers) ? sumAll(numbers) : 0
}

export const isFourOfKind = numbers => {
  let result = false
  getSameNumberArray(numbers).forEach(number => {
    if (numbers.filter(e => e === number).length >= 4) result = true
  })
  return result
}

const fourOfKindPoints = numbers => {
  return isFourOfKind(numbers) ? sumAll(numbers) : 0
}

export const isFullHouse = numbers => {
  const sortedArray = getSortedArray(numbers)
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

export const isSmallStraight = numbers => {
  // 1-2-3-4 or 2-3-4-5 or 3-4-5-6
  return getConsecutiveNumberCount(numbers) >= 4
}

const smallStraightPoints = numbers => {
  return isSmallStraight(numbers) ? 30 : 0
}

export const isLargeStraight = numbers => {
  // 1-2-3-4-5 or 2-3-4-5-6
  return getConsecutiveNumberCount(numbers) >= 5
}

const largeStraightPoints = numbers => {
  return isLargeStraight(numbers) ? 40 : 0
}

export const isYahtzee = numbers => {
  // 1-1-1-1-1 or all the numbers are same
  let result = false
  getSameNumberArray(numbers).forEach(number => {
    if (numbers.filter(e => e === number).length >= 5) result = true
  })
  return result
}

const yahtzeePoints = numbers => {
  return isYahtzee(numbers) ? 50 : 0
}

export const isChance = numbers => {
  let result = false
  getSameNumberArray(numbers).forEach(number => {
    if (numbers.filter(e => e === number).length >= 1) result = true
  })
  return result
}

const chancePoints = numbers => {
  return isChance(numbers) ? sumAll(numbers) : 0
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
  const pointsArray = patterns.map(pattern => pattern.points(numbers))
  return pointsArray.reduce((a, b) => a + b)
}

export const patterns = [
  {
    label: i18n.t('threeOfKind'),
    isMatch: isThreeOfKind,
    points: threeOfKindPoints
  },
  {
    label: i18n.t('fourOfKind'),
    isMatch: isFourOfKind,
    points: fourOfKindPoints
  },
  {
    label: i18n.t('fullHouse'),
    isMatch: isFullHouse,
    points: fullHousePoints
  },
  {
    label: i18n.t('smallStraight'),
    isMatch: isSmallStraight,
    points: smallStraightPoints
  },
  {
    label: i18n.t('largeStraight'),
    isMatch: isLargeStraight,
    points: largeStraightPoints
  },
  {
    label: i18n.t('yahtzee'),
    isMatch: isYahtzee,
    points: yahtzeePoints
  },
  {
    label: i18n.t('chance'),
    isMatch: isChance,
    points: chancePoints
  }
]
