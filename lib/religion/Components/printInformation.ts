import { Information } from '@lib'

export const printInformation = (informations: Information[], preface?: Information) => {
  const output = $('<div />')
  const listStuff = []
  let listResult
  for (const info of informations) {
    info.opts = Object.assign({
      element: '<h4 />'
    }, info.opts)
    // if there's a title, description, but no displayAsList flag, it gets its own heading
    if (info.title && info.description && info.opts.displayAsList !== true) {
      $(info.opts.element as HTMLElement)
        .text(lib.toTitleCase(info.title))
        .appendTo(output)
      $(`<p>${info.description}</p>`)
        .appendTo(output)
    }
    // if there's a title and no description, push it to the list maker
    if (info.title && !info.description && info.opts.displayAsList !== false) {
      listStuff.push(info.title)
    }
    if (!info.title && info.description && info.opts.displayAsList !== true) {
      $(`<p>${info.description}</p>`)
        .appendTo(output)
    }
  }
  if (listStuff.length > 0) {
    listResult = lib.makeList(listStuff)
    output.prepend(`<p>${lib.toUpperFirst(listResult)}.</p>`)
  }
  return output.wrap('<div />').parent().html()
}
