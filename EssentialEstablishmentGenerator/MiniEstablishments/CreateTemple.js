/* global setup */
setup.createTemple = function (base) {
  var prayerSubject = [
    'one god and only one god',
    'one god primarily, but other gods occasionally or for specific petitions',
    'several gods within a pantheon, but two gods above the rest',
    'an entire pantheon, petitioning each god for specific needs',
    'one god to whom the temple was not originally dedicated',
    'several gods within a pantheon to whom the temple was not originally dedicated'
  ]
  var dedicated = [
    'god of the ' + ['sun', 'sky'].random(),
    ['earth', 'mother'].random() + ' goddess',
    'goddess of the ' + ['harvest', 'festivals'].random(),
    'god of ' + ['craft', 'knowledge'].random(),
    'god of ' + ['sun', 'sky'].random(),
    'god of ' + ['death', 'evil'].random(),
    'goddess of the ' + ['hunt', 'woodlands'].random(),
    'goddess of ' + ['love', 'beauty'].random(),
    'goddess of the ' + ['moon', 'sun'].random(),
    'god of the ' + ['seas', 'storms'].random(),
    'trickster/messenger god',
    'tyrant/war god'
  ]
  var knownFor = [
    'miraculous healers',
    'compassionate healers',
    'beautiful priestesses',
    'wonderful music',
    'accurate prophecies',
    'collected wisdom',
    'stunning architecture',
    'unusual architecture',
    'incredible collection of artwork',
    'a famous sculpture or painting',
    'lengthy prayer services and vigils',
    'lively prayer services and debates'
  ]
  var guardedBy = [
    'a sworn order of devout warriors',
    'sellswords',
    'frightening statues of monstrous beings',
    'impressive, colossal statues of warriors',
    'statues of beautiful maidens, beckoning visitors into a trap',
    'nothing; the temple welcomes all'
  ]
  var floorPlan = [
    'circular',
    'ellipsoidal',
    'triangular',
    'square',
    'rectangular',
    'pentagonal'
  ]
  var complex = [
    'simple; a large main worship chamber with a handful of functional rooms adjoining',
    'simple with a large annex; the annex contains many chambers',
    'simple with fortifications',
    'multi-layered; upper or lower layers are inaccessible to most visitors',
    'multi-winged; some wings are inaccessible to most visitors',
    'arranged in a concentric fashion; inner areas are inaccessible to most visitors',
    'labyrinthine; designed to deliberately confuse outsiders',
    'simple with an intricate complex hidden beneath the main worship chamber'
  ]
  var grounds = [
    'impenetrable stone walls',
    'an intricate structure of stone arches and columns',
    'a colorful structure of painted wood and plaster',
    'a sturdy structure of finished wood',
    'a solid structure of oven-fired clay bricks'
  ]
  var interior = [
    'rough hewn stone',
    'smooth cut stone',
    'painted or lacquered wood',
    'unfinished hardwood',
    'decorated with intricate mosaics',
    'decorated with elaborate murals',
    'decorated with relief carvings',
    'decorated with sacred texts and runes'
  ]
  var ceilings = [
    'uncomfortably close to your head',
    'connected to the floor by columns',
    'painted with mythological scenes',
    'so high its difficult to make out details',
    'vaulted',
    'domes or cupolas'
  ]
  var rooms = [
    'an armory or barracks',
    'a guardroom or sentry post',
    'a cell for solitary prayer',
    'a cell for holding prisoners',
    'an inquisition or torture chamber',
    'a priest’s office or audience chamber',
    'a sanitarium or infirmary',
    'a ceremonial pool, bath, or fountain',
    'a morgue or mortuary',
    'a crypt for a person of importance (d4): 1 well-known hero; 2 powerful high priest; 3 obscure priest; 4 wealthy noble',
    'a room dedicated for specific rituals (d4): 1 conjurations; 2 divinations; 3 funerals; 4 healing miracles',
    'a chapel or shrine dedicated to a lesser deity, saint, or martyr',
    'a classroom or dormitory',
    'a library',
    'a priest’s quarters or robing room',
    'a banquet room, large dining hall, or small dining room',
    'a kitchen or pantry',
    'a trophy room or art gallery',
    'a stable or kennel',
    'a workshop for temple craftsmen'
  ]
  var features = [
    'a small altar set in an alcove in the wall',
    'the sound of bells ringing in a tower',
    'a wall sconce holding many candles',
    'tall candles on holders, taller than a man',
    'the tinkle of chimes from a nearby room',
    'a tapestry depicting a mythological scene',
    'a small fountain or reflecting pool',
    'the sound of a gong from another room',
    'a large holy symbol embedded in the wall',
    'a huge book of sacred texts or prayers',
    'the scent of incense burning nearby',
    'a kneeler beneath a small statue or icon',
    'an oil lamp with colored glass panels',
    'a mosaic set into the floor of the room',
    'a wide fresco or mural depicting a mythological scene',
    'the pipes of an immense organ running along the walls',
    'robes and cassocks hanging on hooks',
    'an ornamental rug',
    'a screen to hide priests from view',
    'a statue of a recognizable figure'
  ]

  var temple = setup.createBuilding()

  Object.assign(temple, {
    prayerSubject: prayerSubject.random(),
    dedicated: dedicated.random(),
    knownFor: knownFor.random(),
    guardedBy: guardedBy.random(),
    floorPlan: floorPlan.random(),
    complex: complex.random(),
    grounds: grounds.random(),
    interior: interior.random(),
    ceilings: ceilings.random(),
    rooms: rooms.random(),
    features: features.random()
  }, base)
  return temple
}
