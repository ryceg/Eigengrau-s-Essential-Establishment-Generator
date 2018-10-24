setup.getPoliticalSourceDescription = function (town) {
  if (town.politicalSource === 'absolute monarchy' || town.politicalSource === 'constitutional monarchy') {
    if (town.politicalIdeology === 'autocracy') {
      return setup.townData.politicalSource[town.politicalSource].autocracy.politicalSourceDescription
    } else {
      return setup.townData.politicalSource[town.politicalSource].default.politicalSourceDescription
    }
  } else {
    return setup.townData.politicalSource[town.politicalSource].politicalSourceDescription
  }
}

setup.getEconomicIdeologyDescription = function (town) {
  return setup.townData.economicIdeology[town.economicIdeology].economicIdeologyDescription
}
