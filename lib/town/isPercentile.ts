/** Tests whether the record adds up to 100. */
export function isPercentile (record: Record<string, number>): boolean {
  const sum = Object.values(record).reduce((a, b) => a + b, 0)
  return sum > 99 && sum < 100.1
}
