import React from 'react'
import { hot } from 'react-hot-loader/root'

import Navigation from './components/Navigation'
import Content from './components/Content'
import './App.css'

/**
 * @type {React.FC}
 */
const App = props => {
  return (
    <React.Fragment>
      <Navigation/>
      <Content />
    </React.Fragment>
  )
}

export default hot(App)
