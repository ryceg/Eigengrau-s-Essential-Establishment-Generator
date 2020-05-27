interface Setup {
  misc: SetupMisc
}

interface SetupMisc {
  books: {
    create(town: Town): string
    condition: string[]
    cover: string[]
    detailedTitles: DetailedBookTitle[]
    titles: string[]
    puns: string[]
  }
}

interface DetailedBookTitle {
  title: string
  category: string
  contents: string
}
