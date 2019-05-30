import React from 'react'
import { hot } from 'react-hot-loader/root'

/**
 * @type {React.FC}
 */
const App = props => {
  return <h1 className="tip" title="BAH BAH BAH">{props.children}</h1>
}

export default hot(App)
