setup.tavernRooms = function (tavern) {
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
