setup.tavernRooms = function (tavern) {
  let freeRooms

  if (tavern.roll.size > 80) {
    freeRooms = random(6, 10)
  } else if (tavern.roll.size > 60) {
    freeRooms = random(5, 9)
  } else if (tavern.roll.size > 40) {
    freeRooms = random(4, 8)
  } else if (tavern.roll.size > 20) {
    freeRooms = random(3, 6)
  } else if (tavern.roll.size <= 20) {
    freeRooms = random(2, 4)
  }

  if (tavern.roll.population > 80) {
    freeRooms -= 3
  } else if (tavern.roll.population > 60) {
    freeRooms -= 2
  } else if (tavern.roll.population > 40) {
    freeRooms -= 1
  } else if (tavern.roll.population > 20) {
    freeRooms += 2
  } else if (tavern.roll.population <= 20) {
    freeRooms += 3
  }

  return freeRooms
}
