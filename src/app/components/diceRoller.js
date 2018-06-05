import React, { Component } from 'react'

import Dice from './dice'

export default class DiceRoller extends Component {
  render () {
    const { diceNumbers } = this.props
    return (
      <div className='row m-3'>
        {diceNumbers.map((number, index) => (
          <Dice key={index} number={number} />
        ))}
      </div>
    )
  }
}
