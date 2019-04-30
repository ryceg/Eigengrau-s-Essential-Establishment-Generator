setup.filterDescription = function (descriptor, targetObject, firstRoll, secondRoll) {
  const getClosest = curry((counts, goal) => {
    return counts
      .reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
  })

  setup.roomDescriptions.find(
    function (targetObject) {
      return targetObject[firstRoll] === descriptor[firstRoll] && targetObject[secondRoll] === descriptor[secondRoll]
    })
}
