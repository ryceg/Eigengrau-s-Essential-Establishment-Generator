setup.findBuilding = (town, key, returnIndex) => {
  console.log('Finding a building.')
  const building = lib.findInArray(town.buildings, 'key', key)
  // if (!building) {
  // console.log(`Couldn't find one with the key of ${key}! Checking for parents.`)
  // for (const item of town.buildings) {
  //   // search for nested buildings
  //   if (item.childKeys) {
  //     if (item.childKeys.indexOf(key) > -1) {
  //       const building = item
  //       return building
  //     }
  //   }
  // }
  // }
  if (returnIndex) {
    return lib.findIndexInArray(town.buildings, 'key', building.key)
  } else {
    return building
  }
}
