// by Cyrus Ferheir
// https://github.com/cyrusfirheir/cycy-wrote-custom-macros/tree/master/live-update

(function () {
  'use strict'

  $(document).on(':liveupdate', function () {
    $('.macro-live').trigger(':liveupdateinternal')
  })

  Macro.add(['update', 'upd'], {
    handler: function handler () {
      $(document).trigger(':liveupdate')
    }
  })

  Macro.add(['live', 'l', 'lh'], {
    skipArgs: true,
    handler: function handler () {
      if (this.args.full.length === 0) {
        return this.error('no expression specified')
      }
      try {
        const statement = this.args.full
        const result = toStringOrDefault(Scripting.evalJavaScript(statement), null)
        if (result !== null) {
          const lh = this.name === 'lh'
          const $el = $('<span></span>').addClass('macro-live').wiki(lh ? Util.escape(result) : result).appendTo(this.output)
          $el.on(':liveupdateinternal', function (ev) {
            const out = toStringOrDefault(Scripting.evalJavaScript(statement), null)
            $el.empty().wiki(lh ? Util.escape(out) : out)
          })
        }
      } catch (ex) {
        return this.error(`bad evaluation: ${_typeof(ex) === 'object' ? ex.message : ex}`)
      }
    }
  })

  Macro.add(['liveblock', 'lb'], {
    tags: null,
    handler: function handler () {
      try {
        const content = this.payload[0].contents.trim()
        if (content) {
          const $el = $('<span></span>').addClass('macro-live macro-live-block').wiki(content).appendTo(this.output)
          $el.on(':liveupdateinternal', function (ev) {
            $el.empty().wiki(content)
          })
        }
      } catch (ex) {
        return this.error(`bad evaluation: ${_typeof(ex) === 'object' ? ex.message : ex}`)
      }
    }
  })
})()
