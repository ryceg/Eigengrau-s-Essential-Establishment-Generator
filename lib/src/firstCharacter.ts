export function firstCharacter (word: string) {
  return `<span class="firstcharacter">${word.slice(0, 1)}</span>${word.slice(1)}`
}
