setup.createMagic = type => {
  console.log(`Type: ${type}`)

  if (type === 'ring') {
    const magic = lib.createRing()
    console.log('Ring!')
    console.log(magic)
    return magic
  }

  const data = lib.magicData[type]

  const length = data.property.length
  console.log(`Length: ${length}`)
  const prefixRoll = random(1, length)
  const suffixRoll = random(1, length)
  const magic = {
    type: data.type.random(),
    prefix: data.prefix[prefixRoll],
    suffix: data.suffix[suffixRoll],
    prefixProperty: data.property[prefixRoll],
    suffixProperty: data.property[suffixRoll]
  }
  magic.description = `${magic.prefixProperty}. ${magic.suffixProperty}`
  magic.name = `${magic.prefix} ${magic.type} ${magic.suffix}`
  console.log(magic)
  return magic
}
