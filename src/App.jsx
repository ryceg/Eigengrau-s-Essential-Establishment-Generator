import React from 'react'
import { hot } from 'react-hot-loader/root'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

/**
 * @type {React.FC}
 */
const App = () => {
  return (
    <React.Fragment>
      <Sidebar/>
      <Content />
    </React.Fragment>
  )
}

export default hot(App)
