import React from 'react'
import { shallow } from 'enzyme'

import App from '../app'

// Containers
import Home from '../app/containers/home'

it ('App render without crashing', () => {
  shallow (<App />)
})

it ('Home container renders without crashing', () => {
  shallow (<Home />)
})
