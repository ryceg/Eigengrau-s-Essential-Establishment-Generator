import React from 'react'

/**
 * The navigation menu.
 * @type {React.FC}
 */
const Sidebar = ({ children }) => {
  return <aside className="sidebar">{children}</aside>
}

export default Sidebar
