import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake, random } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface BarberData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const barber: BarberData = {
  create (town: Town, building: Building, opts?: BuildingOpts): Building {
    assertBuildingExists(building)
    const typeData = barber

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)
    building.wordNoun ??= random(typeData.name.wordNoun)
    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'barber-illustration'
    building.tippyDescription = `${lib.articles.output(building.type).toUpperFirst()} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = barber.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const adjectivePerson = lib.random(nameRoot.adjectivePerson)
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      const namesake = building?.associatedNPC || createNamesake(town)
      return lib.toTitleCase(random([
        `The ${adjective} ${noun}`,
        `The ${townName} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `${adjectivePerson} ${namesake}'s ${wordNoun}`,
        `${namesake.lastName}'s ${noun}`,
        unique
      ]))
    },
    unique: [
      'A Little Off The Top',
      'Get Buzzed',
      "The Men's Mane",
      'Cut Above The Rest',
      'Cutting Edge',
      'Top Notch',
      'Happy Hair',
      'Cliptomania',
      'Dye Hard',
      'Hair To Stay',
      'Hairitage',
      'Shears To You',
      'Well-Comb All',
      'Family Hairloom',
      'To Trim or Not to Trim',
      'Off With Their Hair',
      'Hair to Stay',
      'His and Hairs',
      'The Barber Chop'
    ],
    noun: [
      'scissors',
      'clippers',
      'buzz',
      'blade',
      'knife',
      'beard',
      'hair',
      'cut',
      'shave',
      'trim',
      'makeover',
      'barber'
    ],
    adjective: [
      'quick',
      'careful',
      'discount',
      'cheap',
      'fashionable',
      'firey',
      'cool',
      'hairy',
      'steady'
    ],
    adjectivePerson: [
      'cheery',
      'happy',
      'hopeful',
      'morning',
      'magical',
      'sassy',
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
      'steady'
    ],
    wordNoun: [
      'barber',
      'hairdresser',
      'surgery',
      'barber and surgery',
      'coiffeur',
      'salon',
      'beauty parlour',
      'barbershop'
    ]
  },
  PassageFormat: () => [
    // each array string will be a new line.
    // this will be evaluated by SugarCube; use *SugarCube syntax* for functions.
    `You ${['enter', 'walk into', 'open the door to', 'come inside', 'step through the door of', 'come off the street into'].random()} ${[
      '$building.name, $building.structure.descriptor.',
      '$building.structure.descriptor called $building.name.'
    ].random()} You notice $building.notableFeature.`,
    '',
    'This $building.wordNoun is known for $building.specialty. There is a <<profile $building.associatedNPC $building.associatedNPC.descriptor>> currently <<print $building.associatedNPC.idle.random()>>. <<print $building.associatedNPC.heshe.toUpperFirst()>> welcomes you, and asks what you are after.',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'barber',
    opts: {
      profession: 'barber',
      hasClass: false,
      idle: [
        // There is a barber currently _______
        'finishing up a trim of a customer',
        'cleaning some knives',
        'wiping a razor',
        'checking some stock levels',
        'practising a haircut on a dummy wearing a wig',
        'playing cards',
        'taking a swig from a flask',
        'quietly whispering to a pair of silver razors',
        'sharpening a straight razor with a thick strip of leather',
        'arranging some bottles of shaving oils',
        'washing their hands in a basin of water',
        'starting to doze off in a corner of the shop',
        'lathering up some shaving cream in a small wooden mortar',
        'arranging some kinds of medicines on a shelf',
        'examining a vial of dark red blood',
        'standing over a pot of oil that is being heated up',
        'brushing hair on the floor into a small pile',
        'placing teeth into a large jar'
      ]
    }
  },
  goods: [
    {
      summary: 'hair shave',
      cost: 5,
      description: 'Using a razor, totally shaving the entire head. Super quick and easy.'
    },
    {
      summary: 'trim',
      cost: 9,
      description: 'A quick trim; expect a bowl-cut, or something similarly efficient, yet not entirely fashionable.'
    },
    {
      summary: 'shave',
      cost: 8,
      description: 'A beard shave, quick and effective for de-aging to a 14 year old.'
    },
    {
      summary: 'beard trim',
      cost: 6,
      description: 'A beard trim.'
    },
    {
      summary: 'cut',
      cost: 12,
      description: 'A better quality haircut, using new blades. Also safer.'
    },
    {
      summary: 'style',
      cost: 16,
      description: 'Restyling of hair. Includes the standard awkward small talk.'
    },
    {
      summary: 'wig',
      cost: 22,
      description: 'A wig made out of real human hair! It won\'t last forever, and is pretty scratchy, but is better than nothing.'
    },
    {
      summary: 'surgery',
      cost: 200,
      exclusions (town: Town, building: Building) {
        return building.roll.expertise > 20
      },
      description: 'Most barbers moonlight as surgeons, due to having the sharpest blades. Definitely not the best of care that you could receive, but better than letting appendicitis go untreated.'
    },
    {
      summary: 'tooth pull',
      cost: 100,
      exclusions (town: Town, building: Building) {
        return building.roll.expertise > 10
      },
      description: 'Got a tooth that\'s giving you a bit of trouble? This barber can yank it right out.'
    },
    {
      summary: 'leeching',
      cost: 60,
      exclusions (town: Town, building: Building) {
        return building.roll.expertise < 30
      },
      description: 'If you\'re feeling a bit sick this barber will place leeches all over you to draw out the bad blood.'
    },
    {
      summary: 'dangerous surgery',
      cost: 200,
      exclusions (town: Town, building: Building) {
        return building.roll.expertise < 20
      },
      description: 'This barber isn\'t familiar with surgery, but has the sharp tools to do the job.'
    }
  ],
  type: 'barber',
  notableFeature: [
    // you notice _______
    'there\'s quite a bit of hair on the floor',
    'there is a small music box playing a sweet melody in the corner of the room',
    'there is a large bowl of water with a fish swimming about',
    'the room has a lemony sort of scent in the air',
    'a strong alcohol smell permeates the air',
    'the wall is lined with all manners of blades',
    'the wall has hundreds of pairs of scissors in various shapes and sizes',
    'there is a wall with hundreds of notes attached; a loyalty board',
    'that inside, it is much quieter than you expected, and is actually rather peaceful',
    'the smell of alcohol as you walk in',
    'several small jars full of teeth sitting on a shelf',
    'a variety of different glass vials and bottles full of shaving oils',
    'a barrel that appears to be full of leeches',
    'a beautiful red leather barber chair in the center of the room',
    'a fine silver mirror hung up in front of the barber chair',
    'a large shelf against one wall filled with authentic hair wigs',
    'there are a lot of dark red stains on the floor around the barber chair',
    'a large trunk in one corner of the room with a heavy lock on it',
    'a sign in the window that reads "One free tooth pulling with every bloodletting!"',
    'a large bowl of coagulated blood is sitting in the shop window'
  ],
  specialty: [
    // the barber is known for _______
    'excellent and quick service',
    'doing a quick and rushed job',
    'excellent bloodletting skills',
    'hiring apprentices from customers',
    'being the best place to get the local gossip',
    'having the sharpest blades in the land',
    'never gossiping, acting as a confidant',
    'having taken an oath to never reveal anything that occurs inside the shop',
    'never drawing blood during a shave',
    'practising as a surgery first and foremost, taking on haircuts when business is slow',
    'having been blessed by a priest several years ago. Nobody has died on the surgery table since',
    'never having a fatality in surgery',
    'pulling teeth for free',
    'having once been the host to the only 300% mortality surgery (killing the patient, the surgeon, and the assistant)',
    'quick amputations, and slow haircuts',
    'quick haircuts, and slow amputations',
    'being a much better surgery than barber shop',
    'being a much better barber shop than surgery'
  ]
}
