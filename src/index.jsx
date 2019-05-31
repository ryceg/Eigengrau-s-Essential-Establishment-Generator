import 'react-hot-loader'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './twine/globals'
import './twine/extensions'
import './twine/scripting'

const requireAll = (requires) => requires.keys().map(requires)

// @ts-ignore
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.js$/))
// @ts-ignore
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.css$/))
// @ts-ignore
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.tw(ee)?$/))

ReactDOM.render(<App>Hello!</App>, document.getElementById('app'))
