import React from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'

// Here we can add router for paging between containers but we dont need that for this application
const App = () => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
)

export default App
