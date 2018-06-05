//
// ** ALL GLOBAL FUNCTIONS THAT ARE BEING USED IN THE APP ** //
//
export const getRandomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1
}

// DONE
const isThreeOfKind = (numbers) => {
  const sortedArray = numbers.sort((a,b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if(a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 3
}

// DONE
const isFourOfKind = (numbers) => {
  const sortedArray = numbers.sort((a,b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if(a === b) sameNumbers = sameNumbers + 1
    return b
  })
  return sameNumbers + 1 >= 4
}

// *** NOT DONE *** //
const isFullHouse = (numbers) => {
  return true
}

// DONE
const isSmallStraight = (numbers) => {
  // 1-2-3-4
  // 2-3-4-5
  // 3-4-5-6
  const sortedArray = numbers.sort((a,b) => a > b)
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if(a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers + 1 >= 4
}

// DONE
const isLargeStraight = (numbers) => {
  // 1-2-3-4-5
  // 2-3-4-5-6
  const sortedArray = numbers.sort((a,b) => a > b)
  let consecutiveNumbers = 0
  sortedArray.reduce((a, b) => {
    if(a + 1 === b) consecutiveNumbers = consecutiveNumbers + 1
    return b
  })

  return consecutiveNumbers + 1 >= 5
}

// DONE
const isYahtzee = (numbers) => {
  const sortedArray = numbers.sort((a,b) => a > b)
  let sameNumbers = 0
  sortedArray.reduce((a, b) => {
    if(a  === b) sameNumbers = sameNumbers + 1
    return b
  })

  return sameNumbers + 1 >= 6
}

// *** NOT DONE *** //
const isChange = (numbers) => {
  return true
}

export const patterns = [
  {
    label: 'Three Of A Kind',
    isMatch: isThreeOfKind
  },
  {
    label: 'Four Of A Kind',
    isMatch: isFourOfKind
  },
  {
    label: 'Full House (Unfinished)',
    isMatch: isFullHouse
  },
  {
    label: 'Small Straight',
    isMatch: isSmallStraight
  },
  {
    label: 'Large Straight',
    isMatch: isLargeStraight
  },
  {
    label: 'Yahtzee',
    isMatch: isYahtzee
  },
  {
    label: 'Chance (Unfinished)',
    isMatch: isChange
  }
]

// const array = [1,2,3,1,1]

// console.log('Three Of A Kind', isThreeOfKind(array))
// console.log('Four Of A Kind', isFourOfKind(array))
// console.log('Full House', isFullHouse(array))
// console.log('Small Straight', isSmallStraight(array))
// console.log('Large Straight', isLargeStraight(array))
// console.log('Yahtzee', isYahtzee(array))
// console.log('Chance', isChange(array))
