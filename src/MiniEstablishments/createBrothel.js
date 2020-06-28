setup.createBrothel = (town, tavern) => {
  console.log('Creating a brothel...')
  const brothel = setup.createBuilding(town, 'brothel')

  Object.assign(brothel, {
    name: setup.brothel.name.random(),
    passageName: 'BrothelOutput',
    initPassage: 'BrothelOutput',
    buildingType: 'brothel',
    wordNoun: ['brothel', 'whorehouse', "gentleman's club", 'bordello', 'cathouse', 'house of ill-repute', 'massage parlor', 'den of vice'].random(),
    specialty: setup.brothel.specialty.random(),
    talk: setup.brothel.talk().random(),
    rumour: setup.brothel.rumour.random(),
    notice: setup.brothel.notice().random(),
    idle: setup.brothel.idle().random(),
    owner: Object.keys(setup.brothel.pimp).random()
  })
  brothel.notableFeature = `${brothel.specialty} and being owned by ${brothel.owner}`

  brothel.wealth = ''
  brothel.size = ''
  brothel.cleanliness = ''
  setup.structure.create(town, brothel)
  brothel.structure.brothelDescriptor = `${setup.articles.output(brothel.structure.material.wealth)} ${brothel.structure.material.noun} ${brothel.wordNoun} with ${setup.articles.output(brothel.structure.roof.verb)} roof`
  const rollDataVariables = ['wealth', 'size', 'cleanliness']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(brothel, setup.brothel.rollData, propName)
  }
  brothel.pimp = setup.createNPC(town, {
    ...setup.brothel.pimp[brothel.owner],
    isShallow: true,
    hasClass: false
  })
  brothel.pimp.title = setup.npcData.gender[brothel.pimp.gender].domTitle
  brothel.pimp.greeting = [
    'nods at you', 'welcomes you warmly', 'smiles, greets you', 'raises a hand with a wave', 'sizes you up, before $associatedNPC.heshe nods at you', 'checks you out for just a moment before smiling at you', 'waves slightly in your direction', 'gives you you a slight nod', 'turns your way', 'frowns, but greets you just the same'
  ]
  console.log(brothel)
  return brothel
}
