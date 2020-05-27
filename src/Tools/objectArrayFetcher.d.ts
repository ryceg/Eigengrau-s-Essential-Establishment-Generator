interface Setup {
  objectArrayFetcher<T>(target: T): T[keyof T]
}
