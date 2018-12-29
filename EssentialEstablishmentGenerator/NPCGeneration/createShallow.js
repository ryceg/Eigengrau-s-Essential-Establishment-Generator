/* global setup */
setup.createShallow = function (base) {
  var npc = setup.createNPC(town, {isShallow: true})
  return npc
}
//   var data = setup.npcData
//   var gender = ['man', 'woman'].random()
//   var race = setup.npcData.race.random()
//   var firstName = setup.npcData.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
//   var lastName = setup.npcData.raceTraits[race].lastName.random().toUpperFirst()
//   console.groupCollapsed('creating a shallow called ' + firstName + '...')
//   var ageStage = ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
//   var dndClass = setup.npcData.dndClass.random()
//   var npc = Object.assign({
//     shallow: true,
//     _gender: gender,
//     _race: race,
//     get gender () {
//       return this._gender
//     },
//     set gender (gender) {
//       this._gender = gender
//       Object.assign(this, data.gender[gender])
//     },
//     get race () {
//       return this._race
//     },
//     set race (race) {
//       this._race = race
//       Object.assign(this, data.raceTraits[race].raceWords)
//     },
//     firstName: firstName,
//     lastName: lastName,
//     get name () {
//       return this.firstName + ' ' + this.lastName
//     },
//     set name (name) {
//       var words = name.toString().split(' ')
//       this.firstName = words[0] || ''
//       this.lastName = words[1] || ''
//     },
//     ageStage: ageStage,
//     age: ageStage,
//     dndClass: dndClass,
//     muscleMass: 10,
//     get descriptor () {
//       return this.descriptors.random()
//     },
//     set descriptorsAdd (description) {
//       if (typeof description === 'string') {
//         if (this.descriptors.includes(description)) {
//           console.log('Throwing out duplicate description...')
//         } else {
//           this.descriptors.push(description)
//         }
//       } else {
//         console.log('Expected a string operand and received ' + description)
//       }
//     }
//   }, base)
//   npc.gender = npc.gender || npc._gender
//   npc.race = npc.race || npc._race
//
//   var physicalTraitRoll = Math.floor(Math.random() * 10) + 1
//   if (physicalTraitRoll > 8) {
//     npc.physicalTrait = setup.npcData.scar.random()
//   } else if (physicalTraitRoll > 6) {
//     npc.physicalTrait = setup.npcData.tattoo.random()
//   } else if (physicalTraitRoll <= 6) {
//     npc.physicalTrait = setup.npcData.hairColour.random() + ' ' + setup.npcData.hairType.random() + ' hair'
//   }
//
//   if (!npc.hasClass) {
//     npc.dndClass = npc.profession || setup.npcData.profession.random()
//   }
//
//   setup.createRace(npc)
//   setup.createDescriptors(npc)
//   console.groupEnd();
//   return npc
// }
