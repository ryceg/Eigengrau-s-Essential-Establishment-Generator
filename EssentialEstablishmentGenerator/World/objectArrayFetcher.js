setup.objectArrayFetcher = function (target, args) {
  var key = Object.keys(target)
  return target[key[key.length * Math.random() << 0]](args)
}
