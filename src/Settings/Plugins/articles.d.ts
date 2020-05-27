interface Setup {
  articles: {
    find(word: string): string
    output(word: string, upper?: boolean): string
    override(article: string, word: any, caseSensitive?: boolean): string
  }
}
