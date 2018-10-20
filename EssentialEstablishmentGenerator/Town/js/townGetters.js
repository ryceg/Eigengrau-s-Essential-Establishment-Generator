setup.getPoliticalSourceDescription = function (town) {
  return setup.townData.politicalSource[town.politicalSource].autocracy.politicalSourceDescription ||
  setup.townData.politicalSource[town.politicalSource].default.politicalSourceDescription ||
  setup.townData.politicalSource[town.politicalSource].politicalSourceDescription ||
  setup.townData.politicalSource['republic'].politicalSourceDescription
}

setup.getEconomicIdeologyDescription = function (town) {
  return setup.townData.economicIdeology[town.economicIdeology].economicIdeologyDescription
}
