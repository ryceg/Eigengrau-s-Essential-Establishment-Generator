import { constrainRecord } from '../src/constrainRecord'
import { RollArray } from '../src/defineRollDataGetter'

interface RollData {
  description: string;
  preceding: string;
  rolls?: RollArray
}

export const docksRollData = constrainRecord<RollData>()({
  cleanliness: {
    description: 'How clean are the docks?',
    preceding: 'Dock Cleanliness:',
    rolls: [
      [80, 'quite clean', 'spotless, save for a couple splashes of sea water'],
      [70, 'safe, if smelly', 'quite tidy, if you can stand the smell'],
      [50, 'relatively tidy', 'reasonably clean, with the occasional rope laying about posing a tripping hazard'],
      [40, 'crusty and dirty', 'crusted with sea water and barnacles cling to the supports'],
      [30, 'seaweed infested', 'marred with seaweed and a slippery mess. It smells disgusting, too'],
      [0, 'disgustingly slimy', 'disgusting. All types of moulds, algae, and other unspeakably slimy things are on display here.']
    ]
  },
  size: {
    description: 'How large are the docks?',
    preceding: 'Dock Size:',
    rolls: [
      [90, 'large and sprawling', 'huge; it sprawls across the body of water, as far as the eye can see'],
      [80, 'large', 'large. It has the space and equipment to accommodate a fleet of ships'],
      [60, 'big', 'big, with space to accommodate several galleons'],
      [50, 'accommodating', 'average sized, with room enough for a fair few ships'],
      [40, 'geared towards smaller vessels', 'on the small size; it is geared towards fishing vessels, but has the capacity for larger ships if needed'],
      [30, 'small', 'small, and clearly geared towards smaller vessels such as fishing ships. You could probably fit a large ship in, if you were lucky'],
      [20, 'pretty small', 'quite small, with room for fishing ships and little else'],
      [0, 'glorified jetty', 'tiny; barely more than a glorified jetty']
    ]
  },
  activity: {
    description: 'How busy is the docks at the moment?',
    preceding: 'Dock Activity:',
    rolls: [
      [100, 'packed to the gills; you have trouble moving through some parts of the harbor due to the throngs of seafarers crowding the place'],
      [90, [
        'absolutely packed; the din of everyone shouting to one another to fetch another barrel and other such things makes the place feel alive',
        'absolutely packed; the din of everyone shouting to one another to haul in the fish off the boat and other such things makes the place feel alive',
        'absolutely packed; the din of everyone shouting to one another to get off their asses and shift this pile of rope and other such things makes the place feel alive'
      ]],
      [80, [
        'bustling. There are all manners of folk walking around, all of whom have places to be',
        'bustling. Several ships seem to be currently unloading and crowds are beginning to fill the street'
      ]],
      [70, 'reasonably busy, with a couple folks milling about, waiting for a ship to dock'],
      [60, [
        'busy, with lots of deckhands running about, lugging things from point A to point B',
        'busy, with several large makeshift fish markets crowding the docks drawing in all kinds of crowds'
      ]],
      [50, 'reasonably busy, with a decent amount of activity'],
      [40, 'relatively quiet, with some fishermen getting ready to head out on a trip'],
      [30, 'pretty quiet, save for the gulls which are swooping around, eager to steal any unattended bread'],
      [20, 'very quiet. There is next to nobody around'],
      [10, 'rather peaceful, the silence only disturbed by the gentle lapping of water against rocks'],
      [0, [
        'deathly silent, save for the gentle sounds of the water lapping against the docks',
        'empty, save for a lone fisherman sitting and watching his lure bob up and down in the waves'
      ]]
    ]
  }
})
