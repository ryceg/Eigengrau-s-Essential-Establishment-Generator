import jsonData from './riddles.data.json'

interface Riddle {
  answer: string
  question: string[]
}

export const riddles: Riddle[] = jsonData
