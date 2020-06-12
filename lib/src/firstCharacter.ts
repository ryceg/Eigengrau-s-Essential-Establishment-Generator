export function firstCharacter (word: string) {
  return `<span class="first-character">${word.slice(0, 1)}</span>${word.slice(1)}`
}
