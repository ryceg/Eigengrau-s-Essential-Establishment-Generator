export function calcPercentage (target: number, integer: number | number[]) {
  if (Array.isArray(integer)) {
    return integer.reduce(calc, target)
  }
  return calc(target, integer)
}

function calc (target: number, integer: number) {
  return (target / 100) * (100 + integer)
}
