
import './twine/globals'
import './twine/extensions'
import './twine/scripting'

const requireAll = (requires) => requires.keys().map(requires)

requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.js$/))
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.css$/))
requireAll(require.context('../EssentialEstablishmentGenerator/', true, /\.tw(ee)?$/))
