interface Setup {
  misc: {
    books: {
      create(town: Town)
      condition: string[]
      cover: string[]
      detailedTitles: DetailedBookTitle[]
      titles: string[]
      puns: string[]
    }
  }
}

interface DetailedBookTitle {
  title: string
  category: string
  contents: string
}
