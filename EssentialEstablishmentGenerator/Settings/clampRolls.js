setup.clampRolls = function (rolls) {
  Object.keys(rolls).forEach(function (roll) {
    rolls[roll].clamp(1, 100)
    Math.clamp(rolls[roll], 1, 100)
    if (rolls[roll] > 100) {
      console.log(rolls[roll] + ' was over 100.')
      rolls[roll] = 100
    } else if (rolls[roll] < 1) {
      console.log(rolls[roll] + ' was under 1.')
      rolls[roll] = 1
    }
  })
  return rolls
}
