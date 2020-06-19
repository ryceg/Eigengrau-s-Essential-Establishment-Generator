import { random } from '../src/random'
import { getUUID } from '../src/utils'
import { Construct, ConstructUtils } from './_common'

interface Spider extends Construct<'spider'> {
  colour: string
  markings: string
  eyes: string
  mouth: string
  poison: string
  tactics: string
  webs: string
  habitat: string
}

export const spider: ConstructUtils<Spider> = {
  create: base => ({
    $uuid: getUUID(),
    $type: 'spider',
    colour: random(data.colour),
    markings: random(data.markings()),
    eyes: random(data.eyes),
    mouth: random(data.mouth),
    poison: random(data.poison),
    tactics: random(data.tactics),
    webs: random(data.webs),
    habitat: random(data.habitat),
    ...base
  }),
  readout: (spider) => {
    return `This spider is ${spider.colour}, and has ${spider.markings}, with ${spider.eyes} and a mouth ${spider.mouth}. This breed thrives in ${spider.habitat}, and their poison causes ${spider.poison}.Their webs are ${spider.webs}. It prefers to ${spider.tactics}`
  }
}

const data = {
  colour: ['black', 'dark grey', 'dark brown', 'black and brown', 'black and grey', 'pale brown', 'brown and grey', 'reddish brown'],
  markings: () => ['pale banding on its legs', 'dark banding on its legs', `bright ${random(['orange', 'red', 'white', 'yellow'])} banding on its legs`, 'pale stripes down its abdomen', 'dark stripes down its abdomen', `a distinct, crimson ${random(['arrowhead', 'pair of eye-like spots', 'hourglass', 'star'])} on its abdomen`, `a distinct, ${random(['black', 'dark grey'])} ${random(['arrowhead', 'pair of eye-like spots', 'hourglass', 'star'])} on its abdomen`, 'no obvious markings'],
  eyes: ['dull and black', 'reflective and black', 'dark grey, almost black', 'dark red', 'bright red', 'pearly white'],
  mouth: ['flanked by fangs, dripping venom', 'flanked by hooked fangs', 'flanked by hairy chelicerae, each ending in a sharp fang', 'flanked by chelicerae, covered in hair that hides any fangs', 'hungrily opening and closing', 'yawning open'],
  poison: ['paralysis', 'loss of consciousness', 'nausea', 'headache', 'loss of coordination', 'blindness', 'dizziness', 'shortness of breath'],
  tactics: ['pick off weak, easy prey', 'pursue its prey until the opportune time to strike', 'lay web traps and wait', 'incapacitate prey, wrap it in webbing and carry it off to its larder', 'ambush prey in territory the spider knows well', 'poison its prey and then retreat, following the prey until it falls'],
  webs: ['sheet-like webs', 'webs with radial symmetry', 'webs with triangular symmetry', 'webs with hexagonal symmetry', 'webs with irregular shapes', 'almost no webs; the spider is constantly on the move and on the hunt'],
  habitat: ['in caverns', 'on cliff-sides', 'on the forest floor', 'in grasslands', 'in jungles', 'in rocky deserts', 'in rotting logs', 'in shallow burrows', 'in swamps', 'in treetops']
}
