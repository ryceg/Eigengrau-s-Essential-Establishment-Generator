/* global setup */
setup.createDescriptors = function (npc) {
  console.log('assigning descriptors to ' + npc.name + '...')
  // remember adjectival precedence!
  // opinion  size    age   shape       colour  origin  material  purpose     noun
  // lovely   little  old   rectangular green   French  silver    whittling   knife
  npc.descriptors = [
    npc.age + ' ' + npc.raceName,
    npc.height + ' ' + npc.raceName,
    npc.weight + ' ' + npc.raceName,
    npc.height + ' ' + npc.gender + ' with ' + npc.physicalTrait
  ]

  if (typeof beard !== 'undefined') {
    npc.descriptorsAdd = npc.raceName + ' with a ' + npc.beard
  }

  if (npc.hasClass === true) {
    npc.descriptorsAdd = npc.dndClass
  }

  return npc
}
