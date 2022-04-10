// @ts-check
// Line to convert
const LINE = 62

/**
 * Converts an object to an array of objects.
 *
 * @param {import("jscodeshift").FileInfo} fileInfo
 * @param {import("jscodeshift").API} api
 */
module.exports = (fileInfo, api) => {
  const jsc = api.jscodeshift
  const doc = jsc(fileInfo.source)

  doc.find(jsc.ObjectExpression, obj => obj.loc && obj.loc.start.line === LINE).replaceWith(({ node }) => {
    return jsc.arrayExpression(node.properties.map(property => {
      if (property.type !== 'Property') {
        throw new Error('Not a property')
      }
      if (property.value.type !== 'FunctionExpression' && property.value.type !== 'ArrowFunctionExpression') {
        throw new Error('Not a function expression.')
      }
      if (property.key.type !== 'Literal') {
        throw new Error('Key not a literal')
      }

      const properties = []
      properties.push(jsc.property('init', jsc.identifier('summary'), jsc.literal(property.key.value)))
      properties.push(jsc.property('init', jsc.identifier('function'), property.value))

      // Remove function if it's an arrow function with same same return value as the key.
      if (property.value.type === 'ArrowFunctionExpression') {
        if (property.value.body.type === 'Literal') {
          if (property.value.body.value === property.key.value) {
            properties.splice(1, 1)
          }
        }
      }

      return jsc.objectExpression(properties)
    }))
  })
  return doc.toSource({
    quote: 'single'
  })
}
