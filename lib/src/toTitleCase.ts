export function toUpperFirst (input: string) {
  return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()
}

export function toTitleCase (input: string) {
  let str = input.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  for (const lower of LOWER_CASE_WORDS) {
    str = str.replace(
      new RegExp(`\\s${lower}\\s`, 'g'),
      (txt) => txt.toLowerCase()
    )
  }

  // Certain words such as initialisms or acronyms should be left uppercase
  for (const upper of UPPER_CASE_WORDS) {
    str = str.replace(
      new RegExp(`\\b${upper}\\b`, 'g'),
      upper.toUpperCase()
    )
  }

  return str
}

const LOWER_CASE_WORDS = [
  'A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
  'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'
]

const UPPER_CASE_WORDS = ['Id', 'Tv', 'NPC', 'NPCs']
