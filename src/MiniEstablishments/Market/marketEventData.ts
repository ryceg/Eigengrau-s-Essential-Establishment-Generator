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
      function (town) {
        const npc = createNPC(town, {
          profession: 'snake charmer'
        })
        return `${profile(npc, lib.articles.output('snake charmer').toUpperFirst())} is sitting on a small rug in the market playing a strange looking flute. In front of the snake charmer is a basket with a large cobra in it hypnotically swaying from side to side.`
      }
    },
    magicalWares: {
      function (town) {
        const npc = createNPC(town, {
          profession: 'merchant'
        })
        const magic = ['firing off miniature fireworks into the air', 'making items disappear into a ring', 'pulling items from seemingly thin air', 'casting a few weak cantrips', 'juggling a few brightly glowing orbs', 'modeling a cloak that looks as if it were wreathed in fire', 'drinking from a mug that is seemingly bottomless', 'pulling impossibly large things from a rather small bag']
        return `${profile(npc, lib.articles.output(npc.descriptor).toUpperFirst())} is showing of ${npc.hisher} magical wares by ${lib.random(magic)} to the amazement of a small crowd that has gathered around the stall.`
      }
    },
    accident: {
      function () {
        const produce = ['apples', 'carrots', 'melons', 'bananas', 'oranges', 'strawberries', 'plums', 'cabbages', 'dragonfruit']
        return `A large crash can be heard as the legs of a nearby produce stall collapse. An enormous amount of ${lib.random(produce)} scatter across the market as both the produce merchant and nearby visitors scramble to grab as many as they can.`
      }
    }
  }
}
