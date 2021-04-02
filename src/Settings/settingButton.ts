interface SettingButtonArguments {
  /**
   * The element that this will be placed *above*.
   * Prepends '#setting-body-' to it.
   * @example target: 'darkMode' = '#setting-body-darkMode'
   * */
  target: string
  name: string
  /** What the text next to the button should say. */
  description: string
  /** What you'd like the text on the button to say. */
  buttonDescription: string
}

export const addSettingButton = (args: SettingButtonArguments, fn: () => unknown) => {
  const previousEntry = $(`#setting-body-${args.target}`)

  const baseDiv = $(`<div id="setting-body-${args.name}"/>`)
    .insertBefore(previousEntry)

  const containerDiv = $('<div  />')
    .append(`<label id="setting-label-${args.name}" for="#setting-body-${args.name}">${args.description}</label>`)
    .appendTo(baseDiv)

  const buttonWrap = $('<div />')
    .appendTo(containerDiv)

  $(`<button class="link-internal macro-button" id="setting-control-nobutton-${args.name}" />`)
    .append(args.buttonDescription)
    .ariaClick(fn)
    .appendTo(buttonWrap)
}
