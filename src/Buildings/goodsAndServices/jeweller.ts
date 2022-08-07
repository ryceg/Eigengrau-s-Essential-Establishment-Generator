import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake, random } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface JewellerData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    jewelleryAdjective: string[]
    nounJewelledGood: string[]
  }
}

export const jeweller: JewellerData = {
  // the bakery can be used as an example of how to add more features to a building.
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)
    const typeData = jeweller
    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    lib.logger.info('Making a name!')
    building.name ||= opts?.building?.name || typeData.name.function(town, building)
    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'jeweller-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}`
    return building
  },
  name: {
    function (town: Town, building: Building): string {
      const nameRoot = jeweller.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const jewelleryAdjective = lib.random(nameRoot.jewelleryAdjective)
      const jewelledNoun = lib.random(nameRoot.nounJewelledGood)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const namesake = building?.associatedNPC || createNamesake(town)
      return lib.toTitleCase(random([
        `The ${adjective} ${noun}`,
        `The ${jewelleryAdjective} ${noun}`,
        `The ${adjective} ${jewelledNoun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        unique
      ]))
    },
    unique: [
      'Emerald City Gems',
      'Carat King',
      'Jewel Factory',
      'Golden Age',
      'Silver Lining',
      'The Gold Medal',
      'Ruby Slippers',
      'The Esteemed Citrine',
      'Sapphire Blues',
      'A Diamond A Dozen',
      'Cracker Beryl',
      'Garnet Guaranteed',
      'Here Comes the Sunstone',
      'Moonstones and More',
      'The Opal of my Eye'
    ],
    noun: [
      'emerald',
      'sapphire',
      'diamond',
      'ruby',
      'garnet',
      'beryl',
      'gold bar',
      'silver bar',
      'necklace',
      'trinket',
      'amulet',
      'opal',
      'lense',
      'hammer',
      'chisel',
      'citrine',
      'moonstone',
      'sunstone'
    ],
    nounJewelledGood: [
      'gemstone',
      'amulet',
      'necklace',
      'ring',
      'earring',
      'trinket'
    ],
    adjective: [
      'old',
      'wrinkly',
      'inquisitive',
      'intelligent',
      'ancient',
      'magical',
      'wise',
      'artisian',
      'friendly'
    ],
    jewelleryAdjective: [
      'shiny',
      'expensive',
      'mesmerizing',
      'bougie',
      'breathtaking',
      'radiant',
      'iridescent',
      'noble',
      'deep',
      'fine cut'
    ],
    wordNoun: [
      'jewellery',
      'jewellery shop',
      'gem smith',
      'gold smith',
      'silver smith',
      'gem shop',
      'jeweller'
    ],
    adjectivePerson: []
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
    name: 'jeweller',
    opts: {
      profession: 'jeweller',
      hasClass: false,
      idle: [
        // name is currently _______
        'cutting a gemstone',
        'serving a customer',
        'inspecting a gemstone',
        'delicately repairing an ancient ring',
        'adding gemstones to a fine gold necklace',
        'weighing a brilliant gemstone',
        'assisting a man browsing wedding rings.'
      ]
    }
  },
  goods: [
    {
      summary: 'appraisal',
      cost: 200,
      type: 'service',
      description: 'For a price, jewellery and gemstones can be appraised.'
    },
    {
      summary: 'silver trinket',
      // cost: in copper pieces. The <<money>> macro handles currency conversion.
      cost: 300,
      // description: used in tooltip.
      description: 'A lucky charm made out of fine silver.',
      // exclusions for testing whether it is available. Can be ommitted if it is always available. Return truthiness.
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 20
      }
    },
    {
      summary: 'silver cutlery',
      cost: 15,
      description: 'A piece of cutlery that has been silvered.'
    },
    {
      summary: 'singing cutlery',
      cost: 20,
      description: 'A piece of cutlery that has a hymn of praise engraved into the side of the blade.'
    },
    {
      summary: 'slotted ring',
      cost: 18,
      description: 'This is a ring that has a slot for a gem, which makes it ideal for enchantments by a wizard.'
    },
    {
      summary: 'religious symbols',
      cost: 5,
      description: 'A religious symbol, that has been embossed in a relatively cheap metal.'
    },
    {
      summary: 'large religious symbol',
      cost: 8,
      description: 'A large religious symbol of the prominent good deity with a hidden compartment containing the religious symbol of a secret/oppressed evil deity.'
    },
    {
      summary: 'brass ring',
      cost: 10,
      description: "A discolored old ring. Don't propose to a lovely lady with this one."
    },
    {
      summary: 'gold ring',
      cost: 300,
      description: 'A ring made out of gold. Suitable for a noble perhaps.',
      exclusions (town: Town, building: Building) {
        return building.roll.wealth > 25
      }
    },
    {
      summary: 'gemstone ring',
      cost: 850,
      description: 'A captivating ring made with fine gems cast in gold.',
      exclusions (town: Town, building: Building) {
        return town.population > 1500 && building.roll.wealth > 25
      }
    },
    {
      summary: 'gemstone amulet',
      cost: 1000,
      description: 'Fine diamonds hang from a silver string. A wearable chandelier.',
      exclusions (town: Town, building: Building) {
        return town.population > 2000 && building.roll.wealth > 50
      }
    }
  ],
  type: 'jewellers',
  notableFeature: [
    // you notice _______
    'a stack of finely cut gems behind the counter.',
    'the jeweller is assisting a royal member.',
    'a collection of rare minerials on the front counter.',
    'a trophy with "Finest Gemstones awarded to $building.name" etched into it sitting on a shelf near the entry.',
    'silver trinkets for sale in a display case.',
    'necklaces for sale in a display case.',
    'sapphires, emeralds, diamonds and more along a workbench behind the counter.',
    'a jeweled trinket halfway finished.',
    'a large golden bell is sitting on the shop counter.',
    'a dusty old bookshelf full of geological texts.',
    'the distinct smell of metal.',
    'the shop counter is made of lavish mahagony wood.'
  ],
  specialty: [
    // the jeweller is known for _______
    'charging an arm and a leg.',
    'the fine gemstones cut every day.',
    'being the best place to fix an earring.',
    'their gemstone collection.',
    'the brass rings they sell.',
    'always finding the diamond in the dirt.',
    'being mostly too expensive for common folks.',
    'working closely with royals.',
    'being exceptional gem cutters.',
    'their collection of odd trinkets.'
  ]
}
