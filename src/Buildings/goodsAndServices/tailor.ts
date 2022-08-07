import { GoodsAndService } from '../goodsAndServices'
import { Building } from 'lib/buildings/_common'
import { Town } from 'lib/town/_common'
import { createNamesake } from '@lib'
import { BuildingOpts } from 'lib/buildings/BuildingToCreate'
import { assertBuildingExists } from '../assertBuildingExists'

interface TailorData extends GoodsAndService {
  name: GoodsAndService['name'] & {
    adjectivePerson: string[]
  }
}

export const tailor: TailorData = {
  create (town: Town, building: Building, opts?: BuildingOpts) {
    assertBuildingExists(building)

    const typeData = tailor

    building.associatedNPC = setup.createNPC(town, { ...typeData.profession.opts, ...opts?.npc })
    lib.createReciprocalRelationship(town, building, building.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
    building.name ||= opts?.building?.name || typeData.name.function(town, building)

    building.notableFeature ??= lib.random(typeData.notableFeature)
    building.specialty ??= lib.random(typeData.specialty)
    building.localImage = 'tailor-illustration'
    building.tippyDescription = `${lib.articles.output(building.type)} on ${town.roads[building.road].name}. Their specialty is ${building.specialty}.`
    return building
  },
  name: {
    function (town: Town, building: Building) {
      const nameRoot = tailor.name
      const noun = lib.random(nameRoot.noun)
      const wordNoun = lib.random(nameRoot.wordNoun)
      const adjective = lib.random(nameRoot.adjective)
      const townName = town.name
      const roadName = town.roads[building.road].name
      const namesake = building?.associatedNPC || createNamesake(town)
      const unique = lib.random(nameRoot.unique) || `The ${townName} ${wordNoun}`
      return lib.toTitleCase(lib.random([
        `The ${adjective} ${[noun, wordNoun].random()}`,
        `The ${town.name} ${wordNoun}`,
        `The ${roadName} ${wordNoun}`,
        `${namesake.firstName}'s ${wordNoun}`,
        `${lib.random(nameRoot.adjectivePerson)} ${namesake.firstName}'s ${wordNoun}`,
        unique
      ]))
    },
    unique: [
      'Golden Stitching',
      'Elite Clothes & Tailor',
      'Sew Wave',
      'Scissor Sisters',
      'Thread n Needle',
      'True Cuts',
      'Fineland Crotchet',
      'Skilled Stitches',
      'The Stitchery',
      'A Quality Sewing Co.',
      'Sew New',
      'First Cut',
      'Dream Dresser'
    ],
    noun: [
      'stitches',
      'stitching',
      'needle',
      'thread',
      'cloth',
      'scissors',
      'pincushion',
      'wardrobe',
      'seam',
      'thimble',
      'spool',
      'bobbin',
      'button',
      'hem',
      'quilt',
      'fabric'
    ],
    adjective: [
      'fancy',
      'happy',
      'cheery',
      'bright',
      'magic',
      'fresh',
      'lovely',
      'quick',
      'flashy',
      'plush',
      'prized',
      'noble'
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
      'slim'
    ],
    wordNoun: [
      'tailors',
      'clothing shop',
      'dress shop',
      'haberdashery',
      'boutique',
      'garment store',
      'clothier shop'
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
    'This $building.wordNoun is known for $building.specialty There is a <<profile $building.associatedNPC $building.associatedNPC.descriptor>> currently <<print $building.associatedNPC.idle.random()>>. <<print $building.associatedNPC.heshe>> welcomes you, and asks what you are after.',
    '<<goods $building setup.goodsAndServices[$building.type].goods>>'
  ],
  profession: {
    name: 'tailor',
    opts: {
      profession: 'tailor',
      hasClass: false,
      idle: [
        // There is a tailor currently _______
        'measuring a man for a fitted suit',
        'measuring a woman for a new dress',
        'taking the measurements of a particularly gruff looking half-orc',
        'rummaging through a large drawer of buttons',
        'sewing a patch onto a well-worn looking cloak',
        'carefully threading a needle',
        'cutting some loose threads with a pair of small golden scissors',
        'working on a new piece of clothing',
        'doing some stitch work for a pair of pants',
        'pinning measurements on a body form',
        'checking the sleeve length of a new shirt',
        'arranging needles in a needle pillow near the counter',
        'cleaning loose threads off the counter',
        'fashioning a tunic from some sort of hide',
        'restocking a shelf with new socks',
        'tending to a large trough of dye'
      ]
    }
  },
  goods: [
    {
      summary: 'tailoring',
      cost: 7,
      type: 'service',
      description: 'A service offered to fit clothing, take up shirts, and generally tailor clothing to fit better.'
    },
    {
      summary: 'hole repair',
      cost: 3,
      type: 'service',
      description: 'A service offered to patch up holey or tattered clothing people may have.'
    },
    {
      summary: 'Boots, forest caiman skin',
      description: 'Boots, forest caiman skin',
      cost: 410
    },
    {
      summary: 'Boots, indigo caiman skin',
      description: 'Boots, indigo caiman skin',
      cost: 380
    },
    {
      summary: 'Boots, leather, ankle-high, brown',
      description: 'Boots, leather, ankle-high, brown',
      cost: 100
    },
    {
      summary: 'Boots, leather, thigh-high, brown',
      description: 'Boots, leather, thigh-high, brown',
      cost: 120
    },
    {
      summary: 'Boots, river caiman skin',
      description: 'Boots, river caiman skin',
      cost: 215
    },
    {
      summary: 'Breeches, good linen, fine',
      description: 'Breeches, good linen, fine',
      cost: 150
    },
    {
      summary: 'Breeches, good linen, fine, dyed blue (indigo)',
      description: 'Breeches, good linen, fine, dyed blue (indigo)',
      cost: 163
    },
    {
      summary: 'Breeches, good linen, fine, dyed red (madder)',
      description: 'Breeches, good linen, fine, dyed red (madder)',
      cost: 159
    },
    {
      summary: 'Breeches, good linen, light, fine',
      description: 'Breeches, good linen, light, fine',
      cost: 120
    },
    {
      summary: 'Breeches, good linen, light, fine, dyed blue (indigo)',
      description: 'Breeches, good linen, light, fine, dyed blue (indigo)',
      cost: 131
    },
    {
      summary: 'Breeches, good linen, light, fine, dyed red (madder)',
      description: 'Breeches, good linen, light, fine, dyed red (madder)',
      cost: 129
    },
    {
      summary: 'Breeches, silk, fine',
      description: 'Breeches, silk, fine',
      cost: 900
    },
    {
      summary: 'Breeches, thick cotton, fine',
      description: 'Breeches, thick cotton, fine',
      cost: 175
    },
    {
      summary: 'Breeches, thin cotton, fine',
      description: 'Breeches, thin cotton, fine',
      cost: 150
    },
    {
      summary: 'Breeches, wool, fine',
      description: 'Breeches, wool, fine',
      cost: 130
    },
    {
      summary: 'Breeches, wool, fine, dyed blue (indigo)',
      description: 'Breeches, wool, fine, dyed blue (indigo)',
      cost: 135
    },
    {
      summary: 'Breeches, wool, fine, dyed red (madder)',
      description: 'Breeches, wool, fine, dyed red (madder)',
      cost: 133
    },
    {
      summary: 'Button, ivory',
      description: 'Button, ivory',
      cost: 60
    },
    {
      summary: 'Button, wood',
      description: 'Button, wood',
      cost: 4
    },

    {
      summary: 'Coat (great), good linen, fine',
      description: 'Coat (great), good linen, fine',
      cost: 380
    },
    {
      summary: 'Coat (great), good linen, light, fine',
      description: 'Coat (great), good linen, light, fine',
      cost: 300
    },
    {
      summary: 'Coat (great), heavy wool, fine',
      description: 'Coat (great), heavy wool, fine',
      cost: 400
    },
    {
      summary: 'Coat (great), thick cotton, fine',
      description: 'Coat (great), thick cotton, fine',
      cost: 450
    },
    {
      summary: 'Coat (great), thin cotton, fine',
      description: 'Coat (great), thin cotton, fine',
      cost: 380
    },
    {
      summary: 'Coat (great), wool, fine',
      description: 'Coat (great), wool, fine',
      cost: 320
    },
    {
      summary: 'Coat, beaver fur',
      description: 'Coat, beaver fur',
      cost: 900
    },
    {
      summary: 'Coat, buckskin',
      description: 'Coat, buckskin',
      cost: 500
    },
    {
      summary: 'Coat, fox fur',
      description: 'Coat, fox fur',
      cost: 1500
    },
    {
      summary: 'Coat, leather (steer), black',
      description: 'Coat, leather (steer), black',
      cost: 500
    },
    {
      summary: 'Coat, leather (steer), natural color',
      description: 'Coat, leather (steer), natural color',
      cost: 450
    },
    {
      summary: 'Coat, lynx fur',
      description: 'Coat, lynx fur',
      cost: 1800
    },
    {
      summary: 'Coat, rabbit fur',
      description: 'Coat, rabbit fur',
      cost: 580
    },
    {
      summary: 'Coat, skunk fur',
      description: 'Coat, skunk fur',
      cost: 1100
    },
    {
      summary: 'Collar, dog, with iron buckle',
      description: 'Collar, dog, with iron buckle',
      cost: 8
    },
    {
      summary: 'Dress, simple, good linen, fine',
      description: 'Dress, simple, good linen, fine',
      cost: 220
    },
    {
      summary: 'Dress, simple, good linen, light, fine',
      description: 'Dress, simple, good linen, light, fine',
      cost: 180
    },
    {
      summary: 'Dress, simple, silk, fine',
      description: 'Dress, simple, silk, fine',
      cost: 1500
    },
    {
      summary: 'Dress, simple, thick cotton, fine',
      description: 'Dress, simple, thick cotton, fine',
      cost: 270
    },
    {
      summary: 'Dress, simple, thin cotton, fine',
      description: 'Dress, simple, thin cotton, fine',
      cost: 220
    },
    {
      summary: 'Dress, simple, wool, fine',
      description: 'Dress, simple, wool, fine',
      cost: 200
    },

    {
      summary: "Gloves, horse hide, workman's",
      description: "Gloves, horse hide, workman's",
      cost: 50
    },
    {
      summary: "Gloves, leather, workman's",
      description: "Gloves, leather, workman's",
      cost: 46
    },
    {
      summary: 'Gloves, wool, knit',
      description: 'Gloves, wool, knit',
      cost: 50
    },
    {
      summary: "Handkerchief, good linen, 1'sq.",
      description: "Handkerchief, good linen, 1'sq.",
      cost: 7
    },
    {
      summary: "Handkerchief, soft light canvas, 1'sq.",
      description: "Handkerchief, soft light canvas, 1'sq.",
      cost: 5
    },
    {
      summary: 'Hat, beaver fur',
      description: 'Hat, beaver fur',
      cost: 90
    },
    {
      summary: 'Hat, rabbit fur',
      description: 'Hat, rabbit fur',
      cost: 60
    },
    {
      summary: 'Hat, very large, beaver fur',
      description: 'Hat, very large, beaver fur',
      cost: 150
    },
    {
      summary: 'Hat, very large, rabbit fur',
      description: 'Hat, very large, rabbit fur',
      cost: 140
    },
    {
      summary: 'Hat, very large, skunk fur',
      description: 'Hat, very large, skunk fur',
      cost: 200
    },
    {
      summary: 'Hat, wool, knit, simple, 3 color',
      description: 'Hat, wool, knit, simple, 3 color',
      cost: 40
    },
    {
      summary: 'Jacket, beaver fur',
      description: 'Jacket, beaver fur',
      cost: 600
    },
    {
      summary: 'Jacket, buckskin',
      description: 'Jacket, buckskin',
      cost: 320
    },
    {
      summary: 'Jacket, fox fur, silver',
      description: 'Jacket, fox fur, silver',
      cost: 1000
    },
    {
      summary: 'Jacket, leather (steer), black',
      description: 'Jacket, leather (steer), black',
      cost: 370
    },
    {
      summary: 'Jacket, leather (steer), natural color',
      description: 'Jacket, leather (steer), natural color',
      cost: 330
    },
    {
      summary: 'Jacket, lynx fur',
      description: 'Jacket, lynx fur',
      cost: 1200
    },
    {
      summary: 'Jacket, rabbit fur',
      description: 'Jacket, rabbit fur',
      cost: 380
    },
    {
      summary: 'Jacket, skunk fur',
      description: 'Jacket, skunk fur',
      cost: 700
    },
    {
      summary: 'Jacket, wolf fur',
      description: 'Jacket, wolf fur',
      cost: 750
    },
    {
      summary: 'Kilt, wool',
      description: 'Kilt, wool',
      cost: 180
    },
    {
      summary: 'Mittens, wool, knit',
      description: 'Mittens, wool, knit',
      cost: 20
    },
    {
      summary: "Napkin, good linen, 1'sq.",
      description: "Napkin, good linen, 1'sq.",
      cost: 7
    },

    {
      summary: 'Sandals, leather, natural color',
      description: 'Sandals, leather, natural color',
      cost: 40
    },
    {
      summary: "Scarf, gauze silk, 4'",
      description: "Scarf, gauze silk, 4'",
      cost: 135
    },
    {
      summary: "Scarf, silk, 4'",
      description: "Scarf, silk, 4'",
      cost: 175
    },
    {
      summary: 'Scarf, wool, knit',
      description: 'Scarf, wool, knit',
      cost: 55
    },
    {
      summary: 'Shirt, good linen, fine',
      description: 'Shirt, good linen, fine',
      cost: 150
    },
    {
      summary: 'Shirt, good linen, fine, dyed orange (saffron)',
      description: 'Shirt, good linen, fine, dyed orange (saffron)',
      cost: 205
    },
    {
      summary: 'Shirt, good linen, fine, dyed purple (true)',
      description: 'Shirt, good linen, fine, dyed purple (true)',
      cost: 275
    },
    {
      summary: 'Shirt, good linen, fine, dyed red (carmine)',
      description: 'Shirt, good linen, fine, dyed red (carmine)',
      cost: 195
    },
    {
      summary: 'Shirt, good linen, light, fine',
      description: 'Shirt, good linen, light, fine',
      cost: 125
    },
    {
      summary: 'Shirt, good linen, light, fine, dyed lt. blue (indigo)',
      description: 'Shirt, good linen, light, fine, dyed lt. blue (indigo)',
      cost: 133
    },
    {
      summary: 'Shirt, good linen, light, fine, dyed red (madder)',
      description: 'Shirt, good linen, light, fine, dyed red (madder)',
      cost: 135
    },
    {
      summary: 'Shirt, good linen, light, fine, dyed yellow (weld)',
      description: 'Shirt, good linen, light, fine, dyed yellow (weld)',
      cost: 130
    },
    {
      summary: 'Shirt, silk, fine',
      description: 'Shirt, silk, fine',
      cost: 1000
    },
    {
      summary: 'Shirt, thick cotton, fine',
      description: 'Shirt, thick cotton, fine',
      cost: 180
    },
    {
      summary: 'Shirt, thin cotton, fine',
      description: 'Shirt, thin cotton, fine',
      cost: 150
    },
    {
      summary: 'Shirt, thin cotton, fine, dyed lt. blue (indigo)',
      description: 'Shirt, thin cotton, fine, dyed lt. blue (indigo)',
      cost: 164
    },
    {
      summary: 'Shirt, thin cotton, fine, dyed red (madder)',
      description: 'Shirt, thin cotton, fine, dyed red (madder)',
      cost: 165
    },
    {
      summary: 'Shirt, thin cotton, fine, dyed yellow (weld)',
      description: 'Shirt, thin cotton, fine, dyed yellow (weld)',
      cost: 162
    },
    {
      summary: 'Shirt, wool, fine',
      description: 'Shirt, wool, fine',
      cost: 130
    },
    {
      summary: 'Shirt, wool, fine, dyed lt. blue (indigo)',
      description: 'Shirt, wool, fine, dyed lt. blue (indigo)',
      cost: 138
    },
    {
      summary: 'Shirt, wool, fine, dyed orange (saffron)',
      description: 'Shirt, wool, fine, dyed orange (saffron)',
      cost: 160
    },
    {
      summary: 'Shirt, wool, fine, dyed purple (true)',
      description: 'Shirt, wool, fine, dyed purple (true)',
      cost: 200
    },
    {
      summary: 'Shirt, wool, fine, dyed red (carmine)',
      description: 'Shirt, wool, fine, dyed red (carmine)',
      cost: 153
    },
    {
      summary: 'Shirt, wool, fine, dyed red (madder)',
      description: 'Shirt, wool, fine, dyed red (madder)',
      cost: 140
    },
    {
      summary: 'Shirt, wool, fine, dyed yellow (weld)',
      description: 'Shirt, wool, fine, dyed yellow (weld)',
      cost: 135
    },
    {
      summary: 'Shoes, leather, black',
      description: 'Shoes, leather, black',
      cost: 70
    },
    {
      summary: 'Socks, wool, knit, thick',
      description: 'Socks, wool, knit, thick',
      cost: 25
    },
    {
      summary: 'Socks, wool, knit, thin',
      description: 'Socks, wool, knit, thin',
      cost: 12
    },
    {
      summary: 'Staff, walking, plain',
      description: 'Staff, walking, plain',
      cost: 20
    },
    {
      summary: 'Sweater, heavy wool',
      description: 'Sweater, heavy wool',
      cost: 160
    },
    {
      summary: 'Sweater, winter wool',
      description: 'Sweater, winter wool',
      cost: 240
    },
    {
      summary: 'Sweater, wool',
      description: 'Sweater, wool',
      cost: 120
    },
    {
      summary: 'Vest, good linen, fine',
      description: 'Vest, good linen, fine',
      cost: 100
    },
    {
      summary: 'Vest, silk, fine',
      description: 'Vest, silk, fine',
      cost: 700
    },
    {
      summary: 'Vest, thick cotton, fine',
      description: 'Vest, thick cotton, fine',
      cost: 120
    },
    {
      summary: 'Vest, wool, fine',
      description: 'Vest, wool, fine',
      cost: 90
    }
  ],
  type: 'tailors',
  notableFeature: [
    // you notice _______
    'several rolls of cloth stacked on the counter.',
    'a wide shelf stuffed to the brim with fabric bolts.',
    'a long rack of thick leather hides pushed up against a wall.',
    'a glass cabinet behind the counter chock full of thimbles.',
    'long rows of different clothing laid out before you.',
    'several body forms fitted with quite regal clothing.',
    'a number of body forms fitted with peasant class clothing.',
    'a rack with several thick woolen cloaks right in the middle of the store.',
    'a basket full of spools of thread on a stool near the front counter.',
    'a large sign at the front window which reads "These clothes are a fit for you!".',
    'nothing out of the ordinary, it seems to be a regular tailors.',
    'a large cluster of mirrors in one corner of the shop.',
    'several paintings of well clothed lords and ladies hang from the shop walls'
  ],
  specialty: [
    // the tailors is known for _______
    'their exceptionally colorful clothing.',
    'the fair prices they give to the common folk.',
    'doing free fittings for suits every other sunday.',
    'sewing a few too many buttons onto things.',
    'doing exceptionally good work for fairly decent prices.',
    'having the most trendy clothing available.',
    'serving several well known nobles.',
    'having created the gown for the most recent royal wedding.',
    'refusing to service garments unless they are completely clean.',
    'charging far too much for far too little fabric.',
    'having a large collection of all black clothing.',
    'their skill with leather working.'
  ]
}
