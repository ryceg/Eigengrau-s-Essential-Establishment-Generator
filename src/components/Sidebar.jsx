import React from 'react'
import patreon from '../../EssentialEstablishmentGenerator/Resources/patreonbutton.png'
import kofi from '../../EssentialEstablishmentGenerator/Resources/kofi.png'

/**
 * The navigation menu.
 * @type {React.FC}
 */
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="title" role="banner">
        <h1>Eigengrau's Generator</h1>
        <section className="author">
          <span>Created by /u/rcgy</span>
          <a href="https://www.patreon.com/bePatron?u=399997">
            <img src={patreon} alt="patreon button" />
          </a>
          <a href="https://ko-fi.com/Q5Q8O5AA">
            <img src={kofi} alt="ko-fi button" />
          </a>
        </section>
        <nav className="menu" role="navigation">
          <ul className="menu-story" />
          <ul className="menu-core" />
        </nav>
      </header>
    </aside>
  )
}

export default Sidebar
