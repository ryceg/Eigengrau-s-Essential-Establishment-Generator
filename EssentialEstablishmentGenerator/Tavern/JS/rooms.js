setup.tavernRooms = function (tavern) {
  switch (tavern.wealth) {
    case 'kingly':
      tavern.lodging = 800
      tavern.food = 400
      break
    case 'aristocratic':
      tavern.lodging = 400
      tavern.food = 200
      break
    case 'wealthy':
      tavern.lodging = 200
      tavern.food = 80
      break
    case 'comfortable':
      tavern.lodging = 50
      tavern.food = 40
      break
    case 'modest':
      tavern.lodging = 30
      tavern.food = 30
      break
    case 'poor':
      tavern.lodging = 10
      tavern.food = 6
      break
    case 'squalid':
      tavern.lodging = 7
      tavern.food = 3
      break
  }

  if (tavern.sizeRoll > 80) {
    tavern.freeRooms = random(6, 10)
  } else if (tavern.sizeRoll > 60) {
    tavern.freeRooms = random(5, 9)
  } else if (tavern.sizeRoll > 40) {
    tavern.freeRooms = random(4, 8)
  } else if (tavern.sizeRoll > 20) {
    tavern.freeRooms = random(3, 6)
  } else if (tavern.sizeRoll <= 20) {
    tavern.freeRooms = random(2, 4)
  }

  if (tavern.populationRoll > 80) {
    tavern.freeRooms -= 3
  } else if (tavern.populationRoll > 60) {
    tavern.freeRooms -= 2
  } else if (tavern.populationRoll > 40) {
    tavern.freeRooms -= 1
  } else if (tavern.populationRoll > 20) {
    tavern.freeRooms += 2
  } else if (tavern.populationRoll <= 20) {
    tavern.freeRooms += 3
  }

  return tavern.freeRooms
}
