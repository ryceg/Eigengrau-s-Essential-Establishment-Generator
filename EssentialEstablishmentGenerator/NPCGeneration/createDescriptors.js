setup.createDescriptors = function (npc) {
  console.log('assigning descriptors to ' + npc.name + '...')
  npc.descriptor = [
    npc.age + ' ' + npc.raceName,
    npc.height + ' ' + npc.raceName,
    npc.weight + ' ' + npc.raceName,
    npc.height + ' ' + npc.gender + ' with ' + npc.physicalTrait
  ]

  if (typeof beard !== 'undefined') {
    npc.descriptor.push(npc.raceName + ' with a ' + npc.beard)
  }

  if (npc.hasClass === true) {
    npc.descriptor.push(npc.dndClass)
  }

  return npc
}
