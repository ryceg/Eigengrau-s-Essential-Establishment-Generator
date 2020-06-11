setup.initMiscLocations = () => {
  setup.misc.locations = {
    'a cavern behind a waterfall': {
      available: ['mountain', 'forest'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create({ entrance: 'somewhat hidden behind a roaring waterfall' })
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
        return `a cavern. ${cavern.readout} <blockquote>The cavern is now home to ${contents}.</blockquote>`
      }
    },
    'a small cave in the bank of a creek': {
      available: ['mountain', 'forest'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create({ entrance: 'in the bank of a creek' })
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
        return `a small cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
      }
    },
    'an entrance to a rocky cave': {
      available: ['mountain', 'forest'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create()
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
        return `a rocky cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
      }
    },
    'a hole under a large tree': {
      available: ['forest'],
      function: (town, biome) => {
        let contents = setup.misc[biome].hole.random()
        // this is lazy. Will change hole from an array to an object once I make more creators.
        if (contents === 'a spider') {
          const spider = setup.misc.spider.create()
          contents = `a ${spider.tippyWord}.`
        }
        const tree = setup.misc.tree.create(town, biome)
        // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
        return `a hole under a large ${tree.tippyWord}. <blockquote>Inside is ${contents}.</blockquote>`
      }
    },
    'a hole under a sheer cliff': {
      available: ['mountain'],
      function: (town, biome) => {
        const contents = setup.misc[biome].hole.random()
        return `a hole under a sheer cliff. <blockquote> Inside is ${contents}.</blockquote>`
      }
    },
    'a hole under a sheer cliff face': {
      available: ['mountain'],
      function: (town, biome) => {
        const contents = setup.misc[biome].hole.random()
        return `a hole under a sheer cliff face. <blockquote> Inside is ${contents}.</blockquote>`
      }
    },
    'a large burrow': {
      available: ['desert', 'forest'],
      function: (town, biome) => {
        const contents = setup.misc[biome].hole.random()
        // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
        return `a large burrow <blockquote>Inside is ${contents}.</blockquote>`
      }
    },
    'a peculiar cottage': {
      available: ['forest'],
      function: (town, biome) => {
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cottageLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome, {
          wordNoun: 'cottage'
        })
        return `a peculiar ${cabin.tippyWord}. <blockquote>${contents} lives here.</blockquote>`
      }
    },

    "a woodsman's cabin": {
      available: ['forest'],
      function: (town, biome) => {
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome)
        return `a woodsman's ${cabin.tippyWord}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
      }
    },
    'a cozy little cabin': {
      available: ['forest'],
      function: (town, biome) => {
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome, {
          wordNoun: 'cabin',
          size: 'little'
        })
        return `a cozy little ${cabin.tippyWord}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
      }
    },
    'an abandoned cabin': {
      available: ['forest', 'mountain'],
      function: (town, biome) => {
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome)
        return `an abandoned ${cabin.tippyWord}. <blockquote>${setup.misc[biome].cabinLived.random()} once lived here. Now, ${contents} lives here.</blockquote>`
      }
    },
    'an abandoned campsite': {
      available: ['forest', 'mountain', 'road', 'desert'],
      function: (town, biome) => {
        const contents = ['a party of orc scouts', 'a goblin raiding party', 'some miners or prospectors', 'some elves', 'some refugees or fugitives', 'someone whose purposes are unclear', 'someone who left in an awful hurry']
        return `an abandoned campsite, which looks to have been occupied previously by ${contents.random()}`
      }
    },
    'a sacred grove': {
      available: ['forest', 'mountain', 'desert'],
      function: () => 'a sacred grove.'
    },
    'a shrine': {
      available: ['forest'],
      function: (town, biome) => {
        const shrine = setup.misc.religion.shrine.create(town)
        return `a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
      }
    },
    'a grave with an illegible headstone': {
      available: ['forest', 'mountain', 'road', 'desert'],
      function: (town) => {
        const grave = setup.misc.graveStone.create(town)
        return grave.sentenceStrings
      }
    },
    'ancient ruins': {
      available: ['forest'],
      function: (town, biome) => {
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
        return `ancient ruins. <blockquote>The ruins were built by ${setup.misc[biome].ruinsLived.random()}. Now, ${contents} lives here.</blockquote>`
      }
    },
    'a cavern in a canyon wall': {
      available: ['desert'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create({ entrance: 'in a canyon wall' })
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounters, setup.misc.encounters)
        return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
      }
    },
    'a cave entrance, hidden by a boulder': {
      available: ['desert'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create({ entrance: 'hidden by a boulder' })
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounters, setup.misc.encounters)
        return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
      }
    },
    'a small cave in the crook of a rock wall': {
      available: ['mountain'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create({ entrance: 'in the crook of a rock wall' })
        const contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
        return `a small cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
      }
    },
    'a small cave next to a dry river bed': {
      available: ['desert'],
      function: (town, biome) => {
        const cavern = setup.misc.cavern.create()
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounters, setup.misc.encounters)
        return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
      }
    },
    // mining is intentionally using the mountain biome
    'an old mine in a canyon': {
      available: ['mountain'],
      function: (town, biome) => `an old mine in a canyon <blockquote>The mine was built by by ${setup.misc.mountain.miners.random()}, looking for ${setup.misc.mountain.minersGoal().random()}.</blockquote>`
    },
    'an active mining camp': {
      available: ['mountain'],
      function: (town, biome) => `an active mining camp, manned by ${setup.misc.mountain.miners.random()}, looking for ${setup.misc.mountain.minersGoal().random()}`
    },
    'a hole under a large boulder': {
      available: ['desert'],
      function: (town, biome) => `a hole under a large boulder <blockquote> Inside is ${setup.misc.desert.hole.random()}</blockquote>`
    },
    'an abandoned stone house': {
      available: ['desert'],
      function: (town, biome) => {
        const lived = setup.misc[biome].houseLived.random()
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].houseLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome, {
          material: 'stone',
          wordNoun: 'house'
        })
        return `an abandoned ${cabin.tippy}<span class="dotted">stone house</span></span>. <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
      }
    },
    'a stone house': {
      available: ['desert'],
      function: (town, biome) => {
        const lived = setup.misc[biome].houseLived.random()
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].houseLives, setup.misc.encounters)
        const cabin = setup.misc.cabin.create(town, biome, {
          material: 'stone',
          wordNoun: 'house'
        })
        return `a ${cabin.tippy}<span class="dotted">stone house</span></span> sheltered by a ${['canyon', 'gorge', 'bluff'].random()} <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
      }
    },
    "a merchant caravan's camp": {
      available: ['mountain', 'desert', 'road', 'forest'],
      function: (town, biome) => {
        const caravan = setup.misc.caravan.create(town)
        return `a merchant caravan's camp. ${caravan.readout}`
      }
    },
    'a peculiar tent': {
      available: ['mountain', 'desert', 'road', 'forest'],
      function: (town, biome) => {
        const lived = ['a party of orc scouts', 'a goblin raiding party', 'some miners or prospectors', 'some elves', 'some refugees or fugitives', 'someone whose purposes are unclear', 'someone who left in an awful hurry']
        return `a peculiar tent, which looks to have been occupied previously by ${lived.random()}`
      }
    },
    'an old watchtower': {
      available: ['mountain', 'desert', 'road', 'forest'],
      function: (town, biome) => {
      // intentionally uses the mountain biome
        const encounter = setup.contentsFetcher(town, biome, setup.misc.mountain.watchtowerLives, setup.misc.encounters)
        return `an old, weathered watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is controlled by ${encounter}.</blockquote>`
      }
    },
    'an abandoned watchtower': {
      available: ['mountain', 'desert', 'road', 'forest'],
      function: (town, biome) => {
      // intentionally uses the mountain biome
        const encounter = setup.contentsFetcher(town, biome, setup.misc.mountain.watchtowerLives, setup.misc.encounters)
        return `a run down, abandoned watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is inhabited by ${encounter}.</blockquote>`
      }
    },
    'a strategically located watchtower': {
      available: ['mountain', 'desert', 'road', 'forest'],
      function: (town, biome) => {
      // intentionally uses the mountain biome
        const encounter = setup.contentsFetcher(town, biome, setup.misc.mountain.watchtowerLives, setup.misc.encounters)
        return `a strategically located watchtower. <blockquote>The watchtower was built by ${setup.misc.mountain.watchtowerBuilt.random()}. Now, it is controlled by ${encounter}.</blockquote>`
      }
    },
    'ruins of an ancient city': {
      available: ['desert'],
      function: (town, biome) => {
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
        // intentionally uses forest
        return `ruins of an ancient city. <blockquote>The city was built by ${setup.misc.forest.ruinsLived.random()} Now, ${encounter} lives here.</blockquote>`
      }
    },
    'a temple ruin': {
      available: ['desert'],
      function: (town, biome) => {
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
        // intentionally uses forest
        return `a temple ruin. <blockquote>The city was built by ${setup.misc.forest.ruinsLived.random()} Now, ${encounter} lives here.</blockquote>`
      }
    },
    'an isolated monastery': {
      available: ['mountain'],
      function: (town, biome) => {
        const lives = setup.misc[biome].religionLives.random()
        return `an isolated monastery. <blockquote>Living inside lives ${lives}, hiding from the outside world.</blockquote>`
      }
    },
    'a remote temple': {
      available: ['mountain'],
      function: (town, biome) => {
        const lives = setup.misc[biome].religionLives.random()
        return `a remote temple. <blockquote>Far from any civilization, this temple is home to ${lives} who have gone to great measures to hide their existence.</blockquote>`
      }
    },
    'an ancient temple': {
      available: ['mountain'],
      function: (town, biome) => {
        const lives = setup.misc[biome].religionLives.random()
        return `an incredibly ancient temple. <blockquote>This ancient place has housed many things, but it is currently home to ${lives}.</blockquote>`
      }
    },
    'a ruined monastery': {
      available: ['forest'],
      function: (town, biome) => {
        const encounter = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
        return `a ruined monastery. <blockquote>These ruins are currently occupied by ${encounter}.</blockquote>`
      }
    },
    'a village of primitive canyon dwellers': {
      available: ['mountain'],
      function: (town, biome) => { return 'a village of primitive canyon dwellers' }
    },
    "some nomad's camp": {
      available: ['mountain', 'desert'],
      function: (town, biome) => { return "some nomad's camp" }
    },
    'an ancient tomb': {
      available: ['desert'],
      function: (town, biome) => { return 'an ancient tomb' }
    },
    'a dark tunnel leading under the mountain': {
      available: ['mountain'],
      function: (town, biome) => { return 'a dark tunnel leading under the mountain' }
    },
    'a tunnel in a cliff face': {
      available: ['mountain'],
      function: (town, biome) => { return 'a tunnel in a cliff face' }
    },
    'a tunnel leading into an abandoned mine': {
      available: ['mountain'],
      function: (town, biome) => { return 'a tunnel leading into an abandoned mine' }
    },
    'an enormous bird’s nest': {
      available: ['mountain', 'forest'],
      function: (town, biome) => { return 'the nest of an enormous bird' }
    },
    'a poorly marked grave or tomb': {
      available: ['mountain', 'forest', 'desert', 'road'],
      function: (town) => {
        const grave = setup.misc.graveStone.create(town)
        return grave.sentenceStrings
      }
    }
  }
}
