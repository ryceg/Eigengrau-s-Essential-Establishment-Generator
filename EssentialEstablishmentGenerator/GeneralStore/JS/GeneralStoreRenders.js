setup.GeneralStoreRenders = function (GeneralStore) {
  let warmthRoll = random(1, 100)
  // update warmth based on store size
  const size = GeneralStore.size
  if (size > 80) {
    GeneralStore.size = 'huge'
    warmthRoll -= 20
  } else if (size > 70) {
    GeneralStore.size = 'quite large'
    warmthRoll -= 15
  } else if (size > 60) {
    GeneralStore.size = 'large'
    warmthRoll -= 10
  } else if (size > 50) {
    GeneralStore.size = 'spacious'
    warmthRoll -= 5
  } else if (size > 40) {
    GeneralStore.size = 'medium'
  } else if (size > 30) {
    GeneralStore.size = 'slightly cramped'
    warmthRoll += 15
  } else if (size > 20) {
    GeneralStore.size = 'small'
    warmthRoll += 15
  } else if (size <= 20) {
    GeneralStore.size = 'tiny'
    warmthRoll += 30
  }
  GeneralStore.roll.warmth = warmthRoll // set warmth roll
  // attributes for store
  const attributes = {
    warmth: [
      [80, 'swelteringly hot'],
      [70, 'extremely warm'],
      [60, 'uncomfortably warm'],
      [50, 'nice and toasty'],
      [40, 'quite warm'],
      [30, 'warm'],
      [20, 'mild'],
      [0, 'cold']
    ].reverse(),

    cleanliness: [
      [80, 'fastidious'],
      [70, 'very tidy'],
      [60, 'tidy'],
      [50, 'reasonably tidy'],
      [40, 'somewhat messy'],
      [30, 'rather messy'],
      [20, 'very messy'],
      [0, 'filthy']
    ].reverse(),

    expertise: [
      [80, 'masterful'],
      [70, 'exceptional'],
      [60, 'superior quality'],
      [50, 'finely-crafted'],
      [40, 'well-crafted'],
      [30, 'somewhat well made'],
      [20, 'somewhat amateur'],
      [20, 'blatantly amateur']
    ].reverse(),

    activity: [
      [80, 'extremely busy'],
      [70, 'very busy'],
      [60, 'rather busy'],
      [50, 'reasonably busy'],
      [40, 'not terribly busy'],
      [30, 'not busy'],
      [20, 'rather quiet'],
      [0, 'very quiet']
    ].reverse()
  }
  // actually add attributes to store object
  for (const key of attributes) {
    const array = attributes[key]
    GeneralStore[key] = array[0][1] // default value
    for (const [num, descript] of array) { // update value
      if (GeneralStore.roll[key] > num) {
        GeneralStore[key] = descript
      }
    }
  }

  return GeneralStore
}
