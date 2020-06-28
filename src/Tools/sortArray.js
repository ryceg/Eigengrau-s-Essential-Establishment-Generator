setup.sortArray = (container) => {
  // {human: 16.12, dragonborn: 0.3, dwarf: 6.1249}
  // [['dragonborn', 0.3], ['dwarf', 6.1249], ['human', 16.12]]
  const sortable = []
  for (const array in container) {
    sortable.push([array, container[array]])
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1]
  })
  return sortable
}
