/**
 * The details macro is used for delaying passage evaluation in a <details> element until it is clicked on.
 * This is important for computationally expensive things, such as functions to display all of the professions in a list.
 * Since it is designed for expensive computations, I assume that the expensive computations will be on a passage all of its own.
 * @example <<details sourcePassage [optional label]>>
 * */
Macro.add('details', {
  handler () {
    if (!this.args.length) this.error('Macro called without argument!')
    const content = Story.get(this.args[0]).processText()
    const label = this.args.length > 1 ? this.args[1] : 'Details' /* or any other default thingy you want */
    $('<details />')
      .attr('id', this.args[0])
      .append($('<summary />').wiki(label))
      .ariaClick({ one: true }, function () {
        $(this).wiki(content)
      })
      .appendTo(this.output)
  }
})
