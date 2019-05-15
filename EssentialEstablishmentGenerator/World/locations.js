setup.misc.locations = {
    'a cavern behind a waterfall': (town, biome) => {
      let cavern = setup.misc.cavern.create({ entrance: 'somewhat hidden behind a roaring waterfall' })
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
      return 'a cavern. ' + cavern.readout + ' <blockquote>The cavern is now home to ' + contents + '.</blockquote>'
    },
    'a small cave in the bank of a creek': (town, biome) => {
      let cavern = setup.misc.cavern.create({ entrance: 'in the bank of a creek' })
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
      return 'a small cave. ' + cavern.readout + ' <blockquote>The cave is home to ' + contents + '.</blockquote>'
    },
    'an entrance to a rocky cave': (town, biome) => {
      let cavern = setup.misc.cavern.create()
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cave, setup.misc.encounters)
      return 'a rocky cave. ' + cavern.readout + ' <blockquote>The cave is home to ' + contents + '.</blockquote>'
    },
    'a hole under a large tree': (town, biome) => {
      let contents = setup.misc[biome].hole.seededrandom()
      // this is lazy. Will change hole from an array to an object once I make more creators.
      if (contents === 'a spider') {
        let spider = setup.misc.spider.create()
        contents = 'a ' + spider.tippyWord + '.'
      }
      let tree = setup.misc.tree.create(town, biome)
      // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
      return 'a hole under a large ' + tree.tippyWord + '. <blockquote>Inside is ' + contents + '.</blockquote>'
    },
    'a large burrow': (town, biome) => {
      let contents = setup.misc[biome].hole.seededrandom()
      // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
      return 'a large burrow <blockquote>Inside is ' + contents + '.</blockquote>'
    },
    'a peculiar cottage': (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cottageLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome, {
        wordNoun: 'cottage'
      })
      return 'a peculiar ' + cabin.tippyWord + '. <blockquote>' + contents + ' lives here.</blockquote>'
    },
    "a woodsman's cabin": (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome)
      return "a woodsman's " + cabin.tippyWord + '. <blockquote>' + setup.misc[biome].cabinLived.seededrandom() + ' once lived here. Now, ' + contents + ' lives here.</blockquote>'
    },
    'a cozy little cabin': (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome, {
        wordNoun: 'cabin',
        size: 'little'
      })
      return 'a cozy little ' + cabin.tippyWord + '. <blockquote>' + setup.misc[biome].cabinLived.seededrandom() + ' once lived here. Now, ' + contents + ' lives here.</blockquote>'
    },
    'an abandoned cabin': (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].cabinLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome)
      return 'an abandoned ' + cabin.tippyWord + '. <blockquote>' + setup.misc[biome].cabinLived.seededrandom() + ' once lived here. Now, ' + contents + ' lives here.</blockquote>'
    },
    'an abandoned campsite': (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].camped, setup.misc.encounters)
      return 'an abandoned campsite, which looks to have been occupied previously by ' + contents
    },
    'a sacred grove': () => 'a sacred grove.',
    'a shrine': (town, biome) => {
      let shrine = setup.misc.religion.shrine.create(town)
      return 'a shrine dedicated to ' + shrine.god + '. The shrine is ' + shrine.material + ' ' + shrine.senses
    },
    'a grave with an illegible headstone': () => 'a grave with an illegible headstone.',
    'ancient ruins': (town, biome) => {
      let contents = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
      return 'ancient ruins. <blockquote>The ruins were built by ' + setup.misc[biome].ruinsLived.seededrandom() + '. Now, ' + contents + ' lives here.</blockquote>'
    },
    'a cavern in a canyon wall': (town, biome) => {
      let cavern = setup.misc.cavern.create({ entrance: 'in a canyon wall' })
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounter, setup.misc.encounters)
      return 'a cavern. ' + cavern.readout + ' <blockquote>The cavern is home to ' + encounter + '.</blockquote>'
    },
    'a cave entrance, hidden by a boulder': (town, biome) => {
      let cavern = setup.misc.cavern.create({ entrance: 'hidden by a boulder' })
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounter, setup.misc.encounters)
      return 'a cavern. ' + cavern.readout + ' <blockquote>The cavern is home to ' + encounter + '.</blockquote>'
    },
    'a small cave next to a dry river bed': (town, biome) => {
      let cavern = setup.misc.cavern.create()
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].encounter, setup.misc.encounters)
      return 'a cavern. ' + cavern.readout + ' <blockquote>The cavern is home to ' + encounter + '.</blockquote>'
    },
    // mining is intentionally using the mountain biome
    'an old mine in a canyon': (town, biome) => 'an old mine in a canyon <blockquote>The mine was built by by ' + setup.misc.mountain.miners.seededrandom() + ', looking for ' + setup.misc.mountain.minersGoal.seededrandom() + '.</blockquote>',
    'an active mining camp': (town, biome) => 'an active mining camp, manned by ' + setup.misc.mountain.miners.seededrandom() + ', looking for ' + setup.misc.mountain.minersGoal.seededrandom(),
    'a hole under a large boulder': (town, biome) => 'a hole under a large boulder <blockquote> Inside is ' + setup.misc.desert.hole.seededrandom() + '</blockquote>',
    'an abandoned stone house': (town, biome) => {
      let lived = setup.misc[biome].houseLived.seededrandom()
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].houseLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome, {
        material: 'stone',
        wordNoun: 'house'
      })
      return 'an abandoned ' + cabin.tippy + '<b>stone house</b></span>. <blockquote>' + lived + ' once lived here. Now, ' + encounter + ' lives here.</blockquote>'
    },
    'a stone house': (town, biome) => {
      let lived = setup.misc[biome].houseLived.seededrandom()
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].houseLives, setup.misc.encounters)
      let cabin = setup.misc.cabin.create(town, biome, {
        material: 'stone',
        wordNoun: 'house'
      })
      return 'a ' + cabin.tippy + '<b>stone house</b></span> sheltered by a ' + ['canyon', 'gorge', 'bluff'].seededrandom() + ' <blockquote>' + lived + ' once lived here. Now, ' + encounter + ' lives here.</blockquote>'
    },
    "a merchant caravan's camp": (town, biome) => {
      let caravan = setup.misc.caravan.create(town)
      return "a merchant caravan's camp. " + caravan.readout
    },
    'a peculiar tent': (town, biome) => {
      let lived = setup.misc[biome].camped.seededrandom()
      return 'an peculiar tent, which looks to have been occupied previously by ' + lived
    },
    'an old watchtower': (town, biome) => {
      // intentionally uses the mountain biome
      let encounter = setup.contentsFetcher(town, biome, setup.misc.mountain.watchtowerLives, setup.misc.encounters)
      return 'a strategically located watchtower. <blockquote>The watchtower was built by ' + setup.misc.mountain.watchtowerBuilt.seededrandom() + '. Now, it is controlled by ' + encounter + ' .</blockquote>'
    },
    'ruins of an ancient city': (town, biome) => {
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
      return 'ruins of an ancient city. <blockquote>The city was built by ' + setup.misc[biome].ruinsLived.seededrandom() + ' Now, ' + encounter + ' lives here.</blockquote>'
    },
    'a temple ruin': (town, biome) => {
      let encounter = setup.contentsFetcher(town, biome, setup.misc[biome].ruinsLives, setup.misc.encounters)
      return 'a temple ruin. <blockquote>The city was built by ' + setup.misc[biome].ruinsLived.seededrandom() + ' Now, ' + encounter + ' lives here.</blockquote>'
    },
    'a village of primitive canyon dwellers': (town, biome) => 'a village of primitive canyon dwellers',
    "some nomad's camp": (town, biome) => { return "some nomad's camp" },
    'an ancient tomb': (town, biome) => 'an ancient tomb'
  }