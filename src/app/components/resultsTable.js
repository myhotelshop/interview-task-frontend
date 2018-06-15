import React from 'react'
import FaCheck from 'react-icons/lib/fa/check-circle'
import FaCross from 'react-icons/lib/fa/times-circle'
import { patterns, getTotalPoints } from '../functions'
import i18n from '../../i18n'

const ResultsTable = (props) => {
  const { diceNumbers } = props
  return (
    <div className='table-responsive'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>{i18n.t('pattern')}</th>
            <th scope='col'>{i18n.t('isMatch')}</th>
            <th scope='col'>{i18n.t('points')}</th>
          </tr>
        </thead>
        <tbody>
          {patterns.map((pattern, index) => (
            <tr key={index}>
              <td>{pattern.label}</td>
              <td>
                {pattern.isMatch(diceNumbers) ? (
                  <FaCheck
                    style={{ color: 'green', height: '20px', width: '20px' }}
                  />
                ) : (
                  <FaCross
                    style={{ color: 'red', height: '20px', width: '20px' }}
                  />
                )}
              </td>
              <td>{pattern.points(diceNumbers)}</td>
            </tr>
          ))}
          <tr>
            <td>
              <b>{i18n.t('total')}</b>
            </td>
            <td />
            <td>
              <b>{getTotalPoints(diceNumbers)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultsTable
