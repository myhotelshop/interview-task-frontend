import React, { Component } from 'react'
import DiceRoller from '../components/diceRoller'
import ResultsTable from '../components/resultsTable'
import { getRandomNumberArray } from '../functions'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      rolling: false,
      diceNumbers: [1, 2, 3, 4, 5]
    }
  }

  render () {
    const onPressRoll = () => {
      this.setState({
        diceNumbers: getRandomNumberArray()
        // diceNumbers: [5, 5, 4, 4, 5]
        // diceNumbers: [5, 6, 3, 4, 1]
      })
    }

    const { diceNumbers } = this.state
    return (
      <div className='container'>
        <DiceRoller diceNumbers={diceNumbers} />
        <ResultsTable diceNumbers={diceNumbers} />
        <div className='d-flex justify-content-center m-3'>
          <button className='btn' onClick={() => onPressRoll()}>
            ROLL
          </button>
        </div>
      </div>
    )
  }
}

export default Home
