import { GeneralStore } from './_common'
import { flora } from '../src/flora'
import { random } from '../src/random'
import { articles } from '../src/articles'
import { colours } from '../src/colours'
import { ThresholdTable } from '../src/rollFromTable'
import { constrainArray, constrainRecord } from '../src/constrainRecord'
import { Customer } from '../customer'

interface RollData {
  description: string
  preceding: string
  isHidden?: true
  rolls?: ThresholdTable
}

export const generalStore = {
  goods: {
    'food staples': ['beans', 'milk', 'flour', 'oil', 'butter'],
    'tools': ['hammers', 'nails', 'wood', 'quills', 'rope'],
    'luxuries': ['honey', 'chocolate'],
    'fabrics': ['backpacks', 'canvas', 'thread', 'down feathers'],
    'cleaning supplies': ['rags', 'soap', 'brushes', 'lye', 'salt']
  },
  crud: [
    'rusty knives',
    'dull knives',
    'mismatched armor',
    'shattered shields',
    'tattered leather armor',
    'wooden practice swords',
    'broken swords',
    'axe handles',
    'arrowheads',
    'goose feathers',
    'turkey feathers',
    'dulled spear points',
    'worn-out hammers',
    'steel nails',
    'rusted hinges',
    'broken doorknobs',
    'assorted keys',
    'empty glass bottles',
    'broken glass',
    'empty cans',
    'blank parchment',
    'lists and inventories',
    'legal case files',
    'decaying books',
    'extra copies of a useless book',
    'dried-up ink wells',
    'used quills',
    'empty glass vials',
    'cork vial stoppers',
    'discarded alchemical laboratory equipment',
    'incomprehensible notes on alchemy',
    'grocery lists and recipes',
    'hand-written memoir of an ineffective bureaucrat',
    'collection of of sappy love letters',
    'crumbling sheet music',
    'broken musical instruments',
    'spare brass parts',
    'scrap copper',
    'old dried fish',
    'human bones',
    'some unidentifiable bones',
    'teeth',
    'blood-soaked rags',
    'oily rags',
    'tattered banners',
    'tattered sails',
    'winches and pulleys',
    'some frayed rope',
    'a length of chain in an impossible knot',
    'dented helms',
    'assorted strips of leather',
    'wood chips',
    'iron filings',
    'steel slag',
    'ant-ridden flour',
    'maggot-ridden meat',
    'mold-covered cheese',
    'bottles of over-ripe wine',
    'ceramic mugs',
    'glass mugs',
    'plates and bowls',
    'low-end steel cutlery',
    "some old children's clothes",
    "worn-out children's shoes",
    'boots with holes',
    "well-worn men's clothes",
    'moth-eaten dresses',
    'broken jars of pickled foodstuffs',
    'empty gunnysacks',
    'cured meat that is hard as a rock',
    'bits of broken furniture',
    'some tattered blankets',
    'leaky oil lanterns',
    'worms',
    'mice',
    'roaches',
    'beetles',
    'a mysterious powder',
    'a mysterious crystalline substance',
    'a mysterious viscous liquid',
    'cat toys',
    'leashes, collars, and whips',
    'horseshoes',
    'a heavy apron',
    'rag dolls',
    'wicker dolls',
    'ripped and broken baskets',
    'undyed wool',
    'thin cotton cloth',
    'needles, threads, and spare bits of cloth',
    'vials of brightly colored powders',
    'vials of brightly colored liquids',
    'paintings of poor quality',
    'sculptures and figurines of middling quality',
    'incomplete chess sets',
    'playing cards and betting chips',
    'bent and broken wands',
    'cracked and broken orbs',
    'saintly relics and pungent incense',
    'brushes of various sorts'
  ],
  idle: [
    'sitting, with a piece of bread in hand',
    'sitting, mug in hand',
    'reading some letter intently',
    'chewing on a piece of hay',
    'sharpening a knife',
    'cutting an apple into bite sized pieces',
    'biting into an apple',
    "reading a book titled '<<print lib.books.pun.random()>>'",
    're-stocking one of the shelves',
    'posing near the front of the store for some sort of painting',
    'polishing a grappling hook',
    'helping a customer preview a variety of torches',
    're-arranging several shelves to make room for new product',
    'packing a healing kit with fresh bandages',
    'coiling up a long length of hemp rope',
    'hanging up some freshly washed shirts',
    'filling several leather flasks with oil from a large barrel with a tap',
    'locking up a case that looks to be full of maps',
    'placing a sign in the window for an upcoming sale',
    'taking down signs from a previous sale',
    'talking with a merchant about a new shipment',
    'complaining to a merchant about a recent shipment they were brought',
    'wrapping a thick branch in fatty cloths',
    'sewing a hole up in an old looking backpack',
    'helping a customer pick the right candle for them',
    'stacking up boxes of goods behind the shop counter',
    'ringing up another customer who seems to have purchased an odd assortment of goods',
    'chatting with a local guard about protection',
    'dealing with some shady looking characters',
    'handing money over to a very imposing looking man',
    'polishing an assortment of empty vials and jars on a shelf',
    'arguing with a customer about prices',
    'trying to convince a customer they need more rope if they want to buy a grappling hook',
    'explaining to a customer all the different uses of a two person tent',
    'signing off on a fresh delivery of goods'
  ],
  get: {
    say (generalStore: GeneralStore) {
      const goods = random([
        'crowbar',
        'grappling hook',
        'hammer',
        'lantern',
        'pickaxe',
        'cooking pot',
        'backpack',
        'bedroll',
        'book',
        'glass bottle',
        'bucket',
        'candle',
        'ink pen',
        'fishing tackle',
        'fishing bait',
        'rope',
        'traveling sack',
        'shovel',
        'waterskin',
        'tent',
        'hatchet',
        'oil bottle'
      ])
      return random([
        `asks what ${generalStore.associatedNPC.heshe} can do for you`,
        'tells you everything you see just came in on a fresh shipment',
        `lets you know that all ${goods}s are 20% off`,
        `warns you that ${generalStore.associatedNPC.heshe} is down to ${generalStore.associatedNPC.hisher} last ${goods}`,
        'says the whole store is currently 10% off',
        `tells you the store is closing soon because ${generalStore.associatedNPC.heshe} ${random(['wants to go home', 'has to start on a long journey', 'has to meet someone for a new shipment of goods', `has to go to take care of ${generalStore.associatedNPC.hisher} family`, 'is tired and bored for the day'])}`,
        'asks what it is you need today',
        `apologizes for being totally out of ${goods}s today`,
        `says a fresh shipment of ${goods}s are coming in tomorrow morning`,
        `warns you that you may want to buy a medical kit as there has been a recent outbreak of flu in town according to ${generalStore.associatedNPC.himher}`,
        "apologizes for currently being low on all of the shop's stock",
        `says you look like you could really use a nice ${goods}`,
        `lets you know that the store is currently having a ${random(['buy two get one free', 'buy one get one free', 'buy one get one 50% off', 'buy one get one 25% off', 'buy two pay for three', 'two for one', 'three for one'])} deal`
      ])
    },
    shopkeepNote (generalStore: GeneralStore) {
      const shopkeep = generalStore.associatedNPC
      const shopkeepNote = [
        'does not seem to belong there, and looks very uncomfortable',
        'is unusually friendly, and never seems to stop smiling',
        'does not seem to want any business',
        `can tell a story behind everything ${shopkeep.heshe} sells`,
        `seems a little bit shady in ${generalStore.associatedNPC.hisher} dealings`,
        'is a rather forceful salesman',
        `has a pungent and offensive smell about ${generalStore.associatedNPC.himher}`,
        `insists ${shopkeep.heshe} is from an ancient line of powerful merchants`,
        `dresses ${random(['much better than expected', 'like a filthy beggar', `like ${generalStore.associatedNPC.heshe} is true royalty`, 'in rather colorfgul garb'])}`,
        'looks like a beggar, but speaks like a noble',
        'is a very smooth salesperson and tries to talk you into several items',
        'is a sly and quite shrewd merchant who seems to know just what you want',
        'is clearly trying to get you to buy more than you need',
        'seems very excited to have customers',
        'seems annoyed to have customers in the shop',
        'speaks to every customer in a very monotone voice',
        'keeps eyeing the front entrance',
        'seems to really enjoy running the shop',
        'seems rather unhappy to be here',
        'is very helpful and well informed about all the goods in the shop',
        'is a rather useless salesperson who knows very little about the shop merchandise',
        'looks extremely tired and anxious',
        "doesn't seem to be very capable in the sales department",
        'is very passive and does not come to check if you need help',
        'seems to follow you around the shop as you browse',
        'eyes you warely as you move around the store',
        'is acting strangely cold, and never seems to blink'
      ]
      return `${shopkeep.firstName} ${random(shopkeepNote)}`
    },
    note (generalStore: GeneralStore) {
      const shopkeep = generalStore.associatedNPC
      const colour1 = random(random([colours.yellow, colours.orange, colours.red, colours.purple, colours.blue, colours.green, colours.brown, colours.black, colours.white]).colour)
      const colour2 = random(random([colours.yellow, colours.orange, colours.red, colours.purple, colours.blue, colours.green, colours.brown, colours.black, colours.white]).colour)

      return random([
        // You notice __
        `it looks like ${shopkeep.firstName}, the shopkeep, lives in a room attached to the shop`,
        'a bell rings every time someone enters the shop',
        'some of the items on sale here are oddly magical (or non-magical)',
        'once you enter that you feel an unseen presence watching you',
        ' there are magical barriers prevent people from handling the merchandise',
        'a goblin is handling some of the wares',
        'an ogre is leashed to one of the walls',
        'a couple dogs keep an eye on you, while chewing on a bone',
        'a cat follows you around the shop trying to brush up against your leg',
        'a goat seems to be keeping guard outside the shop',
        'a rats nest is forming in a secluded corner',
        'a talking bird insists on yelling obscenities at you',
        'many items are being packed for sale',
        'a new shipment has just arrived, and is being stocked',
        'noises from the roof or room above the shop',
        'the floor is cracked and worn down',
        'a shop assistant is cleaning up an item that was ruined on the shop floor',
        'a shop assistant is arguing with an employee about something',
        'a monkey that follows you and tries to hand you merchandise',
        'there are footprints on the floor that lead directly into a wall',
        'a raven tries to steal items from your bag while you look around',
        "the shopkeep's young children are trying unsuccessfully at a hard sale",
        "items on shelves change places when you're not looking",
        'a calming music is playing throughout the shop',
        'some of the items sold here appear to have been stolen',
        'the shop is only open during the dark of the night',
        'one of the customers is trying to shoplift while the shopkeep is helping someone else',
        'the shop has a strong odor of mildew',
        'a ghost is browsing the merchandise on one of the back shelves',
        'a legendary weapon is on display, but not for sale',
        `colorful murals of ${random(['plants', 'flowers', 'animals', 'stars', 'trees', 'mountains', 'the sky', 'birds', 'beetles', 'the ocean', 'deserts', 'geometric shapes', 'organic shapes'])} line the walls`,
        'constables of the local guard, $town.guard.name are interviewing everyone in the shop',
        'several small cages with pure white rats are sitting on a table near the front door',
        'a strange green goop is leaking from one wall',
        'a large collection of cobwebs have formed in every corner of the shop',
        'a pair of eyes float above the counter, slowly looking from one side of the shop to the other over and over',
        'a low growl is emitting from beneath a large trapdoor in the floor',
        `the front window of the shop has ${random(['plants', 'flowers', 'animals', 'stars', 'trees', 'mountains', 'the sky', 'birds', 'beetles', 'the ocean', 'deserts', 'geometric shapes', 'organic shapes'])} painted on it`,
        'the store is lit by jars full of glowing bugs hanging from the ceiling',
        'there is a small rack on the shop counter that is stocked with a biography of the shop owner',
        'a small fireplace in the corner of the shop is blazing warmly',
        `the head of ${random(['a lion', 'a rhino', 'an eagle', 'an ostritch', 'a gopher', 'a boar', 'a cougar', 'a bear', 'a vulture', 'a python', 'a beaver', 'a moose', 'a deer', 'a swordfish', 'an elk', 'an owl', 'a troll', 'a goblin', 'a wolf', 'a coyote', 'a camel'])} is mounted on the wall on a ${random(['crude', 'fine', 'nice', 'fancy', 'clunky', 'cracked', 'dusty', 'poor'])} looking plaque`,
        'there is a small shelf filled with different colored lumpy candles labeled "Homemade Candles" ',
        'a large oil painting of the shop owner hangs from the wall',
        'all of the windows in the shop are covered by thick furs making the room rather dark',
        'the windows are all blacked out and the room is lit by glowing mushrooms',
        `a large group of ${random(['owls', 'hawks', 'vultures', 'parakeets', 'crows', 'ravens', 'canaries', 'finches', 'parrots', 'bluejays', 'kingfishers', 'kookaburras', 'pigeons', 'doves', 'swallows', 'sparrows'])} are roosting in the rafters of the shop`,
        `several large pots full of ${random(flora.flower.stemP)} are placed around the shop`,
        'the shelves of this shop are looking a little bare',
        'a large glass orb sitting on a plush pillow is on a wide table in the middle of the shop',
        'the shop counter is embedded with coins from all different regions',
        `there's a row of leatherbound books about ${random(['monsters', 'beasts', 'jewels', 'gems', 'art', 'painting', 'hunting', 'tracking', 'dungeoneering', 'arcane arts', 'blacksmithing', 'poisons', 'plants', 'farming', 'martial arts', 'ancient swords', 'ancient relics', 'magical items', 'cartography', 'sailing', 'insects', 'birds', 'religions', 'regional history', 'poetry'])}filling a nearby shelf`,
        `a taxidermied ${random(['lion', 'rhino', 'eagle', 'ostritch', 'gopher', 'boar', 'cougar', 'bear', 'vulture', 'python', 'beaver', 'moose', 'deer', 'swordfish', 'elk', 'owl', 'troll', 'goblin', 'wolf', 'coyote', 'camel', 'cat', 'dog', 'duck', 'pig'])} is standing in one corner of the shop`,
        `all of the walls are painted ${articles.output(colour1)} colour${random(['', '', '', ` with ${colour2} coloured accents`, `, and the ceiling is ${colour2} coloured`, `, and the floors have been painted a ${colour2} color`])}`,
        `the shop counter is painted a nice ${colour1} colour`,
        'a small silver bell sits on the shop counter in case the shop keeper is not around',
        `the shop is lit from above by a large glowing orb emitting a ${random(['dim', 'strong', 'low', 'pulsing', 'flickering'])} ${colour1} coloured light`
      ])
    },
    priceTalk (generalStore: GeneralStore) {
      return [
        {
          priceModifier: 5,
          wealth: 80,
          priceTalk: 'Be warned, these prices might be... out of your range'
        },
        {
          priceModifier: 5,
          wealth: 50,
          priceTalk: "Fair warning; the prices ain't what they used to be, by a long shot."
        },
        {
          priceModifier: 5,
          wealth: 20,
          priceTalk: "I'm afraid that times are tough, there's a bit of a surcharge on the fun stuff."
        },
        {
          priceModifier: 2,
          wealth: 80,
          priceTalk: 'Fair warning, premium products come with a premium price.'
        },
        {
          priceModifier: 2,
          wealth: 50,
          priceTalk: "Fair warning; the prices ain't what they used to be."
        },
        {
          priceModifier: 2,
          wealth: 20,
          priceTalk: "Things might be a wee bit more expensive than you're used to, but that's the cost of doing business at the moment."
        },
        {
          priceModifier: -2,
          wealth: 80,
          priceTalk: 'These are priced to move, so I can make some space and get some new stock in.'
        },
        {
          priceModifier: -2,
          wealth: 50,
          priceTalk: 'Priced to move!'
        },
        {
          priceModifier: -2,
          wealth: 20,
          priceTalk: 'Priced to sell, so I can afford some new stock!'
        },
        {
          priceModifier: -4,
          wealth: 80,
          priceTalk: "Everything must go! I'm getting in entirely new, custom stock in a couple day's time, and need the space clear."
        },
        {
          priceModifier: -4,
          wealth: 50,
          priceTalk: "I've got a massive sale going on at the moment!"
        },
        {
          priceModifier: -4,
          wealth: 20,
          priceTalk: `Everything must go- can't afford to keep ${generalStore.name} open much longer, so I'm getting rid of the final stock.`
        }
      ]
    }
  }
}
