/*
* for returning an object from an array by key value
* i.e. town.buildings keys
*/

setup.findInArray = (array, key, value) => {
  return array.find(element => {
    if (element[key] === value) {
      console.log(`Found matching key value of ${key}: ${value}!`)
      console.log(element)
      return element
    }
  })
}
