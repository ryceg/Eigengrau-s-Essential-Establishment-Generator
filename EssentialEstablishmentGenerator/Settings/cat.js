window.Categorizer = function () {
  this.cats = Array.prototype.slice.call(arguments)
    .filter(function (e, i, a) {
      return e instanceof Array && e.length === 2 && typeof e[0] === 'number' && !isNaN(e[0]) &&
                a.findIndex(function (val) { return e[0] === val[0] }) === i /* uniqueness test */
    })
    .sort(function (a, b) { return b[0] - a[0] /* reverse sort */ })
}
window.Categorizer.prototype.cat = function (val, def) {
  var result = def
  if (typeof val === 'number' && !isNaN(val)) {
    var foundCat = this.cats.find(function (e) { return val >= e[0] })
    if (foundCat) {
      result = foundCat[1]
    }
  }
  // Record the value for the result's getter, if it is an object
  // and doesn't have the property yet
  if (result === Object(result)) {
    result.value = val
  }
  return result
}
