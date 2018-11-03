setup.tavernRender = function (tavern) {
  var bartender = tavern.bartender
  if (tavern.wealthRoll > 95) {
    tavern.wealth = 'kingly'
    tavern.lodging = 800
    tavern.food = 400
  } else if (tavern.wealthRoll > 80) {
    tavern.wealth = 'aristocratic'
    tavern.lodging = 400
    tavern.food = 200
  } else if (tavern.wealthRoll > 70) {
    tavern.wealth = 'wealthy'
    tavern.lodging = 200
    tavern.food = 80
  } else if (tavern.wealthRoll > 60) {
    tavern.wealth = 'comfortable'
    tavern.lodging = 50
    tavern.food = 40
  } else if (tavern.wealthRoll > 50) {
    tavern.wealth = 'modest'
    tavern.lodging = 30
    tavern.food = 30
  } else if (tavern.wealthRoll > 25) {
    tavern.wealth = 'poor'
    tavern.lodging = 10
    tavern.food = 6
  } else if (tavern.wealthRoll <= 25) {
    tavern.wealth = 'squalid'
    tavern.lodging = 7
    tavern.food = 3
  }

  /* ------------------------- SIZE -------------------------- */
  
  if (tavern.sizeRoll > 80) {
    tavern.size = 'huge'
  } else if (tavern.sizeRoll > 70) {
    tavern.size = 'quite large'
  } else if (tavern.sizeRoll > 60) {
    tavern.size = 'large'
  } else if (tavern.sizeRoll > 50) {
    tavern.size = 'spacious'
  } else if (tavern.sizeRoll > 40) {
    tavern.size = 'medium'
  } else if (tavern.sizeRoll > 30) {
    tavern.size = 'slightly cramped'
  } else if (tavern.sizeRoll > 20) {
    tavern.size = 'small'
  } else if (tavern.sizeRoll <= 20) {
    tavern.size = 'tiny'
  }

  /* ------------------------- ROUGHNESS -------------------------- */

  if (tavern.roughnessRoll > 80) {
    tavern.roughness = 'bloodthirsty'
  } else if (tavern.roughnessRoll > 60) {
    tavern.roughness = 'rough'
  } else if (tavern.roughnessRoll > 50) {
    tavern.roughness = 'alright'
  } else if (tavern.roughnessRoll > 40) {
    tavern.roughness = 'placid'
  } else if (tavern.roughnessRoll > 30) {
    tavern.roughness = 'calm'
  } else if (tavern.roughnessRoll > 20) {
    tavern.roughness = 'tranquil'
  } else if (tavern.roughnessRoll <= 20) {
    tavern.roughness = 'utterly serene'
  }

  /* ------------------------- CLEANLINESS -------------------------- */

  if (tavern.cleanlinessRoll > 80) {
    tavern.cleanliness = 'absolutely spotless'
    tavern.bedCleanliness = 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'
  } else if (tavern.cleanlinessRoll > 70) {
    tavern.cleanliness = 'spotless'
    tavern.bedCleanliness = 'freshly cleaned and neat'
  } else if (tavern.cleanlinessRoll > 60) {
    tavern.cleanliness = 'hygienic'
    tavern.bedCleanliness = 'tidy and neat'
  } else if (tavern.cleanlinessRoll > 50) {
    tavern.cleanliness = 'decently hygienic'
    tavern.bedCleanliness = 'reasonably clean'
  } else if (tavern.cleanlinessRoll > 40) {
    tavern.cleanliness = 'slightly grubby'
    tavern.bedCleanliness = 'somewhat tidy'
  } else if (tavern.cleanlinessRoll > 30) {
    tavern.cleanliness = 'quite dirty'
    tavern.bedCleanliness = 'disgusting'
  } else if (tavern.cleanlinessRoll > 20) {
    tavern.cleanliness = 'rather filthy'
    tavern.bedCleanliness = 'teeming with rats'
  } else if (tavern.cleanlinessRoll <= 20) {
    tavern.cleanliness = 'absolutely putrid'
    tavern.bedCleanliness = 'festering with bugs'
  }

  /* ------------------------- SIN -------------------------- */

  if (tavern.sinRoll > 80) {
    tavern.sin = 'corrupt'
  } else if (tavern.sinRoll > 70) {
    tavern.sin = 'venal'
  } else if (tavern.sinRoll > 60) {
    tavern.sin = 'sleazy'
  } else if (tavern.sinRoll > 50) {
    tavern.sin = 'seedy'
  } else if (tavern.sinRoll > 40 && tavern.roughnessRoll > 60) {
    tavern.sin = 'surprisingly trustworthy'
  } else if (tavern.sinRoll > 40) {
    tavern.sin = 'trustworthy'
  } else if (tavern.sinRoll > 30 && tavern.roughnessRoll > 60) {
    tavern.sin = 'surprisingly reliable'
  } else if (tavern.sinRoll > 30) {
    tavern.sin = 'reliable'
  } else if (tavern.sinRoll <= 20 && tavern.roughnessRoll > 60) {
    tavern.sin = 'surprisingly honest'
  } else if (tavern.sinRoll <= 20) {
    tavern.sin = 'honest'
  } else {
    tavern.sin = 'reasonably trustworthy'
  }

  /* ------------------------- DIVERSITY -------------------------- */
  tavern.diversity = 'placeholder'
  // if (tavern.diversityRoll > 80) {
  //   tavern.diversity = 'a very diverse crowd, with no clear majority of one race'
  // } else if (tavern.diversityRoll > 70 && tavern.roughnessRoll > 70) {
  //   tavern.diversity = 'a rather diverse crowd, the only common factor being their love of weaponry'
  // } else if (tavern.diversityRoll > 70) {
  //   tavern.diversity = 'a rather diverse crowd'
  // } else if (tavern.diversityRoll > 60) {
  //   tavern.diversity = 'a pretty diverse crowd, the majority being ' + bartender.racePlural + ''
  // } else if (tavern.diversityRoll > 50) {
  //   tavern.diversity = 'a relatively diverse crowd, the majority being ' + bartender.racePlural + ''
  // } else if (tavern.diversityRoll > 40) {
  //   tavern.diversity = 'a pretty diverse crowd, most being ' + bartender.racePlural + ''
  // } else if (tavern.diversityRoll > 30 && tavern.roughnessRoll > 70) {
  //   tavern.diversity = bartender.racePlural + ", mostly, and it's clear that they like it that way"
  // } else if (tavern.diversityRoll > 30) {
  //   tavern.diversity = bartender.racePlural + ' for the most part'
  // } else if (tavern.diversityRoll > 20 && tavern.roughnessRoll > 70) {
  //   tavern.diversity = 'mostly ' + bartender.racePlural + ", and it's very obvious that they like it that way"
  // } else if (tavern.diversityRoll > 20) {
  //   tavern.diversity = 'mostly ' + bartender.racePlural + ''
  // } else if (tavern.diversityRoll <= 20 && tavern.roughnessRoll > 70) {
  //   tavern.diversity = 'almost all ' + bartender.racePlural + ', and they are extremely hostile to non-' + bartender.racePlural + ''
  // } else if (tavern.diversityRoll <= 20) {
  //   tavern.diversity = 'next to all are ' + bartender.racePlural + ''
  // }

  /* ------------------------- REPUTATION -------------------------- */

  if (tavern.reputationRoll > 80) {
    tavern.reputation = 'famous'
  } else if (tavern.reputationRoll > 60) {
    tavern.reputation = 'well known'
  } else if (tavern.reputationRoll > 40) {
    tavern.reputation = 'famous-ish'
  } else if (tavern.reputationRoll > 20) {
    tavern.reputation = 'reviled'
  } else if (tavern.reputationRoll <= 20) {
    tavern.reputation = 'infamous'
  }

  // default
  // if (tavern.hasBrawl === true) {
  //   tavern.drawFeature = setup.tavernBrawl(tavern)
  // } else if (tavern.guardPresent === true) {
  //   tavern.drawFeature = "There's a member of <<guard $guard>> chatting with a tavern patron."
  // } else {
  //   tavern.drawFeature = "There's two men sitting in the corner, very intent on a thumbwrestling match."
  // }

  return tavern
}
