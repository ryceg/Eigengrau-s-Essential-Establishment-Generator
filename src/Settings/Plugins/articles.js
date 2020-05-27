/* eslint-disable no-useless-escape */
(() => {
  'use strict'

  /**
   * @type {Map<string, { article: string, caseSensitive: boolean }>}
   */
  const _overrides = new Map()

  // lifted from: https://github.com/tandrewnichols/indefinite/blob/master/lib/irregular-words.js
  const _defaultIrregulars = [
    // e
    'eunuch', 'eucalyptus', 'eugenics', 'eulogy', 'euphemism', 'euphony', 'euphoria', 'eureka', 'european', 'euphemistic', 'euphonic', 'euphoric', 'euphemistically', 'euphonically', 'euphorically',
    // h
    'heir', 'heiress', 'herb', 'homage', 'honesty', 'honor', 'honour', 'hour', 'honest', 'honorous', 'honestly', 'hourly',
    // o
    'one', 'ouija', 'once',
    // u
    'ubiquitous', 'ugandan', 'ukrainian', 'unanimous', 'unicameral', 'unified', 'unique', 'unisex', 'universal', 'urinal', 'urological', 'useful', 'useless', 'usurious', 'usurped', 'utilitarian', 'utopic', 'ubiquitously', 'unanimously', 'unicamerally', 'uniquely', 'universally', 'urologically', 'usefully', 'uselessly', 'usuriously'
  ]

  const _validArticles = ['a', 'an']

  const _vowels = /[aeiou8]/i
  const _acronyms = /[A-Z]+$/
  const _irregularAcronyms = /[UFHLMNRSX]/
  const _punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g

  /**
   * @param {string} article
   */
  function _switch (article) {
    return article === 'a' ? 'an' : 'a'
  }

  /**
   * @param {string} word
   * @param {string} article
   */
  function _isAcronym (word, article) {
    if (_acronyms.test(word) && _irregularAcronyms.test(word.first())) {
      return _switch(article)
    }
    return false
  }

  /**
   * @param {string} word
   * @param {string} article
   */
  function _isDefaultIrregular (word, article) {
    if (_defaultIrregulars.includes(word.toLowerCase())) {
      return _switch(article)
    }
    return false
  }

  /**
   * @param {string} article
   * @param {string} word
   * @param {boolean} [caseSensitive]
   */
  function addOverride (article, word, caseSensitive) {
    if (State.length > 0) {
      // must be called in story JS or StoryInit, as the override map isn't stateful
      const message = 'cannot add article override -> needs to be run in StoryInit special passage or earlier'
      console.error(message)
      return message
    }
    // check args
    if (!word || typeof word !== 'string') {
      const message = 'cannot add article override -> invalid word'
      console.error(message)
      return message
    }
    if (article && typeof article === 'string') {
      // clean up article
      article = article.toLowerCase().trim()
    }
    if (!_validArticles.includes(article)) {
      const message = 'cannot add article override -> invalid article, must be "a" or "an"'
      console.error(message)
      return message
    }
    // clean up phrase
    word = word.trim()

    _overrides.set(caseSensitive ? word : word.toLowerCase(), {
      article,
      caseSensitive: !!caseSensitive
    })
  }

  /**
   * @param {string} word
   */
  function _checkOverrides (word) {
    word = word.trim()
    // check user-defined overrides
    const check = word.toLowerCase()
    if (_overrides.has(check) || _overrides.has(word)) {
      const override = _overrides.get(check) || _overrides.get(word)
      // check if we require an exact (case-sensitive) match
      if (override.caseSensitive && !_overrides.has(word)) {
        return null
      }
      // return the article
      return override.article
    }
    // return nothing, passing on to built-in article checks
    return null
  }

  /**
   * @param {string} word
   */
  function _checkVowels (word) {
    // select the article based on vowels
    const article = _vowels.test(word.first()) ? 'an' : 'a'

    // check for irregular words, then acronyms
    return _isDefaultIrregular(word, article) || _isAcronym(word, article) || article
  }

  /**
   * @param {string} word
   */
  function find (word) {
    if (!word || typeof word !== 'string') {
      return
    }
    let cleanedWord = word.trim().split(' ')[0].trim()
    cleanedWord = cleanedWord.replace(_punctuation, '')
    return _checkOverrides(cleanedWord) || _checkVowels(cleanedWord)
  }

  /**
   * @param {string} word
   * @param {boolean} [upper]
   */
  function article (word, upper) {
    if (!word || typeof word !== 'string') {
      return word // ? just throw back whatever we got
    }
    const article = find(word)
    // return article, capitalized if requested, appended to the original phrase
    return `${upper ? article.toUpperFirst() : article} ${word}`
  }

  setup.articles = {
    find,
    output: article,
    override: addOverride
  }

  Macro.add('setarticle', {
    handler () {
      const check = addOverride(this.args[0], this.args[1], this.args[2])
      if (check && typeof check === 'string') {
        this.error(check)
      }
    }
  })

  Macro.add(['a', 'an', 'A', 'An'], {
    handler () {
      const isUpper = this.name.first() === this.name.first().toUpperCase()
      this.output.append(article(String(this.args[0]), isUpper))
    }
  })
})()
