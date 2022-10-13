
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { Town } from '../town/_common'
import { Road, roads } from './roads'
import { RoadType } from './RoadType'

export interface RoadData {
  name: RoadType
  /** This is distinct from the name- "you walk down the crescent" doesn't sound natural. A crescent is a type of road. */
  wordNoun: RoadType | 'cul-de-sac'
  probability: number
  width(): number
  hasTraffic?: boolean
  isDeadEnd?: boolean
  material?: string
  exclusions?(town: Town): boolean
  features?: string[]
  precedingText?(town: Town, road: Road): string
}

export const roadTypes: Record<RoadType, RoadData> = {
  street: {
    name: 'street',
    width () { return lib.random(0, 90) },
    probability: 8,
    wordNoun: 'street'
  },
  lane: {
    name: 'lane',
    width () { return lib.random(5, 40) },
    features: [
      'Houses lean over into the street on both sides, limiting the amount of sun that is visible.',
      'Laundry lines are strung between windows across the road.',
      'There is a table with a pitcher of water out the front of one of the houses.',
      'A swing hangs from a lone tree.'
    ],
    probability: 5,
    wordNoun: 'lane'
  },
  road: {
    name: 'road',
    probability: 10,
    width () { return lib.random(10, 90) },
    wordNoun: 'road',
    features: [
      'There is a large rock to the side of the road.',
      'The road has a groove along the middle designating which side people should travel on.',
      'The road has the occasional pothole.',
      'There are some potholes which litter the road.'
    ]
  },
  square: {
    name: 'square',
    width () { return lib.random(92, 99) },
    hasTraffic: false,
    wordNoun: 'square',
    probability: 2,
    features: [
      'It looks like the square is an excellent place to meet friends, with several tables set up in the middle for the public to use.',
      'The square has a handy map board in the middle, detailing where everything is.',
      'There is a statue of someone dead and important in the middle of the square.',
      'There are the occasional street sellers hawking their goods in the square.'
    ],
    precedingText (town: Town, road: Road) {
      const text = [
        {
          function () { return `<<profile '${road.key}'>> houses` }
        },
        {
          function () { return `The former site of a building, the now clear <<profile '${road.key}'>> is home to` }
        },
        {
          function () { return `There's a nice little square, <<profile '${road.key}'>>, where there is` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  way: {
    name: 'way',
    probability: 2,
    width () { return lib.random(0, 80) },
    wordNoun: 'road'
  },
  crescent: {
    name: 'crescent',
    width () { return lib.random(40, 80) },
    probability: 1,
    wordNoun: 'road',
    features: [
      'A row of houses and buildings is splayed out, with enough room for a horse and cart to turn around.',
      'An arch of houses is punctuated by a single large tree in between them, with a picnic table beneath it.'
    ],
    precedingText (town: Town, road: Road) {
      const isTheRoad = lib.random([
        `is the ${road.wordNoun} <<profile '${road.key}'>>. On it is`,
        `is the ${road.wordNoun} <<profile '${road.key}'>>, on which is`,
        `is the ${road.wordNoun} <<profile '${road.key}'>>, where there is`
      ])
      const text = [
        {
          function () { return `Further into the residential area ${isTheRoad}` }
        },
        {
          function () { return `At the bottom of a hill ${isTheRoad}` }
        },
        {
          function () { return `At the top of a small hill ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  close: {
    name: 'close',
    isDeadEnd: true,
    width () { return lib.random(40, 80) },
    probability: 2,
    wordNoun: 'cul-de-sac',
    precedingText (town: Town, road: Road) {
      const isTheRoad = lib.random([
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Just near the end of the road is`,
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Perhaps twenty paces from the end of it is`,
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Near the end is`
      ])
      const text = [
        {
          function () { return `The street <<profile '${road.key}'>> comes to an abrupt end, terminating in` }
        },
        {
          function () { return `At the bottom of a hill ${isTheRoad}` }
        },
        {
          function () { return `At the top of a small hill ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  wynd: {
    name: 'wynd',
    width () { return lib.random(30) },
    hasTraffic: false,
    probability: 1,
    wordNoun: 'road',
    precedingText (town: Town, road: Road) {
      const isTheRoad = lib.random([
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Just near the end of the road is`,
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Perhaps twenty paces from the end of it is`,
          `is the ${road.wordNoun} <<profile '${road.key}'>>. Near the end is`
      ])
      const text = [
        {
          function () { return `The road <<profile '${road.key}'>> twists around, with many turns. On the side is` }
        },
        {
          function () { return `The road <<profile '${road.key}'>> is quite windy indeed. Nestled in between a bend is` }
        },
        {
          function () { return `Snaking along ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  row: {
    name: 'row',
    probability: 1,
    width () { return lib.random(0, 80) },
    wordNoun: 'road',
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `<<profile '${road.key}'>> is home to` }
        },
        {
          function () { return `Slightly further afield is <<profile '${road.key}'>>, where there is` }
        },
        {
          function () { return `Running parallel to other roads ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  dyke: {
    name: 'dyke',
    width () { return lib.random(0, 60) },
    features: [
      'The land on either side is rather soggy and prone to being water-logged.',
      'Weeds grow rampant along the sides of the road, fed by the water running off to the sides.'
    ],
    probability: 1,
    wordNoun: 'road'
  },
  avenue: {
    name: 'avenue',
    width () { return lib.random(40, 80) },
    features: [
      'A line of trees dots the sides.',
      'A couple of sad looking trees dot the sides of the road.',
      'Wrought iron oil-burning street lamps illuminate the broad avenue well into the late evening hours.'],
    probability: 1,
    wordNoun: 'road',
    precedingText (town: Town, road: Road) {
      const text = [
        {
          function () { return `<<profile '${road.key}'>> is a nice looking street, which houses` }
        },
        {
          function () { return `There's a couple houses along <<profile '${road.key}'>>, and nestled in between them is` }
        },
        {
          function () { return `There's an island in the middle of <<profile '${road.key}'>>, where there is` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  alley: {
    name: 'alley',
    width () { return lib.random(0, 40) },
    features: [
      'There is a pile of rotten logs to the side.',
      'Several barrels are stacked haphazardly.',
      'There are some vegetable scraps that have clearly been dumped out of a window',
      'There are some empty alcohol bottles on the ground.'
    ],
    hasTraffic: false,
    probability: 1,
    wordNoun: 'alley',
    exclusions (town: Town) { return town.population > 4000 },
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `<<profile '${road.key}'>> is a relatively shady looking alleyway, which houses` }
        },
        {
          function () { return `Running alongside two rows of buildings is <<profile '${road.key}'>>. One of the spaces is filled by` }
        },
        {
          function () { return `There's a little alley, which ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  drive: {
    name: 'drive',
    features: [
      'There is a nice looking house at the end of the road.',
      'There is a collection of three slightly larger than average houses bundled at the end of the drive.'
    ],
    width () { return lib.random(40, 80) },
    probability: 1,
    wordNoun: 'road',
    isDeadEnd: true,
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `<<profile '${road.key}'>> looks to be residential. There is, however, ` }
        },
        {
          function () { return `There's a couple houses along <<profile '${road.key}'>>, and nestled in between them is` }
        },
        {
          function () { return `There's a little dead end for houses, which ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  boulevard: {
    name: 'boulevard',
    width () { return lib.random(50, 90) },
    features: [
      'There is a median through the middle of the road.',
      'Trees are planted along the sides.'
    ],
    probability: 1,
    wordNoun: 'road',
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `Off a junction is <<profile '${road.key}'>>, where there is` }
        },
        {
          function () { return `A side street in the ${town.type} leads to another, which in turn ${isTheRoad}` }
        },
        {
          function () { return `There's a clear space in ${town.name}, which ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  plaza: {
    name: 'plaza',
    width () { return lib.random(50, 90) },
    probability: 1,
    wordNoun: 'road',
    features: [
      'There are some street sellers hawking their wares in the plaza.',
      'There\'s a well in the centre of the plaza.'
    ],
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `In the heart of the ${town.type} is <<profile '${road.key}'>>, where there is` }
        },
        {
          function () { return `In the centre of the ${town.type} ${isTheRoad}` }
        },
        {
          function () { return `There's a clear space in ${town.name}, which ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  track: {
    name: 'track',
    width () { return lib.random(0, 50) },
    probability: 1,
    material: 'dirt',
    wordNoun: 'track',
    features: [
      'It\'s obvious that this track is shared by some of the local wildlife as well.',
      'There\'s some native plants growing along the side of the track.',
      'There are some edible native fruits growing on the side of the track.',
      'It\'s a desire path, which has been trodden into submission.'
    ],
    exclusions (town: Town) { return town.population < 500 },
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `Further out of the ${town.type} is <<profile '${road.key}'>>, where there is` }
        },
        {
          function () { return `Out of the ${town.type} proper ${isTheRoad}` }
        },
        {
          function () { return `At the top of a small hill outside of ${town.name} ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  },
  trail: {
    name: 'trail',
    width () { return lib.random(0, 40) },
    probability: 1,
    material: 'dirt',
    wordNoun: 'trail',
    features: [
      'There are some animal droppings on the trail.',
      'There\'s a half-rotted rabbit which clearly met an untimely demise that has been kicked to the side of the trail.',
      'There is a tiny little skeleton of some small mammal buried in the grass.',
      'The weeds are thick, and in parts it is difficult to actually discern where the trail is.',
      'The weeds threaten to overthrow the trail\'s relative order.'
    ],
    exclusions (town: Town) { return town.population < 500 },
    precedingText (town: Town, road: Road) {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `Further out of the ${town.type} is <<profile '${road.key}'>>, where there is` }
        },
        {
          function () { return `Out of the ${town.type} proper ${isTheRoad}` }
        },
        {
          function () { return `At the top of a small hill outside of ${town.name} ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')

      lib.assert(typeof result === 'string', 'Result of road text should be a string!')
      return result
    }
  }
}
