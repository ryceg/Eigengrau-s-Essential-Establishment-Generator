import { Information } from '@lib'

export const printInformation = (informations: Information[], preface?: string) => {
  const output = $('')
  const listStuff = []
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
  console.log('printInformation')
  console.log(output.get(0))
  return output.get(0)
}
