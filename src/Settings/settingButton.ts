interface SettingButtonArguments {
  target: string
  name: string
  description: string
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
