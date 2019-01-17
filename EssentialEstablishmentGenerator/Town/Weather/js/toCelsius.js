setup.toCelsius = function (temp) {
  if (settings.showCelsius) {
    console.log(temp + ' in Fahrenheit')
    temp -= 32
    temp = Math.trunc(temp *= 0.5556) + ' degrees Celsius'
    console.log(temp + ' in Celsius')
  } else {
    temp += ' degrees Fahrenheit'
  }

  return temp
}
