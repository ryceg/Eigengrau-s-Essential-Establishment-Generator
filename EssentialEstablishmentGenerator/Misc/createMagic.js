
setup.createMagic = function (type) {
  // var type = type || ['ring', 'trinket', 'weapon', 'armour'].seededrandom()
  console.log('type: ' + type)
  var magic
  if (type === 'ring') {
    magic = setup.createRing()
    console.log('Ring!')
    console.log(magic)
    return magic
  }
  var length = setup.magicData[type].property.length
  console.log('Length:' + length)
  var prefixRoll = random(1, length)
  var suffixRoll = random(1, length)
  magic = {
    type: setup.magicData[type].type.seededrandom(),
    prefix: setup.magicData[type].prefix[prefixRoll],
    suffix: setup.magicData[type].suffix[suffixRoll],
    prefixProperty: setup.magicData[type].property[prefixRoll],
    suffixProperty: setup.magicData[type].property[suffixRoll]
  }
  magic.description = magic.prefixProperty + '. ' + magic.suffixProperty
  magic.name = magic.prefix + ' ' + magic.type + ' ' + magic.suffix
  console.log(magic)
  return magic
}
