
setup.createDescriptors = function (npc) {
  console.log('assigning descriptors to ' + npc.name + '...')
  // remember adjectival precedence!
  // opinion  size    age   shape       colour  origin  material  purpose     noun
  // lovely   little  old   rectangular green   French  silver    whittling   knife
  npc.descriptors = [
    (npc.age || npc.ageStage) + ' ' + npc.raceName,
    (npc.height || npc.skinColour + ' skinned') + ' ' + npc.raceName,
    (npc.weight || npc.height) + ' ' + npc.raceName,
    (npc.height || npc.age) + ' ' + npc.gender + ' with ' + npc.physicalTrait
  ]

  if (typeof beard !== 'undefined') {
    npc.descriptorsAdd = npc.raceName + ' with ' + setup.articles.output(npc.beard)
  }

  if (npc.hasClass === true) {
    npc.descriptorsAdd = npc.dndClass
  }

  return npc
}
