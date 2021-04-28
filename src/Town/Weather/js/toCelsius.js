// uses settings.showCelsius
/**
 * @param {number} temp
 * @returns {string}
 */
setup.toCelsius = temp => {
  if (settings.showCelsius) {
    console.log(`${temp} in Fahrenheit`)
    temp = Math.trunc((temp - 32) * 0.5556)
    console.log(`${temp} in Celsius`)
    return `${temp} degrees Celsius`
  }

  return `${temp} degrees Fahrenheit`
}
