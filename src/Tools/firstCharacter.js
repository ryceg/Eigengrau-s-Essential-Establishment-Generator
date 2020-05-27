setup.firstCharacter = (word) => {
  /** @param word */
  const character = word.slice(0, 1).toUpperFirst()
  const restOfWord = word.slice(1)
  return `<span class="firstcharacter">${character}</span>${restOfWord}`
  // return `<span class="firstcharacter">${word.slice(0, 1)}</span>${word.slice(1)}`
}
