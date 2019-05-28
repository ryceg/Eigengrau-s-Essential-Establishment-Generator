
/**
 * Converts twine syntax to ...something else...
 * @param {string} syntax
 */
function twineLoader (syntax) {
  const [, passageTitle, misc] = syntax.match(/::\s([^\s]+)([\s\S]*)/)

  return `window.passages.${passageTitle} = ${JSON.stringify(misc)}`
}

module.exports = twineLoader
