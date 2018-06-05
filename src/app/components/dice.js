import React, { Component } from 'react'

// const rollingSpeed = 100000 //ms

// This is a dumb component just renders the dice
export default class Dice extends Component {
  constructor (props) {
    super(props)
    this.diceNumbers = [1, 2, 3, 4, 5, 6]
    this.state = { roll: 1 }
  }

  componentDidMount () {
    // var intervalId = setInterval(this.tick, rollingSpeed)
    // store intervalId in the state so it can be accessed later:
    // this.setState({intervalId: intervalId})
  }

  componentWillUnmount () {
    // use intervalId from the state to clear the interval
    // clearInterval(this.state.intervalId)
  }

  tick () {
    // console.log("Tick")
    // this.setState({roll: this.state.roll =+ 1})
    // if(this.state.roll >= 6) {
    //   this.setState({roll: 1})
    // }
  }

  render () {
    const { number } = this.props

    // If dice is rolling returns this
    // if(rolling) {
    //   return (
    //     this.diceNumbers.map(number => {
    //       <div className='dice-container'>
    //         <img src={require(`./assets/dice/dice-${number}.png`)} className="dice-image" alt={`dice-${number}`} />
    //       </div>
    //     })
    //   )
    // }

    // If dice is not returning, shows the dice number
    return (
      <div className='col m-1'>
        <img
          src={require(`../../assets/dice/dice-${number}.png`)}
          className='dice-image'
          alt={`dice-${number + 1}`}
        />
      </div>
    )
  }
}
