import React, { Component } from 'react'
import FaCheck from 'react-icons/lib/fa/check-circle'
import FaCross from 'react-icons/lib/fa/times-circle'

import { patterns } from '../functions'

export default class ResultsTable extends Component {
  render() {
    const { diceNumbers } = this.props
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pattern</th>
              <th scope="col">Is Match</th>
            </tr>
          </thead>
          <tbody>
            {patterns.map((pattern, index) => (
              <tr key={index}>
                <td>{pattern.label}</td>
                <td>
                  {pattern.isMatch(diceNumbers) ? (
                    <FaCheck style={{ color: 'green', height: '20px', width: '20px'}} />
                  ) : (
                    <FaCross style={{ color: 'red', height: '20px', width: '20px' }} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

