setup.GeneralStoreRenders = function (GeneralStore) {
  var warmthRoll = random(1, 100)

  if (GeneralStore.roll.size > 80) {
    GeneralStore.size = 'huge'
    warmthRoll -= 20
  } else if (GeneralStore.roll.size > 70) {
    GeneralStore.size = 'quite large'
    warmthRoll -= 15
  } else if (GeneralStore.roll.size > 60) {
    GeneralStore.size = 'large'
    warmthRoll -= 10
  } else if (GeneralStore.roll.size > 50) {
    GeneralStore.size = 'spacious'
    warmthRoll -= 5
  } else if (GeneralStore.roll.size > 40) {
    GeneralStore.size = 'medium'
  } else if (GeneralStore.roll.size > 30) {
    GeneralStore.size = 'slightly cramped'
    warmthRoll += 15
  } else if (GeneralStore.roll.size > 20) {
    GeneralStore.size = 'small'
    warmthRoll += 15
  } else if (GeneralStore.roll.size <= 20) {
    GeneralStore.size = 'tiny'
    warmthRoll += 30
  }

  if (warmthRoll > 80) {
    GeneralStore.warmth = 'swelteringly hot'
  } else if (warmthRoll > 70) {
    GeneralStore.warmth = 'extremely warm'
  } else if (warmthRoll > 60) {
    GeneralStore.warmth = 'uncomfortably warm'
  } else if (warmthRoll > 50) {
    GeneralStore.warmth = 'nice and toasty'
  } else if (warmthRoll > 40) {
    GeneralStore.warmth = 'quite warm'
  } else if (warmthRoll > 30) {
    GeneralStore.warmth = 'warm'
  } else if (warmthRoll > 20) {
    GeneralStore.warmth = 'mild'
  } else if (warmthRoll <= 20) {
    GeneralStore.warmth = 'cold'
  }

  if (GeneralStore.roll.cleanliness > 80) {
    GeneralStore.cleanliness = 'fastidious'
  } else if (GeneralStore.roll.cleanliness > 70) {
    GeneralStore.cleanliness = 'very tidy'
  } else if (GeneralStore.roll.cleanliness > 60) {
    GeneralStore.cleanliness = 'tidy'
  } else if (GeneralStore.roll.cleanliness > 50) {
    GeneralStore.cleanliness = 'reasonably tidy'
  } else if (GeneralStore.roll.cleanliness > 40) {
    GeneralStore.cleanliness = 'somewhat messy'
  } else if (GeneralStore.roll.cleanliness > 30) {
    GeneralStore.cleanliness = 'rather messy'
  } else if (GeneralStore.roll.cleanliness > 20) {
    GeneralStore.cleanliness = 'very messy'
  } else if (GeneralStore.roll.cleanliness <= 20) {
    GeneralStore.cleanliness = 'filthy'
  }

  if (GeneralStore.roll.expertise > 80) {
    GeneralStore.expertise = 'masterful'
  } else if (GeneralStore.roll.expertise > 70) {
    GeneralStore.expertise = 'exceptional'
  } else if (GeneralStore.roll.expertise > 60) {
    GeneralStore.expertise = 'superior quality'
  } else if (GeneralStore.roll.expertise > 50) {
    GeneralStore.expertise = 'finely-crafted'
  } else if (GeneralStore.roll.expertise > 40) {
    GeneralStore.expertise = 'well-crafted'
  } else if (GeneralStore.roll.expertise > 30) {
    GeneralStore.expertise = 'somewhat well made'
  } else if (GeneralStore.roll.expertise > 20) {
    GeneralStore.expertise = 'somewhat amateur'
  } else if (GeneralStore.roll.expertise <= 20) {
    GeneralStore.expertise = 'blatantly amateur'
  }

  if (GeneralStore.roll.activity > 80) {
    GeneralStore.activity = 'extremely busy'
  } else if (GeneralStore.roll.activity > 70) {
    GeneralStore.activity = 'very busy'
  } else if (GeneralStore.roll.activity > 60) {
    GeneralStore.activity = 'rather busy'
  } else if (GeneralStore.roll.activity > 50) {
    GeneralStore.activity = 'reasonably busy'
  } else if (GeneralStore.roll.activity > 40) {
    GeneralStore.activity = 'not terribly busy'
  } else if (GeneralStore.roll.activity > 30) {
    GeneralStore.activity = 'not busy'
  } else if (GeneralStore.roll.activity > 20) {
    GeneralStore.activity = 'rather quiet'
  } else if (GeneralStore.roll.activity <= 20) {
    GeneralStore.activity = 'very quiet'
  }
  return GeneralStore
}
