setup.exportNPC = function (npc) {
  const npcExport = {
    character: {
    // firstName: npc.firstName,
    // lastName: npc.lastName,
      name: npc.firstName + ' ' + npc.lastName,
      age: npc.age,
      class: npc.dndClass,
      classes: [{
        isStartingClass: true,
        level: npc.level | 1,
        definition: {
          name: npc.dndClass,
          subclassDefinition: null
        }
      }],
      background: {
        definition: {
          name: npc.background,
          description: npc.backgroundOrigin,
          featureDescription: npc.backgroundOrigin
        }
      },
      race: {
        racialTraits: null,
        fullName: npc.race
      },
      hair: npc.hair,
      eyes: npc.eyes,
      skin: npc.skinColour,
      traits: {
        bonds: npc.bond,
        ideal: npc.ideal,
        flaws: npc.trait,
        personalityTraits: `${npc.name} is ${npc.calmTrait} when calm, and ${npc.stressTrait} when stressed. ${npc.personalityTrait}.`,
        appearance: `${npc.name} is ${setup.articles.output(npc.age)} ${npc.malefemale} ${npc.race}. ${npc.heshe.toUpperFirst()} is ${npc.height} and ${npc.weight}, and has ${npc.eyes} eyes, with ${npc.skinColour} skin. The most notable physical trait of ${npc.firstName} is that ${npc.heshe} has ${npc.physicalTrait}.`
      },
      bio: `${npc.name} is ${setup.articles.output(npc.age)} ${npc.malefemale} ${npc.race}. ${npc.heshe.toUpperFirst()} is ${npc.height} and ${npc.weight}, and has ${npc.eyes} eyes, with ${npc.skinColour} skin. The most notable physical trait of ${npc.firstName} is that ${npc.heshe} has ${npc.physicalTrait}.
    I was born ${npc.birthplace}, and was raised by ${npc.familyUnit}. I had ${setup.articles.output(npc.familyLifestyle)} upbringing in ${npc.familyHome}. ${npc.childhoodMemories}. ${npc.backgroundOrigin} ${npc.dndClassOrigin}.
    `,
      gmnotes: `${npc.name} ${npc.trait}. ${npc.heshe.toUpperFirst()} is ${npc.calmTrait} when calm, and ${npc.stressTrait} when stressed. ${npc.personalityTrait}`,
      inplayerjournals: 'all',
      notes: {
        backstory: `I was born ${npc.birthplace}, and was raised by ${npc.familyUnit}. I had ${setup.articles.output(npc.familyLifestyle)} upbringing in ${npc.familyHome}. ${npc.childhoodMemories}. ${npc.backgroundOrigin} ${npc.dndClassOrigin}.`
      },

      cp: npc.wealth

    } }

  return JSON.stringify(npcExport)
  // muscleMass: data.raceTraits[race].muscleMass + dice(5, 4) - 12,
  // calmTrait: data.calmTrait.seededrandom(),
  // stressTrait: data.stressTrait.seededrandom(),
  // pronouns: {

  // },
  // relationships: {

  // },
  // roll: {
  //   _wageVariation: dice(5, 10) - 27,
  //   wageVariation (town) {
  //     // _wageVariation is static; it's the "luck" that the NPC has in their profession.
  //     // town.roll.wealth increases or decreases it by 10%, reflecting the strength of the economy.
  //     // expected range should be between -25 and 25.
  //     return setup.calcPercentage(npc.roll._wageVariation, ((town.roll.wealth - 50) / 5))
  //   }
  // },
  // finances: {
  //   grossIncome (town, npc) {
  //     // TODO add hobbies
  //     console.log(`Returning ${npc.name}'s gross income...`)
  //     const profession = setup.findProfession(town, npc)
  //     return Math.round(setup.calcPercentage(profession.dailyWage, [npc.roll.wageVariation(town), ((town.roll.wealth - 50) / 3)]))
  //   },
  //   netIncome (town, npc) {
  //     console.log(`Returning ${npc.name}'s net income...`)
  //     return Math.round(setup.calcPercentage(npc.finances.grossIncome(town, npc), -town.taxRate(town)))
  //   },
  //   lifestyleStandard (town, npc) {
  //     console.log(`Returning ${npc.name}'s lifestyle standard...`)
  //     const income = npc.finances.netIncome(town, npc)
  //     let lifestyleStandard
  //     for (let i = 0; i < setup.lifestyleStandards.length; i++) {
  //       if (income >= setup.lifestyleStandards[i][0]) {
  //         return setup.lifestyleStandards[i]
  //       }
  //     }
  //     // lifestyleStandard returns the unmodified array of [100, 'modest', 30]
  //     // various bits use all three, so it was easier to specify which than create three virtually identical functions.
  //     return lifestyleStandard
  //   },
  //   lifestyleExpenses (town, npc) {
  //     console.log(`Returning ${npc.name}'s lifestyle expenses...`)
  //     const income = npc.finances.grossIncome(town, npc)
  //     const living = npc.finances.lifestyleStandard(town, npc)
  //     const ratio = setup.lifestyleStandards.find(function (desc) {
  //       return desc[1] === living[1]
  //     })
  //     return Math.round(income * (ratio[2] / 100))
  //   },
  //   profit (town, npc) {
  //     console.log(`Returning ${npc.name}'s profit...`)
  //     return Math.round(npc.finances.netIncome(town, npc) - npc.finances.lifestyleStandard(town, npc)[0] - npc.finances.lifestyleExpenses(town, npc))
  //   }
  // },
  // // value: data.value.seededrandom(),
  // // drive: data.drive.seededrandom(),
  // // belief: data.belief.seededrandom(),
  // hairColour: data.hairColour.seededrandom(),
  // hairType: data.hairType.seededrandom(),
  // get hair () {
  //   return this.hairType + ' ' + this.hairColour + ' hair'
  // },
  // set hair (hair) {
  //   const hairs = hair.toString().split(' ')
  //   this.hairType = hairs[0] || ''
  //   this.hairColour = hairs[1] || ''
  // },
  // get descriptor () {
  //   return this.descriptors.seededrandom()
  // },
  // set descriptorsAdd (description) {
  //   if (typeof description === 'string') {
  //     console.log(this.descriptors)
  //     if (this.descriptors.includes(description)) {
  //       console.log('Throwing out duplicate description...')
  //     } else {
  //       this.descriptors.push(description)
  //     }
  //   } else {
  //     console.log('Expected a string operand and received ' + description)
  //   }
  // },
  // eyes: data.raceTraits[race].eyes.seededrandom(),
  // skinColour: data.skinColour.seededrandom(),
  // dndClass,
  // profession,
  // pockets: data.pockets.seededrandom(),
  // wealth: dice(2, 50),
  // trait: data.trait.seededrandom(),
  // currentMood: data.currentMood,
  // hasHistory: base.hasHistory || false,
  // // id: Math.floor(randomFloat(1) * 0x10000),
  // idle: data.idle,
  // get gender () {
  //   return this._gender
  // },
}
