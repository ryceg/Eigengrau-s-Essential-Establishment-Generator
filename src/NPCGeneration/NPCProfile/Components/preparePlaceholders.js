/** Currently doesn't work properly. */
setup.preparePlaceholders = () => {
  $(document).one(':dialogopened', function (ev) {
    const weight = State.variables.npcs[State.variables.currentPassage.key].weight
    const height = State.variables.npcs[State.variables.currentPassage.key].height
    $('textbox-npcscurrentpassagekey-weight').attr('placeholder', weight)
    $('textbox-npcscurrentpassagekey-height').attr('placeholder', height)
  })
}
