// uses setup.createNPC, setup.profile, setup.createRelationship
setup.initCastle = () => {
  setup.castle = {
    builtBy: [
      'a wise king',
      'an ambitious lord',
      'an ambitious lady',
      'an evil tyrant',
      'a mighty warrior',
      'a conquering warlord',
      'a retired adventurer',
      'a celebrated war hero',
      'an unscrupulous king',
      'a vain lord or lady',
      'a powerful witch or wizard',
      'a beloved sovereign',
      'a prosperous merchant',
      'a member of an ancient noble house',
      'a group of well meaning citizens',
      'a wicked queen',
      'a gentle ruler',
      'a well off craftsperson',
      'a reclusive miser',
      'a paranoid noble',
      'a mysterious and unknown figure'
    ],
    knownFor: [
      'withstanding a grueling, lengthy siege',
      'suffering an immense conflagration',
      'changing hands several times over the course of the same war',
      'bringing ill-fortune to those who hold it',
      'being haunted by a former occupant',
      'never falling in a siege',
      'welcoming travelers seeking refuge',
      'turning away travelers seeking refuge',
      'its unusual architectural style',
      'its beautiful, historic tapestries',
      'its breathtakingly beautiful chapel',
      'the quality of its meals',
      'the many hidden passages rumored to be within',
      'the uprising that once happened here',
      'the important part it played in a previous war',
      'always falling in sieges',
      'the excellent masonry',
      'the grand library hidden within',
      'the many artifacts it houses',
      'hosting many parties for foreign nobility'
    ],
    ruler: {
      getAcquisitionMethod (town, castle) {
        const methods = [
        // it was ____
          {
            acquisitionMethod: `acquired through canny negotiation to get its former owner out of debt to ${setup.profile(castle.associatedNPC, castle.associatedNPC.firstName)}`
          },
          {
            acquisitionMethod: 'passed down through the generations'
          },
          {
            acquisitionMethod: 'inherited several decades ago through a series of well-planned marriages'
          },
          {
            acquisitionMethod: 'inherited when the male heirs all coincidentally died a year after marriage'
          },
          {
            acquisitionMethod: 'won in a bet with a foolhardy drunkard king'
          },
          {
            acquisitionMethod: 'forcefully seized from a rival'
          },
          {
            acquisitionMethod: 'purchased for a hefty fee'
          }
        ]
        return methods.random()
      },
      lookingFor: [
        'an interesting date for an attendance at an elegant soiree for the ruler to show off at',
        'scapegoats for various nefarious schemes',
        'what is causing an awful smell in the cellar',
        'neutral mediators for a conflict with a neighboring ruler',
        'advice on the construction of a new tower that defends the castle against goblin tribes',
        'a criminal tailor that just sold a box of nothingfabric to the local tailor',
        'a large bugbear pelt to use as a rug in the main hall ',
        'a talented architect to design a new wing for the building',
        'a band of mercenaries to temporarily guard the area',
        'a master painter to create a portrait of them',
        'a talented sculptor to create a grand piece of art for the main hall',
        'a head chef to come handle the kitchen',
        'a new treasurer to handle the finances',
        'a very unique plant to use in the surrounding landscaping',
        'an experienced landscaper to take care of the grounds',
        'a new set of fine dishware for the dining hall',
        'a local vassal who went missing from the court',
        'a bard to write an epic song about them',
        'a new tailor to sew some fine tapestries to hang around',
        'a large collection of books for a planned library',
        'the keys to an old forgotten tower nearby',
        'an exterminator for a recent giant rat infestation',
        'a master archer to compete in an upcoming tournament',
        'an experienced commander to lead the local guard',
        'a powerful magic user to dispell a curse on them',
        'a way to get the funds needed to upkeep the building and staff',
        'more maids to take care of the grounds',
        'a talented seamstress to take care of their wardrobe'
      ]
    },
    lookingFor (town, building) {
      const reasons = [
        // the castle needs assistance ____
        function () {
          return 'divining the potential wealth of an ore vein nearby'
        },
        function () {
          return ' to fund its rapidly emptying coffers, in exchange for a place on council'
        },
        function () {
          return 'as counsel on where to spend some accumulated gold'
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `from someone able to act as an escort for a ${setup.profile(npc, 'covert envoy')} to another region`
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `tracking down a ${setup.profile(npc, 'VIP')} who has disappeared`
        },
        function (town) {
          const npc = setup.createNPC(town, { socialClass: 'nobility' })
          return `with the covert escape of an ${setup.profile(npc, 'individual')}`
        },
        function () {
          return 'from someone able to provide a magical ward or enchantment to the structure itself'
        },
        function () {
          return 'with purging of the undead that infest a part of it'
        },
        function () {
          const ghost = lib.ghost.create()
          return `with the exorcision of the ${ghost.readout} that is haunting it`
        },
        function () {
          return 'seeking out the source of a curse or hex that afflicts the inhabitants'
        }
      ]
      return lib.random(reasons)(town)
    },
    dungeon: {
      cells: {
        prisoners: {
          create (town, obj) {
            let imprisonmentLocation
            if (obj.parentKey) {
              imprisonmentLocation = obj.dungeon
            } else {
              imprisonmentLocation = obj
            }
            const selected = lib.weightedRandomFetcher(town, lib.dungeonPrisoners, imprisonmentLocation, null, 'object')
            const npc = setup.createNPC(town, selected.base)
            setup.createRelationship(town, npc, imprisonmentLocation.associatedNPC, { relationship: 'captor', reciprocalRelationship: 'prisoner' })
            lib.createReciprocalRelationship(town, imprisonmentLocation, npc, { relationship: 'prisoner', reciprocalRelationship: 'Is currently being held captive here', description: `${npc.firstName} ${selected.reasonForPunishment}` })
            return `${setup.profile(npc, npc.firstName)}, ${lib.articles.output(npc.descriptor)} who ${selected.reasonForPunishment}`
          }
        }
      }
    }
  }
}
