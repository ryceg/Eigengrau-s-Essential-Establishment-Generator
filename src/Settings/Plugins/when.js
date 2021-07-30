Macro.add('when', {
  skipArgs: true,
  isAsync: true,
  tags: ['otherwise'],
  /**
 * @param {Node} target
 * @param {String} content
 */
  _drawContent (target, content) {
    if (content) {
      const result = document.createDocumentFragment()
      jQuery(result).wiki(content)
      if (result.hasChildNodes()) {
        target.parentNode.replaceChild(result, target)
      }
    }
  },
  handler () {
    if (this.args.full.length === 0) {
      return this.error('no promise expression specified')
    }
    if (this.payload.length > 2) {
      return this.error('only one <<otherwise>> tag is allowed')
    }
    try {
      /** @type {string} */
      const content = this.payload[0].contents
      /** @type {string} */
      const errorContent = this.payload.length > 1 ? this.payload[1].contents : undefined
      /** @type {string} */
      const errorVar = this.payload.length > 1 ? this.payload[1].args.raw : undefined
      /** @type {Node} */
      const target = document.createElement('when')
      this.output.appendChild(target)
      /** @type {(parent:Node, sibling?:ChildNode, content?:string) => void} */
      const _drawContent = this.self._drawContent
      Promise.resolve(Scripting.evalJavaScript(this.args.full)).then(function () {
        _drawContent(target, content)
      }, function (error) {
        if (errorVar) {
          State.setVar(errorVar, error)
        }
        _drawContent(target, errorContent)
      })
    } catch (ex) {
      return this.error(`bad evaluation: ${typeof ex === 'object' ? ex.message : ex}`)
    }
  }
})
