
/**
 * Converts twine syntax to ...something else...
 * @param {string} syntax
 */
function twineLoader (syntax) {
  const [, passageTitle, misc] = syntax.match(/::\s+([^\s]+)([\s\S]*)/)

  const splitByTwineTags = misc.match(/<<\/?(".*?"|.*?)\s?>>/g)

  return stringify`
    window.passages[${passageTitle}] = {
      title: ${passageTitle},
      split: ${splitByTwineTags},
      body: ${misc}
    }
  `
}

module.exports = twineLoader

/* ################# */
/* Utility Functions */
/* ################# */

/**
 * Converts all values to strings.
 * @param {string[]} strings
 * @param  {any[]} values
 */
function stringify (strings, ...values) {
  let result = ''
  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + JSON.stringify(values[i])
  }
  return result
}
