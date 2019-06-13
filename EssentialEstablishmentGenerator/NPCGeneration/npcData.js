setup.npcData = {
  gender: {
    man: {
      title: 'Mr',
      altTitle: 'Master',
      heshe: 'he',
      himher: 'him',
      himherself: 'himself',
      hisher: 'his',
      hisherself: 'hisself',
      boygirl: 'boy',
      manwoman: 'man',
      menwomen: 'men',
      malefemale: 'male',
      guygirl: 'guy',
      marriageNoun: 'husband',
      niblingReciprocalNoun: 'uncle',
      parentNoun: 'father',
      childNoun: 'son',
      siblingNoun: 'brother',
      niblingNoun: 'nephew',
      oppositeGender: 'woman'
    },
    woman: {
      title: 'Ms',
      altTitle: 'Mistress',
      heshe: 'she',
      himher: 'her',
      himherself: 'herself',
      hisher: 'her',
      hisherself: 'herself',
      boygirl: 'girl',
      manwoman: 'woman',
      menwomen: 'women',
      malefemale: 'female',
      guygirl: 'girl',
      marriageNoun: 'wife',
      niblingReciprocalNoun: 'aunt',
      parentNoun: 'mother',
      childNoun: 'daughter',
      siblingNoun: 'sister',
      niblingNoun: 'neice',
      oppositeGender: 'man'
    }
  },
  heightChart: [
    [78, 'giraffe-like'],
    [77, 'extremely tall'],
    [76, 'very tall'],
    [75, 'rather tall'],
    [74, 'quite tall'],
    [73, 'reasonably tall'],
    [72, 'tall'],
    [71, 'taller than average'],
    [70, 'average sized'],
    [69, 'medium sized'],
    [68, 'on the short side'],
    [67, 'somewhat short'],
    [66, 'relatively short'],
    [65, 'short-ish'],
    [64, 'short'],
    [63, 'short'],
    [62, 'rather short'],
    [61, 'barely five foot'],
    [60, 'quite short'],
    [59, 'rather small'],
    [58, 'really short'],
    [57, 'pint sized'],
    [56, 'quite small'],
    [55, 'small'],
    [54, 'squat'],
    [53, 'somewhat squat'],
    [52, 'quite squat'],
    [50, 'rather squat'],
    [48, 'somewhat tiny'],
    [46, 'rather small'],
    [44, 'rather tall (compared to a halfling)'],
    [42, 'tall (for a halfling)'],
    [40, 'barely a metre'],
    [38, 'diminuitive'],
    [36, 'quite diminuitive'],
    [34, 'adorably short'],
    [32, 'tiny'],
    [30, 'so so tiny'],
    [0, 'impossibly small']
  ],
  lifeEvents: {
    performed: {
      probability: 3,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].socialClass === 'commoner' || setup.townData.professions[npc.profession].socialClass === 'nobility' || random(100) > 90) {
          return true
        } else return false
      },
      function (town, npc) {
        console.log('called lifeEvents.performed function')
        const character = setup.npcData.lifeEvents.performed.character.seededrandom()
        const theatrePerformance = setup.npcData.lifeEvents.performed.theatrePerformance.seededrandom()
        const bandInfo = setup.npcData.lifeEvents.performed.bandInfo.seededrandom()
        const talent = setup.npcData.lifeEvents.performed.talent.seededrandom()
        const talentShowInfo = setup.npcData.lifeEvents.performed.talentShowInfo.seededrandom()
        return [
          ['I played', 'I was'].seededrandom() + ' ' + character + ' in a ' + ['local', 'regional', 'travelling', 'well known', 'little known'].seededrandom() + ' ' + ['theatre show', 'musical', 'play', 'one man show'].seededrandom() + '. ' + theatrePerformance + '.',
          ['I was part of a', 'I played in a', 'I was in a'] + ' ' + ['traveling band', 'local band', 'well known band', 'one man band', 'barely known band', 'pretty unpopular band'].seededrandom() + ' ' + ['for a while', 'for a little bit', 'for a pretty long stint', 'for a couple months', 'for over a year', 'for a short time'].seededrandom() + '. The band ' + bandInfo + '.',
          ['I entered a', 'I took part in a', 'I competed in a'].seededrandom() + ' ' + ['local', 'regional', 'kingdom wide'].seededrandom() + ' talent show with my ' + talent + '. ' + talentShowInfo + '.'
        ].seededrandom()
      },
      character: [
        'a main character',
        'the main character',
        'a secondary character',
        'a minor charcter',
        'a minor part',
        'a secondary part',
        'the love interest',
        'the comic relief',
        'the main villain',
        "the villain's sidekick",
        'the detective',
        'the hero',
        'a chorus member'
      ],
      theatrePerformance: [
        'I can still hear the roaring applause of the audience sometimes',
        'Sometimes, I can still hear the crowd booing me off the stage',
        'The audience never seemed all too impressed with my performance',
        "Admittedly I wasn't the best performer, but I had fun",
        'I was not a great actor, but I made a lot of friends',
        'I played my part well if I do say so myself',
        'I was masterful in the role and everyone told me so',
        'The audience always gave me a standing ovation',
        'Some of the audience members actually threw rotten fruit at me',
        'The crowds would throw flowers and coins onto the stage after every show',
        'I did pretty well and I made a lot of friends',
        "I didn't really like any of the other actors",
        'Admittedly all the other actors were a lot better than I was',
        'I was a better performer than anyone else in the show'
      ],
      bandInfo: [
        'only ever played at a few taverns',
        'was pretty experimental and not a lot of people understood the music',
        'was a lot of fun at the time',
        'was something I would like to do again some day',
        "wasn't very good at playing to be honest",
        'had a lot of songs but not many good ones',
        'only had a few songs but all of them were pretty good',
        'made all the instrument noises with their voices',
        'was pretty popular among the dwarves',
        "managed to play for a local noble's feast",
        'only ever played on the open streets'
      ],
      talent: [
        'singing',
        'juggling',
        'lute playing',
        'harp playing',
        'dancing',
        'acting',
        'cooking',
        'needlepoint skills',
        'comedy routine',
        'drum playing',
        'painting',
        'sword skills',
        'archery'
      ],
      talentShowInfo: [
        "I didn't win anything, but I had a good time",
        'I may not have won anything, but I made some new friends',
        'I messed up in the middle of my act and it cost me the prize',
        'I won first place and got a ton of prizes',
        'I got second place and got a pretty good prize',
        'My act was sabatoged by someone and I lost',
        'One of the judges had it out for me and cost me the grand prize',
        'I lost out to someone far better at my own talent',
        'I beat out several people with the same talent',
        'A local noble even complimented my skills after the show was over',
        'The audience actually booed me off the stage I was so bad',
        'The judges were really amazed by my performance'
      ]
    },
    warMedal: {
      probability: 2,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].sector === 'military' || random(100) > 70) {
          if (npc.ageYears > 15) {
            return true
          }
        } else return false
      },
      function (town, npc) {
        console.log('called lifeEvents.magicalCreature function')
        const medal = setup.misc.medal.create()
        const medalType = setup.npcData.lifeEvents.warMedal.medalType.seededrandom()
        const medalStatus = setup.npcData.lifeEvents.warMedal.medalStatus.seededrandom()
        if (setup.townData.professions[npc.profession].sector === 'military') {
          return ['after a recent war', 'after a brutal battle', 'after taking command of a dangerous situation', 'I fought in a war and'].seededrandom() + ' I was awarded a ' + medal.tip + ' for ' + medalType + '.' + medalStatus + '.'
        } else if (npc.ageYears > 60) {
          return ['in my military youth', 'back when I was young enough for the army', 'in my army days', "after a forced recruitment into a noble's army", 'I was recruited into a war and afterwards '].seededrandom() + ' I was awarded a ' + medal.tip + ' for ' + medalType + '.' + medalStatus + '.'
        } else return ['after being forced into an army for a recent war', 'after a forced recruitment into an army', 'after being dragged along on a military campaign', 'after joining in on a recent war', 'I was recruited into a war and afterwards'].seededrandom() + ' I was awarded a ' + medal.tip + ' for ' + medalType + '.' + medalStatus + '.'
      },
      medalType: [
        'bravery',
        'honor',
        'valour',
        'service',
        'patriotism',
        'marksmanship',
        'brutality',
        'support',
        'my contributions',
        'distinguished service',
        'merit',
        'heroism',
        'acting in the face of danger',
        'defensive actions',
        'going above and beyond my duty as a soldier',
        'excellent combat',
        'good conduct',
        'the long tour',
        'saving a life'
      ],
      medalStatus: [
        'I keep it on me at all times in my pocket for luck',
        'I keep it pinned on my chest at all times',
        'I keep it above my fireplace to show my guests',
        "I keep it in a drawer somewhere, I don't like to think about what happened back then",
        "I have no idea where it is these days and I don't really care",
        'I lost it at some point and I wish I could find it again',
        'I had to sell it when times were tough',
        'The thing was stolen from me one night and I never saw it again'
      ]
    },
    magicalCreatue: {
      probability: 2,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].sector === 'adventuring' || random(100) > 90) {
          return true
        } else return false
      },
      function (town, npc) {
        console.log('called lifeEvents.magicalCreature function')
        const flower = setup.flora.flower.stemP.seededrandom()
        const tree = setup.flora.tree.typeArticle.seededrandom()
        const fruitTree = setup.flora.fruit.tree.seededrandom()
        const goodPlace = setup.npcData.lifeEvents.magicalCreatue.goodPlaces.seededrandom()
        const goodCreature = setup.npcData.lifeEvents.magicalCreatue.goodCreatures.seededrandom()
        const goodAnimal = setup.npcData.lifeEvents.magicalCreatue.goodAnimals.seededrandom()
        const badPlace = setup.npcData.lifeEvents.magicalCreatue.badPlaces.seededrandom()
        const badCreature = setup.npcData.lifeEvents.magicalCreatue.badCreatures.seededrandom()
        const badAnimal = setup.npcData.lifeEvents.magicalCreatue.badAnimals.seededrandom()
        return [
        // good/non-hostile creatures
          ['while I was travelling through', 'while I was journeying through', 'while passing through', 'while exploring'].seededrandom() + ' ' + [tree + ' forest', 'a field of ' + flower, 'an orchard of ' + fruitTree + ' trees', goodPlace].seededrandom() + ', ' + ['I saw', 'I spotted', 'I came across', 'I stumbled upon', 'I ran into', 'I caught sight of'].seededrandom() + ' ' + [goodCreature, goodCreature, 'a giant ' + goodAnimal].seededrandom() + '! ' + ['I got pretty close to it before it ran off', 'I got close enough to touch it', 'It ran off as soon as it saw me', 'It spent the day following me from a distance'].seededrandom() + '.',
          // dangerous/evil creautres
          ['while I was travelling through', 'while I was journeying through', 'while passing through', 'while exploring', 'while trying to escape'].seededrandom() + ' ' + ['the heart of ' + tree + ' forest', badPlace, badPlace, badPlace].seededrandom() + ', ' + ['I saw', 'I spotted', 'I came across', 'I stumbled upon', 'I ran into', 'I caught sight of'].seededrandom() + ' ' + [badCreature, badCreature, 'a giant ' + badAnimal].seededrandom() + '! ' + ['It started chasing me as soon as it saw me, and I barely escaped', 'I ran as soon as I saw the thing', 'I snuck up close to get a better look, but ran away after that', 'The creature stalked me for the rest of the day', "It didn't see me, but after that I was on edge for the rest of my journey", 'I barely escaped from that thing with my life'].seededrandom() + '.'
        ].seededrandom()
      },
      goodPlaces: [
        'far away lands',
        'a dense marsh',
        'a red sand desert',
        'a white sand desert',
        'some truly mystical lands',
        'a magical forest',
        'a beautiful, sunlit valley',
        'a deep, colorful canyon',
        'a clearing near a bright blue creek',
        'a clear skyed savannah',
        'the ruins of an ancient temple'
      ],
      goodCreatures: [
        'a unicorn',
        'a gryphon',
        'a fairy',
        'an ent',
        'a phoenix',
        'a pegasus',
        'a brownie',
        'a pixie',
        'a hippogrif'
      ],
      goodAnimals: [
        'fox',
        'owl',
        'raven',
        'turtle',
        'frog',
        'beaver',
        'deer',
        'elk',
        'sparrow',
        'cat',
        'frog',
        'chameleon',
        'beetle',
        'squirrel',
        'rabbit'
      ],
      badPlaces: [
        'the ruins of a castle',
        'a murky swamp',
        'a dark bog',
        'a winding maze',
        'a twisting system of caverns',
        'an enormous cavern',
        'a craggy mountain pass',
        'the bottom of a canyon',
        'a field in the dead of night',
        'a forest under the full moon',
        'a mountain pass',
        'an abandoned city',
        'the ruins of a forgotten temple',
        'a far away land'
      ],
      badCreatures: [
        'a dragon',
        'a werewolf',
        'a vampire',
        'a sphinx',
        'a banshee',
        'a chimera',
        'an imp',
        'a golem',
        'a hydra',
        'a wyvern',
        'an ogre',
        'a zombie'
      ],
      badAnimals: [
        'bat',
        'bear',
        'lion',
        'tiger',
        'vulture',
        'wolf',
        'crocodile',
        'wasp',
        'hornet',
        'cobra',
        'spider',
        'scorpion',
        'wolverine'
      ]
    },
    festival: {
      probability: 5,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.festival function')
        const placement = setup.npcData.lifeEvents.festival.placement.seededrandom()
        const foodTrait = setup.npcData.lifeEvents.festival.foodTrait.seededrandom()
        const flowerTrait = setup.npcData.lifeEvents.festival.flowerTrait.seededrandom()
        const fruit = setup.flora.fruit.fruitP.seededrandom()
        const vegetable = setup.flora.vegetable.vegetableP.seededrandom()
        const flower = setup.flora.flower.stemP.seededrandom()
        const festivalDid = setup.npcData.lifeEvents.festival.festivalDid.seededrandom()
        if (random(100) > 70) {
          return [
            ['I won', 'I got'].seededrandom() + ' ' + placement + ' at ' + ['a garden festival', "a farmer's market", 'an agriculture festival', 'a garden tournament'].seededrandom() + ' for my ' + foodTrait + ' ' + [fruit, vegetable].seededrandom() + '.',
            ['I won', 'I got'].seededrandom() + ' ' + placement + ' at ' + ['a garden festival', 'a flower festival', "a farmer's market", 'a garden tournament'].seededrandom() + ' for my ' + flowerTrait + ' ' + flower + '.',
            ['some friends and I went to', 'I went to', 'I spent a day at'].seededrandom() + ' ' + ['a garden festival', "a farmer's market", 'an agriculture festival', 'a garden tournament'].seededrandom() + ' where I saw some ' + foodTrait + ' ' + [fruit, vegetable].seededrandom() + '. ' + ['I think they won', 'If I recall correctly, they got', 'At the end of the festival they won '].seededrandom() + ' ' + placement + ' in the growers competition.',
            ['some friends and I went to', 'I went to', 'I spent a day at'].seededrandom() + ' ' + ['a garden festival', 'a flower festival', "a farmer's market", 'a garden tournament'].seededrandom() + ' where I saw some ' + flowerTrait + ' ' + flower + '. ' + ['I think they won', 'If I recall correctly, they got', 'At the end of the festival they won '].seededrandom() + ' ' + placement + ' in the growers competition.'
          ].seededrandom
        } else {
          return [
            ['some friends and I went to', 'I went to', 'I spent a day at', 'I attended', 'I went to celebrate at'].seededrandom() + ' ' + ['a holiday festival', 'a spring festival', 'a summer festival', 'a fall festival', 'a autumn festival', 'a winter festival', 'a grand festival', 'a festival', 'a festival for the gods', "a heroe's festival"].seededrandom() + '. While I was there, I ' + festivalDid + '.',
            ['some friends and I went to', 'I went to', 'I spent a day at', 'I attended', 'I went to celebrate at'].seededrandom() + ' ' + ['a holiday festival', 'a spring festival', 'a summer festival', 'a fall festival', 'a autumn festival', 'a winter festival', 'a grand festival', 'a festival', 'a festival for the gods', "a heroe's festival"].seededrandom() + '. While I was there, I ' + festivalDid + '.'
          ].seededrandom()
        }
      },
      placement: [
        'first place',
        'second place',
        'third place',
        'gold',
        'silver',
        'bronze',
        'runner up'
      ],
      foodTrait: [
        'delicious',
        'colorful',
        'giant',
        'enormous',
        'vibrant',
        'fresh',
        'durable'
      ],
      flowerTrait: [
        'colorful',
        'giant',
        'enormous',
        'vibrant',
        'fresh',
        'sweet-smelling',
        'pollen covered'
      ],
      festivalDid: [
        'saw a spectacular parade',
        'saw a parade with enormous floats made of flowers',
        'watched a parade that was full of magical effects',
        'saw an incredible troupe of dancing elves',
        'watched several dance troupes compete in a competition',
        'listened to several live musical performances',
        'saw a marching bard in the parade',
        'drank deeply and merrily',
        'sang folk songs with the other festival goers',
        'danced the day away with the other merrymakers',
        'partook in several festival traditions',
        'watched a fantastic play performed on a moving stage in the parade',
        'saw a huge dragon puppet march through the streets',
        'visited several shops and stalls full of delicious food',
        "visited several brewing stalls and drank to my heart's content"
      ]
    },
    apprentice: {
      probability: 6,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].socialClass === 'nobility') {
          return false
        } else { return true }
      },
      function (town, npc) {
        console.log('called lifeEvents.apprentice function')
        const apprenticeProfession = setup.npcData.lifeEvents.apprentice.profession.seededrandom()
        const reputation = setup.npcData.lifeEvents.apprentice.reputation.seededrandom()
        const learned = setup.npcData.lifeEvents.apprentice.learned.seededrandom()
        const teacher = setup.createNPC(town, {
          profession: apprenticeProfession,
          isShallow: true
        })
        return ['I apprenticed under', 'I worked under', 'I learned under the tutelage of', 'I was a novice to'].seededrandom() + ' ' + setup.profile(teacher, teacher.name) + ' ' + reputation + ' ' + apprenticeProfession + '. During that time ' + learned + '.'
      },
      profession: [
        'actor',
        'architect',
        'armorer',
        'astrologer',
        'barber',
        'blacksmith',
        'brewer',
        'carpenter',
        'cook',
        'goldsmith',
        'hatter',
        'jeweler',
        'leatherworker',
        'locksmith',
        'minstrel',
        'painter',
        'potter',
        'rugmaker',
        'sculptor',
        'silversmith',
        'toymaker',
        'costumer',
        'artist',
        'musician',
        'coinsmith',
        'candlemaker',
        'fletcher',
        'weaponsmith',
        'chemist'
      ],
      reputation: [
        'a well known',
        'a world renowned',
        'a master',
        'an incredibly talented',
        'a legendary',
        'a famous',
        'a lesser known',
        'an obscure',
        'a mediocre',
        'a decent',
        'an alright',
        'a rather unskilled',
        'a piss poor'
      ],
      learned: [
        'I learned a lot about myself',
        "I realized being in that trade just wasn't for me",
        'I learned a lot of valuable life lessons',
        'I learned a lot about the trade',
        "I realized my teacher wasn't that great",
        'my master beat their teachings into me',
        'my master was gentle with their teachings',
        'my master taught me many things',
        'I realized what I truly wanted in life',
        "I learned I'm not very good at the trade"
      ]
    },
    trinket: {
      probability: 5,
      exclusions (town, npc) {
        return true
      },
      function () {
        const trinket = setup.createMagicTrinket()
        console.log('called lifeEvents.trinket function')
        return [
          "I was given a magical trinket- it's a ",
          'I happened across a ',
          'I found my lost family heirloom, it is a ',
          'I was gifted a ',
          "I saved a wizard's life, and as a token of his thanks, he gave me a ",
          'I went on my own adventure and discovered a ',
          'I met up with an adventurer who generously gave me a ',
          "I came across a trinket in a field- It's a ",
          'I was on a long journey when I found a '
        ].seededrandom() + trinket.name + '.' + '<blockquote>' + '<h4>' + trinket.name + '</h4>' + trinket.description + '</blockquote>'
      }
    },
    nobleEvent: {
      probability: 5,
      exclusion (town, npc) {
        if (setup.townData.professions[npc.profession].socialClass === 'commoner' || setup.townData.professions[npc.profession].socialClass === 'peasantry') {
          return true
        }
      },
      function (town, npc) {
        const noble = setup.createNPC(town, {
          background: 'noble',
          isShallow: true
        })
        const prefix = setup.npcData.lifeEvents.nobleEvent.prefix.seededrandom()
        const banquetCelebrate = setup.npcData.lifeEvents.nobleEvent.banquetCelebrate.seededrandom()
        const ballCelebrate = setup.npcData.lifeEvents.nobleEvent.ballCelebrate.seededrandom()
        const carriage = setup.npcData.lifeEvents.nobleEvent.carriage.seededrandom()
        const handshake = setup.npcData.lifeEvents.nobleEvent.handshake.seededrandom()
        return [prefix + ' the royal wedding of a local ' + setup.profile(noble, 'noble') + '.',
          prefix + ' the royal ' + ['banquet', 'feast', 'gathering'].seededrandom() + ' of a local ' + setup.profile(noble, 'noble') + ' in celebration of ' + banquetCelebrate + '.',
          prefix + ' the royal ' + ['ball', 'dance', 'gala', 'masquerade ball'].seededrandom() + ' hosted by a local ' + setup.profile(noble, 'noble') + ' in honor of ' + ballCelebrate + '.',
          'I saw the carriage of a ' + setup.profile(noble, 'noble') + ' ' + ['passing by my house', 'while traveling', 'going down a city street', 'passing through my town'].seededrandom() + ', and it was ' + carriage + '.',
          'I shook the hand of a passing ' + setup.profile(noble, 'noble') + '. If I recall their handshake was ' + handshake + '.'].seededrandom()
      },
      prefix: [
        'I was invited to',
        'I got to attend',
        'I had the honor to go to',
        'I had the pleasure of attending',
        'I was forced to go to'
      ],
      banquetCelebrate: [
        'a local hero',
        'the remembrance of a past ruler',
        'a local holiday',
        'a bountiful summer harvest',
        'the death of a nearby warlord',
        "the completion of the noble's newest summer home",
        'a triumphant adventuring party',
        'a recent coronation'
      ],
      ballCelebrate: [
        'a recent royal wedding',
        'the beginning of a search for a suitable spouse for this noble',
        'the end of a recent war',
        'the passing of a nearby ruler',
        'the local militia',
        'the end of the hunting season',
        'the presentation of the debutantes',
        'a recent coronation'
      ],
      carriage: [
        'rather plain, but still impressive',
        'massive with eight elegant wheels',
        'pulled by four massive white horses',
        'being pulled by a single elephant',
        'ornately decorated with gold trim',
        'painted with bright yet regal colors',
        'a true sight to behold',
        'a clear waste of taxpayer money',
        'pulled by several thickly muscled slaves',
        "flying two massive banners for the noble's house",
        'flanked by militia on both sides',
        'being followed by a flock of adoring fans',
        'being pelted with rotten fruit by the starving peasants',
        'being cheered on by the adoring townsfolk',
        'adorned with a beautiful floral mural',
        'beaten and battered as if it had recently seen battle'
      ],
      handshake: [
        'firm but friendly',
        'a little too firm',
        'rather limp',
        'cold and clammy',
        'much too sweaty',
        'coarse and emotionless',
        'nothing special',
        'rather pathetic',
        'pretty weak',
        'strong and commanding',
        'strangely hot'
      ]
    },
    journey: {
      probability: 3,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.journey function')
        const prefix = setup.npcData.lifeEvents.journey.prefix.seededrandom()
        const location = setup.npcData.lifeEvents.journey.location.seededrandom()
        const locationLocation = setup.npcData.lifeEvents.journey.locationLocation.seededrandom()
        const found = setup.npcData.lifeEvents.journey.found.seededrandom()
        const notFound = setup.npcData.lifeEvents.journey.notFound.seededrandom()
        return [prefix + ' ' + location + ' ' + locationLocation + '. ' + ['I really did make it there, ', 'I got to see that place, ', 'My journey was succesful, '].seededrandom() + found,
          prefix + ' ' + location + ' ' + locationLocation + '. ' + ['I never found it, ', 'I never got to see that place, ', 'My journey was a failure, ', 'I got lost along the way and never made it there, '].seededrandom() + notFound].seededrandom() + '.'
      },
      prefix: [
        'I ventured out to see',
        'I went on a journey to find',
        'I struck out heading towards',
        'a group of travelers and I went to find',
        'my friends and I went on a long journey to'
      ],
      location: [
        'a tower of knowledge',
        'an elusive library made of marble',
        'the statue of a forgotten hero',
        'the palace of a sleeping god',
        'the greatest fishing spot ever',
        'a peaceful mountain retreat',
        'the hidden cherry blossom grove',
        'the dojo of a long lost martial art',
        'the grand castle of a foreign noble',
        'a crystal clear lake',
        'the burial tomb of an ancient ruler',
        'a city of dwarves',
        'a city of elves',
        'the ruins of a lost city',
        'the remnants of a grand wizard tower',
        'the battlegrounds of a long over war',
        'the still-burning carcass of an ancient behemoth',
        'a secluded civilization, nearly forgotten by outsiders'
      ],
      locationLocation: [
        'in an ever shifting desert',
        'in a red sand desert',
        'in a desert where the dunes whisper secrets',
        'in a white sand desert',
        'in an incredibly hot desert',
        'on the peak of a snowy mountain',
        'near the peak of a mountain',
        'built into the side of a cliff',
        'in a forest',
        'near a forest',
        'in a dark wood',
        'out on the plains',
        'near the ocean',
        'on a floating dock in the ocean',
        'on a secluded island',
        'in the depths of a cavern',
        'in an icy tundra',
        'built into a glacier',
        'at the bottom of a deep ravine',
        'hidden inside a mountain',
        'ina secluded valley',
        'ina tropical valley',
        'on an arid tundra',
        'in the black mountains',
        'in the white mountains',
        'in the red forest',
        'on the edge of a great mountain range',
        'encircled by mountains',
        'at the edge of the world',
        'on the back of a giant turtle'
      ],
      found: [
        'and it was an incredible experience',
        'and I learned much along the way',
        'and it is a place I will never forget',
        'and I like to think I became a better person from the trek',
        'and I came back with several keepsakes',
        'and I made some new friends along the way',
        'and I made some important discoveries while I was there',
        "but I don't like to brag about it",
        'but it was not what I was truly looking for',
        'but to be honest the place was kind of a let down'

      ],
      notFound: [
        'and I have always regretted not going again',
        'but I came out of the journey a better person',
        'and I have always wondered what it would have looked like there',
        'but I have not given up',
        'and honestly I think the place may not exist',
        'and to be honest I have given up on ever going there',
        'but I do not regret trying',
        'but I still made some new friends along the way',
        "and to be honest I'm kind of glad I didn't make it"
      ]
    },
    lostChild: {
      probability: 3,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.lostChild function')
        const treeType = setup.flora.tree.typeArticle.seededrandom()
        const location = setup.npcData.lifeEvents.lostChild.location.seededrandom()
        const time = setup.npcData.lifeEvents.lostChild.time.seededrandom()
        const finder = setup.npcData.lifeEvents.lostChild.finder.seededrandom()
        const ending = setup.npcData.lifeEvents.lostChild.ending.seededrandom()
        return ['when I was young', 'as a young child', 'while I was still a kid'].seededrandom() + ' I got lost in ' + [location, treeType + ' tree forest'].seededrandom() + ' ' + time + '. ' + ['I was found by ' + finder, 'I was found by ' + finder, 'I was found by ' + finder, 'I was found by ' + finder, 'I was found by ' + finder, 'I found my own way back', 'I eventually found ' + finder].seededrandom() + ' ' + ending + '.'
      },
      location: [
        'a strange desert',
        'a large ruined maze',
        'a twisting and winding maze',
        'an enormous city',
        'another realm',
        'a deep cavern',
        'the ruins of a city',
        'a twisting system of tunnels underground',
        'a mountain pass',
        'an ancient battlefield',
        'a forgotten city below the ground',
        'a dwarven ruin',
        'an elven ruin',
        'a magic tower'
      ],
      time: [
        'for several weeks',
        'for a few hours',
        'for a few days',
        'for weeks',
        'for days',
        'for many moons',
        'for a month',
        'for months',
        'for half a year at least',
        'and I can not remember how long I was there',
        'for years maybe',
        'for years',
        'for how long I can not be sure'
      ],
      finder: [
        'a passing merchant',
        'my parents',
        'my mother',
        'my father',
        'my relative',
        'a city guard',
        'a hero out on an adventure',
        'a hero party that had been questing for me',
        'an equally lost bard',
        'a traveling ranger',
        'a haggard monk',
        'a pack of wolves',
        'a noble on a journey'
      ],
      ending: [
        'and went back home',
        'and learned a valuable lesson from it all',
        'but have been haunted by that experience',
        'but not before I hurt myself trying to get home',
        'but not before I was roughed up by some bandits I ran into',
        'and have not really ventured out much since',
        'and have carried a compass ever since',
        'but I still get lost from time to time',
        'and I studied up on maps of the area so I would never get lost again'
      ]
    },
    pilgrimage: {
      probability: 5,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].sector === 'religion' || random(100) > 75) {
          return true
        } else return false
      },
      function (town, npc) {
        console.log('called lifeEvents.pilgrimage function')
        const prefix = setup.npcData.lifeEvents.pilgrimage.prefix.seededrandom()
        const location = setup.npcData.lifeEvents.pilgrimage.location.seededrandom()
        const journey = setup.npcData.lifeEvents.pilgrimage.journey.seededrandom()
        const result = setup.npcData.lifeEvents.pilgrimage.result.seededrandom()
        return prefix + ' ' + location + '. ' + journey + ', ' + result + '.'
      },
      prefix: [
        'I set off on a pilgrimage by myself to',
        'I went on a pilgrimage with a group to',
        'I went on a holy journey to',
        'I traveled a great distance on pilgrimage to'
      ],
      location: [
        'the floating island of a god',
        'a far away temple',
        'see the holiest relic of my people',
        'a holy landmark of my god',
        'an isolated monastery in the <<print either("mountains", "desert", "forest", "depths of a cavern", "bottom of a canyon", "frozen tundra")>>',
        'the birthplace of my god',
        'the holy city of my god',
        'the highest peak of a holy mountain',
        'a far off nunnery',
        'a town of heathens',
        'see the holy art of my god',
        'to pray at the feet of my deity',
        'a distant shrine'
      ],
      journey: [
        'The <<print either("journey", "pilgrimage", "travel", "trek", "trip")>> was <<print either("simple", "harsh", "long", "grueling", "easy", "difficult", "peaceful", "hard", "fantastical", "terrible", "great", "boring", "rough")>>',
        'It was a <<print either("simple", "harsh", "long", "grueling", "easy", "difficult", "peaceful", "hard", "fantastical", "terrible", "great", "boring", "rough")>> <<print either("journey", "pilgrimage", "travel", "trek", "trip")>>',
        'I was not prepared enough for the <<print either("journey", "pilgrimage", "travel", "trek", "trip")>>',
        'I had waited my whole life for this'
      ],
      result: [
        'and I came out a better person at the end of it',
        'and my life was changed by it all',
        "but in the end I'm not sure if it was worth it",
        'but in the end it was worth it all',
        'and my god rewarded me for my travels',
        'but my god did not speak to me in my travels',
        'and at the end of it all I had a holy vision',
        'but my god did not show me what I was hoping for',
        'and I feel so enlightened now',
        'and my peers have respected me more since I returned',
        'and I have found my place in my faith',
        'and I was gifted holy sight for my troubles',
        'but I do not feel any more enlightened from the experience',
        'but I sacraficed much to finish the trip'
      ]
    },
    meetFriendNPC: {
      probability: 8,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.meetFriendNPC function')
        if (random(100) > 50) {
          console.log('Finding an already existing friend!')
          // eslint-disable-next-line no-var
          var friend = Object.keys(State.variables.npcs).find(function (name) {
            return (State.variables.npcs[name].socialClass === npc.socialClass &&
            (!State.variables.npcs[name].relationships[npc.key]))
          })
          if (friend === undefined) {
            console.log('Nobody was in the same caste as ' + npc.name)
            friend = setup.createNPC(town, {
              isShallow: true,
              socialClass: npc.socialClass
            })
          }
        } else {
          friend = setup.createNPC(town, {
            isShallow: true
          })
        }
        setup.createRelationship(town, npc, friend, 'friend', 'friend')
        if (npc.hasClass === false) {
          // Descriptions and stuff goes here
          return [
            'I met my ' + setup.profile(friend, 'best buddy') + ' on some travel.',
            'I lost contact with an ' + setup.profile(friend, 'old friend') + ', and reconnected with ' + setup.profile(friend, friend.himher) + ' on a pilgrimage.',
            'I made a ' + setup.profile(friend, 'good friend') + ' during a drinking contest.',
            'we were attacked by raiders, and I was saved by a ' + setup.profile(friend, 'traveler') + ' passing through. We are best of friends to this day.'
          ].seededrandom()
        } else {
          return [
            'I made a ' + setup.profile(friend, 'friend') + ' for life in my travels.',
            'I was poor as a churchmouse, but then ' + setup.profile(friend, 'a total stranger') + ' helped me get a job. I owe everything I am today to his compassion.',
            'I went traveling for a while, and found myself in the company of all manner of folk, who I like to think helped teach me how to be a bit wiser.',
            "I took an odd job delivering a package to the town over. Never would have thought that that sort of thing could be life-changing, but it was- it's where I met my " + setup.profile(friend, 'best friend') + '.'
          ].seededrandom()
        }
      }
    },
    meetEnemyNPC: {
      probability: 8,
      exclusions (town, npc) {
        if (npc.ageYears >= 18 && npc.ageStage !== 'child') {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.meetEnemyNPC function')
        const enemy = setup.createNPC(town, {
          gender: 'man',
          background: 'noble',
          isShallow: true
        })
        setup.createRelationship(town, npc, enemy, 'enemy', 'enemy')
        return [
          'I made an ' + setup.profile(enemy, 'enemy') + ' for life in my travels- ',
          'I was framed by a ' + setup.profile(enemy, 'scoundrel') + " for a crime I didn't commit- ",
          'I met a ' + setup.profile(enemy, 'man') + ', and we played cards. He decided that I was cheating- ',
          'I was a guest in the court of a ' + setup.profile(enemy, 'lord') + ', and made an embarassment of him- ',
          'I used to play cards in a pub, and one time supposedly cheated a ' + setup.profile(enemy, 'man') + ' out of his winnings; '
        ].seededrandom() + [
          'it was a misunderstanding, but I cannot convince him otherwise. ',
          'I admit that I am at least partially at fault. ',
          "I suppose that I'm at least partially to blame. ",
          "I'll freely admit that I'm to blame. ",
          "I'm ashamed to admit that I'm to blame. ",
          "I'm not quite sure what happened. ",
          'it was all a setup, but a very good one. ',
          "I'll never say what really happened. "
        ].seededrandom() + [
          'He hunts me to this day.',
          'I hope to apologise to him if I ever encounter him again.',
          "I don't exactly care to run into him again.",
          "I couldn't care less if he tries to do anything about it.",
          "I'll gut him like a fish if he crosses my path again.",
          "I'm afraid that he'll kill me in my sleep.",
          'I would rather have backup the next time that I face him.',
          "I doubt I'll ever meet him again.",
          "That's all behind me now and I hope it stays that way.",
          "I'm still on the lookout for him to this very day."
        ].seededrandom()
      }
    },
    meetPartnerNPC: {
      probability: 10,
      exclusions (town, npc) {
        if (npc.ageYears >= 18 && npc.ageStage !== 'child') {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.meetPartnerNPC function')
        const family = town.families[npc.family]
        const node = family.members[npc.key]
        let partnerKey, childKey

        // force creation of family members when applicable
        if (node.marriages === undefined || node.marriages.length === 0) {
          console.log(npc.name + ' met somebody!')

          const newMarriage = setup.createMarriage(town, family, npc, undefined, true)
          node.marriages = [newMarriage]
          partnerKey = newMarriage.parents.find(key => (key !== npc.key))

          if (!partnerKey) { return 'I met the love of my life, who is no longer with me.' }
          return 'I met the love of my life, ' + setup.profile(partnerKey) + '.'
        } else {
          console.log(npc.name + ' already met somebody!')
          console.log(node.marriages)
          const marriage = node.marriages[0]
          partnerKey = marriage.parents.find(key => (key !== npc.key))

          if (marriage.children.length > 0) { childKey = marriage.children[0] }
        }

        let childMsg, partnerMsg
        if (childKey) {
          childMsg = 'I had a child, ' + setup.profile(State.variables.npcs[childKey])
          partnerMsg = partnerKey
            ? ' with my dear partner ' + setup.profile(State.variables.npcs[partnerKey]) + '.'
            : ' with my dear partner, who is no longer with me.'
        } else {
          partnerMsg = partnerKey
            ? 'I met the love of my life, ' + setup.profile(partnerKey) + '.'
            : 'I met the love of my life, who is no longer with me.'
          return
        }
        return childMsg + partnerMsg
      }
    },
    backgroundWork: {
      probability: 20,
      exclusions (town, npc) {
        if (npc.ageYears >= 18 && npc.ageStage !== 'child') {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.backgroundWork function')
        npc.wealth += (dice('2d6') * 1000)
        return [
          'I spent some time working as a ',
          'I did a stint as a ',
          'I worked as a ',
          'for a while I did some work as a ',
          'because of a promise, I did some time as a ',
          'there was no other work so for a while I was a ',
          'to pay off a debt, I spent some time as a ',
          'to pay off a debt, I had to work as a '].seededrandom() + [npc.background, npc.background, npc.background, npc.background, npc.dndClass, npc.dndClass, npc.dndClass].seededrandom() + '.'
      }
    },
    meetImportantNPC: {
      probability: 5,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.meetImportantNPC function')
        return [
          ['I met a famous ', 'I came across a famous ', 'for a time, I worked for a famous ', 'I met a well known ', 'I had a brief stint working for a famous ', 'I got an autograph from a famous '].seededrandom() +
          ['wizard', 'bard', 'priest', 'noble', 'sorcerer', 'inventor', 'merchant', 'group of mercenaries', 'witch', 'general', 'commander', 'enchanter', 'druid', 'talking horse', 'adventurer', 'hero', 'blacksmith', 'armorer', 'alchemist', 'stage actor', 'playwright', 'artist', 'sculptor', 'painter', 'poet', 'knight', 'historian', 'gladiator', 'architect', 'crime boss', 'rogue', 'smuggler'].seededrandom() +
          [' in my travels', ' on the road', ' while I was traveling', ' when I was spending some time as a ' + npc.background, ' while on a long journey', ' during one of my youthful adventures'].seededrandom() + '.'
        ].seededrandom()
      }
    },
    adventure: {
      probability: 5,
      exclusions (town, npc) {
        if (npc.ageYears >= 18 && npc.ageStage !== 'child') {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.adventure function')
        const adventureRoll = random(1, 100)
        let adventureResults
        if (npc.hasClass === false) {
          // Descriptions and stuff goes here
          return setup.npcData.lifeEvents.backgroundWork.function(town, npc)
        } else {
          // eslint-disable-next-line no-var
          var adventurePrefix = [
            'I went on an adventure, and ',
            'I went on a hike with a friend, and we got lost. It took us months to get back home, and on the way, I ',
            'I had a spur of the moment whim to go on an adventure, and on my journeys, I ',
            'I got really drunk, and woke up in the middle of nowhere. From there, I had to trek back home, and on the way, I ',
            'there was a mercenary company which I signed on with for a season. We did fairly standard stuff- things like guarding caravans, you know. One time, I was separated from the party, and I '].seededrandom()
          if (adventureRoll === 100) {
            const weapon = setup.createMagicWeapon()
            console.log('Called weapon function.')
            adventureResults = 'came across a magical weapon- this is my trusty ' + weapon.name + '<blockquote>' + '<h4>' + weapon.name + '</h4>' + weapon.description + '</blockquote>'
          } else if (adventureRoll >= 91) {
            adventureResults = 'found a considerable amount of treasure.'
            npc.wealth += random(5100, 7150)
          } else if (adventureRoll >= 81) {
            adventureResults = 'found some treasure.'
            npc.wealth += dice(2, 600)
          } else if (adventureRoll >= 71) {
            adventureResults = 'learnt a great deal about myself.'
          } else if (adventureRoll >= 61) {
            adventureResults = 'came across something terrifying that still stalks the lands.'
          } else if (adventureRoll >= 51) {
            adventureResults = 'lost something of sentimental value to me.'
          } else if (adventureRoll >= 41) {
            adventureResults = 'was poisoned by a ' + ['monster', 'trap', 'monster'].seededrandom() + ', but recovered in due time.'
          } else if (adventureRoll >= 31) {
            adventureResults = "contracted a disease while exploring a filthy warren. I recovered, but I'm still not quite right."
            npc.physicalTrait = ['pockmarked face', 'grey hair'].seededrandom()
          } else if (adventureRoll >= 21) {
            adventureResults = 'was wounded, but recovered in time.'
          } else if (adventureRoll >= 11) {
            adventureResults = 'was greivously wounded, but recovered in time. It still hurts, from time to time.'
          } else if (adventureRoll < 11) {
            adventureResults = "nearly died- that's how I got the scars."
            npc.physicalTrait = ['a missing ear', 'a missing finger', 'two missing fingers'].seededrandom()
          }
        }
        return adventurePrefix + adventureResults
      }
    },
    supernatural: {
      probability: 2,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.supernatural function')
        return [
          'I came across a horde of ghouls feasting on a dead body in my youth.',
          'I was ensorcelled by a fey for a year. It played tricks on my mind, making me see things which were not there, and not see things which were there.',
          "I once woke up miles away from my home- I don't know if it was due to drinking or some other, magical force at work, but I've sworn off the grog ever since.",
          'I had gone for a walk, when I found a horse. It spoke to me, and told me to leave the town I was in before sundown. I was planning on leaving anyway, so I did, and then when I had reached the next town, there were rumours that the village had been attacked by ghouls.',
          'I went to find a sheep that had gone missing, and must have gotten lost- I ended up in a strange land, where the colours were not as they should have been. I eventually found my way back, but never found the missing sheep. It turned up, completely skeletised in my bed three days later.',
          'I saw a miracle- honest to god. This old man had told us that he was the physical aspect of a deity, and one of the boys did not believe him. Then, with a wave of his hand, the boy vanished.'
        ].seededrandom()
      }
    },
    miracle: {
      probability: 2,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.miracle function')
        const miracleGiver = setup.npcData.lifeEvents.miracle.miracleGiver.seededrandom()
        const trueBelief = setup.npcData.lifeEvents.miracle.trueBelief.seededrandom()
        const falseBelief = setup.npcData.lifeEvents.miracle.falseBelief.seededrandom()
        const miracle = setup.npcData.lifeEvents.miracle.miracle.seededrandom()
        const curse = setup.npcData.lifeEvents.miracle.curse.seededrandom()
        return [['I witnessed a miracle once- Honest to god. ', 'I once saw a true miracle. ', 'one time, I was part of a real miracle. '].seededrandom() + miracleGiver + ', ' + [trueBelief, falseBelief].seededrandom() + ' ' + miracle + '.',
          ['I witnessed a terrible curse once- Honest to god. ', 'I once saw a true curse. ', 'one time, I was part of a real curse. '].seededrandom() + miracleGiver + ', ' + [falseBelief].seededrandom() + ' ' + curse + '.'
        ].seededrandom()
      },
      miracleGiver: [
        'This old man had told us that he was the physical aspect of a deity and that he could prove it',
        'An old woman once came into town claiming to be a god and told us she had cast a miracle on our town',
        'A man stumbled into town claiming to be sent from a god and told us we were being blessed',
        'My town was told by a passing prophet that a miracle was coming',
        'My friends and I once came upon a snake who was trapped beneath a rock and we helped it out. The snake spoke to us and said a miracle would befall us soon'
      ],
      trueBelief: [
        'and we all rejoiced.',
        'and we were all a little skeptical at first.',
        'but I was the only believer.',
        'and some of us believed them.',
        'and we were all very excited.',
        'and the among believers us cried out in celebration.'
      ],
      falseBelief: [
        'but one of us did not believe them.',
        'but nobody believed them.',
        'and I was the only one who did not believe them.',
        'but nobody paid attention to them.',
        'but some thought this to be blasphemy.',
        'but my friend did not believe them.'
      ],
      miracle: [
        'The next day all of the water in our well had been turned to mead',
        'That year we had the most plentiful harvest we had ever seen',
        'The next week, everyone in town had sprouted long thick beards, even the women',
        'For the next year we had a huge economic boom in our town',
        'The next day all of the sick and cripple in our town were suddenly cured of all their ailments',
        'That night silver rained down from the sky',
        'All who believed woke up to find a gold piece under their pillow',
        'The next day our town leader recovered from an illness we thought for sure would take their life',
        'Not long after that a band of adventurers came to our town and saved us from a terrible monster',
        'A month later all the rats in town were gone',
        'Overnight a statue of an unknown god appeared in the center of town'
      ],
      curse: [
        'The next morning all the town water had been turned to mud',
        'The next month the town granary burned to the ground',
        'The next day all the non-believers found all their savings missing',
        'That year all the town crops rotted in the fields',
        'The next morning all the town livestock were found dead',
        'That night the lost souls of our town rose from the dead and ransacked us',
        'That night, monsters descended upon our town',
        'The next month bandits came and looted the whole town',
        'Within a few weeks, everyone in town had gotten terribly ill',
        'The next morning all the children of the town had vanished'
      ]
    },
    war: {
      probability: 5,
      exclusions (town, npc) {
        if (npc.ageYears >= 18 && npc.ageStage !== 'child') {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.war function')
        const warRoll = random(1, 12)
        const warStart = [
          'there was a minor skirmish with some orcs that I was involved with.',
          'there was a small skirmish with a rivaling faction that I was drafted into.',
          'there was a small war between a rival lord that I was forced to take part with.',
          'there were some goblin raids which I had to defend my town from.',
          'there was a pretty nasty zombie outbreak which I had to defend my town against.',
          'there was a civil war within the town that I fought in.'
        ].seededrandom()
        let warResults
        let warDescription
        if (warRoll === 12) {
          warResults = 'I acquitted myself well in battle, and was awarded a medal for bravery.'
        } else if (warRoll >= 10) {
          warResults = 'I managed to escape the battle unscathed, but many of my friends were killed or injured.'
        } else if (warRoll >= 8) {
          warResults = 'I managed to survive, but I still have nightmares about what happened.'
        } else if (warRoll >= 5) {
          warResults = 'I suffered only minor injuries, and the wounds all healed without leaving any scars.'
        } else if (warRoll >= 2) {
          warResults = 'I suffered some serious injuries, and had to be carried off the field.'
          npc.physicalTrait = ['a long, thin scar running up the arm', 'a scar on the eye', 'a scar around the neck', 'a scar on the throat', 'a fiery red scar', 'a finger missing', 'two fingers missing', 'a chunk of left ear missing', 'a chunk of right ear missing', 'a scar through the eyebrow', 'a scar across the cheek', 'a scar on the nose', 'a scar down the forehead', 'a scar in the middle of the hand', 'a crooked scar along the jaw'].seededrandom()
        } else if (warRoll === 1) {
          warResults = 'I was knocked out, and left for dead. I woke up hours later, after the battle was over, and had to walk injured for days to find aid.'
        }
        // eslint-disable-next-line prefer-const
        warDescription = warStart + ' ' + warResults
        return warDescription
      }
    },
    crime: {
      probability: 10,
      exclusions (town, npc) {
        if (setup.townData.professions[npc.profession].sector === 'crime' || random(100) > 60) {
          return true
        }
      },
      function (town, npc) {
        console.log('called lifeEvents.crime function')
        const crime = ['murder', 'theft', 'arson', 'assault', 'kidnapping', 'smuggling', 'extortion', 'counterfeiting', 'racketeering', 'fraud', 'illegal gambling', 'selling contraband '].seededrandom()
        const crimeRoll = random(1, 12)
        let crimeReadout
        if (crimeRoll >= 9) {
          crimeReadout = 'I was caught and convicted of ' + crime + ', and spent ' + random(1, 4) + ' years ' + ['in jail', 'chained to an oar', 'doing hard labour'].seededrandom() + ' before ' + ['being released.', 'managing to escape.'].seededrandom()
        } else if (crimeRoll >= 7) {
          crimeReadout = 'I was nearly caught and convicted in the middle of ' + crime + ', but managed to escape. They are still after me, though.'
        } else if (crimeRoll >= 4) {
          crimeReadout = 'I was caught aiding and abetting the crime of ' + crime + ', but due to ' + ['being forced to do it against my will', 'my amazing lawyer', 'being under a spell'].seededrandom() + ', I was found not guilty.'
        } else {
          crimeReadout = 'I was falsely accused of ' + crime + ", but eventually was acquitted. It took up years of my life, though, and I still get antsy around guards that I don't know."
        }
        return crimeReadout
      }
    },
    arcaneMatters: {
      probability: 4,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.arcaneMatters function')
        return [
          'I saw a demon I swear on my life! ' + ['', 'It offered to make a deal with me, but I turned it down.', 'It challenged me to a lute playing competition.', 'I ran away before the thing could see me.', 'The image of that thing still haunts me.', "It forced me into a contract, and I'm still not sure what I owe.", 'It was trapped inside of a summoning circle.', 'The thing tried to kill me but I got away!', 'Sometimes I think it is still hunting me.'].seededrandom(),
          'I once saw a powerful wizard ' + [['enchanting', 'disenchanting', 'cursing'].seededrandom() + ' a ' + ['sword', 'mace', 'pair of greaves', 'set of armor', 'longbow', 'large batch of arrows', 'dagger', 'skull', 'large crystal', 'hatchet', 'crossbow', 'thick tome', 'book', 'pair of boots', 'fine looking hat', 'set of robes', 'quill'].seededrandom() + '.',
            'casting a ' + ['very powerful', 'strong', 'rather weak', 'fairly strong', 'very weak', 'average looking'].seededrandom() + ' ' + ['healing', 'lightning', 'fireball', 'fire', 'water', 'poison', 'light', 'wind', 'destruction', 'enchanting', 'illusion', 'magic'].seededrandom() + ' spell.',
            'riding on the back of a ' + ['gryphon', 'unicorn', 'lion', 'tiger', 'bear', 'elk', 'magnificent white steed', 'flying whale', 'giant eagle', 'dragon', 'strange demon'].seededrandom()].seededrandom(),
          'I once ' + ['got caught in the cross-fires between two dueling', 'witnessed a battle between two', 'fought in a battle against', 'had my home destroyed by', 'settled down near a temple of'].seededrandom() + ' ' + ['wizards', 'dragons', 'demons', 'witches', 'warlocks', 'necromancers', 'minor gods', 'magical beings'].seededrandom() + '.',
          'I had a mishap with ' + ['a charm', 'an illusion', 'a mind control'].seededrandom() + ' spell- ' + ['an old friend', 'an enemy', 'a dear friend', 'a family member', 'someone I thought of as family', 'an old rival', 'a rival of mine'].seededrandom() + ' ' + ['tried to force me to hand over all my money', 'tried to take my family heirloom', 'tried to steal my fortune', 'tried to force me to give up my ancient relic', 'tried to fool me into giving up my title'].seededrandom() + ', ' + ['but I luckily managed to resist the spell.', 'but their spell failed', 'and sadly it worked', 'and I failed to resist the spell', 'but they were eventually caught by some brave adventurers', 'and I have been searching for them ever since'].seededrandom() + '.',
          'I once drank a ' + ['really strong', 'crazy strong', 'strong', 'pretty weak', 'kind of weak', 'fairly average', 'powerful', 'rather diluted'].seededrandom() + ' potion- ' + ['I swear to god, I could taste colours!', 'my hair was standing on end!', 'my skin turned bright ' + ['red', 'purple', 'white', 'yellow', 'green', 'orange', 'pink', 'blue', 'violet'].seededrandom() + ' for several days.', 'I grew a thick bushy beard in a few hours!', 'it sent me into a comma for weeks.', 'everyone thought I was attractive for the rest of the day.', 'it made my nose glow in the dark for a week!'].seededrandom(),
          'I once found a cursed book. The book ' + ['kills all who who read it', 'turned the reader blind', "retold the reader's life but with a horrible twist ending", 'sucked the reader in to a nightmarish world', 'was alive and had gnarled teeth to bite anyone who dared to open it', 'forced you to see the dead'].seededrandom() + '.'
        ].seededrandom()
      }
    },
    weirdStuff: {
      probability: 1,
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        console.log('called lifeEvents.weirdStuff function')
        return [
          'I came across a genie, ' + ['but squandered the wish on an ex lover', 'but wasted the wish on the perfect sandwich', 'and used my wish to set him free', 'and used my wish to bring prosperity to my town', 'and used my wish to curse a rival', 'but never used my wishes'].seededrandom() + '.',
          'I was once swallowed by a giant fish. Spent a bloody month in there, subsisting on fish and the other things it ate as I tried to find my way out.',
          'I met a ' + ['demigod', 'arch-fey', 'lich', 'demon lord', 'titan'].seededrandom() + ' and lived to tell the tale.',
          'I was once captured by a group of cultists. They nearly sacrificed me, but I managed to set one of their robes on fire, and escaped in the confusion.',
          'I really have had some pretty bad luck in my love life in the past- one lover turned out to be a silver dragon. Took all my gold!',
          "I had a bit of a nervous breakdown a while back, and spent a lot of time alone, stark raving mad. But I'm better now! Honest!",
          'some bloody dragon held me as prisoner for a couple months. I was forced to polish all its gold! Luckily, I managed to escape when it tried to torch the nearby village.',
          'believe it or not, I was a stone statue for quite a while; I only recently was released. I still feel pretty stiff, to be honest.'
        ].seededrandom()
      }
    }
  },
  doesnt: {
    'wants to grow a beard': {
      probability: 5,
      // type: ['says', 'doesnt', 'hides'],
      exclusions (town, npc) {
        if (npc.beard || (npc.gender !== 'man' && random(0, 100) <= npc.beardProbability)) {
          return false
        } else {
          return true
        }
      },
      function (town, npc) {
        return npc.name + " doesn't say " + npc.heshe + ' wants to grow a beard.'
      }
    },
    'no longer loves partner': {
      probability: 5,
      // type: ['says', 'doesnt', 'hides'],
      exclusions (town, npc) {
        if (!npc.partnerID) {
          return false
        } else {
          return true
        }
      },
      function (town, npc) {
        return npc.name + " doesn't say " + npc.heshe + ' no longer loves ' + npc.hisher + ' ' + npc.partnerID.marriageNoun + ', ' + '<<profile `$npcs[' + JSON.stringify(npc.partnerID) + ']`>>'
      }
    },
    'has a sizeable inheritance': {
      probability: 5,
      // type: ['says', 'doesnt', 'hides'],
      exclusions (town, npc) {
        return true
      },
      function (town, npc) {
        npc.wealth += 50000
        return npc.name + " doesn't say " + npc.heshe + ' has a sizeable inheritance.'
      }
    },
    'wants to run away': {
      probability: 5,
      // type: ['says', 'doesnt', 'hides'],
      exclusions (town, npc) {
        if (npc.background !== 'hermit') {
          return true
        }
      },
      function (town, npc) {
        return npc.name + " doesn't say " + npc.heshe + ' wants to run away and live far away from society.'
      }
    }
  },

  skinColour: ['translucent', 'white', 'pale', 'fair', 'light', 'light tan', 'tan', 'pale', 'fair', 'light', 'light tan', 'tan', 'dark tan', 'brown'],
  profession: ['actor', 'advocate', 'advisor', 'animal handler', 'apothecary', 'architect', 'archivist', 'armorer', 'astrologer', 'baker', 'banker', 'barber', 'barkeep', 'blacksmith', 'bookseller', 'brewer', 'bricklayer', 'brothel keeper', 'buccaneer', 'butcher', 'caravanner', 'carpenter', 'cartographer', 'chandler', 'chef', 'clock maker', 'cobbler', 'cook', 'counselor', 'courtesan', 'courtier', 'cowherd', 'dancer', 'diplomat', 'distiller', 'diver', 'farmer', 'fisherman', 'fishmonger', 'gardener', 'general', 'gladiator', 'glovemaker', 'goldsmith', 'grocer', 'guardsman', 'guildmaster', 'hatmaker', 'healer', 'herald', 'herbalist', 'hermit', 'historian', 'hunter', 'ice seller', 'innkeeper', 'inventor', 'jailer', 'jester', 'jeweler', 'judge', 'knight', 'lady', 'leatherworker', 'librarian', 'linguist', 'locksmith', 'lord', 'lumberjack', 'mason', 'masseur', 'merchant', 'messenger', 'midwife', 'miller', 'miner', 'minister', 'minstrel', 'monk', 'mortician', 'necromancer', 'noble', 'nun', 'nurse', 'officer', 'painter', 'patissier', 'perfumer', 'philosopher', 'physician', 'pilgrim', 'potter', 'priest', 'privateer', 'professor', 'roofer', 'ropemaker', 'rugmaker', 'saddler', 'sailor', 'scabbard maker', 'sculptor', 'scavenger', 'scholar', 'seamstress', 'servant', 'shaman', 'shepherd', "ship's captain", 'silversmith', 'slave', 'slaver', 'smith', 'soldier', 'spice merchant', 'squire', 'stablehand', 'stevedore', 'stonemason', 'steward', 'street seller', 'street sweeper', 'student', 'surgeon', 'surveyor', 'sailor', 'tanner', 'tavernkeeper', 'tax collector', 'teacher', 'thatcher', 'thief', 'torturer', 'town crier', 'toymaker', 'vendor', 'veterinarian', 'vintner', 'weaver', 'wetnurse', 'woodcarver', 'wood seller', 'wrestler', 'writer'],
  trait: ['fidgets', 'drinks too much', 'eats too much', 'swears often', 'has poor hygiene', 'cannot resist flirting', 'cannot stop staring at you', 'sweats profusely and easily', 'is a habitual liar', 'embellishes the truth', 'exaggerates details', 'has a short temper', 'is melodramatic', 'gossips about the most mundane things', 'cannot resist a juicy secret', 'chews with an open mouth', 'often sniffs audibly', 'is incredibly gullible', 'is skeptical of everything', 'paces about incessantly', 'makes poor eye contact', 'is a know it all', "corrects people's grammar when they speak", 'blinks constantly', 'bobs head back and forth when speaking', 'is often sarcastic', 'cannot resist making snide comments', 'loses train of thought easily', 'is always shaking'],
  idle: ['sitting, with a piece of bread in hand', 'sitting, mug in hand', 'poring over some map', 'reading some letter intently', 'reading a book', 'shuffling a pack of cards', 'chewing on a piece of hay', 'sharpening a knife', 'buffing a piece of armour', 'polishing a shield', 'sharpening the blade on a fearsome looking dagger', 'cutting an apple into bite sized pieces', 'biting into an apple', 'eating an apple while looking at some book', 'eating a hunk of cheese while reading a book', 'sipping out of a huge mug while reading a book', "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'", "reading a book titled '<<print $book.pun.pluck()>>'"],
  reading: ["a piece of history- my forefather's journal, detailing his life in $town.name when it was just a settlement.", 'my journal, from many years ago.', "my mother's journal, from just before she disappeared", 'a document which I received by postboy two days ago... I believe it is in code, and somebody is trying to tell me something.', "a traitor's memoirs, extremely rare... I thought it would be a good laugh, but some of what he says is concerningly accurate.", "some sort of spell, though I don't know how to read it.", 'a document I bought at the flea market; it looks to be a set of instructions on how to make a golem.', "a book which I bought, believing it to be blank, and suitable for a journal. However, now there's this strange foreign script that I can't read in it.", 'a book that I bought as a gift for my mother, who loves beautiful covers, despite not being able to read.'],
  currentMood: ['annoyed', 'scared', 'relaxed', 'concerned', 'bemused', 'stressed', 'amused', 'content', 'distracted', 'discontent'],
  scar: ['a jagged scar', 'a dark purple scar', 'an angry red scar', 'a long, thin scar running up the arm', 'a scar on the eye', 'a scar around the neck', 'a scar on the throat', 'a fiery red scar', 'a finger missing', 'two fingers missing', 'a chunk of left ear missing', 'a chunk of right ear missing', 'a scar through the eyebrow', 'a scar across the cheek', 'a scar on the nose', 'a scar down the forehead', 'a scar in the middle of the hand', 'a crooked scar along the jaw'],
  tattoo: ['a dagger tattoo', 'an arrow tattoo', 'an anchor tattoo', 'a skull tattoo', 'a pair of crossed bones tattoo', 'a snake tattoo', 'a scorpion tattoo', 'a spider web tattoo', 'a heart tattoo', 'a ring of thorns tattoo', 'a mermaid tattoo', 'a dragon tattoo'],
  demeanour: ['calm', 'moody', 'kind', 'conceited', 'cruel', 'mean', 'careful', 'polite', 'happy'],
  vocalPattern: ['is incoherent except for a few key words', 'stutters', 'says ‘um’ a lot', 'says ‘like’ a lot', 'swears', "uses thee's and thou's", 'never stops to breathe', 'uses short, clipped sentences', 'talks in third person', "doesn't conjugate well (‘me make good soup’)", 'rolls R’s', 'never uses contractions', 'is whiny', 'obviously has a stuffy nose', 'tongue stuck to back of teeth', 'does so through clenched teeth', 'speaks in a sing-song voice', 'likes to rhyme', "spits on every 's' sound", 'makes all Th-sounds become Z-sounds', 'repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)', 'uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)', 'strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)', 'all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)', 'all L-sounds become w-sounds', 'repeats the last word you say before responding', 'sings everything', 'does the wrong emphasis on the wrong syllables', 'pauses often', 'has a clipped pattern of speech', 'is rather monotonous', 'whistles on S-sounds', 'spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)', 'has a light lisp', 'makes all r-sounds become w-sounds', 'has a severe underbite', 'has a severe overbite', 'speaks out of the corner of his mouth', 'is always pouting', 'makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)', 'makes soft letters elongated (‘ssssso, hhhhhhow are you?’)', 'slurs words', 'always has a full mouth while talking', 'sighs after each sentence', 'never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)}', 'responds in the form of questions', 'mutters'],
  calmTrait: ['compassionate', 'cheerful', 'reserved', 'outspoken', 'uninterested', 'gruff', 'eager', 'deceitful', 'foolish', 'strict', 'agreeable', 'mischeivious', 'angry', 'fearful', 'manipulative', 'devout', 'greedy', 'funny', 'dour', 'fun-loving', 'lazy', 'driven', 'boastful', 'artistic', 'assertive', 'carefree', 'cautious', 'confident', 'thoughtful', 'loyal', 'sophisticated', 'weak-willed'],
  stressTrait: ['withdrawn', 'murderous', 'obsessive', 'authoritarian', 'determined', 'brave', 'spiteful', 'belligerent', 'caustic', 'reckless', 'argumentative', 'gluttonous', 'overly protective', 'angry', 'cowardly', 'meticulous', 'sarcastic', 'stubborn', 'destructive', 'practical', 'pushy', 'fanatical', 'secretive', 'scornful', 'courageous', 'impractical', 'calculating', 'industrious', 'manipulative', 'destructive', 'compulsive', 'intolerant'],
  adventure: ['retired from adventuring', 'currently looking for an adventure', 'looking for assistance', 'recuperating from an adventure', 'on a holiday from adventuring', 'taking a short break from adventuring'],
  hairColour: ['brunette', 'brunette', 'brown', 'brownish', 'auburn', 'amber', 'hazel', 'red', 'dark red', 'blonde', 'dark blonde', 'white', 'platinum', 'black', 'black'],
  hairType: ['thick', 'wispy', 'straight', 'straight', 'wavy', 'wavy', 'curly', 'wiry', 'oily', 'lush', 'poofy', 'long', 'braided', 'very long', 'greasy', 'unruly', 'unusually styled', 'short cropped'],
  dndClass: ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'rogue', 'ranger', 'paladin', 'sorcerer', 'warlock', 'wizard'],
  background: ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'urchin'],
  pockets: ['5 cp', '6 cp', '15 cp', '22 cp', '27 cp', '5 sp', '5 sp', '6 sp', '7 sp', '2 gp', '34 cp and 4 sp', '12 sp and 7 gp', 'a clove of garlic', 'a vial of ink worth 8sp', 'hardtack', 'an explosive rune, dealing 2d4 fire damage', 'a palm-sized glass sphere', 'a wooden comb', 'fragments of a shattered sword', 'a deck of tarot cards', 'map of a nearby castle', 'map of the local area', 'a tin spoon', 'a mess kit', 'lacy undergarments', 'spectacles worth 5gp', 'a spool of thread', 'a piece of chalk', 'a necklace of animal teeth', "a headhunter's contract", 'a list of people in a nearby city', 'a worn leather strap', 'a ring of iron keys', 'a flask full of salt water', 'a box of candles', 'a vial of quicksilver', "a traveller's journal", 'a lead amulet', 'a signet ring for a noble house', 'a list of local taverns', 'a golden yellow topaz gem worth 50gp', 'a page torn from a spellbook', 'scraps of bad poetry', 'a pair of bloodstained gloves', 'thirteen mouse teeth', 'a pouch full of dried berries', 'an invitation to a wedding that happened a few weeks ago', 'a brass ring', 'a shopping list', 'the cork from a wine bottle', 'a scrap of paper with uninteligible writing on it', 'a smoking pipe', 'a pouch of ruby powder', 'a deed to a ruined tower', 'a bottle of honey', 'a sling with 10 bullets', 'a broken buckle', 'a knot of silk ribbons', 'a silver pearl worth 10gp', 'a potion of Polymorph Self worth 350gp', '1pp wrapped in a crude map', 'pocket sand', 'a wedge of cheese', 'a string of wooden prayer beads', 'a lock of hair', 'a dead mouse', 'a compass', 'an empty flask', '85gp', 'three diamonds worth 30gp each', 'a black pearl worth 50gp', 'a black opal worth 100gp'],
  value: ['experience', 'family', 'progeny', 'learning', 'wealth', 'masterwork', 'revenge', 'intelligence', 'discovery', 'pilgrimage', 'invention', 'miracle', 'secret', 'martyrdom', 'collection', 'patronage', 'fame'],
  drive: ['health', 'beauty', 'thrills', 'knowledge', 'power', 'partnership', 'networking', 'glory', 'entertainment', 'helpfulness', 'bravery', 'compassion', 'piety', 'solitude', 'relationships', 'hedonism', 'privacy'],
  belief: ['piety', 'pragmatism', 'cleverness', 'stoicism', 'reason', 'self-deserving', 'dogma', 'forgiveness', 'learning', 'tough love', 'honor', 'loyalty', 'optimism', 'respect', 'self-discipline', 'integrity'],
  race: ['human', 'half-elf', 'elf', 'dwarf', 'gnome', 'halfling', 'half-orc', 'dragonborn', 'tiefling'],
  standardLanguages: ['Common', 'Dwarvish', 'Elvish', 'Gnomish', 'Giant', 'Goblin', 'Halfling', 'Orc'],
  exoticLanguages: ['Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon'],
  raceTraits: {
    'dragonborn': {
      probability: 1,
      muscleMass: 11,
      bmiModifier: 650,
      ageTraits: {
        'ageDescriptors': [
          [80, 'vulnerably elderly'],
          [75, 'withered'],
          [70, 'elderly'],
          [65, 'weathered'],
          [60, 'aged'],
          [55, 'old'],
          [50, 'middle aged'],
          [45, 'middle aged'],
          [40, 'early middle aged'],
          [37, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 50,
          'ageModifier' () { return dice(3, 10) }
        },
        'settled adult': {
          baseAge: 20,
          'ageModifier' () { return dice(3, 10) }
        },
        'young adult': {
          baseAge: 13,
          'ageModifier' () { return dice(2, 4) }
        },
        'child': {
          baseAge: 4,
          'ageModifier' () { return dice(3, 4) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Koflnn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadflt', 'Vezera', 'Zykrofl'],
          beardProbability: 100,
          baseHeight: 60,
          baseWeight: 130,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 6) }
        },
        man: {
          firstName: ['Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Illdrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjink', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar'],
          beardProbability: 90,
          baseHeight: 62,
          baseWeight: 160,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 6) }
        }
      },
      lastName: ['Akambheryliiax', 'Argenthrixus', 'Baharoosh', 'Beryntolthropal', 'Bhenkumbyrznaax', 'Caavylteradyn', 'Chumbyxirinnish', 'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Dhyrktelonis', 'Ebynichtomonis', 'Esstyrlynn', 'Fharngnarthnost', 'Ghaallixirn', 'Grrrmmballhyst', 'Gygazzylyshrift', 'Hashphronyxadyn', 'Hshhsstoroth', 'lmbixtellrhyst', 'Jerynomonis', 'Jharthraxyn', 'Kerrhylon', 'Kimbatuul', 'Lhamboldennish', 'Linxakasendalor', 'Mohradyllion', 'Mystan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Orexijandilin', 'Pfaphnyrennish', 'Phrahdrandon', 'Pyraxtallinost', 'Qyxpahrgh', 'Raghthroknaar', 'Shestendeliath', 'Skaarzborroosh', 'Sumnarghthrysh', 'Tiammanthyilish', 'Turnuroth', 'Umbyrphrael', 'Vangdondalor', 'Verthisathurgiesh', 'Wiwyrholdalphiax', 'Wystongjiir', 'Xephyrbahnor', 'Yarjerit', 'Zzzxaaxthroth'],
      eyes: ['yellow', 'amber', 'yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'aqua', 'red', 'purple', 'gold', 'gold'],
      raceWords: {
        raceName: 'dragonborn',
        racePlural: 'drakes',
        raceSingular: 'dragonborn',
        raceAdjective: 'draconian',
        raceLanguage: 'Draconic'
      },
      knownLanguages: ['Common', 'Draconic'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Draconic Ancestry': "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table. (Player's Handbook p. 34)",
        'Breath Weapon': "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.,,When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.,,After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        'Damage Resistance': 'You have resistance to the damage type associated with your draconic ancestry.'
      }
    },
    'dwarf': {
      probability: 2,
      muscleMass: 11,
      bmiModifier: 500,
      ageTraits: {
        'ageDescriptors': [
          [200, 'vulnerably elderly'],
          [190, 'withered'],
          [180, 'elderly'],
          [170, 'weathered'],
          [160, 'aged'],
          [150, 'old'],
          [140, 'middle aged'],
          [80, 'middle aged'],
          [50, 'early middle aged'],
          [40, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 197,
          'ageModifier' () { return dice(3, 50) }
        },
        'settled adult': {
          baseAge: 50,
          'ageModifier' () { return dice(3, 50) }
        },
        'young adult': {
          baseAge: 15,
          'ageModifier' () { return dice(4, 8) }
        },
        'child': {
          baseAge: 4,
          'ageModifier' () { return dice(3, 6) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dafifi', 'Delre', 'Diesa', 'Hdeth', 'Eridred', 'Falkrann', 'Fallthra', 'Finelien', 'Gillydd', 'Gunnloa', 'Gurdis', 'Helgret', 'Helja', 'Hihna', 'Illde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Orifi', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thodris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whurdred', 'Yurgunn'],
          beardProbability: 80,
          baseHeight: 43,
          baseWeight: 120,
          'heightModifier' () { return dice(2, 4) },
          'weightModifier' () { return dice(2, 6) }
        },
        man: {
          firstName: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Garur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangfim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Urain', 'Veit', 'Vonbin', 'Vondal', 'Whurbin'],
          beardProbability: 4,
          baseHeight: 45,
          baseWeight: 150,
          'heightModifier' () { return dice(2, 4) },
          'weightModifier' () { return dice(2, 6) }
        }
      },
      lastName: ['Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdarm', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'FaHack', 'Fire-forge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'RubyEye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart'],
      eyes: ['yellow', 'amber', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'aqua'],
      raceWords: {
        raceName: 'dwarf',
        racePlural: 'dwarves',
        raceSingular: 'dwarf',
        raceAdjective: 'dwarven',
        raceLanguage: 'Dwarven'
      },
      knownLanguages: ['Common', 'Dwarvish'],
      beard: ['scraggly beard', 'long, flowing beard', 'well-groomed beard going down to his chest', 'goatee', 'goatee that seems to be trying to level up into a beard', 'well-loved beard, with ornamental beads woven into it', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Dwarven Resilience': 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
        'Dwarven Combat Training': 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
        'Tool Proficiency': "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
        'Stonecunning': 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
        'Dwarven Toughness': 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
      }
    },
    'elf': {
      probability: 2,
      muscleMass: 9,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [800, 'vulnerably elderly'],
          [750, 'withered'],
          [700, 'elderly'],
          [650, 'weathered'],
          [600, 'aged'],
          [550, 'old'],
          [500, 'middle aged'],
          [450, 'middle aged'],
          [400, 'early middle aged'],
          [370, 'adult'],
          [350, 'mid thirties'],
          [320, 'earlyish three hundreds'],
          [300, 'prime adult aged'],
          [250, 'young adult'],
          [200, 'youthful adult'],
          [180, 'relatively young'],
          [150, 'surprisingly young'],
          [120, 'barely ten dozen years old'],
          [100, 'barely adult aged'],
          [80, 'young'],
          [60, 'youngster'],
          [40, 'adolescent'],
          [30, 'prepubescent'],
          [20, 'child'],
          [15, 'young child'],
          [10, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 650,
          'ageModifier' () { return dice(3, 50) }
        },
        'settled adult': {
          baseAge: 450,
          'ageModifier' () { return dice(3, 75) }
        },
        'young adult': {
          baseAge: 100,
          'ageModifier' () { return dice(4, 75) }
        },
        'child': {
          baseAge: 10,
          'ageModifier' () { return dice(4, 20) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Adria', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethil', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla', 'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia'],
          beardProbability: 100,
          baseHeight: 61,
          baseWeight: 90,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(1, 4) }
        },
        man: {
          firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
          beardProbability: 75,
          baseHeight: 62,
          baseWeight: 100,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(1, 4) }
        }
      },
      lastName: ['Aloro', 'Amakiir', 'Amastacia', 'Ariessus', 'Arnuanna', 'Berevan', 'Caerdonel', 'Caphaxath', 'Casilltenirra', 'Cithreth', 'Dalanthan', 'Eathalena', 'Erenaeth', 'Ethanasath', 'Fasharash', 'Firahel', 'Floshern', 'Galanodel', 'Goltorah', 'Hanali', 'Holimion', 'Horineth', 'Iathrana', 'temnr', 'lranapha', 'Koehlanna', 'Lathalas', 'Liadon', 'Meliamne', 'Mellerelel', 'Mystralath', 'Nalio', 'Netyoive', 'Ofandrus', 'Ostoroth', 'Othronus', 'Qualanthri', 'Raethran', 'Rothenel', 'Selevarun', 'Siannodel', 'Suithrasas', 'Sylvaranth', 'Teinithra', 'Tiltathana', 'Wasanthi', 'Withrethin', 'Xiloscient', 'Xistsrith', 'Yaeldrin'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
      raceWords: {
        raceName: 'elf',
        racePlural: 'elves',
        raceSingular: 'elf',
        raceAdjective: 'elfish',
        raceLanguage: 'Elvish'
      },
      knownLanguages: ['Common', 'Elvish'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Keen Senses': 'You have proficiency in the Perception skill.',
        'Fey Ancestry': "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        'Trance': "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
        'Elf Weapon Training': 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
        'Cantrip': 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'

      }
    },
    'gnome': {
      probability: 1,
      muscleMass: 10,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [400, 'vulnerably elderly'],
          [360, 'withered'],
          [320, 'elderly'],
          [280, 'weathered'],
          [230, 'aged'],
          [180, 'old'],
          [130, 'middle aged'],
          [80, 'middle aged'],
          [50, 'early middle aged'],
          [40, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 200,
          'ageModifier' () { return dice(3, 100) }
        },
        'settled adult': {
          baseAge: 40,
          'ageModifier' () { return dice(3, 75) }
        },
        'young adult': {
          baseAge: 18,
          'ageModifier' () { return dice(2, 10) }
        },
        'child': {
          baseAge: 6,
          'ageModifier' () { return dice(2, 6) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Abalaba', 'Bimpnottin', 'Breena', 'Buvvie', 'Callybon', 'Caramip', 'Carlin', 'Cumpen', 'Dalaba', 'Donella', 'Duvamil', 'Ella', 'Ellyjoybell', 'Ellywick', 'Enidda', 'Lilli', 'Loopmottin', 'Lorilla', 'Luthra', 'Mardnab', 'Meena', 'Menny', 'Mumpena', 'Nissa', 'Numba', 'Nyx', 'Oda', 'Oppah', 'Orla', 'Panana', 'Pynfle', 'Quilla', 'Ranala', 'Reddlepop', 'Roywyn', 'Salanop', 'Shamil', 'Sifiress', 'Symma', 'Tana', 'Tenena', 'Tervaround', 'Tippletoe', 'Ulia', 'Unvera', 'Veloptima', 'Virra', 'Waywocket', 'Yebe', 'Zanna'],
          beardProbability: 98,
          baseHeight: 35,
          baseWeight: 30,
          'heightModifier' () { return dice(2, 4) },
          'weightModifier' () { return dice(1, 1) }
        },
        man: {
          firstName: ['Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap', 'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'lgden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper', 'Namfoodle', 'Oppleby', 'Orryn', 'Paggen', 'PaHabar', 'Pog', 'Qualen', 'Ribbles', 'Rimple', 'Roondar', 'Sappw', 'Seebo', 'Senteq', 'Sindri', 'Umpen', 'Warryn', 'Wiggens', 'Wobbles', 'Wrenn', 'Zaffrab', 'Zook'],
          beardProbability: 37,
          baseHeight: 36,
          baseWeight: 35,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(1, 1) }
        }
      },
      lastName: ['Albaratie', 'Bafflestone', 'Beren', 'Boondiggles', 'Cobblelob', 'Daergel', 'Dunben', 'Fabblestabble', 'Fapplestamp', 'Fiddlefen', 'Folkor', 'Garrick', 'Gimlen', 'Glittergern', 'Gobblefirn', 'Gummen', 'Horcusporcus', 'Humplebumple', 'Ironhide', 'Leffery', 'Lingenhall', 'Loofollue', 'Maekkelferce', 'Miggledy', 'Munggen', 'Murnig', 'Musgraben', 'Nackle', 'Ningel', 'Nopenstallen', 'Nucklestamp', 'Offund', 'Oomtrowl', 'Pilwicken', 'Pingun', 'Quillsharpener', 'Raulnor', 'Reese', 'Rofierton', 'Scheppen', 'Shadowcloak', 'Silverthread', 'Sympony', 'Tarkelby', 'Timbers', 'Turen', 'Umbodoben', 'Waggletop', 'Welber', 'Wildwander'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
      raceWords: {
        raceName: 'gnome',
        racePlural: 'gnomes',
        raceSingular: 'gnome',
        raceAdjective: 'gnomish',
        raceLanguage: 'Gnomish'
      },
      knownLanguages: ['Common', 'Gnomish'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Gnome Cunning': 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
        "Artificer's Lore": 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
        'Tinker': "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.,,When you create a device, choose one of the following options:,,Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.,,Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.,,Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
      }
    },
    'half-elf': {
      probability: 2,
      muscleMass: 10,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [180, 'vulnerably elderly'],
          [150, 'withered'],
          [130, 'elderly'],
          [110, 'weathered'],
          [100, 'aged'],
          [90, 'old'],
          [80, 'middle aged'],
          [60, 'middle aged'],
          [50, 'early middle aged'],
          [40, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 150,
          'ageModifier' () { return dice(3, 10) }
        },
        'settled adult': {
          baseAge: 50,
          'ageModifier' () { return dice(3, 50) }
        },
        'young adult': {
          baseAge: 20,
          'ageModifier' () { return dice(3, 10) }
        },
        'child': {
          baseAge: 6,
          'ageModifier' () { return dice(3, 4) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia'],
          beardProbability: 100,
          baseHeight: 61,
          baseWeight: 90,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 4) }
        },
        man: {
          firstName: ['Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis'],
          beardProbability: 57,
          baseHeight: 62,
          baseWeight: 110,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 4) }
        }
      },
      lastName: ['Alder', 'Ash', 'Ashdown', 'Atwood', 'Barnes', 'Becker', 'Berry', 'Briar', 'Briggs', 'Brock', 'Brook', 'Bundy', 'Burnside', 'Burroughs', 'Bush', 'Butcher', 'Butler', 'Clay', 'Court', 'Cox', 'Croft', 'Cross', 'Crump', 'Dale', 'Deane', 'Delaney', 'Dike', 'Dodd', 'Ford', 'Forrest', 'Fox', 'Freeman', 'Garside', 'Gorsuch', 'Graves', 'Green', 'Greeves', 'Gross', 'Grove', 'Grover', 'Hall', 'Hawthorne', 'Hazel', 'Head', 'Heather', 'Hill', 'Holley', 'Holmes', 'Holt', 'Homer', 'Hooke', 'Hope', 'House', 'Howe', 'Hume', 'Hyde', 'Johnston', 'Kaye', 'Keats', 'Kerry', 'Kirk', 'Lamb', 'Layne', 'Lea', 'Lowell', 'March', 'Marsh', 'Marshal', 'Martin', 'May', 'Millerchip', 'Mills', 'Moore', 'Newby', 'Paine', 'Paxton', 'Perrin', 'Pike', 'Pitt', 'Preacher', 'Provost', 'Purple', 'Ridge', 'Rock', 'Rose', 'Rowen', 'Sangster', 'Sellers', 'Shaw', 'Short', 'Thorne', 'Underwood', 'Walsh', 'Wells', 'West', 'Whitney', 'Wilde', 'Wood', 'Wragge', 'Wynne'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
      raceWords: {
        raceName: 'half-elf',
        racePlural: 'half-elves',
        raceSingular: 'half-elf',
        raceAdjective: 'elfish',
        raceLanguage: 'Elven'
      },
      knownLanguages: ['Common', 'Elvish'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Fey Ancestry': "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        'Skill Versatility': 'You gain proficiency in two skills of your choice.',
        'Languages': 'You can speak, read, and write Common, Elvish, and one extra language of your choice.'
      }
    },
    'halfling': {
      probability: 1,
      muscleMass: 9,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [180, 'vulnerably elderly'],
          [150, 'withered'],
          [130, 'elderly'],
          [110, 'weathered'],
          [100, 'aged'],
          [90, 'old'],
          [80, 'middle aged'],
          [60, 'middle aged'],
          [50, 'early middle aged'],
          [40, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 65,
          'ageModifier' () { return dice(3, 10) }
        },
        'settled adult': {
          baseAge: 30,
          'ageModifier' () { return dice(3, 10) }
        },
        'young adult': {
          baseAge: 16,
          'ageModifier' () { return dice(2, 12) }
        },
        'child': {
          baseAge: 4,
          'ageModifier' () { return dice(2, 6) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphamia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow'],
          beardProbability: 100,
          baseHeight: 30,
          baseWeight: 25,
          'heightModifier' () { return dice(2, 4) },
          'weightModifier' () { return dice(1, 1) }
        },
        man: {
          firstName: ['Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes'],
          beardProbability: 87,
          baseHeight: 32,
          baseWeight: 25,
          'heightModifier' () { return dice(2, 4) },
          'weightModifier' () { return dice(1, 1) }
        }
      },
      lastName: ['Appleblossom', 'Bigheart', 'Brightmoon', 'Brushgather', 'Cherrycheeks', 'Copperkettle', 'Deephollow', 'Elderberry', 'Fastfoot', 'Fastrabbit', 'Glenfellow', 'Goldfound', 'Goodbarrel', 'Goodearth', 'Goodbottle', 'Greenleaf', 'High-hill', 'Hilltopple', 'Hogcollar', 'Honeypot', 'Jamjar', 'Kettlewhistle', 'Leagallow', 'littlefoot', 'Nimblefingers', 'Porridgepot', 'Quickstep', 'Reedfellow', 'Shadowquick', 'Silvereyes', 'Smoothhands', 'Stonebridge', 'Stoutbridge', 'Stoutman', 'Strongbones', 'Sunmeadow', 'Swiftwhistle', 'Tallfellow', 'Tealeaf', 'Tenpenny', 'Thistletop', 'Thorngage', 'Tosscobble', 'Underbough', 'Underfoot', 'Warmwater', 'Whispermouse', 'Wildcloak', 'Wildheart', 'Wiseacre'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
      raceWords: {
        raceName: 'halfling',
        racePlural: 'hobbits',
        raceSingular: 'halfling',
        raceAdjective: 'halfling',
        raceLanguage: 'Halfling'
      },
      knownLanguages: ['Common', 'Halfling'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Lucky': 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
        'Brave': 'You have advantage on saving throws against being frightened.',
        'Halfling': 'Nimbleness You can move through the space of any creature that is of a size larger than yours.',
        'Naturally Stealthy': 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
      }
    },
    'half-orc': {
      probability: 1,
      muscleMass: 12,
      bmiModifier: 600,
      ageTraits: {
        'ageDescriptors': [
          [80, 'vulnerably elderly'],
          [75, 'withered'],
          [70, 'elderly'],
          [65, 'weathered'],
          [60, 'aged'],
          [55, 'old'],
          [50, 'middle aged'],
          [45, 'middle aged'],
          [40, 'early middle aged'],
          [37, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 57,
          'ageModifier' () { return dice(3, 6) }
        },
        'settled adult': {
          baseAge: 45,
          'ageModifier' () { return dice(3, 6) }
        },
        'young adult': {
          baseAge: 15,
          'ageModifier' () { return dice(3, 12) }
        },
        'child': {
          baseAge: 3,
          'ageModifier' () { return dice(3, 4) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Arha', 'Baggi', 'Bendoo', 'Bilga', 'Brakka', 'Creega', 'Drenna', 'Ekk', 'Emen', 'Engong', 'Fistula', 'Gaaki', 'Gorga', 'Grai', 'Greeba', 'Grigi', 'Gynk', 'Hrathy', 'Huru', 'Ilga', 'Kabbarg', 'Kansif', 'Lagazi', 'Lexre', 'Murgen', 'Murook', 'Myev', 'Nagarette', 'Neega', 'Nella', 'Nogu', 'Oolah', 'Ootah', 'Ovak', 'Ownka', 'Puyet', 'Reeza', 'Shautha', 'Silgre', 'Sutha', 'Tagga', 'Tawar', 'Tomph', 'Ubada', 'Vanchu', 'Vola', 'Volen', 'Vorka', 'Yevelda', 'Zagga'],
          beardProbability: 100,
          baseHeight: 53,
          baseWeight: 150,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(2, 6) }
        },
        man: {
          firstName: ['Argran', 'Braak', 'Brug', 'Cagak', 'Dench', 'Dorn', 'Dren', 'Druuk', 'Feng', 'Gell', 'Gnarsh', 'Grurnbar', 'Gubrash', 'Hagren', 'Henk', 'Hogar', 'Holg', 'Imsh', 'Karash', 'Karg', 'Keth', 'Korag', 'Krusk', 'Lubash', 'Megged', 'Mhurren', 'Mhflord', 'Morg', 'Nil', 'Nybarg', 'Odorr', 'Ohr', 'Rendar', 'Resh', 'Ront', 'Rrath', 'Sark', 'Scrag', 'Sheggen', 'Shump', 'Tanglar', 'Tarak', 'Thrag', 'Thokk', 'Trag', 'Ugarth', 'Varg', 'Vilberg', 'Yurk', 'Zed'],
          beardProbability: 60,
          baseHeight: 58,
          baseWeight: 110,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(2, 6) }
        }
      },
      lastName: ['Gultch', 'Goresmasher', 'Karaktoth', 'Krokk', 'Bogdoth', 'Bracka', 'Dargakk', 'Darknath', "Gul'Tchanth", 'Prathka', 'Rathkann', 'Rangakk'],
      eyes: ['yellow', 'amber', 'orange', 'brown', 'hazel', 'yellow', 'amber', 'orange', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red'],
      raceWords: {
        raceName: 'half-orc',
        racePlural: 'half-orcs',
        raceSingular: 'half-orc',
        raceAdjective: 'orcish',
        raceLanguage: 'Orcish'
      },
      knownLanguages: ['Common', 'Orc'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Menacing': 'You gain proficiency in the Intimidation skill.',
        'Relentless Endurance': "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
        'Savage Attacks': "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
      }
    },
    'human': {
      probability: 6,
      muscleMass: 10,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [80, 'vulnerably elderly'],
          [75, 'withered'],
          [70, 'elderly'],
          [65, 'weathered'],
          [60, 'aged'],
          [55, 'old'],
          [50, 'middle aged'],
          [45, 'middle aged'],
          [40, 'early middle aged'],
          [37, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 65,
          'ageModifier' () { return dice(3, 10) }
        },
        'settled adult': {
          baseAge: 30,
          'ageModifier' () { return dice(3, 15) }
        },
        'young adult': {
          baseAge: 15,
          'ageModifier' () { return dice(3, 6) }
        },
        'child': {
          baseAge: 4,
          'ageModifier' () { return dice(3, 4) }
        }
      },
      genderTraits: {
        woman: {
          beardProbability: 100,
          baseHeight: 53,
          baseWeight: 85,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(2, 4) },
          firstName: ['Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia']
        },
        man: {
          beardProbability: 27,
          baseHeight: 58,
          baseWeight: 120,
          'heightModifier' () { return dice(2, 10) },
          'weightModifier' () { return dice(2, 4) },
          firstName: ['Aaryn', 'Aaro', 'Aarus', 'Abramus', 'Abrahm', 'Abyl', 'Abelus', 'Adannius', 'Adanno', 'Aedam', 'Adym', 'Adamus', 'Aedrian', 'Aedrio', 'Aedyn', 'Aidyn', 'Aelijah', 'Elyjah', 'Aendro', 'Androe', 'Aenry', 'Hynroe', 'Hynrus', 'Aethan', 'Aethyn', 'Aevan', 'Evyn', 'Evanus', 'Alecks', 'Alyx', 'Alexandyr', 'Xandyr', 'Alyn', 'Alaen', 'Andrus', 'Aendrus', 'Anglo', 'Aenglo', 'Anglus', 'Antony', 'Antonyr', 'Astyn', 'Astinus', 'Axelus', 'Axyl', 'Benjamyn', 'Benjamyr', 'Braidyn', 'Brydus', 'Braddeus', 'Brandyn', 'Braendyn', 'Bryus', 'Bryne', 'Bryn', 'Branus', 'Caeleb', 'Caelyb', 'Caerlos', 'Carlus', 'Cameryn', 'Camerus', 'Cartus', 'Caertero', 'Charlus', 'Chaerles', 'Chyrles', 'Christophyr', 'Christo', 'Chrystian', 'Chrystan', 'Connorus', 'Connyr', 'Daemian', 'Damyan', 'Daenyel', 'Danyel', 'Davyd', 'Daevo', 'Dominac', 'Dylaen', 'Dylus', 'Elius', 'Aeli', 'Elyas', 'Helius', 'Helian', 'Emilyan', 'Emilanus', 'Emmanus', 'Emynwell', 'Ericus', 'Eryc', 'Eryck', 'Ezekius', 'Zeckus', 'Ezekio', 'Ezrus', 'Yzra', 'Gabrael', 'Gaebriel', 'Gael', 'Gayl', 'Gayel', 'Gaeus', 'Gavyn', 'Gaevyn', 'Goshwa', 'Joshoe', 'Graysus', 'Graysen', 'Gwann', 'Ewan', 'Gwyllam', 'Gwyllem', 'Haddeus', 'Hudsyn', 'Haesoe', 'Haesys', 'Haesus', 'Handus', 'Handyr', 'Hantus', 'Huntyr', 'Haroldus', 'Haryld', 'Horgus', 'Horus', 'Horys', 'Horyce', 'Hosea', 'Hosius', 'Iaen', 'Yan', 'Ianus', 'Ivaen', 'Yvan', 'Jaecoby', 'Jaecob', 'Jaeden', 'Jaedyn', 'Jaeremiah', 'Jeremus', 'Jasyn', 'Jaesen', 'Jaxon', 'Jaxyn', 'Jaxus', 'Johnus', 'Jonus', 'Jonaeth', 'Jonathyn', 'Jordus', 'Jordyn', 'Josaeth', 'Josephus', 'Josaeus', 'Josayah', 'Jovanus', 'Giovan', 'Julyan', 'Julyo', 'Jyck', 'Jaeck', 'Jacus', 'Kaevin', 'Kevyn', 'Vinkus', 'Laevi', 'Levy', 'Levius', 'Landyn', 'Laendus', 'Leo', 'Leonus', 'Leonaerdo', 'Leonyrdo', 'Lynardus', 'Lincon', 'Lyncon', 'Linconus', 'Logaen', 'Logus', 'Louis', 'Lucius', 'Lucae', 'Lucaen', 'Lucaes', 'Lucoe', 'Lucus', 'Lyam', 'Maeson', 'Masyn', 'Maetho', 'Mathoe', 'Matteus', 'Matto', 'Maxus', 'Maximus', 'Maximo', 'Maxymer', 'Mychael', 'Mygwell', 'Miglus', 'Mythro', 'Mithrus', 'Naemo', 'Naethyn', 'Nathanus', 'Naethynel', 'Nicholaes', 'Nycholas', 'Nicholys', 'Nicolus', 'Nolyn', 'Nolanus', 'Olivyr', 'Alivyr', 'Olivus', 'Oscarus', 'Oscoe', 'Raen', 'Ryn', 'Robertus', 'Robett', 'Bertus', 'Romyn', 'Romanus', 'Ryderus', 'Ridyr', 'Samwell', 'Saemuel', 'Santegus', 'Santaegus', 'Sybasten', 'Bastyen', 'Tago', 'Aemo', 'Tagus', 'Theodorus', 'Theodus', 'Thaeodore', 'Thomys', 'Thomas', 'Tommus', 'Tylus', 'Tilyr', 'Uwyn', 'Oewyn', 'Victor', 'Victyr', 'Victorus', 'Vincynt', 'Vyncent', 'Vincentus', 'Wyttus', 'Wyaett', 'Xavius', 'Havius', 'Xavyer', 'Yago', 'Tyago', 'Tyego', 'Ysaac', 'Aisaac', 'Ysaiah', 'Aisiah', 'Siahus', 'Zacharus', 'Zachar', 'Zachaery']
        }
      },
      lastName: ['Alder', 'Ash', 'Ashdown', 'Atwood', 'Barnes', 'Becker', 'Berry', 'Briar', 'Briggs', 'Brock', 'Brook', 'Bundy', 'Burnside', 'Burroughs', 'Bush', 'Butcher', 'Butler', 'Clay', 'Court', 'Cox', 'Croft', 'Cross', 'Crump', 'Dale', 'Deane', 'Delaney', 'Dike', 'Dodd', 'Ford', 'Forrest', 'Fox', 'Freeman', 'Garside', 'Gorsuch', 'Graves', 'Green', 'Greeves', 'Gross', 'Grove', 'Grover', 'Hall', 'Hawthorne', 'Hazel', 'Head', 'Heather', 'Hill', 'Holley', 'Holmes', 'Holt', 'Homer', 'Hooke', 'Hope', 'House', 'Howe', 'Hume', 'Hyde', 'Johnston', 'Kaye', 'Keats', 'Kerry', 'Kirk', 'Lamb', 'Layne', 'Lea', 'Lowell', 'March', 'Marsh', 'Marshal', 'Martin', 'May', 'Millerchip', 'Mills', 'Moore', 'Newby', 'Paine', 'Paxton', 'Perrin', 'Pike', 'Pitt', 'Preacher', 'Provost', 'Purple', 'Ridge', 'Rock', 'Rose', 'Rowen', 'Sangster', 'Sellers', 'Shaw', 'Short', 'Thorne', 'Underwood', 'Walsh', 'Wells', 'West', 'Whitney', 'Wilde', 'Wood', 'Wragge', 'Wynne'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
      raceWords: {
        raceName: 'human',
        racePlural: 'humans',
        raceSingular: 'person',
        raceAdjective: 'human',
        raceLanguage: 'Common'
      },
      knownLanguages: ['Common'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Ability Score': 'Increase Two different ability scores of your choice increase by 1.',
        'Skills': 'You gain proficiency in one skill of your choice.',
        'Feat': 'You gain one feat of your choice.'
      }
    },
    'tiefling': {
      probability: 1,
      muscleMass: 10,
      bmiModifier: 703,
      ageTraits: {
        'ageDescriptors': [
          [80, 'vulnerably elderly'],
          [75, 'withered'],
          [70, 'elderly'],
          [65, 'weathered'],
          [60, 'aged'],
          [55, 'old'],
          [50, 'middle aged'],
          [45, 'middle aged'],
          [40, 'early middle aged'],
          [37, 'adult'],
          [35, 'mid thirties'],
          [32, 'earlyish thirties'],
          [30, 'prime adult aged'],
          [26, 'young adult'],
          [24, 'youthful adult'],
          [22, 'relatively young'],
          [20, 'surprisingly young'],
          [19, 'nineteen year old'],
          [18, 'barely adult aged'],
          [17, 'late teenager'],
          [16, 'teenager'],
          [15, 'young teenager'],
          [14, 'adolescent'],
          [12, 'prepubescent'],
          [10, 'child'],
          [8, 'young child'],
          [6, 'toddler'],
          [0, 'newborn']
        ],
        'elderly': {
          baseAge: 70,
          'ageModifier' () { return dice(3, 10) }
        },
        'settled adult': {
          baseAge: 40,
          'ageModifier' () { return dice(3, 10) }
        },
        'young adult': {
          baseAge: 18,
          'ageModifier' () { return dice(3, 12) }
        },
        'child': {
          baseAge: 4,
          'ageModifier' () { return dice(3, 4) }
        }
      },
      genderTraits: {
        woman: {
          firstName: ['Akta', 'Anakis', 'Armara', 'Astaro', 'Aym', 'Azza', 'Beleth', 'Bryseis', 'Bune', 'Criella', 'Damaia', 'Decarabia', 'Ea', 'Gadreel', 'Gomory', 'Hecat', 'Ishte', 'Jezebeth', 'Kali', 'Kalista', 'Kasdeya', 'Lerissa', 'Lilith', 'Makaria', 'Manea', 'Markosian', 'Mastema', 'Namnah', 'Nemem', 'Nija', 'Orianna', 'Osah', 'Phelaia', 'Prosperine', 'Purah', 'Pyra', 'Pyranna', 'Ronobe', 'Ronwe', 'Seddit', 'Seere', 'Sekhmet', 'Semyaza', 'Shava', 'Shax', 'Sorath', 'Uzza', 'Vapula', 'Vepar', 'Verin'],
          beardProbability: 100,
          baseHeight: 54,
          baseWeight: 85,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 4) }
        },
        man: {
          firstName: ['Abad', 'Ahrun', 'Akwmn', 'Anmon', 'Andram', 'Astar', 'Bmam', 'Barakas', 'Bathin', 'Cann', 'Chem', 'Chner', 'Cressel', 'Danmkos', 'Ekmnon', 'Euron', 'Fennz', 'Forcas', 'Habor', 'Iados', 'Kauon', 'Leucs', 'Manmen', 'Mantus', 'Marbas', 'Melech', 'Merihim', 'Modean', 'Mordai', 'Mormo', 'Morthos', 'Nicor', 'Nirgel', 'Oriax', 'Paynon', 'Pelaios', 'Purson', 'Qemud', 'Raam', 'Rimmon', 'Sammal', 'Skamos', 'Tethren', 'Thamuz', 'Therai', 'Valafar', 'Vassago', 'Xappan', 'Zepar', 'Zephan'],
          beardProbability: 60,
          baseHeight: 58,
          baseWeight: 120,
          'heightModifier' () { return dice(2, 8) },
          'weightModifier' () { return dice(2, 4) }
        }
      },
      lastName: ['Amarzian', 'Carnago', 'Domarien', 'Iscitan', 'Meluzan', 'Menetrian', 'Paradas', 'Romazi', 'Sarzan', 'Serechor', 'Shadowhorn', 'Szereban', 'Torzalan', 'Trelenus', 'Trevethor', 'Tryphon', 'Vadu', 'Vrago'],
      eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray', 'violet red', 'aquamarine', 'deep blue', 'spring green', 'sea green', 'emerald green'],
      raceWords: {
        raceName: 'tiefling',
        racePlural: 'tieflings',
        raceSingular: 'tiefling',
        raceAdjective: 'devilish',
        raceLanguage: 'Infernal'
      },
      knownLanguages: ['Common', 'Infernal'],
      beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
      abilities: {
        'Darkvision': "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        'Hellish Resistance': 'You have resistance to fire damage.',
        'Infernal Legacy': 'You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.'
      }
    }
  },
  classTraits: {
    barbarian: {
      dndClassOrigin: [
        'My devotion to my people lifted me in battle, and I learned to control my bloodlust.',
        'The spirits of my ancestors called out to me to complete a task, so I took up the way of the barbarian.',
        'I lost control in battle one day, as if something else was guiding me as I slaughtered my enemies.',
        'I went on a spiritual journey to find myself, and discovered the inner rage that I had could be tamed, used, and controlled.',
        "I was struck by lightning, but miraculously lived. Ever since that day, I've been stronger, faster, and able to push through any struggle.",
        'I needed an outlet to channel my anger, otherwise I would have snapped, and killed an innocent person.'
      ],
      background: ['charlatan', 'criminal', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'outlander', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'],
      weapon: ['a huge greataxe', 'a battleaxe', 'a greatsword', 'two handaxes', 'two warhammers'],
      'wealth' () { return (dice('2d4') * 1000) }
    },
    bard: {
      dndClassOrigin: [
        'I awakened my latent bardic abilities through trial and error.',
        'I was a gifted performer, and eventually attracted the attention of a legendary bard, who decided to teach me to further my talents into the realm of magic.',
        'I joined a society of scholars and orators, who helped teach me how to harness my music and turn it into magic.',
        'I felt a great calling to recount the tales of heros past, and bring them alive through song and stories.',
        'I joined one of the great colleges to learn old lore, and did music as an elective.',
        'I picked up an instrument one day, and found that I could play it perfectly.'
      ],
      background: ['charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'noble', 'outlander', 'sailor', 'soldier', 'urchin'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers'],
      'wealth' () { return (dice('5d4') * 1000) }
    },
    cleric: {
      dndClassOrigin: [
        'My god called on me to serve the faith as a cleric, so I abandoned my previous life, and set out for the nearest temple.',
        "I saw the injustice and horrors of the world, and felt that I couldn't live without trying to do something about it.",
        "My god gave me a sign that I was needed to do something important, some time in the future. I'm still waiting for my time to serve, but when it happens, I'll be ready.",
        "I've always been devout, but it wasn't until I completed a pilgrimage to a sacred site that I found my true calling.",
        'I used to serve in the beauracracy of the church, but found the work unrewarding. Being able to spread the message to the farthest corners of the land is much more satisfying work.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
      weapon: ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow'],
      'wealth' () { return (dice('5d4') * 1000) }
    },
    druid: {
      dndClassOrigin: [
        'I found a place among a group of druids after I fled a catastrophe.',
        'I saw too much devastation in the wilds where I used to play for days as a child, and decided to protect the wilderness.',
        'I have always had an affinity with animals, so I decided to explore it, and found that I had a gift to converse with them.',
        'I befriended a druid that frequented an old pub, and he convinced me that the world needed me to carry on his work as a druid.',
        'Whiie l was growing up, I saw spirits all around me— entities no one else could perceive. I sought out the druids to help me understand the visions, and communicate with these beings.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'charlatan', 'folk hero', 'folk hero', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
      weapon: ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow', 'a longbow', 'a longbow'],
      'wealth' () { return (dice('2d4') * 1000) }
    },
    fighter: {
      dndClassOrigin: [
        'I wanted to hone my combat skills, and so I joined a war college',
        'I  grew up fighting, and I refined my talents by defending myself against people who crossed me.',
        'I squired for a knight, who taught me how to fight, care for my steed, and conduct myself with honor. I decided to take up that path for myself.',
        'Monster attacks led me to believe that there was no other way for me to be able to defend my family.',
        'I joined the army, and learnt how to fight in a group as a team against a common enemy.',
        'I always had a knack for just about any weapon which I picked up.'
      ],
      background: ['acolyte', 'charlatan', 'criminal', 'criminal', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'outlander', 'outlander', 'sage', 'sailor', 'sailor', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin'],
      weapon: ['a huge greataxe', 'a battleaxe', 'a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a long sword', 'a long bow', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'],
      'wealth' () { return (dice('5d4') * 1000) }
    },
    monk: {
      dndClassOrigin: [
        'I stumbled into a portal and took refuge in a strange monastery, where I learned how to defend mysel fagainst the forces of darkness.',
        'I was chosen to study at a secluded monastery, where I learnt the fundamental techniques to set me on the path to eventual mastery.',
        'I sought out the instruction of a monk to gain a greater understanding of my world, and my purpose in it.',
        'I was overwhelmed with grief when I lost my sister, and found solace in meditation with the monks.',
        'I always felt a power within me, and sought out an order of monks to help me understand it and harness that energy for good.',
        'I was wild, and undisciplined as a child, until I realised the error of my ways. I sought out the monks to atone for my sins.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'soldier', 'urchin'],
      weapon: ['fists', 'fists', 'fists', 'a quarterstaff', 'a quarterstaff'],
      'wealth' () { return (dice('2d4') * 100) }
    },
    paladin: {
      dndClassOrigin: [
        'A magical being appeared before me, and called on me to undertake a holy quest.',
        'One of my ancestors left a holy quest unfulfilled, so I seek to rectify this.',
        'The world is a dark and terrible place. I seek to be a beacon of hope for those that may not have the courage to go on otherwise.',
        "I served as a paladin's squire, and admired his honesty and conduct. I decided to follow in his footsteps, and champion the good and decency that he represented.",
        'Evil must be opposed on all fronts, and I decided to be the first line of defense against such scum.',
        'Becoming a paladin was a natural consequence of my unwavering faith. I saw the need for the faith to be protected with sword and shield.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin'],
      weapon: ['a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'],
      'wealth' () { return (dice('5d4') * 1000) }
    },
    ranger: {
      dndClassOrigin: [
        'I always had a way with animals, and was able to calm them with a gentle touch and soothing word.',
        'I found purpose while I was honing my hunting skills by bringing dangerous beasts down from the outskirts of civilisation.',
        'I suffer from wanderlust, so I found the life of the ranger to be freeing; to me, wandering without a fixed home is freeing.',
        'I met a grizzled ranger who taught me the secrets of woodcraft and surviving in the wild.',
        'I served in the army, and led my division by scouting ahead, blazing trails and tracking our enemies.'
      ],
      background: ['acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'a long bow', 'a long bow', 'two daggers'],
      'wealth' () { return (dice('4d4') * 1000) }
    },
    rogue: {
      dndClassOrigin: [
        "I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.",
        'A thief wronged me, so I focused my training on mastering those skills to better combat foes of that sort.',
        "Know thy enemy. I aim to learn everything there is to know about the Thieves' guild, and then I'll bring it all tumbling down.",
        'An experienced rogue saw something in me, and taught me several useful tricks.',
        'I took up with a group of ruffians, that taught me how to get what I want without direct confrontation.',
        "I'm a sucker for a shiny bauble or bag of coins, as long as I can get it without risking life and limb.",
        "I just love the thrill of the heist. There's nothing that makes me feel more alive than taking something from right under someone's nose."
      ],
      background: ['charlatan', 'charlatan', 'charlatan', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'noble', 'noble', 'outlander', 'sailor', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin', 'urchin'],
      weapon: ['a long sword', 'a long sword', 'two daggers', 'two daggers', 'two daggers', 'two daggers', 'a crossbow', 'a crossbow', 'a crossbow'],
      'wealth' () { return (dice('4d4') * 1000) }
    },
    sorcerer: {
      dndClassOrigin: [
        'When I was born, all of the milk turned to cheese. My family is convinced that it was a harbinger for my powers.',
        'I suffered a terrible strain, which brought forth my dormant powers. I have fought to control it ever since.',
        "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.",
        'A monster attacked one of my friends when I was younger, and I lashed out in a burst of energy, saving my friend, but unlocking the torrent of power which I still struggle to control.',
        "After a magical conflagration, I realised that while I was unharmed, I had been fundamentally changed by the outburst of magical energy. I'm only just beginning to understand what has happened to me."
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'charlatan', 'charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers', 'a dagger', 'a dagger'],
      'wealth' () { return (dice('3d4') * 1000) }
    },
    warlock: {
      dndClassOrigin: [
        'I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.',
        'While wandering through a forbidden place, I came across a magical entity, which offered to form a pact with me.',
        'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.',
        'During a crisis, I prayed for any being to help me. The creature that answered was my patron.',
        'My future patron visited me in my dreams, and offered great power in exchange for my servie.',
        'One of my ancestors had a pact with my patron, which bound me to the same fate.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
      weapon: ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger'],
      'wealth' () { return (dice('4d4') * 1000) }
    },
    wizard: {
      dndClassOrigin: [
        'An old wizard chose me from among several candidates to serve an apprenticeship.',
        'When I became lost in a magical forest, a hedge wizard took me in, and taught me the fundamentals of magic so that I could navigate my way out.',
        'I grew up listening to tales of great wizards that could change reality with a flick of their hand. I knew from a young age that I wanted to hold that sort of power.',
        'One of my relatives was an accomplished wizard in their own right, and they recognised the same potential in me that their mentor saw in them.',
        'While exploring the restricted section of a library, I came across a magical tome, which sparked the interest in me.',
        'I was a prodigy that demonstrated mastery of the arcane arts at a very young age. When I became old enough to set out on my own, I did so to continue my studies and expand my powers.'
      ],
      background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'],
      weapon: ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
      'wealth' () { return (dice('4d4') * 1000) }
    }
  },
  backgroundTraits: {
    'acolyte': {
      // 'knownLanguages': function (npc) {
      //   var allLanguages = setup.npcData.standardLanguages.concatUnique(setup.npcData.exoticLanguages)
      //   var availableLanguages = allLanguages.delete(npc.knownLanguages)
      //   return availableLanguages.pluck()
      // },
      extraLanguage: true,
      backgroundOrigin: [
        'I ran away from home at a young age, and found refuge in a temple.',
        'My family gave me to a temple, since they were unable to care for me.',
        'I grew up in a household with strong religious convictions. Entering the service of the Gods seemed to be the natural progression.',
        'An impassioned sermon struck a chord deep in me, and compelled me to serve the faith.',
        'I followed a childhood friend into religious service because we made a pact to never be apart.',
        'I followed a lover into religious service, but tragically, they were killed. The faith was the only thing that stopped me from ending my own life.'
      ],
      ideal: [
        'I believe that the ancient traditions of worship and sacrifice must be preserved and upheld.',
        'I always try to help those in need, no matter what the personal cost.',
        'We must help bring about the changes the gods are constantly working in the world.',
        "I hope to one day rise to the top of my faith's religious hierarchy.",
        'I trust that my deity will guide my actions, I have faith that if I work hard, things will go well.',
        "I seek to prove myself worthy of my god's favor by matching my actions against their teachings."
      ],
      personalityTrait: [
        'I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.',
        'I can find common ground between the fiercest of enemies, and can work towards peace no matter what the conditions.',
        'I see omens in every event and action. The gods try to speak to us, we just need to listen!',
        'Nothing can shake my optimistic attitude.',
        'I quote (or misquote) sacred texts and proverbs in almost every situation.',
        'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
        "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
        'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'
      ],
      bond: [
        'I would die to recover an ancient artifact of my faith that was lost long ago.',
        'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
        'I owe me life to the priest who took me in when my parents died.',
        'Everything I do is for the common people.',
        'I will do anything to protect the temple where I served.',
        'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
      ],
      wealth: 1500
    },
    'charlatan': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'As a youngster, I was left to my own devices. My knack for manipulating people helped me survive.',
        'I learned early on that people are easy to exploit, and are gullible and too trusting.',
        'I often got into trouble as a youngster, but talked my way out of it.',
        'I took up cheating as a hobby, then was sort of adopted by a local scam artist. It just sort of became a way of life for me.',
        'After a charlatan fleeced my family, I decided to learn all the tricks I could so I would never fall for another scam.'
      ],
      ideal: [
        'I am a free spirit– no one tells me what to do.',
        "I never target people who can't afford to lose a few coins.",
        'I distribute the money I acquire to the people who really need it.',
        'I never run the same con twice.',
        'I believe that Material goods come and go. Bonds of friendship last forever.',
        "I'm determined to make something of myself."
      ],
      personalityTrait: [
        'I fall in and out of love easily, and am always pursuing someone.',
        'I have ajoke for every occasion, especially occasions where humor is inappropriate.',
        'Flattery is my preferred trick for getting what I want.',
        "I’m a born gambler who can't resist taking a risk for a potential payoff.",
        'I lie about almost everything, even when there’s no good reason to.',
        'Sarcasm and insults are my weapons of choice.',
        'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
        'I pocket anything I see that might have some value.'
      ],
      bond: [
        'I fleeced the wrong person, a lord called <<print setup.npcData.raceTraits["human"].genderTraits["man"].firstName.seededrandom()>>, and must work to ensure that he never crosses paths with me or those I care about.',
        "I owe everything to my mentor <<print setup.npcData.raceTraits['human'].genderTraits['man'].firstName.seededrandom()>>--a horrible person who's probably rotting in jail somewhere.",
        "Somewhere out there I have a child, litte <<print setup.npcData.raceTraits['human'].genderTraits['man'].firstName.seededrandom()>>, who doesn't know me. I'm going to try and make the world better for him.",
        "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
        "A powerful person, Lord <<print setup.npcData.raceTraits['human'].genderTraits['man'].firstName.seededrandom()>>, killed someone I love. Some day soon, I'll have my revenge.",
        "I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."
      ],
      wealth: 1500
    },
    'criminal': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'I resented authority in my younger days, and I saw a life of crime as a way to get back at those that I thought had wronged me.',
        'I resented authority as a youngster, and saw a life of crime as the best way to fight back against tyranny and oppression.',
        'I fell in with a gang of reprobates and ne’er-do- wells, and I learned my specialty from them.',
        'A relative taught me the trade to prepare me for the family trade.',
        "I left home at a relatively young age, and found refuge in a thieves' guild.",
        'I was always bored, so I started committing minor crimes to pass the time. The adrenaline rush was addictive, and soon I was going on to bigger and better heists.'
      ],
      ideal: [
        "I believe in honour amongst thieves- I don't steal from others in the trade.",
        'I am definitely a fan of freedom- Chains are meant to be broken',
        'I steal from the wealthy so that I can help people in need.',
        'I will do whatever it takes to become wealthy.',
        "I'm loyal to my friends",
        "I believe that there's a spark of good in everyone."
      ],
      personalityTrait: [

      ],
      bond: [
        "I'm trying to pay off an old debt I owe to a generous benefactor.",
        'My ill-gotten gains go to support my family.',
        'Something important was taken from me, and I aim to steal it back.',
        'I will become the greatest thief that ever lived.',
        "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
        'Someone I loved died because of a mistake I made. That will never happen again.'
      ],
      wealth: 1500
    },
    'entertainer': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'Members of my family made ends meet by performing, so it was fitting for me to follow their example',
        'I always had a keen insight into what made other people laugh and cry. A life as an entertainer seemed to be the natural continuation of that.',
        'I saw a bard perform once, and it inspired me so much that I decided to follow in his footsteps.',
        'I ran away from home to join a minstrel troupe.',
        'I earned extra coin by performing on the streets as a child, and I never seemed to stop.',
        'A traveling entertainer took me in to teach me the trade, and I learned to love it.'
      ],
      ideal: [
        'When I perform, I want to make beautiful things for the pleasure of my audience',
        'The stories I tell have a lot of history which I wish to preserve.',
        'The world is in need of new ideas and bold action.',
        "I'm only in it for the money and fame.",
        "I like seeing the smiles on people's faces when I perform. That's all that matters.",
        'Art should reflect the soul; it should come from within and reveal who we really are.'
      ],
      personalityTrait: [

      ],
      bond: [
        'My instrument is my most treasured possession, and it reminds me of someone I love.',
        "Someone stole my precious instrument, and someday I'll get it back.",
        'I want to be famous, whatever it takes.',
        "I idolize a hero of the old tales and measure my deeds against that person's.",
        'I will do anything to prove myself superior to my hated rival.',
        'I would do anything for the other members of my old party.'
      ],
      wealth: 1500
    },
    'folk hero': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'I learned what was right and wrong from my family.',
        'I was always enamored by tales of heroes and wished I could be something more than ordinary.',
        'I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.',
        'One of my relatives was an adventurer, and l was inspired by that person’s courage.',
        'A mad old hermit spoke a prophecy when l was born, saying that I would accomplish great things.',
        'I have always stood up for those who are weaker than me.'
      ],
      ideal: [
        'I have the radical belief that people deserve to be treated with dignity and respect.',
        'I believe that no one should get preferential treatment before the law',
        'Tyrants must not be allowed to oppress the people.',
        'If I become strong, I will be better able to protect people.',
        "There's no good in pretending to be something I'm not.",
        'Nothing and no one can steer me away from my higher calling.'
      ],
      personalityTrait: [

      ],
      bond: [
        'I have a family, but I have no idea where they are.  One day, I hope to see them again.',
        'I worked the land, I love the land, and I will protect the land.',
        'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
        'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
        'I protect those who cannot protect themselves.',
        'I wish my childhood sweetheart had come with me to pursue my destiny.'
      ],
      wealth: 1000
    },
    'gladiator': {
      backgroundOrigin: [
        'I found myself in a fight, and the drunkards around me started to bet on whether I would win. I found that strangely exhilarating, and continued to fight, seeking that thrill.',
        'I was a slave, and was forced to fight for my supper and eventual freedom. By the time I got out, there was nothing else I knew.',
        'I entered a fight as a drunken bet, and somehow managed to win. The money was too good for me to quit.',
        'I was constantly getting into fights as a youngster. I figured I might as well continue, for money.'
      ],
      ideal: [
        'If I become strong, I will be better able to protect people.',
        'I want to become the hero I pretend to be.',
        'I want people to tremble at the sound of my name.',
        'I want to inspire others.',
        'I am in it for the money.',
        'I honestly love to see others in pain.'
      ],
      personalityTrait: [

      ],
      bond: [
        'My weapon has seen me through many a battle, and it means everything to me.',
        'The costume that I wear when fighting is part of me and my being.',
        'I have seen countless friends die around me, many at my own hands, so I find it difficult to make new ones.',
        'I am loyal to my friends as long as I respect them.',
        'I feel like I am still a part of my old arena team.',
        'Sometimes, I feel like I cannot leave who I was in the arena.'
      ],
      wealth: 1500
    },
    'guild artisan': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'I was apprenticed to a master who taught me the guild’s business.',
        'I helped a guild artisan keep a secret, and in return, I was taken on as an apprentice.',
        'One of my relatives who belonged to the guild made a place for me.',
        'I was always good with my hands, so I figured that I would make something of it.',
        'I wanted to get away from my home situation and start a new life, so I learned a trade in secret and ran away one night.',
        'I learned the essentials from an old mentor, but I had to join a guild to finish my learning once he passed away.'
      ],
      ideal: [
        'I believe it is the duty of all civilized people to strengthen the bonds of community and the security of civilization.',
        'My talents were given to me so that I could use them to benefit the world.',
        'Everyone should be free to pursue their own livelihood.',
        "I'm only in it for the money.",
        "I'm committed to the people I care about",
        'I work hard to be the best there is at my craft.'
      ],
      personalityTrait: [

      ],
      bond: [
        'The workshop where I learned my trade is the most important place in the world to me.',
        "I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
        'I owe my guild a great debt for forging me into the person I am today.',
        "I pursue wealth to secure someone's love.",
        'One day I will return to my guild and prove that I am the greatest artisan of them all.',
        'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.'
      ],
      wealth: 1500
    },
    'hermit': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'My enemy ruined my reputation, and I had to flee to a life of solitude to escape further disparagement.',
        'I am comfortable with isolation, as I seek inner peace.',
        'I find myself in love with nature, and prefer the company of the animals and plants to that of people.',
        'I never liked the people that I grew up with, so it was easy for me to leave it all behind and strike out a new life, alone.',
        'I felt compelled to forsake my past, and did so with great reluctane. Even now, I sometimes regret my decisions.'
      ],
      ideal: [
        'My gifts are meant to be shared with all',
        'I believe that motions must not cloud our sense of what is right and true',
        'I believe that inquiry and curiosity are the pillars of progress.',
        'I think that solitude and contemplation are paths toward mystical or magical power.',
        'I believe that meddling in the affairs of others only causes trouble.',
        'If you know yourself, you know your enemy.'
      ],
      personalityTrait: [

      ],
      bond: [
        'Nothing is more important than the other members of my hermitage, order, or association.',
        'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
        "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
        'I entered seclusion because I loved someone I could not have.',
        'Should my discovery come to light, it could bring ruin to the world.',
        'My isolation gave me great insight into a great evil that only I can destroy.'
      ],
      wealth: 500
    },
    'noble': {
      // 'knownLanguages': function (npc) {
      //   var allLanguages = setup.npcData.standardLanguages.concatUnique(setup.npcData.exoticLanguages)
      //   var availableLanguages = allLanguages.delete(npc.knownLanguages)
      //   return availableLanguages.pluck()
      // },
      extraLanguage: true,
      backgroundOrigin: [
        'My family has been disgraced, and I intend to restore our once pristine reputation.',
        'I come from an old and storied family, and it fell to me to preserve the family name.',
        'My family recently came by its title, and that elevation thrust us into a new and strange world.',
        'My family has a title, but none of my ancestors have done anything of note.',
        'My family is filled with remarkable people. I hope to live up to their reputation.',
        "I hope to increase my family's power and influence."
      ],
      ideal: [
        'Respect is due to me because of my position',
        'It is my duty to respect the authority of those above me',
        'I must prove that I can handle myself without the coddling of my family.',
        'If I can attain more power, I will be able to protect my family',
        'I believe that blood runs thicker than water.',
        'It is my duty to protect and care for the people beneath me.'
      ],
      personalityTrait: [

      ],
      bond: [
        'I will face any challenge to win the approval of my family.',
        "My house's alliance with another noble family must be sustained at all costs.",
        'Nothing is more important that the other members of my family.',
        'I am in love with the heir of a family that my family despises.',
        'My loyalty to my sovereign is unwavering.',
        'The common folk must see me as a hero of the people.'
      ],
      wealth: 2500
    },
    'outlander': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.',
        "From a young age, I couldn't abide the stink of cities, and sought out the wilderness for respite from the chaos of people.",
        'I came to understand the darkness that lurks in the wilds, and l vowed to combat it.',
        'My people live on the edges of civilisation, and I learned the methods of survival from my family.',
        'After a personal tragedy, I retreated to the wilderness to be alone with my thoughts.',
        'My family moved away from civilisation, and I learnt to adapt with the harsh environment.'
      ],
      ideal: [
        'I think that life is like the seasons, change should be embraced!',
        "It is each person's responsibility to make the most happiness for the whole tribe.",
        'If I dishonor myself, I bring dishonor to my whole tribe',
        'I believe that the strongest are meant to rule.',
        'The natural world is more important than all the constructs of civilization.',
        'I must earn glory in battle.'
      ],
      personalityTrait: [

      ],
      bond: [
        'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
        'An injury to the unspoiled wilderness of my home is an injury to me.',
        'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
        'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
        'I suffer awful visions of a coming disaster and will do anything to prevent it.',
        'It is my duty to provide children to sustain my tribe.'
      ],
      wealth: 1000
    },
    'sage': {
      // 'knownLanguages': function (npc) {
      //   var allLanguages = setup.npcData.standardLanguages.concatUnique(setup.npcData.exoticLanguages)
      //   var availableLanguages = allLanguages.delete(npc.knownLanguages)
      //   return availableLanguages.pluck()
      // },
      extraLanguage: true,
      backgroundOrigin: [
        'I was naturally curious, so I packed up and went to a university to learn more about the world.',
        'My mentor’s teachings opened my mind to new possibilities in that field of study.',
        'I was always an avid reader, and became a sage to learn more from the thousands of books that I tended to.',
        'I discovered an old library and pored over the texts I found there. That experience awakened a hunger in me for knowledge that I still seek.',
        'I impressed a traveling wizard, who told me that I was squandering my talents and that I should seek out an education to take advantage of my gifts.',
        'My father gave me a basic education which whetted my appetite for more knowledge, and I left home to build on what I knew.'
      ],
      ideal: [
        'I believe that the path to power and self-improvement is through knowledge.',
        'What is beautiful points us beyond itself toward what is true.',
        'I believe that emotions must not cloud our logical thinking.',
        'I believe that nothing should fetter the infinite possibility inherent in all existence.',
        'Knowledge is, in my opinion, the path to power and domination.',
        'I think that the goal of a life of study is the betterment of oneself.'
      ],
      personalityTrait: [

      ],
      bond: [
        'It is my duty to protect my students.',
        'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
        'I work to preserve a library, university, scriptorium, or monastery.',
        "My life's work is a series of tomes related to a specific field of lore.",
        "I've been searching my whole life for the answer to a certain question.",
        'I sold my soul for knowledge; I hope to do great deeds and win it back.'
      ],
      wealth: 1000
    },
    'sailor': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'I was press-ganged by pirates and forced to serve as a deck-hand on their ship until I could escape from their clutches.',
        'I wanted to see the world, so I signed on as a deck- hand for a merchant ship.',
        'One of my relatives was a sailor, and took me to sea when I was young, which inspired a life-long love of the oceans and the water.',
        'I needed to escape from town quickly, so I stowed away on a ship. They found me out, and force me to work as a deck-hand as payment for my passage.',
        'Reavers attacked my village, and I found refuge in a ship.',
        'There were few prospects where I was living, so I hopped on board a boat, to seek my fortunes elsewhere.'
      ],
      ideal: [
        'I believe that the thing that keeps a ship together is mutual respect between captain and crew.',
        'We all do the work. That is how the work gets done.',
        'To me, the sea is freedom– the freedom to go anywhere and do anything.',
        "I'm a predator, and I'm not going to apologise for it. Those that cannot survive on the seas should not live.",
        "I'm committed to my crewmates.",
        "Someday I'll own my own ship and chart my own destiny."
      ],
      personalityTrait: [

      ],
      bond: [
        "I'm loyal to my captain first, everything else second.",
        'The ship is most important--crewmates and captains come and go.',
        "I'll always remember my first ship.",
        'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
        'I was cheated of my fair share of the profits, and I want to get my due.',
        'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'
      ],
      wealth: 1500
    },
    'soldier': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        "I wanted fame and fortune, so I signed up to the militia to prove my mettle. I don't think I knew what I was doing, but my determination carried me through my contract, and I never stopped.",
        'I wanted to protect my village from monsters, so I learnt swordcraft and how to fight. Then I learnt that you could earn coin for it, too.',
        'I was forced to enlist in the local militia to fight for my lord. Many of my friends are dead because of him.',
        'Invaders attacked my village, and I vowed to never let my family be unprotected again, so I picked up the sword.',
        "I was always playing with a sword as a kid, and it wasn't until a visiting adventurer sparred with me for fun that I realised that I had a real talent."
      ],
      ideal: [
        'Our lot is to lay down our lives in defense of others.',
        'I do what I must and obey just authority.',
        'When people follow orders blindly, people die.',
        'In life, as in war. That is my motto, that I will live and die by.',
        "To me, ideals aren't worth killing over or going to war for."
      ],
      personalityTrait: [

      ],
      bond: [
        'I would lay down my life for the people I served with.',
        'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
        'My honor is my life.',
        "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
        'Those who fight beside me are those worth dying for.',
        'I fight for those who cannot fight for themselves.'
      ],
      wealth: 1000
    },
    'urchin': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        'My parents died, leaving nobody to look after me, so I took care of myself.',
        'I had to escape my homelife. I lived off crumbs and scraps, but it was better than the alternative.',
        'Raiders attacked my village when I was a child, leaving me the only survivor. I had to walk for three days to the next town over, and begged to survive.',
        'My family was swindled, and we lost everything we had. I had to beg on the streets to look after my family.',
        'A thief took me in, and in exchange for food and shelter, I would keep an eye on the streets while he pulled off heists.'
      ],
      ideal: [
        'All people deserve respect.',
        'We have to take care of each other to survive.',
        'The low are lifted up, and we all benefit from that.',
        'The rich need to be shown what life and death are like in the gutters.',
        "I help the people who help me– that's what keeps us alive.",
        "I'm going to prove that I'm worthy of a better life."
      ],
      personalityTrait: [

      ],
      bond: [
        "My town or city is my home, and I'll fight to defend it.",
        'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
        'I owe my survival to another urchin who taught me to live on the streets.',
        'I owe a debt I can never repay to the person who took pity on me.',
        "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
        "No one else is going to have to endure the hardships I've been through."
      ],
      wealth: 1500
    },
    'commoner': {
      // 'knownLanguages': function (npc) { return npc },
      backgroundOrigin: [
        "I was born into poverty. I've slowly worked my way to where I am today.",
        'I had a bad string of bets which left me with no other choice than to skip town.',
        "I was born into a lowly family, and that's where I'll likely stay.",
        'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.',
        'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.',
        'I grew up in a loving household, but all the love in the world could not pay the debts which we had.',
        'I was one of many children, and when I was old enough to work, my parents put me to it.',
        'I was one of many children, and had to work from a young age to support my family.',
        'I was the eldest child. When my father died, I had to leave school and work to support my family.'
      ],
      ideal: [
        'Everyone needs to pitch in for the greater good.',
        'You have to respect all people',
        'We have to take care of each other',
        'The low are lifted up',
        'The rich need to be shown what life and death are like in the gutters.',
        "I help the people who help me– that's what keeps us alive.",
        "I'm going to prove that I'm worthy of a better life."
      ],
      personalityTrait: [

      ],
      bond: [
        'I am trying to pay off a debt that I inherited from my father.',
        'I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.',
        'I was a nobleman once, but made the wrong man an enemy.',
        'I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.',
        "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
        "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
        "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
        'I live for the sea; nothing gives me more pleasure than fishing off my boat.',
        'My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.',
        'The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.',
        'I love the quiet life. Nothing disturbs me more than a disturbance of the peace.',
        'My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.',
        'I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.',
        "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
        'My father was a drunkard, a gambler, and an abusive man. I will break the cycle.',
        'I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.',
        "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
        "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
        'My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.',
        'I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.',
        "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
        "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
        "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
        "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
        "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
        'I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.',
        'I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.',
        "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
        'I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.',
        "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
        'I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.',
        'I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.',
        'I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!'
      ],
      wealth: 500
    }
  },
  professionTraits: {
    bartender: {
      dndClassOrigin: [
        'I came across $tavern.name as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.',
        "Before I ran $tavern.name, it was my dad's. I kept the family business going to support him in his old age.",
        "When I first got to $town.name, it was practically a ghost town. We built $tavern.name as a social hub for the folk, and it's now what it is today.",
        'The old owner was a problem gambler, and when they auctioned off $tavern.name, I jumped at it.',
        "The old owner thought that $tavern.name wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!",
        "Running $tavern.name was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.",
        'I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.',
        "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"
      ],
      background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
      wealth: 1400
    },
    blacksmith: {
      dndClassOrigin: [
        'I was an apprentice in $smithy.name, and took up the title when my old master passed on.',
        'I was a tinkerer, and just drifted from town to town doing odd jobs for people until I came to $town.name. I fell in love with the place, and then settled here.',
        "I followed my love here, set up shop, and now we're happily married, with a steady job and a roof over our heads.",
        "My father was a blacksmith before me, and then I took up the trade to make him proud. Or at least, I hope I've made him proud. He passed before I opened up shop.",
        "I was an apprentice, and my old master bitterly despised me because my father married his love. I worked so hard to perfect my craft to impress him thinking that the issue was with me, and then the bastard had a heart attack. Left everything to her. What's my mum gonna do with a smithy?!",
        'I spent a lot of time in the mountains with the Dwarves, and they taught me a thing or two while I was there.'
      ],
      background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
      wealth: 2400
    },
    merchant: {
      dndClassOrigin: [
        'I grew up poor. I learnt to hock stuff off to feed myself.',
        'Some people just have the gift of the gab- I just have a talent for sales.',
        'I love gold. Unashamedly, I really do. So what? Selling is an honest living. Sue me.',
        'I spent my youth selling whatever scraps I could find, never got tired of it.'
      ],
      background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
      wealth: 2400
    },
    politician: {
      dndClassOrigin: [
        'I dared to dream that I could change the world, and rise above the others.',
        'I became furious with the corruption in politics, so I decided to enter the rat-race myself.',
        'I thought that I could do a better job than the last guy. I was right.'
      ],
      background: ['commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble', 'criminal'],
      weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
      wealth: 2400
    }
  },
  bodyParts: {
    // The most notable physical trait of $currentNPC.firstName is that $currentNPC.heshe has ______
    head: {
      hair: [
        'thick, long hair down to their hips',
        'a mostly shaved head',
        'a short crewcut',
        'a pretty short mohawk',
        'neatly trimmed hair',
        'wild, unkempt hair',
        'long curly hair',
        'short curly hair',
        'thick straight hair',
        'thin stringy hair',
        'small tufts of hair, but not much',
        'short braided hair',
        'hair in thick long braids',
        'thick braids of hair banded with gold',
        'short, messy hair',
        'a very short, no-nonsense haircut',
        'a short, very tailored haircut',
        'bangs that obscure the eyes',
        'hair flaked with snowy dandruff',
        'a hair braid like a thick rope',
        'hair pulled up in a tight bun',
        'hair coiled in a top-knot',
        'greasy looking hair',
        'rather oily looking hair',
        'thin whispy hair down to the shoulders',
        'hair elaborately dressed with ribbons',
        'hair greased into a ducktail',
        'locks that flutter to the floor',
        'incredibly frizzy hair',
        'hair like straw',
        'hair that droops down to the cheeks',
        'matted looking hair',
        'pigtails',
        'a very noble haircut',
        'long messy hair',
        'hair in a low bun',
        'has slicked back hair',
        'braided hair',
        'a ring of hair',
        'barely any hair',
        'long bangs',
        'a bowl cut',
        'very bushy hair',
        "a rat's nest for hair",
        'a shaved head',
        'long sideburns',
        'thin, neatly trimmed sideburns',
        'thick, tangled hair',
        'neatly combed hair'
      ],
      // covers eyes, eyelids, and eyebrows
      eyes: [
        'eyes like a hawk',
        'quick-witted eyes',
        'incredibly sharp eyes',
        'rather dull eyes',
        'cold eyes',
        'lifeless looking eyes',
        'incredibly wide eyes',
        'slits for eyes',
        'very droopy eyelids',
        'rather square shaped eyes',
        'brilliant eyes',
        'shifty eyes',
        'deep crows feet around both eyes',
        'almond shaped eyes',
        'beady rat eyes',
        'a beseeching gaze',
        'a blazing gaze',
        'bug-eyes',
        'bulging eyes',
        'feline-like eyes',
        'eyes like a shark',
        'eyes like liquid pools of color',
        'sneaky, close-set eyes',
        'very sunken eyes',
        'constantly watery eyes',
        'narrow, wide-set eyes',
        'moon shaped eyes',
        'steeply arched brows',
        'tired looking eyes',
        'a thick unibrow',
        'a thin unibrow',
        'thick, straight eyebrows',
        'very hairy eyebrows',
        'thin, curved brows',
        'outrageously long eyelashes',
        'very long eyelashes',
        'eyebrows like checkmarks',
        'well manicured eyebrows',
        'eyebrows like caterpillars',
        'small beady eyes',
        'strangely bloodshot eyes',
        'deep-set eyes',
        'quite owlish eyes',
        'oval shaped eyes',
        'slanted eyes',
        'drawn on eyebrows',
        'quite sparse eyebrows',
        'thin, wispy eyebrows',
        'doe-eyes',
        'an emotionless gaze',
        'hollow eyes',
        'squinty eyes',
        'twinkling eyes',
        'wide spaced, sunken eyes',
        'a black eye',
        'two black eyes',
        'enormous eyes',
        'incredibly tiny eyes'
      ],
      nose: [
        'a long slender nose',
        'a rather snout looking nose',
        'a piggish nose',
        'a round, bulbous nose',
        'a short slender nose',
        'a bird-like nose',
        'a beaked nose',
        'a rather bent looking nose',
        "a boxer's nose",
        'a broken nose',
        'a very large nose',
        'a very small nose',
        'a quite long nose',
        'a rather askew nose',
        'a bovine looking nose',
        'a broad, flat nose',
        'a childlike nose',
        'a chiseled nose',
        'a cleft nose',
        'a crooked nose',
        'a short, curved nose',
        'a long, curved nose',
        'a curved nose',
        'a delicate looking nose',
        'a dimpled nose',
        'an elegantly curved nose',
        'an elegant, round nose',
        'an enormous nose',
        'a cat-like nose',
        'a flaccid looking nose',
        'a freckled nose',
        'a fat nose',
        'a hooked nose',
        'a thin, hooked nose',
        'a wide, hooked nose',
        'an impish nose',
        'a knobby nose',
        'a long, lopsided nose',
        'a narrow, lopsided nose',
        'a rather lumpy',
        'a long, lumpy nose',
        'a round, lumpy nose',
        'a flat, meaty nose',
        'an oddly misshapen nose',
        'a short pinched nose',
        'a squashed nose',
        'a wide, wrinkled nose',
        'a rather noble nose',
        'a thin, sloped nose',
        'a broad, sloped nose',
        'a warty nose',
        'nose covered in blackheads',
        'a rather greasy looking nose',
        'a pockmarked nose'
      ],
      // covers mouth and cheeks
      mouth: [
        'long thin lips',
        'thick, full lips',
        'a permanent smile',
        'a permanent frown',
        'a permanent scowl',
        'very pouty lips',
        'a permanent look of awe',
        'tight, pursed lips',
        'rather dainty lips',
        'long, thick lips',
        'narrow, thin lips',
        'yellowed teeth',
        'incredibly crooked teeth',
        'almost rotten looking teeth',
        'almost no teeth',
        'a perfect smile',
        'incredibly white teeth',
        'perfectly straight teeth',
        'teeth like headstones',
        'plump, luscious lips',
        'very wide lips',
        'troutlike lips',
        'dry, cracked lips',
        'leathery looking lips',
        'a sagging lower lip',
        'very full lips',
        'a fat lip',
        'a kind smile',
        'hallowed cheeks',
        'harsh cheekbones',
        'sharp cheekbones',
        'rosy red cheeks',
        'very high cheekbones',
        'sunken cheekbones',
        'soft round cheeks',
        'plump cheeks',
        'chubby cheeks',
        'dimpled cheeks',
        'large puffy cheeks',
        'thin ruddy cheeks',
        'pale, sunken cheeks',
        'freckled cheeks',
        'large buck teeth',
        'teeth like a beaver',
        'teeth like a horse',
        'a large gap between the two front teeth',
        'an underbite',
        'an overbite'
      ],
      // covers chin, jaw, and neck
      chin: [
        'a strong, jutting chin',
        'an angular chin',
        'a strong cleft chin',
        'a slight cleft chin',
        'a double chin',
        'a large double chin',
        'a wide beefy chin',
        'a thin dainty chin',
        'a rather bony chin',
        'a wide chin',
        'a narrow, sunken chin',
        'a very feminine chin',
        'a flat chin',
        'a recessed chin',
        'an almost non-existant chin',
        'a misshapen chin',
        'a noble looking chin',
        'a flat, pockmarked chin',
        'a very prominent chin',
        'a sharp chin',
        'a quite slender chin',
        'a well-molded chin',
        'a square chin',
        'a soft, rounded chin',
        'a chiseled jawline',
        'a well sculpted jaw',
        'a chin like a shovel',
        'a delicately rounded jaw',
        'a caved in chin',
        'a heavy round jaw',
        'a jaw narrowed into a pointed little chin',
        'jowls',
        'a narrow jawline that arrows into a pointed chin',
        'a pick-like chin',
        'a receding chin that makes their nose seem bigger',
        'a saggy jaw that droops into a turkey neck',
        'a spade of a chin',
        'a strong square jaw',
        'a weak chin',
        'a prominent jawline',
        'a smooth, youthful jawline',
        'a long elegant neck',
        'a long stocky neck',
        'a very wide neck',
        'a quite short, thin neck',
        'a thin stocky neck',
        'a narrow neck',
        'a neck that looks to small for their head',
        'an incredibly thick neck'
      ],
      ears: [
        'jug-like ears',
        'elephant-like ears',
        'cauliflower ears',
        'large, protruding ears',
        'small, protruding ears',
        'long, thick earlobes',
        'thin, fat earlobes',
        'very tiny ears',
        'small tender ears',
        'big, floppy ears',
        'no earlobes',
        'ears that curl like an exotic shell',
        'rather pointed ears',
        'very rounded ears',
        'very delicate ears',
        'rather hairy ears'
      ],
      misc: [
        'a densely pockmarked face',
        'an incredibly freckly face',
        'a face covered in freckles',
        'a well freckled face',
        'a rather angular face',
        'a soft rounded face',
        'a friendly looking face',
        'a sunken face',
        'a hollow looking face',
        'a sharply angled face',
        'a long, horselike face',
        'a horseface',
        'an exceptionally pale face',
        'a very blocky face',
        'a baby-face',
        'a rather blotchy looking face',
        'a well countoured face',
        'a flabby face',
        'a youthful looking face'
      ]
    },
    torso: {
      descriptions: [
        'a hunched back',
        'an incredibly large hunch',
        'very broad shoulders',
        'incredibly broad shoulders',
        'quite broad shoulders',
        'narrow shoulders',
        'quite rounded shoulders',
        'terrible posture',
        'perfect posture',
        'a large barrel chest',
        'a barrel chest',
        'very bony shoulders',
        'wide set shoulders',
        'a sunken chest',
        'a wide ribcage',
        'a narrow ribcage',
        'a very narrow waist',
        'a rather wide waist',
        'a distended stomach',
        'rather drooped shoulders',
        'strong, square shoulders',
        'broad, powerful shoulders',
        'very pronounced collar bones',
        'wide, bony hips',
        'very narrows hips',
        'very wide set hips',
        'a misshapen ribcage'
      ]
    },
    arms: {
      descriptions: [
        'long, gangly arms',
        'quite short arms',
        'arms like a gorilla',
        'long, spindly fingers',
        'short, stubby arms',
        'short, stubby fingers',
        'child-sized hands',
        'very hairy forearms',
        'incredibly veiny arms',
        'swollen, red knuckles',
        'quite bony elbows',
        'fingers like sausages',
        'heavily calloused hands',
        'fingernails cut to the quick',
        'long, brittle fingernails',
        'colorfully painted nails',
        'talon-like nails',
        'nails sharpened to a point',
        'neatly trimmed fingernails',
        'small webs between each finger',
        'long, elegant fingers',
        'rough, cracked hands',
        'large swollen knuckles',
        'impossibly enormous hands',
        'very muscular hands',
        'quite muscular arms',
        'grimy looking fingernails',
        'yellow-ish fingernails'
      ]
    },
    legs: {
      descriptions: [
        'more legs than torso',
        'widely bowed legs',
        'very notcieable knock knees',
        'large, knobly knees',
        'quite stumpy legs',
        'large, wide feet',
        'very tiny feet',
        'feet like a toddler',
        'feet like a chimp',
        'almost no kneecaps',
        'long, monkey like toes',
        'pale, veiny legs'
      ]
    }
  }
}
