import React from 'react'

/**
 * Creates a link which silently executes its contents when clicked,
 * optionally forwarding the player to another passage.
 *
 * @param {string} title
 * @param {Function} callback
 */
export const link = (title, callback) => () => {
  const [content, setContent] = React.useState(null)
  const handleClick = () => setContent(callback())

  return (
    <React.Fragment>
      <button onClick={handleClick}>{title}</button>
      {content}
    </React.Fragment>
  )
}

/**
 * Replaces the contents of the selected element(s)
 * with the provided content.
 *
 * Or alternatively, the result of the content callback.
 *
 * @param {string} selector
 * @param {Function|string} content
 */
export const replace = (selector, content) => {
  const element = document.querySelector(selector)

  if (element) {
    element.innerHTML = typeof content === 'function' ? content() : content
  } else {
    throw Error(`No element matched the selector ${selector}.`)
  }
}

export const linkReplace = (title, callback) => () => {
  const [content, setContent] = React.useState(null)
  const handleClick = () => setContent(callback())

  return content || <button onClick={handleClick}>{title}</button>
}
