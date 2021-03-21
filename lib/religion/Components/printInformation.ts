import { Information } from '@lib'

export const printInformation = (informations: Information[], preface?: Information) => {
  const output = $('<span />')
  const listStuff = []
  let listResult
  for (const info of informations) {
    info.opts = Object.assign({
      element: 'h4'
    }, info.opts)
    // if there's a title, description, but no displayAsList flag, it gets its own heading
    if (info.title && info.description && info.opts.displayAsList !== true) {
      info.opts.displayAsList = false
      output.append(info.opts.element as HTMLElement)
        .text(info.title)
        .append(`<p>${info.description}</p>`)
    }
    // if there's a title and no description, push it to the list maker
    if (info.title && !info.description && info.opts.displayAsList !== false) {
      listStuff.push(info.title)
    }
  }
  if (listStuff.length > 0) {
    listResult = lib.makeList(listStuff)
    output.prepend(listResult)
  }
  console.log('printInformation')
  console.log(output.get(0).innerHTML)
  return output.get(0).innerHTML
}
