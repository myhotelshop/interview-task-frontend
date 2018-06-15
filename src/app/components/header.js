import React from 'react'
import i18n from '../../i18n'

// Dumb component just renders `Header`
const Header = () => (
  <header className='header'>
    <h1>{i18n.t('appName')}</h1>
  </header>
)

export default Header
