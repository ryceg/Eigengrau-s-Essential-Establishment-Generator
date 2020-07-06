import adjectives from './urlData.adjectives.json'
import animals from './urlData.animals.json'

interface UrlData {
  adjectives: string[]
  animals: string[]
}

export const urlData: UrlData = {
  adjectives,
  animals
}
