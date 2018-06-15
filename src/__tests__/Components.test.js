import React from 'react'
import { shallow } from 'enzyme'

// Containers
import Dice from '../app/components/dice'
import DiceRoller from '../app/components/diceRoller'
import Footer from '../app/components/footer'
import Header from '../app/components/header'
import ResultsTable from '../app/components/resultsTable'

it ('Dice render without crashing', () => {
  shallow (<Dice number={3} rolling={false} />)
})

it ('DiceRolle render without crashing', () => {
  shallow (<DiceRoller diceNumbers={[1, 2, 3, 4, 5]} rolling={false} />)
})

it ('Footer render without crashing', () => {
  shallow (<Footer />)
})

it ('Header render without crashing', () => {
  shallow (<Header />)
})

it ('ResultsTable render without crashing', () => {
  shallow (<ResultsTable diceNumbers={[1, 2, 3, 4, 5]} />)
})
