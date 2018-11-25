// setup.createRooms = function (building) {
//   var room = []
//   if (building.floorPlan === 1) {
//     room.push('all in one')
//   } else if (building.floorPlan === 2) {
//     room.push(createBedroom(building))
//   }
//
//   function createBedroom (building) {
//     var bedroom = {
//       environment: [],
//       atmosphere: [],
//       senses: []
//     }
//     var roomSizeModifier = building.roll.size - 50
//     var roomSizeRoll = Math.fm(dice(2, 50), roomSizeModifier)
//     var roomCleanlinessModifier = building.roll.cleanliness - 50
//     var roomCleanlinessRoll = Math.fm(dice(2, 50), roomCleanlinessModifier)
//     if (roomSizeRoll > 80) {
//       bedroom.size = 'huge'
//     } else if (roomSizeRoll > 70) {
//       bedroom.size = 'quite large'
//     } else if (roomSizeRoll > 60) {
//       bedroom.size = 'large'
//     } else if (roomSizeRoll > 50) {
//       bedroom.size = 'spacious'
//     } else if (roomSizeRoll > 40) {
//       bedroom.size = 'average sized'
//     } else if (roomSizeRoll > 30) {
//       bedroom.size = 'slightly cramped'
//     } else if (roomSizeRoll > 20) {
//       bedroom.size = 'small'
//     } else if (roomSizeRoll <= 20) {
//       bedroom.size = 'tiny'
//     }
//
//     if (roomCleanlinessRoll > 80 && building.roll.wealth > 70) {
//       bedroom.environment.push([
//         'This is a large and open bedroom, with a nice ornamental vase sitting on a table in the corner.',
//         'The bedroom is quite large, and is extremely well cleaned.',
//         'The room has a bed on the floor, and a fireplace nearby.'
//       ].random())
//       bedroom.atmosphere.push([
//         "There's the scent of lemon in the air.",
//         "The smell of a recently extinguished scented candle permeates the air."
//       ].random())
//     } else if (roomCleanlinessRoll > 70 && building.roll.wealth > 70) {
//       bedroom.environment.push([
//         'This is a rather large and open bedroom, with a nice ornamental vase sitting on a table in the corner.',
//         'The bedroom is quite large, and is well cleaned.',
//         'This large room has a bed on the floor, and a fireplace nearby. Despite the valiant cleaning attempts, there is still a bit of ash on the floor.'
//       ].random())
//     } else if (roomCleanlinessRoll > 60 && building.roll.wealth > 70) {
//       bedroom.environment.push([
//         'This is a large bedroom, with a nice ornamental vase sitting on a table in the corner.',
//         'The bedroom is quite large, and is reasonably well cleaned.',
//         'This large room has a bed on the floor, and a fireplace nearby. Despite the valiant cleaning attempts, there is still a fair bit of ash on the floor.'
//       ].random())
//     } else if (roomCleanlinessRoll > 50 && building.roll.wealth > 70) {
//       bedroom.environment.push([
//         'This is a spacious bedroom, with a nice ornamental vase sitting on a table in the corner.',
//         'The bedroom is relatively spacious, and some attempts at sweeping the floor have been made.',
//         'The room has a bed on the floor, and a fireplace nearby. Despite the cleaning attempts, there is still ash on the floor.'
//       ].random())
//     }
//     bedroom.senses.push([
//       "There's the slight smell of urine which clings to your nostrils.",
//       'A light breeze wafts through the building.'
//     ].random())
//
//     return bedroom
//   }
//   return rooms
// }
