export function toTitleCase (input: string) {
  let str = input.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  const lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
    'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With']
  for (const lower of lowers) {
    str = str.replace(new RegExp(`\\s${lowers[lower]}\\s`, 'g'),
      (txt) => {
        return txt.toLowerCase()
      })
  }

  // Certain words such as initialisms or acronyms should be left uppercase
  const uppers = ['Id', 'Tv']
  for (const upper of uppers) {
    str = str.replace(new RegExp(`\\b${uppers[upper]}\\b`, 'g'),
      upper.toUpperCase())
  }

  return str
}
