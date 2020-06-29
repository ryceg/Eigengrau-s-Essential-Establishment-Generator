setup.exportNPC = function (npc) {
  const npcExport = {
    character: {
    // firstName: npc.firstName,
    // lastName: npc.lastName,
      name: `${npc.firstName} ${npc.lastName}`,
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
        personalityTraits: `${npc.name} is ${npc.calmTrait} when calm, and ${npc.stressTrait} when stressed.`,
        appearance: `${npc.name} is ${lib.articles.output(npc.age)} ${npc.malefemale} ${npc.race}. ${npc.heshe.toUpperFirst()} is ${npc.height} and ${npc.weight}, and has ${npc.eyes} eyes, with ${npc.skinColour} skin. The most notable physical trait of ${npc.firstName} is that ${npc.heshe} has ${npc.physicalTrait}.`
      },
      bio: `${npc.name} is ${lib.articles.output(npc.age)} ${npc.malefemale} ${npc.race}. ${npc.heshe.toUpperFirst()} is ${npc.height} and ${npc.weight}, and has ${npc.eyes} eyes, with ${npc.skinColour} skin. The most notable physical trait of ${npc.firstName} is that ${npc.heshe} has ${npc.physicalTrait}.
    I was born ${npc.birthplace}, and was raised by ${npc.familyUnit}. I had ${lib.articles.output(npc.familyLifestyle)} upbringing in ${npc.familyHome}. ${npc.childhoodMemories}. ${npc.backgroundOrigin} ${npc.professionOrigin}.
    `,
      gmnotes: `${npc.name} ${npc.trait}. ${npc.heshe.toUpperFirst()} is ${npc.calmTrait} when calm, and ${npc.stressTrait} when stressed.`,
      inplayerjournals: 'all',
      notes: {
        backstory: `I was born ${npc.birthplace}, and was raised by ${npc.familyUnit}. I had ${lib.articles.output(npc.familyLifestyle)} upbringing in ${npc.familyHome}. ${npc.childhoodMemories}. ${npc.backgroundOrigin} ${npc.professionOrigin}.`
      },

      cp: npc.wealth

    }
  }
  return JSON.stringify(npcExport)
}
