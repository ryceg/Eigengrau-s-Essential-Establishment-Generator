/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { encounters } from './encounters'
import { getEncounter, getEventDescription } from './events'

export interface Location {
  summary: string
  available: BiomeName[]
  function?(town: Town, biome: BiomeName): string
}

export type BiomeName =
  | 'mountain'
  | 'desert'
  | 'forest'
  | 'road'
  | 'trail'
  | 'path'

/**
 * @warn Uses `setup.misc`
 * @warn Uses `setup.getEncounter`
 * @warn Uses `setup.gravestone.create`
 */
export const locations: Location[] = [
  {
    summary: 'a cavern behind a waterfall',
    available: ['mountain', 'forest'],
    function: (town, biome) => {
      const cavern = lib.cavern.create({ entrance: 'somewhat hidden behind a roaring waterfall' })
      const readout = lib.cavern.readout(cavern)
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cave, encounters)(town, biome)
      return `a cavern. ${readout} <blockquote>The cavern is now home to ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a small cave in the bank of a creek',
    available: ['mountain', 'forest'],
    function: (town, biome) => {
      const cavern = lib.cavern.create({ entrance: 'in the bank of a creek' })
      const readout = lib.cavern.readout(cavern)
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cave, encounters)(town, biome)
      return `a small cave. ${readout} <blockquote>The cave is home to ${contents}.</blockquote>`
    }
  },
  {
    summary: 'an entrance to a rocky cave',
    available: ['mountain', 'forest'],
    function: (town, biome) => {
      const cavern = lib.cavern.create()
      const readout = lib.cavern.readout(cavern)
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cave, encounters)(town, biome)
      return `a rocky cave. ${readout} <blockquote>The cave is home to ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a hole under a large tree',
    available: ['forest'],
    function: (_, biome) => {
      // @ts-ignore
      let contents = setup.misc[biome].hole.random()
      // this is lazy. Will change hole from an array to an object once I make more creators.
      if (contents === 'a spider') {
        const spider = lib.createAutoTippy(lib.spider)('spider')
        contents = `a ${spider}.`
      }
      if (biome === 'road' || biome === 'trail' || biome === 'path') {
        throw new Error(`Invalid biome "${biome}"`)
      }
      const tree = lib.createAutoTippy(lib.tree, { biome })('tree')
      return `a hole under a large ${tree}. <blockquote>Inside is ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a hole under a sheer cliff',
    available: ['mountain'],
    function: (_, biome) => {
      // @ts-ignore
      const contents = setup.misc[biome].hole.random()
      return `a hole under a sheer cliff. <blockquote> Inside is ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a hole under a sheer cliff face',
    available: ['mountain'],
    function: (_, biome) => {
      // @ts-ignore
      const contents = setup.misc[biome].hole.random()
      return `a hole under a sheer cliff face. <blockquote> Inside is ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a large burrow',
    available: ['desert', 'forest'],
    function: (_, biome) => {
      // @ts-ignore
      const contents = setup.misc[biome].hole.random()
      return `a large burrow <blockquote>Inside is ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a peculiar cottage',
    available: ['forest'],
    function: (town, biome) => {
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cottageLives, encounters)(town, biome)
      const cottage = lib.createAutoTippy(lib.cabin, { wordNoun: 'cottage' })('cottage')
      return `a peculiar ${cottage}. <blockquote>${contents} lives here.</blockquote>`
    }
  },
  {
    summary: "a woodsman's cabin",
    available: ['forest'],
    function: (town, biome) => {
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cabinLives, encounters)(town, biome)
      const cabin = lib.createAutoTippy(lib.cabin)('cabin')
      // @ts-ignore
      return `a woodsman's ${cabin}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
    }
  },
  {
    summary: 'a cozy little cabin',
    available: ['forest'],
    function: (town, biome) => {
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cabinLives, encounters)(town, biome)
      const cabin = lib.createAutoTippy(lib.cabin, { size: 'little' })('cabin')
      // @ts-ignore
      return `a cozy little ${cabin}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
    }
  },
  {
    summary: 'an abandoned cabin',
    available: ['forest', 'mountain'],
    function: (town, biome) => {
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cabinLives, encounters)(town, biome)
      const cabin = lib.createAutoTippy(lib.cabin)('cabin')
      // @ts-ignore
      return `an abandoned ${cabin}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
    }
  },
  {
    summary: 'an abandoned campsite',
    available: ['forest', 'mountain', 'road', 'desert'],
    function: () => {
      const contents = ['a party of orc scouts', 'a goblin raiding party', 'some miners or prospectors', 'some elves', 'some refugees or fugitives', 'someone whose purposes are unclear', 'someone who left in an awful hurry']
      return `an abandoned campsite, which looks to have been occupied previously by ${contents.random()}`
    }
  },
  {
    summary: 'a sacred grove',
    available: ['forest', 'mountain', 'desert']
  },
  {
    summary: 'a shrine',
    available: ['forest'],
    function: (town) => {
      // @ts-ignore
      const shrine = setup.misc.religion.shrine.create(town)
      return `a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
    }
  },
  {
    summary: 'a grave with an illegible headstone',
    available: ['forest', 'mountain', 'road', 'desert'],
    function: (town) => {
      const grave = setup.graveStone.create(town)
      return grave.sentenceStrings
    }
  },
  {
    summary: 'ancient ruins',
    available: ['forest'],
    function: (town, biome) => {
      // @ts-ignore
      const biomeData = setup.misc[biome]
      // @ts-ignore
      const contents = lib.contentsFetcher(biomeData.ruinsLives, encounters)(town, biome)
      return `ancient ruins. <blockquote>The ruins were built by ${biomeData.ruinsLived.random()}. Now, ${contents} lives here.</blockquote>`
    }
  },
  {
    summary: 'a cavern in a canyon wall',
    available: ['desert'],
    function: (town, biome) => {
      const cavern = lib.cavern.create({ entrance: 'in a canyon wall' })
      const readout = lib.cavern.readout(cavern)
      const encounter = getEventDescription(getEncounter(biome), town, biome)
      return `a cavern. ${readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'a cave entrance, hidden by a boulder',
    available: ['desert'],
    function: (town, biome) => {
      const cavern = lib.cavern.create({ entrance: 'hidden by a boulder' })
      const readout = lib.cavern.readout(cavern)
      const encounter = getEventDescription(getEncounter(biome), town, biome)
      return `a cavern. ${readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'a small cave in the crook of a rock wall',
    available: ['mountain'],
    function: (town, biome) => {
      const cavern = lib.cavern.create({ entrance: 'in the crook of a rock wall' })
      const readout = lib.cavern.readout(cavern)
      // @ts-ignore
      const contents = lib.contentsFetcher(setup.misc[biome].cave, encounters)(town, biome)
      return `a small cave. ${readout} <blockquote>The cave is home to ${contents}.</blockquote>`
    }
  },
  {
    summary: 'a small cave next to a dry river bed',
    available: ['desert'],
    function: (town, biome) => {
      const cavern = lib.cavern.create()
      const readout = lib.cavern.readout(cavern)
      const encounter = getEventDescription(getEncounter(biome), town, biome)
      return `a cavern. ${readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
    }
  },
  // mining is intentionally using the mountain biome
  {
    summary: 'an old mine in a canyon',
    available: ['mountain'],
    function: () => {
      // @ts-ignore
      const miner = setup.misc.mountain.miners.random()
      // @ts-ignore
      const goal = setup.misc.mountain.minersGoal().random()
      return `an old mine in a canyon <blockquote>The mine was built by by ${miner}, looking for ${goal}.</blockquote>`
    }
  },
  {
    summary: 'an active mining camp',
    available: ['mountain'],
    function: () => {
      // @ts-ignore
      const miners = setup.misc.mountain.miners.random()
      // @ts-ignore
      const goal = setup.misc.mountain.minersGoal().random()
      return `an active mining camp, manned by ${miners}, looking for ${goal}`
    }
  },
  {
    summary: 'a hole under a large boulder',
    available: ['desert'],
    function: () => {
      // @ts-ignore
      const content = setup.misc.desert.hole.random()
      return `a hole under a large boulder <blockquote> Inside is ${content}</blockquote>`
    }
  },
  {
    summary: 'an abandoned stone house',
    available: ['desert'],
    function: (town, biome) => {
      // @ts-ignore
      const lived = setup.misc[biome].houseLived.random()
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc[biome].houseLives, encounters)(town, biome)
      const house = lib.createAutoTippy(lib.cabin, { material: 'stone', wordNoun: 'house' })('stone house')
      return `an abandoned ${house}. <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
    }
  },
  {
    summary: 'a stone house',
    available: ['desert'],
    function: (town, biome) => {
      // @ts-ignore
      const lived = setup.misc[biome].houseLived.random()
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc[biome].houseLives, encounters)(town, biome)
      const house = lib.createAutoTippy(lib.cabin, { material: 'stone', wordNoun: 'house' })('stone house')
      return `a ${house} sheltered by a ${['canyon', 'gorge', 'bluff'].random()} <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
    }
  },
  {
    summary: "a merchant caravan's camp",
    available: ['mountain', 'desert', 'road', 'forest'],
    function: (town) => {
      // @ts-ignore
      const caravan = setup.misc.caravan.create(town)
      return `a merchant caravan's camp. ${caravan.readout}`
    }
  },
  {
    summary: 'a peculiar tent',
    available: ['mountain', 'desert', 'road', 'forest'],
    function: () => {
      const lived = ['a party of orc scouts', 'a goblin raiding party', 'some miners or prospectors', 'some elves', 'some refugees or fugitives', 'someone whose purposes are unclear', 'someone who left in an awful hurry']
      return `a peculiar tent, which looks to have been occupied previously by ${lived.random()}`
    }
  },
  {
    summary: 'an old watchtower',
    available: ['mountain', 'desert', 'road', 'forest'],
    function: (town, biome) => {
      // intentionally uses the mountain biome
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc.mountain.watchtowerLives, encounters)(town, biome)
      // @ts-ignore
      return `an old, weathered watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is controlled by ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'an abandoned watchtower',
    available: ['mountain', 'desert', 'road', 'forest'],
    function: (town, biome) => {
      // intentionally uses the mountain biome
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc.mountain.watchtowerLives, encounters)(town, biome)
      // @ts-ignore
      return `a run down, abandoned watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is inhabited by ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'a strategically located watchtower',
    available: ['mountain', 'desert', 'road', 'forest'],
    function: (town, biome) => {
      // intentionally uses the mountain biome
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc.mountain.watchtowerLives, encounters)(town, biome)
      // @ts-ignore
      return `a strategically located watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is controlled by ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'ruins of an ancient city',
    available: ['desert'],
    function: (town, biome) => {
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc[biome].ruinsLives, encounters)(town, biome)
      // intentionally uses forest
      // @ts-ignore
      return `ruins of an ancient city. <blockquote>The city was built by ${setup.misc.forest.ruinsLived.random()} Now, ${encounter} lives here.</blockquote>`
    }
  },
  {
    summary: 'a temple ruin',
    available: ['desert'],
    function: (town, biome) => {
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc[biome].ruinsLives, encounters)(town, biome)
      // intentionally uses forest
      // @ts-ignore
      return `a temple ruin. <blockquote>The city was built by ${setup.misc.forest.ruinsLived.random()} Now, ${encounter} lives here.</blockquote>`
    }
  },
  {
    summary: 'an isolated monastery',
    available: ['mountain'],
    function: (_, biome) => {
      // @ts-ignore
      const lives = setup.misc[biome].religionLives.random()
      return `an isolated monastery. <blockquote>Living inside lives ${lives}, hiding from the outside world.</blockquote>`
    }
  },
  {
    summary: 'a remote temple',
    available: ['mountain'],
    function: (_, biome) => {
      // @ts-ignore
      const lives = setup.misc[biome].religionLives.random()
      return `a remote temple. <blockquote>Far from any civilization, this temple is home to ${lives} who have gone to great measures to hide their existence.</blockquote>`
    }
  },
  {
    summary: 'an ancient temple',
    available: ['mountain'],
    function: (_, biome) => {
      // @ts-ignore
      const lives = setup.misc[biome].religionLives.random()
      return `an incredibly ancient temple. <blockquote>This ancient place has housed many things, but it is currently home to ${lives}.</blockquote>`
    }
  },
  {
    summary: 'a ruined monastery',
    available: ['forest'],
    function: (town, biome) => {
      // @ts-ignore
      const encounter = lib.contentsFetcher(setup.misc[biome].ruinsLives, encounters)(town, biome)
      return `a ruined monastery. <blockquote>These ruins are currently occupied by ${encounter}.</blockquote>`
    }
  },
  {
    summary: 'a village of primitive canyon dwellers',
    available: ['mountain']
  },
  {
    summary: "some nomad's camp",
    available: ['mountain', 'desert']
  },
  {
    summary: 'an ancient tomb',
    available: ['desert']
  },
  {
    summary: 'a dark tunnel leading under the mountain',
    available: ['mountain']
  },
  {
    summary: 'a tunnel in a cliff face',
    available: ['mountain']
  },
  {
    summary: 'a tunnel leading into an abandoned mine',
    available: ['mountain']
  },
  {
    summary: 'the nest of an enormous bird',
    available: ['mountain', 'forest']
  },
  {
    summary: 'a poorly marked grave or tomb',
    available: ['mountain', 'forest', 'desert', 'road'],
    function: (town) => {
      const grave = setup.graveStone.create(town)
      return grave.sentenceStrings
    }
  }
]
