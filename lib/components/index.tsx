import React, { useState } from 'react'
import { hydrate } from 'react-dom'
import { renderToString } from 'react-dom/server'

const getDomID = ((index) => () => `react-node-${++index}`)(0)

export function render<P> (Component: React.ComponentType<P>, props: P) {
  const id = getDomID()
  setTimeout(() => hydrate(<Component {...props} />, document.getElementById(id)), 10)
  return renderToString(<div id={id} />)
}

export function Component () {
  const [state, setState] = useState(0)

  const increment = () => setState((state) => state + 1)

  return (
    <div className="COMPONENT">
      <button onClick={increment}>Button</button>
      <span>Click {state}</span>
    </div>
  )
}
