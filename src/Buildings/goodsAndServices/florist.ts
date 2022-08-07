import { assert, createNamesake, NPC } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { assertBuildingExists } from '../assertBuildingExists'
import { GoodsAndService } from '../goodsAndServices'

interface Florist extends Building {
  associatedNPC: NPC
  flower1: string
  flower2: string
  flower: string
}

interface FloristData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const florist: FloristData = {
  create (town: Town, building: Florist, opts?: BuildingOpts) {
    assertBuildingExists(building)
    assert(building.buildingType === 'florist', 'building.buildingType must be florist')
    const typeData = florist

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)

    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)

    building.flower1 ??= lib.random(lib.flora.flower.stemP)
    building.flower2 ??= lib.random(lib.flora.flower.stemP)
    building.flower ??= lib.random(lib.flora.flower.stemS)
    building.localImage = 'florist-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = florist.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const namesake = building?.associatedNPC || createNamesake(town)
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const stemS = lib.random(lib.flora.flower.stemS)
      const bush = lib.random(lib.flora.flower.bush)
      const adjectivePerson = lib.random(nameRoot.adjectivePerson)
      return lib.toTitleCase(lib.random([
        `The ${adjective} ${lib.random([noun, wordNoun])}`,
        `The ${town.name} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `The ${adjective} ${stemS}`,
        `The ${stemS} ${lib.random(['Shop', 'Petal', 'Sprout', 'Greenhouse'])}`,
        `${stemS} Petals ${wordNoun}`,
        `The ${bush} Bush ${wordNoun}`,
        `${adjectivePerson} ${namesake.firstName}'s ${wordNoun}`,
        unique
      ]))
    },
    unique: [
      'The Daisy Chain',
      'The Grow Room',
      'The Secret Garden',
      'Roses are Red',
      'Sweet Stems',
      'The Watering Can',
      'Smell the Tulips',
      'Honeybee',
      'Happy Petals',
      'The Flower Patch',
      'All in Bloom',
      'The Flower Cart',
      'The Garden Trough',
      'Beautiful Blossoms',
      'The Enchanted Florist',
      'Green Thumb Gardens',
      'Magical Blooms',
      "Mother Earth's",
      'Royal Blooms',
      'Pollen Palace',
      'Bramble and Wild',
      'Scarlet and Violet',
      'Lavender Belle',
      'Petal Pushers',
      'Sherwood Florist',
      'Fleur',
      'Flores',
      'By Any Other Name',
      'Little Shop of Flowers'
    ],
    noun: [
      'bouquet',
      'plant Pot',
      'ivy',
      'watering Can',
      'sprout',
      'petal',
      'seed',
      'flower',
      'pot',
      'fern',
      'bulb',
      'root',
      'blossom',
      'bloom',
      'bramble'
    ],
    adjective: [
      'lovely',
      'long-lasting',
      'magnificent',
      'mesmerizing',
      'petite',
      'playful',
      'ravishing',
      'pretty',
      'precious',
      'playful',
      'prized',
      'radiant',
      'light',
      'sweet',
      'fragrant',
      'merry',
      'lofty',
      'tilted',
      'beautiful'
    ],
    adjectivePerson: [
      'cheery',
      'happy',
      'hopeful',
      'morning',
      'magical',
      'sassy',
      'tasty',
      'friendly',
      'sleepy',
      'drowsy',
      'peaceful',
      'sad',
      'loud',
      'angry',
      'dopey',
      'fat',
      'stoic',
      'colorful',
      'silly',
      'big',
      'slim',
      'weedy',
      'seedy'
    ],
    wordNoun: [
      'florist',
      'flower shop',
      'florist shop',
      'floral shop',
      'herb shop',
      'botany shop',
      'garden shop',
      'greenhouse'
    ]
  },
  PassageFormat: () => [
    // each array string will be a new line.
    // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
    `You ${['enter', 'walk into', 'open the door to', 'come inside', 'step through the door of', 'come off the street into'].random()} ${[
      '$building.name, $building.structure.descriptor.',
      '$building.structure.descriptor called $building.name.'
    ].random()} You notice $building.notableFeature`,
    '',
    'This $building.wordNoun is known for $building.specialty There is a <<profile $building.associatedNPC $building.associatedNPC.descriptor>> currently <<print $building.associatedNPC.idle.random()>>. <<print $building.associatedNPC.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'florist',
    opts: {
      profession: 'florist',
      hasClass: false,
      idle: [
        // name is currently _______
        'watering a large flower pot full of $building.flower1',
        'handling a strange and exotic looking plant',
        'trimming the stems on a few cut $building.flower1',
        'carefully arranging a bouquet of $building.flower1 and $building.flower2',
        'extracting the petals off of an alchemical plant',
        'planting some seeds in a pot',
        'examining the leaves of a slightly wilting $building.flower',
        'plucking seeds out of the center of a large plant',
        'mixing up some soil for planting',
        'wrapping some flowers',
        'tying a cloth ribbon around a lovely bouquet of $building.flower1 and $building.flower2',
        'trying to dye some $building.flower1 a new color',
        'starting to doze off behind the counter',
        'showing a customer some of the different floral options',
        'reading a book on exotic seeds',
        'clipping leaves from a small flowering hedge'
      ]
    }
  },
  goods: [
    {
      summary: 'Small Bouquet',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 4,
      // description: used in tooltip.
      description: 'A small bouquet made up of mostly wildflowers.'
    },
    {
      summary: 'Mid-Size Bouquet',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 8,
      // description: used in tooltip.
      description: 'A medium sized bouquet made up of an assortment of colorful flowers.'
    },
    {
      summary: 'Large Bouquet',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 15,
      // description: used in tooltip.
      description: 'A large bouquet comprised of many colorful and intricately arranged flowers.'
    }
  ],
  type: 'florist',
  notableFeature: [
    // you notice _______
    'the smell of fresh cut flowers hangs in the air.',
    'a strong $building.flower aroma wafting through the room.',
    'several planter pots dangling from ropes on the ceiling. Long fern leaves and vines hang down from the pots above.',
    'a plethora of small pots brimming with $building.flower1 dotted around the shop.',
    'a substantial number of patrons crowding the shop counter.',
    'there is hardly anyone in here.',
    'a large hand painted sign in the window that reads "Finest $building.flower1 in $town.name".',
    'there are several large flowering bushes and plants crammed inside the shop that seem far too big to be growing indoors.',
    'a large set of shelves filled with cut flowers organized by color.',
    'one of the shop walls is completely covered in ivy.',
    'several large sacks of fertilizer stacked up near the shop counter.',
    'several of the shop windows are adorned with hand painted $building.flower2',
    'there are several strings of dried flowers strung from the shop ceiling.',
    'a collection of dried flowers framed above the counter.',
    'quite a few charcoal flower drawings are hanging on the shop walls.',
    'a few different shelves of dried herbs lining the far wall of the shop.',
    'a small collection of jarred dried herbs sitting on the shop counter.',
    'many of the potted plants in the shop are dead or dying.',
    'the shop counter is made of rough hewn oak wood.',
    'a small hearth with a roaring fire in one corner.',
    'quite a few decorative plates covered in different animals sit on racks hanging on the walls.',
    'a caged sparrow sits upon the shop counter.',
    'several holly wreaths are hung upon the shop timbers.',
    'a single potted $building.flower sitting on the shop counter.',
    'several strings of cut flowers are hung up to dry by an open window.',
    'a rusty watering can sitting on a stool in a corner.',
    'a small fairy garden has been set up at one end of the shop and a couple of fairies have taken up residence.',
    'a shelf holding all kinds of jars and bottles with handmade labels like "Giant Slug Repellant" and "Truly Magical Plant Growth".',
    'a table with vases of all shapes and sizes set in the middle of the room.',
    'a few large leafy ferns grouped up near the entrance.',
    'the room is full of $building.flower scented candles.',
    'a large amount of flower clippings have been piled up in one corner of the shop.',
    'several small copper birds are hanging from the ceiling by strings',
    'a flower mural is painted on the far wall',
    'a framed collection of pinned <<print ["dragonflies", "butterflies", "beetles", "grasshoppers", "worms", "bees", "crickets", "bugs", "flies", "moths", "mantids and roaches", "wasps"].random()>> hung up on the wall next to the counter.',
    'there is a small shelf of boxed chocolates near the front counter with a sign above that reads "For the truly scorned lover".'
  ],
  specialty: [
    // the florist is known for _______
    'often carrying strange and exotic plants.',
    'always having very fragrant $building.flower1.',
    'having brilliantly colorful $building.flower1.',
    'the large variety of seeds that they offer.',
    'growing strangely large $building.flower2.',
    'growing strangely large flowers of all varieties.',
    'offering classes throughout the year on proper flower gardening.',
    'their collection of unique herbs.',
    'having a private collection of insect eating plants.',
    'their beautifully arranged bouquets.',
    'being the favorite garden shop of the local nobility.',
    'having a discrete delivery service for any relationship emergency.',
    'enchanting their bouquets to sing a song to their recipients.',
    'selling to a rather seedy clientele.',
    'being a front for the local fight ring bookie. Nobody really buys flowers.',
    'being the florist to provide all of the flowers for the most recent royal wedding.',
    'always seeming to know exactly the kind of flowers you need.',
    'making particularly bad floral arrangements.',
    'their prize winning $building.flower1.',
    'the gaudy and eccentric floral arrangements the associatedNPC creates.',
    'the lavish floral arrangements they make for clientele.',
    'the high class clients they do floral arrangements for.',
    'the rather cheap buoquets they throw together.',
    'enchantings their flowers to glitter in the sunlight.',
    'growing all their own flowers.',
    'doubling as a lawn care service.',
    'keeping a large collection of "royal plants" that are only to be sold to members of the nobility.',
    'having a large variety of magical flowers.',
    'selling what amounts to bundles of weeds.',
    'having had a beautifully decorated cart at least years Summer Festival.',
    'their hand painted flowers.',
    'creating beautiful art out of the petals that fall off their flowers.',
    'being rumored to be an arm to a large secret organization of flower shops that run the world as we know it.',
    'being founded by a retired barbarian hero.',
    'being rumored to be funded by a local thieves guild master who has a soft spot for flowers.',
    'trimming flowers into interesting shapes',
    'using discarded leaves and stems to create tiny animals to go with their bouquets.'
  ]
}
