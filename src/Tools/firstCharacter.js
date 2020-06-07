setup.firstCharacter = (word) => {
  /** @param word */
  return `<span class="firstcharacter">${word.slice(0, 1)}</span>${word.slice(1)}`
}
