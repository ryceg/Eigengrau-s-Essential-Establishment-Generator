// uses settings.showCelsius
/**
 * @param {number} temp
 * @returns {string}
 */
setup.toCelsius = (temp) => {
  if (settings.showCelsius) {
    lib.logger.info(`${temp} in Fahrenheit`)
    temp = Math.trunc((temp - 32) * 0.5556)
    lib.logger.info(`${temp} in Celsius`)
    return `${temp} degrees Celsius`
  }

  return `${temp} degrees Fahrenheit`
}
