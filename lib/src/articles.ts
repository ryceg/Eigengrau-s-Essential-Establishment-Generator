/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-useless-escape */
import { logger } from '../logger'
import { first, capitalizeFirstLetter } from './utils'

const _overrides = new Map<string, { article: string, caseSensitive: boolean }>()

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

function _switch (article: string) {
  return article === 'a' ? 'an' : 'a'
}

function _isAcronym (word: string, article: string) {
  if (_acronyms.test(word) && _irregularAcronyms.test(first(word))) {
    return _switch(article)
  }
  return false
}

function _isDefaultIrregular (word: string, article: string) {
  if (_defaultIrregulars.includes(word.toLowerCase())) {
    return _switch(article)
  }
  return false
}

/**
 * Must be called in story JS or StoryInit, as the override map isn't stateful.
 */
function addOverride (article: string, word: string, caseSensitive?: boolean) {
  // check args
  if (!word || typeof word !== 'string') {
    const message = 'cannot add article override -> invalid word'
    logger.error(message)
    return message
  }
  if (article && typeof article === 'string') {
    // clean up article
    article = article.toLowerCase().trim()
  }
  if (!_validArticles.includes(article)) {
    const message = 'cannot add article override -> invalid article, must be "a" or "an"'
    logger.error(message)
    return message
  }
  // clean up phrase
  word = word.trim()

  _overrides.set(caseSensitive ? word : word.toLowerCase(), {
    article,
    caseSensitive: !!caseSensitive
  })
}

function _checkOverrides (word: string) {
  word = word.trim()
  // check user-defined overrides
  const check = word.toLowerCase()
  if (_overrides.has(check) || _overrides.has(word)) {
    const override = _overrides.get(check) || _overrides.get(word)
    // check if we require an exact (case-sensitive) match
    if (override!.caseSensitive && !_overrides.has(word)) {
      return null
    }
    // return the article
    return override!.article
  }
  // return nothing, passing on to built-in article checks
  return null
}

function _checkVowels (word: string) {
  // select the article based on vowels
  const article = _vowels.test(first(word)) ? 'an' : 'a'

  // check for irregular words, then acronyms
  return _isDefaultIrregular(word, article) || _isAcronym(word, article) || article
}

function find (word: string) {
  if (!word || typeof word !== 'string') {
    return
  }
  let cleanedWord = word.trim().split(' ')[0].trim()
  cleanedWord = cleanedWord.replace(_punctuation, '')
  return _checkOverrides(cleanedWord) || _checkVowels(cleanedWord)
}

function article (word: string, upper?: boolean) {
  if (!word || typeof word !== 'string') {
    logger.error(`"${word}" is not in an acceptable format.`)
    return word // ? just throw back whatever we got
  }
  const article = find(word) || ''
  // return article, capitalized if requested, appended to the original phrase
  return `${upper ? capitalizeFirstLetter(article) : article} ${word}`
}

export const articles = {
  find,
  output: article,
  override: addOverride
}
