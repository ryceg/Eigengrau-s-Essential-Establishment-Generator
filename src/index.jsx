import React from 'react'
import ReactDOM from 'react-dom'
import App from './test'

import './twine/globals'
import './twine/extensions'
import './twine/scripting'

const requireAll = (requires) => requires.keys().map(requires)

requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.js$/))
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.css$/))
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.tw(ee)?$/))

ReactDOM.render(<App>Hello!</App>, document.getElementById('app'))
