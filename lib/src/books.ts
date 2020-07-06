import jsonData from './books.data.json'

interface Books {
  normal: string[]
  pun: string[]
}

export const books: Books = jsonData
