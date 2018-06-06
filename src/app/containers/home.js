import React, { Component } from 'react'
import DiceRoller from '../components/diceRoller'
import ResultsTable from '../components/resultsTable'
import { getRandomNumberArray } from '../functions'

import i18n from '../../i18n'

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
        rolling: !rolling,
        diceNumbers: getRandomNumberArray()
        // diceNumbers: [5, 5, 4, 4, 5]
        // diceNumbers: [5, 6, 3, 4, 1]
      })
    }

    const { diceNumbers, rolling } = this.state
    return (
      <div className='container'>
        <DiceRoller diceNumbers={diceNumbers} rolling={rolling} />
        <div className='d-flex flex-column align-items-center justify-content-center m-3'>
          <button className='btn' onClick={() => onPressRoll()}>
            {rolling ? i18n.t('rollingButtonLabel') : i18n.t('rollButtonLabel')}
          </button>
          {rolling && (
            <span style={{margin: '2px', color: 'purple'}} >
              {i18n.t('stopLabel')}
            </span>
          )}
        </div>
        {!rolling && (
          <ResultsTable diceNumbers={diceNumbers} />
        )}
      </div>
    )
  }
}

export default Home
