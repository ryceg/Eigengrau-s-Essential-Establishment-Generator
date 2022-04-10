import { ThresholdTable, Town, wageVariation } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'
import { profile } from '../../Tools/profile'

interface MarketEventData {
  event: Record<string, Event>
}
interface Event {
  exclusions?(town: Town): boolean
  function(town: Town): string
}
export const marketEvent: MarketEventData = {
  event: {
    thief: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        const npc2 = createNPC(town, {
          professionSector: 'crime'
        })
        const merchantAction = lib.random(['grabbing the arm', 'tightly gripping the hand', 'kneeling on top', 'clutching a fistful of hair'])
        const merchantThreat = lib.random(['cut off this rotten thief\'s hand', 'strangle this thief', 'lop of this thief\'s head', 'shave the thief bald', `take one of ${npc2.hisher} ears`, 'take a finger'])
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is ${merchantAction} of ${profile(npc2, lib.articles.output(npc2.descriptor))} and loudly calling ${npc2.himher} a thief. The merchant is saying ${npc1.heshe} is going to ${merchantThreat} for ${npc2.hisher} crimes.`
      }
    },
    haggle: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        const npc2 = createNPC(town)
        const hagglingItem = lib.random(['pile of fish', 'piece of pottery', 'fine piece of art', 'cheap looking statue',
          'tattered looking map', 'dyed roll of cloth', 'pair of fleece leggings', 'checker patterned tunic', 'dusty old tome', 'pair of scrolls', 'fresh loaf of bread',
          'shiny green apple', 'large cheese wheel', 'caged owl', 'large tanned hide', 'small crate of torches', 'crude looking dagger', 'fine looking sword'])
        const merchantStance = lib.random(['not budging on the price', `looking like ${npc1.heshe} is losing this deal`, 'telling the customer to kindly shove it', 'offering a discount for a favor', 'holding firm on the price', 'actually managing to haggle for an even higher price', 'looking rather haggard'])
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is waving ${npc1.hisher} arms around in the air and curtly saying something to ${profile(npc2, lib.articles.output(npc2.descriptor))} who is holding a small bag of coins. The two appear to be haggling over the cost of ${lib.articles.output(hagglingItem)}, and the merchant is ${merchantStance}.`
      }
    },
    chase: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is waving ${npc1.hisher} fist in the air while running after a scrawny looking child. The merchant is yelling for someone to stop that thief.`
      }
    },
    animalEscape: {
      exclusions (town) {
        return !town.bans.includes('animals')
      },
      function () {
        const animal = lib.random(['bull', 'ox', 'lion', 'wolf', 'large boar', 'hippo', 'tiger', 'elephant', 'rhino', 'leapard', 'jaguar', 'hyena', 'grizzly bear', 'crocodile', 'alligator', 'killer bunny', 'giant scorpion', 'cougar', 'gorilla'])
        const chase = lib.random(['single child', 'group of armed thugs', 'few town guards', 'angry merchant', 'distraught merchant', 'party of adventurers', 'group of mercenaries', 'few shabby looking kids'])
        return `People around start to yell and shout as they realize ${lib.articles.output(animal)} has escaped from its cage. The animal is going wild through the market as ${lib.articles.output(chase)} chases after it.`
      }
    },
    brawl: {
      function (town) {
        const npc1 = createNPC(town)
        const npc2 = createNPC(town)
        return `A crowd has gathered near the center of the market to watch a brawl that has broken out. ${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is in the center of the crowd currently holding ${profile(npc2, lib.articles.output(npc2.descriptor))} in a headlock and shouting something that can't be made out.`
      }
    },
    music: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'bard'
        })
        const instrument = lib.random(['lute', 'pair of drumes', 'harp', 'flute', 'pan flute', 'sitar', 'fiddle', 'citern', 'vielle', 'clavichord', 'harpsichord'])
        const sounding: ThresholdTable = [
          [25, 'and it sounds absolutely amazing'],
          [20, 'and it sounds great'],
          [10, 'and it sounds pretty good'],
          [0, 'quite loudly'],
          [-5, 'quite softly'],
          [-10, 'and it sounds pretty bad'],
          [-15, 'and it sounds very bad'],
          [-25, 'and it sounds like two cats having a fight']
        ]

        const skill = sounding.find(desc => {
          return desc[0] >= wageVariation(town, npc)
        })
        const note = skill || 'and it sounds kinda funky'
        return `${profile(npc, lib.articles.output('A bard'))} is standing in a corner of the market playing ${lib.articles.output(instrument)} ${note}. Every once in a while a passerby throws a coin into a cap sitting in front of the bard.`
      }
    },
    snakeCharmer: {
      exclusions (town) {
        return !town.bans.includes('animals')
      },
      function (town) {
        const npc = createNPC(town, {
          profession: 'performer'
        })
        return `${profile(npc, 'A snake charmer')} is sitting on a small rug in the market playing a strange looking flute. In front of the snake charmer is a basket with a large cobra in it hypnotically swaying from side to side. Every so often an onlooker drops some coins into a bag in front of the snake.`
      }
    },
    magicalWares: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'merchant'
        })
        const magic = lib.random(['firing off miniature fireworks into the air', 'making items disappear into a ring', 'pulling items from seemingly thin air', 'casting a few weak cantrips', 'juggling a few brightly glowing orbs', 'modeling a cloak that looks as if it were wreathed in fire', 'drinking from a mug that is seemingly bottomless', 'pulling impossibly large things from a rather small bag'])
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is showing off ${npc.hisher} magical wares by ${magic} to the amazement of a small crowd that has gathered around the stall.`
      }
    },
    accident: {
      function () {
        const produce = lib.random(['apples', 'carrots', 'melons', 'bananas', 'oranges', 'strawberries', 'plums', 'cabbages', 'dragonfruit'])
        return `A large crash can be heard as the legs of a nearby produce stall collapse. An enormous amount of ${produce} scatter across the market as both the produce merchant and nearby visitors scramble to grab as many as they can.`
      }
    },
    hiredHand: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'merchant'
        })
        return `A nearby ${profile(npc, 'hired hand')} is quickly stocking the shelves of a market stall. In their haste they trip and spill a large crate of goods onto the floor. As they clamber to pick up all the wares, a few passersby grab some for themselves and run off.`
      }
    },
    merchantFight: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        const npc2 = createNPC(town, {
          profession: 'merchant'
        })
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is waving ${npc1.hisher} arms at ${profile(npc2, lib.articles.output(npc2.descriptor))} and shouting angrily. The two seem to be having a dispute over the placement of each other's market stalls.`
      }
    },
    illegalWares: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        const wares = lib.random(['knock off magical items', 'an assortment of different poisons', 'outlawed potion ingredients', 'cursed objects', 'illegally smuggled cheese wheels', 'blackmarket exotic animals', 'dangerous magical scrolls', 'knockoff designer brand chainmail', 'counterfeit currency', 'forged travel papers'])
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is standing behind a ramshackle stall in a dark corner of the market beckoning people over. ${npc1.heshe.toUpperFirst()} appears to be selling goods of dubious origins such as ${wares}, and is clearly trying to keep transactions on the down low.`
      }
    },
    crushed: {
      function (town) {
        const npc = createNPC(town)
        return `A loud crash echoes through the market as a nearby wagon full of cargo crates topples over. Several of the crates crash down on ${profile(npc, lib.articles.output(npc.descriptor))} and pin them down. Onlookers cry out for help as the person struggles beneath the weight of the cargo containers.`
      }
    },
    carriage: {
      exclusions (town) {
        return town.population > 500
      },
      function () {
        return 'An incredibly fancy looking carriage is rolling through the market with armed guards that are warning people to move out of the way. A second smaller carriage with an open top is following behind the first, and it is stuffed to the brim with expensive looking wares.'
      }
    },
    tourist: {
      exclusions (town) {
        return town.population > 500 && town.roll.wealth > 20
      },
      function (town) {
        const npc = createNPC(town, {
          profession: 'tourist',
          background: 'noble'
        })
        const goods = lib.random(['maps', 'cheese wheels', 'fried mutton', 'local art', 'pottery', 'merchant bags', 'apples', 'swords', 'erotic novels'])
        const location = lib.random(['bathroom', 'library', 'tavern', 'brothel', 'stable', 'temple', 'general store', 'inn'])
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is wandering about, looking very lost, and out of place with ${npc.hisher} wide brimmed hat and colourful shirt. ${npc.heshe.toUpperFirst()} is carrying a comically large amount of ${goods} in ${npc.hisher} arms. The ${npc.descriptor} seems to be asking people for directions to the nearest ${location}.`
      }
    },
    doomsayer: {
      exclusions (town) {
        return town.roll.wealth > 20
      },
      function (town) {
        const npc = createNPC(town, {
          ageStage: 'elderly',
          background: 'commoner',
          profession: 'town crier'
        })
        const prediction = lib.random(['the world was going to end', `the ${town.type} was going to be swallowed by the earth`, 'a famine was going to sweep across the land', 'the town was going to burn to the ground', 'magic was going to cease to exist', 'the sky was going to fall on us all', 'the oceans were going to dry up', 'all the trees were going to wilt and die', 'swarms of locust were going to descend on the land', 'the whole world was going to flood'])
        return `An exasperated ${profile(npc, `haggard old ${npc.manwoman}`)} is trying to convince passerby’s that god had told ${npc.himher} ${prediction}. ${npc.heshe.toUpperFirst()}’s not entirely sure what ${npc.heshe} is supposed to do about it.`
      }
    },
    guardHunt: {
      function (town) {
        const npc1 = createNPC(town, {
          background: 'commoner',
          profession: 'guard'
        })
        const npc2 = createNPC(town, {
          professionSector: 'crime'
        })
        return `A ${profile(npc1, 'guard')} is walking through the market showing off a wanted poster with an image of ${profile(npc2, lib.articles.output(npc2.descriptor))}. The guard seems to be questioning shoppers about their knowledge of the person on the poster.`
      }
    },
    samples: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'cook'
        })
        const sample = lib.random(['fried lamb', 'mountain oysters', 'octopus balls', 'pig intestines', 'smoked mutton', 'pickled turnips', 'blueberry muffins', 'eel tongue'])
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is walking through the crowds offering up free samples of ${sample} and gesturing towards ${npc.hisher} stall in the market.`
      }
    },
    juggle: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'merchant'
        })
        const produce = lib.random(['watermelon', 'apples', 'oranges', 'grapefruit', 'potatoes', 'cabbages'])
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} comes out from behind ${npc.hisher} produce stall and begins to juggle several ${produce} in an attempt to bring in more customers.`
      }
    }
  }
}
