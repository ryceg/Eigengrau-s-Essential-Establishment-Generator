/**
 * Gives a random value from a static table.
 * Designed to be less performance-intensive than weightedRandomFetcher,
 * since the total is known before function runtime.
 *
 * The table should contain the UPPER bounds of each result
 * for example, calling rollFromTable([[1, 'a'], [3, 'b']])
 * would return 'a' 1/3 of the time, and b 2/3 of the time.
 */

setup.rollFromTable = function (table, maxRoll = undefined, bias = 0) {
  console.log(table)
  const [total, defaultResult] = table[table.length - 1]
  if (!maxRoll) maxRoll = total
  const roll = random(1, maxRoll) + bias

  for (let i = 0; i < table.length; i++) {
    const [percentile, result] = table[i]
    if (roll <= percentile) return result
  }

  return defaultResult
}
