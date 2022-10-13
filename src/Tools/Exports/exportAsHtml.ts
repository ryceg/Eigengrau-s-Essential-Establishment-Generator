export const exportAsHtml = function (passageName: string, currentPassage?: any) {
  if (currentPassage) State.variables.currentPassage = currentPassage
  State.temporary.isTextOutput = true
  const raw = Story.get(passageName).processText().trim()
  let $offshore = $('<div />')
  $offshore.wiki(raw)
  $offshore = expandSummaries($offshore)
  $offshore = removeElement($offshore, '.interactive-only')
  $offshore = autoclicker($offshore)
  $offshore = linkreplaceReplace($offshore)
  $offshore = linkappendReplace($offshore)
  $offshore = clickAndRemoveLink($offshore)
  $offshore = removeElement($offshore, 'button')
  $offshore = removeElement($offshore, 'select')
  $offshore = removeElement($offshore, '.illustration')
  $offshore = removeElement($offshore, '.illustration-buffer')
  removeProperty($offshore, 'tabindex')
  removeProperty($offshore, 'aria-expanded')
  $offshore.find('.macro-link').removeClass('macro-link')
  $offshore = removeElement($offshore, '.paper')
  $offshore = removeElement($offshore, '.error-view')
  $offshore = removeElement($offshore, '.macro-timed')
  $offshore = removeElement($offshore, '.temporarily-removed')
  // interactive-only gets scrubbed twice because of hidden links.
  $offshore = removeElement($offshore, '.interactive-only')
  swapElement($offshore, 'data-tippy-content', 'title')
  if (State.temporary.exportType !== 'Foundry') addElementBasedOnOtherProperty($offshore, 'data-id', 'a', 'href')

  // if you need to escape the characters, you can use ${Util.escape($offshore.html())}
  return $offshore.html().trim()
}

const expandSummaries = function ($offshore: JQuery<HTMLElement>) {
  $offshore.find('details summary').trigger('click')
  $('details').attr('open', 'true')
  return $offshore
}

const swapElement = function ($offshore: JQuery<HTMLElement>, element: string, newElement: string) {
  $offshore.find(`[${element}]`).each(function (_, el) {
    const $el = $(el)
    $el
      .attr(newElement, $el.attr(element) as string)
      .removeAttr(element)
  })
}

const addElementBasedOnOtherProperty = function ($offshore: JQuery<HTMLElement>, finder: string, target: string, element: string) {
  $offshore.find(target).each(function (_, el) {
    const $el = $(el)
    $el
      .attr(element, `#${this.getAttribute(finder)}`)
  })
}

const removeElement = function ($offshore: JQuery<HTMLElement>, element: string) {
  $offshore.find(element)
    .remove()
  return $offshore
}

const removeProperty = function ($offshore: JQuery<HTMLElement>, property: string) {
  $offshore.find(`[${property}]`).each(function (_, el) {
    const $el = $(el)
    $el
      .removeAttr(property)
  })
}

const autoclicker = function ($offshore: JQuery<HTMLElement>) {
  $offshore.find('.autoclick').trigger('click').unwrap()
  return $offshore
}

const clickAndRemoveLink = ($offshore: JQuery<HTMLElement>) => {
  const link = $offshore.find('.click-and-remove-link').find('a').trigger('click')
  const bold = `<b>${link.text().trim()}</b>`
  link.replaceWith(bold) // lgtm [js/xss-through-dom]
  return $offshore
}

const linkreplaceReplace = ($offshore: JQuery<HTMLElement>) => {
  $offshore.find('.macro-linkreplace').trigger('click')
  $offshore.find('.macro-linkreplace-insert').children().unwrap()
  return $offshore
}

const linkappendReplace = ($offshore: JQuery<HTMLElement>) => {
  $offshore.find('.macro-linkappend').trigger('click').children().unwrap()
  $offshore.find('.macro-linkappend-insert').children().unwrap()
  $offshore.find('.macro-linkappend-in').children().unwrap()
  return $offshore
}
