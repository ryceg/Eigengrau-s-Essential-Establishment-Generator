
setup.createMagic = function (type) {
  console.log(`Type: ${type}`)

  if (type === 'ring') {
    const magic = setup.createRing()
    console.log('Ring!')
    console.log(magic)
    return magic
  }

  const data = setup.magicData[type]

  const length = data.property.length
  console.log(`Length: ${length}`)
  const prefixRoll = random(1, length)
  const suffixRoll = random(1, length)
  const magic = {
    type: data.type.seededrandom(),
    prefix: data.prefix[prefixRoll],
    suffix: data.suffix[suffixRoll],
    prefixProperty: data.property[prefixRoll],
    suffixProperty: data.property[suffixRoll]
  }
  magic.description = magic.prefixProperty + '. ' + magic.suffixProperty
  magic.name = magic.prefix + ' ' + magic.type + ' ' + magic.suffix
  console.log(magic)
  return magic
}
