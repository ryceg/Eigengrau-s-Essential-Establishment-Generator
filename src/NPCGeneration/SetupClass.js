
setup.createClass = function (npc) {
  console.log('assigning class traits to ' + npc.name + '...')
  let dndClassOrigin
  let background
  let classWeapon

  if (npc.hasClass !== false && typeof setup.npcData.classTraits[npc.dndClass] !== 'undefined') {
    dndClassOrigin = Array.isArray(setup.npcData.classTraits[npc.dndClass].dndClassOrigin)
      ? setup.npcData.classTraits[npc.dndClass].dndClassOrigin.seededrandom()
      : Array.isArray(setup.npcData.professionTraits[npc.profession].dndClassOrigin)
        ? setup.npcData.professionTraits[npc.profession].dndClassOrigin.seededrandom()
        : 'My circumstances kept me from doing more than being a ' + npc.profession
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
    dndClassOrigin = Array.isArray(setup.npcData.professionTraits[npc.profession].dndClassOrigin)
      ? setup.npcData.professionTraits[npc.profession].dndClassOrigin.seededrandom()
      : 'My circumstances kept me from doing more than being a ' + npc.profession
    background = Array.isArray(setup.npcData.professionTraits[npc.profession].background)
      ? setup.npcData.professionTraits[npc.profession].background.seededrandom()
      : 'commoner'
    classWeapon = Array.isArray(setup.npcData.professionTraits[npc.profession].weapon)
      ? setup.npcData.professionTraits[npc.profession].weapon.seededrandom()
      : 'a dagger'
  } else {
    console.log(npc.name + ' the ' + npc.dndClass + ' did not have a valid class.')
    dndClassOrigin = 'My circumstances kept me from doing more than being a ' + npc.profession
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
  npc.dndClassOrigin = npc.dndClassOrigin || dndClassOrigin
  npc.background = npc.background || background
  npc.weapon = npc.weapon || classWeapon

  // npc.wealth += typeof setup.npcData.classTraits[npc.dndClass].wealth === 'function'
  //   ? setup.npcData.classTraits[npc.dndClass].wealth()
  //   : dice(2, 50)

  return npc
}
