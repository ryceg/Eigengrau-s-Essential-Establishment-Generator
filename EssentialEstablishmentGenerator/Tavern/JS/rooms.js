setup.tavernRooms = function (tavern) {
  if (tavern.roll.size > 80) {
    tavern.freeRooms = random(6, 10)
  } else if (tavern.roll.size > 60) {
    tavern.freeRooms = random(5, 9)
  } else if (tavern.roll.size > 40) {
    tavern.freeRooms = random(4, 8)
  } else if (tavern.roll.size > 20) {
    tavern.freeRooms = random(3, 6)
  } else if (tavern.roll.size <= 20) {
    tavern.freeRooms = random(2, 4)
  }

  if (tavern.roll.population > 80) {
    tavern.freeRooms -= 3
  } else if (tavern.roll.population > 60) {
    tavern.freeRooms -= 2
  } else if (tavern.roll.population > 40) {
    tavern.freeRooms -= 1
  } else if (tavern.roll.population > 20) {
    tavern.freeRooms += 2
  } else if (tavern.roll.population <= 20) {
    tavern.freeRooms += 3
  }

  return tavern.freeRooms
}
