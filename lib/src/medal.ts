import { assign } from './utils'
import { random } from './random'

interface Medal {
  metal: string
  material: string
  emblem: string
  colour: string
  readout: string
  tip: string
}

export const medal = {
  create: (base?: Partial<Medal>): Medal => {
    const medal = {
      metal: random(data.metals),
      material: random(data.materials),
      emblem: random(data.emblems),
      colour: random(data.colours),
      ...base
    }

    assign(medal, {
      readout: `This medal's emblem is made of ${medal.metal} and has a ${medal.material} ribbon. The emblem is ${medal.emblem} and the ribbon is coloured ${medal.colour}.`
    })

    assign(medal, {
      tip: `<span class="dotted"><<tooltip "medal"${JSON.stringify(medal.readout)}>></span>`
    })

    return medal
  }
}

const data = {
  metals: ['iron', 'steel', 'silver', 'bronze', 'gold', 'copper', 'aluminum', 'lead', 'tin', 'nickel', 'oak wood', 'pine wood', 'brass', 'marble', 'onyx', 'tempered glass'],
  materials: ['cloth', 'wool', 'fleece', 'silk', 'cotton', 'leather', 'burlap', 'horse hair', 'lion mane hair', 'dragon scales', 'braided hemp', 'snake skin'],
  emblems: ['a pair of wings', 'a downward facing sword', 'an upward facing sword', 'a skull', 'an eagle', 'an arrow', 'an embossed circle', 'an axe', 'a heart', 'a cross', 'a holy symbol', 'the symbol of a local noble', 'a lion', 'a pair of clasped hands', 'an eye', 'a pyramid', 'a key', 'a raven', 'a feather', 'a wreath', 'a sturdy tree'],
  colours: ['red', 'crimson', 'maroon', 'gold', 'yellow', 'peridot', 'peach', 'purple', 'orange', 'green', 'white', 'black', 'brown', 'blue', 'indigo', 'azure', 'mauve', 'teal', 'emerald']
}
