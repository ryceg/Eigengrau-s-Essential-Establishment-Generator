Macro.add('profile', {
  handler () {
    if (!this.args[0]) return this.error('No arguments provided for profile.')
    const obj = this.args[0]
    const readout = this.args[1] || obj.name
    const tippyOpts = this.args[2] || { theme: 'descriptive' }
    const id = Util.slugify(obj.key || obj.name || obj.description || obj.wordNoun || 'profile')
    const tip = $('<span />').addClass(id)
    $(`<a class="link-internal macro-link">${readout}</a>`)
      .ariaClick(() => {
        State.variables.currentPassage = obj
        setup.history(obj, obj.passageName, readout)

        if (settings.showSliders && obj.initPassage) {
          Engine.play(obj.initPassage)
        } else {
          Engine.play(obj.passageName)
        }
      })
      .appendTo(tip)
    /* do any other title addition and stuff here */
    setup.makeTippyTitle($(tip)[0], obj)
    tippy(tip.get(0), tippyOpts)
    $(this.output).append(tip)
  }
})
