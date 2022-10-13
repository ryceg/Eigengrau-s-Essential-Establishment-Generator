import { Information } from '../religion'

/**
 * Types:
 * * Title & Description: easy as pie.
 * * Just the description: for new paragraphs.
 * * Just the title: NO
 * * Just the children array, which is full: list
 * * Title, description, and children array of just titles:
 */
export const printInformation = (information: Information, output = $('<div />')) => {
  information.opts = Object.assign({
    element: '<h3 />'
  }, information.opts)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const elementLevel = parseInt(information.opts.element[2]) + 1

  if (information.title && !information.opts.suppressTitle) {
    if (information?.children?.length === 0 && !information.description) {
      return
    } else {
      $(information.opts.element)
        .text(lib.toTitleCase(information.title))
        .appendTo(output)
    }
  }

  if (information.description) {
    $(`<p>${information.description}</p>`)
      .appendTo(output)
  }

  // if children is defined (i.e. it's a container)
  if (information.children) {
    // if the children array is empty, the entire thing is likely not being used
    if (information.children.length === 0) {

      // if the children array is not empty, use it
    } else {
      const list: string[] = []
      for (const info of information.children) {
        if (typeof info === 'string') {
          list.push(info)
        } else {
          printInformation(Object.assign({ opts: { element: `<h${elementLevel} />` } }, info), output)
        }
      }
      if (list.length > 0) {
        output.prepend(`<p>${lib.toUpperFirst(lib.makeList(list))}.</p>`)
      }
    }
  }
  return output.wrap('<div />').parent().html()
}
