setup.createBuildingRelationship = (town, building, npc, relationshipObj) => {
  // this can also be used for factions.
  if (!building || !npc || !relationshipObj) {
    console.error('Not enough parameters passed.')
  }
  let existingObj
  town.buildingRelations.find(obj => {
    if (obj.buildingKey === building.key && obj.npcKey === npc.key) {
      // if there is already an existing relationship between the two, test to see if the relationship needs updating
      Object.keys(relationshipObj).forEach(key => {
        obj[key] = relationshipObj[key]
      })
      existingObj = true
    }
  })
  if (!existingObj) {
    switch (typeof relationshipObj.description) {
      case 'function':
        town.buildingRelations.push({
          key: lib.getUUID(),
          buildingKey: building.key,
          npcKey: npc.key,
          relationship: relationshipObj.relationship,
          reciprocalRelationship: relationshipObj.reciprocalRelationship,
          description: relationshipObj.description(building, npc) || relationshipObj.description || null
        })
        break
      case 'string':
        town.buildingRelations.push({
          key: lib.getUUID(),
          buildingKey: building.key,
          npcKey: npc.key,
          relationship: relationshipObj.relationship,
          reciprocalRelationship: relationshipObj.reciprocalRelationship,
          description: relationshipObj.description || null
        })
        break
      default:
        town.buildingRelations.push({
          key: lib.getUUID(),
          buildingKey: building.key,
          npcKey: npc.key,
          relationship: relationshipObj.relationship,
          reciprocalRelationship: relationshipObj.reciprocalRelationship,
          description: relationshipObj.description || null
        })
    }
  }
}

setup.findBuildingRelationship = (town, building, npc) => {
  // If supplied just the building, it finds the indexes of all relationships with the building as the buildingKey
  // If supplied the npc, it finds the indexes of all with the npc as the npcKey
  // providing both will only find the index of that relationship
  console.groupCollapsed('findBuildingRelationship')
  if (!town) {
    console.error('Not enough parameters passed.')
  }
  const tempRelationships = town.buildingRelations
  let array = []
  if (building && npc) {
    array = tempRelationships.filter(obj =>
      obj.buildingKey === building.key && obj.npcKey === npc.key
    )
  } else if (building) {
    array = tempRelationships.filter(obj => obj.buildingKey === building.key
    )
  } else if (npc) {
    array = tempRelationships.filter(obj => obj.npcKey === npc.key
    )
  }
  console.log('array:')
  console.log(array)
  console.groupEnd()
  return array
}

setup.deleteBuildingRelationship = (town, building, npc) => {
  // deletes building relationships.
  const found = setup.findBuildingRelationship(town, building, npc)
  found.forEach(objectKey => {
    town.buildingRelations.splice(
      town.buildingRelations.findIndex(function (obj) {
        obj.some(obj => obj.key === objectKey)
      })
    )
  })
}
