import React, { useState } from 'react'
import { render } from 'react-dom'

const getDomID = ((index) => () => `react-node-${++index}`)(0)

export function renderReact<P> (Component: React.ComponentType<P>, props: P) {
  const id = getDomID()
  setTimeout(() => render(<Component {...props} />, document.getElementById(id)), 10)
  return `<div id=${id}></div>`
}

export function Component () {
  const [state, setState] = useState(0)

  const increment = () => setState((state) => state + 1)

  return (
    <div style={{ background: 'pink' }}>
      <button onClick={increment}>Button</button>
      <span>Click {state}</span>
    </div>
  )
}

export * from './AdventureOutput'
