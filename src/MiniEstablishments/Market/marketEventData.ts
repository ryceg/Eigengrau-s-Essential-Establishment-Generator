import type { Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'
import { profile } from '../../NPCGeneration/profile'

interface MarketEventData {
  event: Record<string, Event>
}
interface Event{
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
        const npc2 = createNPC(town)
        const merchantAction = ['grabbing the arm', 'tightly gripping the hand', 'kneeling on top', 'clutching a fistful of hair']
        const merchantThreat = ['cut off this rotten thief\'s hand', 'strangle this thief', 'lop of this thief\'s head', 'shave the thief bald', `take one of ${npc2.hisher} ears`, 'take a finger']
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is ${lib.random(merchantAction)} of ${profile(npc2, lib.articles.output(npc2.descriptor))} and loudly calling ${npc2.himher} a thief. The merchant is saying ${npc1.heshe} is going to ${lib.random(merchantThreat)} for ${npc2.hisher} crimes.`
      }
    },
    haggle: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        const npc2 = createNPC(town)
        const hagglingItem = ['pile of fish', 'piece of pottery', 'fine piece of art', 'cheap looking statue',
          'tattered looking map', 'dyed roll of cloth', 'pair of fleece leggings', 'checker patterned tunic', 'dusty old tome', 'pair of scrolls', 'fresh loaf of bread',
          'shiny green apple', 'large cheese wheel', 'caged owl', 'large tanned hide', 'small crate of torches', 'crude looking dagger', 'fine looking sword']
        const merchantStance = ['not budging on the price', `looking like ${npc1.heshe} is losing this deal`, 'telling the customer to kindly shove it', 'offering a discount for a favor', 'holding firm on the price', 'actually managing to haggle for an even higher price', 'looking rather haggard']
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is waving ${npc1.hisher} arms around in the air and curtly saying something to ${profile(npc2, lib.articles.output(npc2.descriptor))} who is holding a small bag of coins. The two appear to be haggling over the cost of ${lib.articles.output(lib.random(hagglingItem))}, and the merchant is ${lib.random(merchantStance)}.`
      }
    },
    chase: {
      function (town) {
        const npc1 = createNPC(town, {
          profession: 'merchant'
        })
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is waving ${npc1.hisher} fist in the air while running after a scrawny looking child. The merchant is yelling for someone to stop that theif.`
      }
    },
    animalEscape: {
      exclusions (town) {
        return !town.bans.includes('animals')
      },
      function () {
        const animal = ['bull', 'ox', 'lion', 'wolf', 'large boar', 'hippo', 'tiger', 'elephant', 'rhino', 'leapard', 'jaguar', 'hyena', 'grizzly bear', 'crocodile', 'alligator', 'killer bunny', 'giant scorpion', 'cougar', 'gorilla']
        const chase = ['single child', 'group of armed thugs', 'few town guards', 'angry merchant', 'distraught merchant', 'party of adventurers', 'group of mercenaries', 'few shabby looking kids']
        return `People around start to yell and shout as they realize ${lib.articles.output(lib.random(animal))} has escaped from its cage. The animal is going wild through the market as ${lib.articles.output(lib.random(chase))} chases after it.`
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
          hasClass: true,
          dndClass: 'bard'
        })
        const instrument = ['lute', 'pair of drumes', 'harp', 'flute', 'pan flute', 'sitar', 'fiddle', 'citern', 'vielle', 'clavichord', 'harpsichord']
        const playing = ['rather well', 'rather poorly', 'very loudly', 'quite softly', 'and it sounds pretty good', 'and it sounds bad', 'and it sounds alright']
        return `${profile(npc, lib.articles.output('bard').toUpperFirst())} is standing in a corner of the market playing ${lib.articles.output(lib.random(instrument))} ${lib.random(playing)}. Every once in a while a passerby throws a coin into a cap sitting in front of the bard.`
      }
    },
    snakeCharmer: {
      exclusions (town) {
        return !town.bans.includes('animals')
      },
      function (town) {
        const npc = createNPC(town, {
          profession: 'snake charmer'
        })
        return `${profile(npc, lib.articles.output('snake charmer').toUpperFirst())} is sitting on a small rug in the market playing a strange looking flute. In front of the snake charmer is a basket with a large cobra in it hypnotically swaying from side to side. Every so often an onlooker drops some coins into a bag in front of the snake.`
      }
    },
    magicalWares: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'merchant'
        })
        const magic = ['firing off miniature fireworks into the air', 'making items disappear into a ring', 'pulling items from seemingly thin air', 'casting a few weak cantrips', 'juggling a few brightly glowing orbs', 'modeling a cloak that looks as if it were wreathed in fire', 'drinking from a mug that is seemingly bottomless', 'pulling impossibly large things from a rather small bag']
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is showing off ${npc.hisher} magical wares by ${lib.random(magic)} to the amazement of a small crowd that has gathered around the stall.`
      }
    },
    accident: {
      function () {
        const produce = ['apples', 'carrots', 'melons', 'bananas', 'oranges', 'strawberries', 'plums', 'cabbages', 'dragonfruit']
        return `A large crash can be heard as the legs of a nearby produce stall collapse. An enormous amount of ${lib.random(produce)} scatter across the market as both the produce merchant and nearby visitors scramble to grab as many as they can.`
      }
    },
    hiredHand: {
      function () {
        return 'A nearby hired hand is quickly stocking the shelves of a market stall. In their haste they trip and spill a large crate of goods onto the floor. As they clamber to pick up all the wares, a few passersby grab some for themselves and run off.'
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
        const wares = ['knock off magical items', 'an assortment of different poisons', 'outlawed potion ingredients', 'cursed objects', 'illegally smuggled cheese wheels', 'blackmarket exotic animals', 'dangerous magical scrolls', 'knockoff designer brand chainmail', 'counterfeit currency', 'forged travel papers']
        return `${profile(npc1, lib.articles.output(npc1.descriptor).toUpperFirst())} is standing behind a ramshackle stall in a dark corner of the market beckoning people over. ${npc1.heshe.toUpperFirst()} appears to be selling goods of dubious origins such as ${lib.random(wares)}, and is clearly trying to keep transactions on the down low.`
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
          hasClass: false,
          profession: 'tourist',
          background: 'noble'
        })
        const goods = ['maps', 'cheese wheels', 'fried mutton', 'local art', 'pottery', 'merchant bags', 'apples', 'swords', 'erotic novels']
        const location = ['bathroom', 'library', 'tavern', 'brothel', 'stable', 'temple', 'general store', 'inn']
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is wandering about, looking very lost, and out of place with ${npc.hisher} wide brimmed hat and colourful shirt. ${npc.heshe.toUpperFirst()} is carrying a comically large amount of ${lib.random(goods)} in ${npc.hisher} arms. The ${npc.descriptor} seems to be asking people for directions to the nearest ${lib.random(location)}.`
      }
    }
  }
}
