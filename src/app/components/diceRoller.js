import React from 'react'
import Dice from './dice'

const DiceRoller = (props) => {
  const { diceNumbers, rolling } = props
  return (
    <div className='row m-3'>
      {diceNumbers.map((number, index) => (
        <Dice key={index} number={number} rolling={rolling} />
      ))}
    </div>
  )
}

export default DiceRoller
