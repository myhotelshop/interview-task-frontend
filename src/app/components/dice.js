import React, { Component } from 'react'
import { getRandomDiceNumber } from '../functions'

const rollingSpeed = 100

// This is a dumb component just renders the dice
export default class Dice extends Component {
  constructor (props) {
    super(props)
    this.diceNumbers = [1, 2, 3, 4, 5, 6]
    this.state = { roll: 1 }
  }

  componentDidMount () {
    this.intervalId = setInterval(() => this.roll(), rollingSpeed)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  roll () {
    this.setState({ roll: getRandomDiceNumber() })
  }

  render () {
    const { number, rolling } = this.props
    const { roll } = this.state
    return (
      <div className='col m-1'>
        <img
          src={require(`../../assets/dice/dice-${rolling ? roll : number}.png`)}
          className='dice-image'
          alt={`dice-${rolling ? roll : (number + 1)}`}
        />
      </div>
    )
  }
}
