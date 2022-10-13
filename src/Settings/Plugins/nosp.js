Macro.add('nosp', {
  skipArgs: true,
  tags: null,
  handler () {
    // eslint-disable-next-line no-unused-vars
    const test = new Wikifier(this.output, this.payload[0].contents.replace(/^\n+|\n+$/g, '').replace(/\n+/g, ''))
  }
})
