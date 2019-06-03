import 'react-hot-loader'

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

// eslint-disable-next-line import/first
import './css/reset.css'
// eslint-disable-next-line import/first
import './css/fonts.css'
// eslint-disable-next-line import/first
import './index.css'
