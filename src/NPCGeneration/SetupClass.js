
setup.createClass = function (npc) {
  console.log('assigning class traits to ' + npc.name + '...')
  let professionOrigin
  let background
  let classWeapon

  if (npc.hasClass !== false && typeof setup.npcData.classTraits[npc.dndClass] !== 'undefined') {
    professionOrigin = Array.isArray(setup.npcData.classTraits[npc.dndClass].professionOrigin)
      ? setup.npcData.classTraits[npc.dndClass].professionOrigin.seededrandom()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].professionOrigin)
        ? setup.npcData.professionTraits[npc.profession].professionOrigin.seededrandom()
        : 'My circumstances kept me from doing more than being ' + setup.articles.output(npc.profession)
    background = Array.isArray(setup.npcData.classTraits[npc.dndClass].background)
      ? setup.npcData.classTraits[npc.dndClass].background.seededrandom()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].background)
        ? setup.npcData.professionTraits[npc.profession].background.seededrandom()
        : 'commoner'
    classWeapon = Array.isArray(setup.npcData.classTraits[npc.dndClass].weapon)
      ? setup.npcData.classTraits[npc.dndClass].weapon.seededrandom()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].weapon)
        ? setup.npcData.professionTraits[npc.profession].weapon.seededrandom()
        : 'a dagger'
  } else if (npc.hasClass === false && typeof setup.npcData.professionTraits[npc.profession] !== 'undefined') {
    professionOrigin = Array.isArray(setup.npcData.professionTraits[npc.profession].professionOrigin)
      ? setup.npcData.professionTraits[npc.profession].professionOrigin.seededrandom()
      : 'My circumstances kept me from doing more than being ' + setup.articles.output(npc.profession)
    background = Array.isArray(setup.npcData.professionTraits[npc.profession].background)
      ? setup.npcData.professionTraits[npc.profession].background.seededrandom()
      : 'commoner'
    classWeapon = Array.isArray(setup.npcData.professionTraits[npc.profession].weapon)
      ? setup.npcData.professionTraits[npc.profession].weapon.seededrandom()
      : 'a dagger'
  } else {
    console.log(npc.name + ' the ' + npc.dndClass + ' did not have a valid class.')
    professionOrigin = 'My circumstances kept me from doing more than being ' + setup.articles.output(npc.profession)
    background = 'commoner'
    classWeapon = 'a dagger'
  }

  // var checkValidity = function (npc, target) {
  //   if (npc.hasClass !== false && typeof setup.npcData.classTraits[npc.dndClass] !== 'undefined') {
  //     return setup.npcData.classTraits[npc.dndClass][target].seededrandom()
  //   } else if (npc.hasClass === false && typeof setup.npcData.professionTraits[npc.profession] !== 'undefined') {
  //     return setup.npcData.professionTraits[npc.profession][target].seededrandom()
  //   } else {
  //     return
  //   }
  // }
  npc.professionOrigin = npc.professionOrigin || professionOrigin
  npc.background = npc.background || background
  npc.weapon = npc.weapon || classWeapon

  // npc.wealth += typeof setup.npcData.classTraits[npc.dndClass].wealth === 'function'
  //   ? setup.npcData.classTraits[npc.dndClass].wealth()
  //   : dice(2, 50)

  return npc
}
