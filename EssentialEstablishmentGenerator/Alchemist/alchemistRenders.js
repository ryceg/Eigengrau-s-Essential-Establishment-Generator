setup.alchemistRenders = function (alchemist) {
  if (alchemist.wealthRoll > 95) {
    alchemist.wealth = 'kingly'
  } else if (alchemist.wealthRoll > 80) {
    alchemist.wealth = 'aristocratic'
  } else if (alchemist.wealthRoll > 70) {
    alchemist.wealth = 'wealthy'
  } else if (alchemist.wealthRoll > 60) {
    alchemist.wealth = 'comfortable'
  } else if (alchemist.wealthRoll > 50) {
    alchemist.wealth = 'modest'
  } else if (alchemist.wealthRoll > 25) {
    alchemist.wealth = 'poor'
  } else if (alchemist.wealthRoll <= 25) {
    alchemist.wealth = 'squalid'
  }

  /* ------------------------- SIZE -------------------------- */
  if (alchemist.sizeRoll > 80) {
    alchemist.size = 'huge'
  } else if (alchemist.sizeRoll > 70) {
    alchemist.size = 'quite large'
  } else if (alchemist.sizeRoll > 60) {
    alchemist.size = 'large'
  } else if (alchemist.sizeRoll > 50) {
    alchemist.size = 'spacious'
  } else if (alchemist.sizeRoll > 40) {
    alchemist.size = 'medium'
  } else if (alchemist.sizeRoll > 30) {
    alchemist.size = 'slightly cramped'
  } else if (alchemist.sizeRoll > 20) {
    alchemist.size = 'small'
  } else if (alchemist.sizeRoll <= 20) {
    alchemist.size = 'tiny'
  }

  /* ------------------------- CLEANLINESS -------------------------- */

  if (alchemist.cleanlinessRoll > 80) {
    alchemist.cleanliness = 'fastidious'
  } else if (alchemist.cleanlinessRoll > 70) {
    alchemist.cleanliness = 'very tidy'
  } else if (alchemist.cleanlinessRoll > 60) {
    alchemist.cleanliness = 'tidy'
  } else if (alchemist.cleanlinessRoll > 50) {
    alchemist.cleanliness = 'reasonably tidy'
  } else if (alchemist.cleanlinessRoll > 40) {
    alchemist.cleanliness = 'somewhat messy'
  } else if (alchemist.cleanlinessRoll > 30) {
    alchemist.cleanliness = 'rather messy'
  } else if (alchemist.cleanlinessRoll > 20) {
    alchemist.cleanliness = 'very messy'
  } else if (alchemist.cleanlinessRoll <= 20) {
    alchemist.cleanliness = 'dangerously messy'
  }

  if (alchemist.expertiseRoll > 80) {
    alchemist.expertise = 'masterful'
  } else if (alchemist.expertiseRoll > 70) {
    alchemist.expertise = 'exceptional'
  } else if (alchemist.expertiseRoll > 60) {
    alchemist.expertise = 'superior quality'
  } else if (alchemist.expertiseRoll > 50) {
    alchemist.expertise = 'finely-crafted'
  } else if (alchemist.expertiseRoll > 40) {
    alchemist.expertise = 'well-crafted'
  } else if (alchemist.expertiseRoll > 30) {
    alchemist.expertise = 'somewhat well made'
  } else if (alchemist.expertiseRoll > 20) {
    alchemist.expertise = 'somewhat amateur'
  } else if (alchemist.expertiseRoll <= 20) {
    alchemist.expertise = 'blatantly amateur'
  }

  return alchemist
}
