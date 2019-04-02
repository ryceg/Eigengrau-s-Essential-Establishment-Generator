setup.objectArrayFetcher = function (target, args) {
  // fetches a random key from an object
  var key = Object.keys(target)
  return target[key[key.length * Math.random() << 0]](args)
}
