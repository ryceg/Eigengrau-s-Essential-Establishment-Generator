export const alchemist = {
  rollData: {
    wealth: [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ],
    size: [
      [95, 'cavernous'],
      [80, 'huge'],
      [70, 'quite large'],
      [60, 'large'],
      [50, 'spacious'],
      [40, 'average sized'],
      [30, 'somewhat cramped'],
      [20, 'small'],
      [10, 'tiny'],
      [0, 'extremely cramped']
    ],
    cleanliness: [
      [80, 'fastidious'],
      [70, 'very tidy'],
      [60, 'tidy'],
      [50, 'reasonably tidy'],
      [40, 'somewhat messy'],
      [30, 'rather messy'],
      [20, 'very messy'],
      [10, 'extremely messy'],
      [0, 'dangerously messy']
    ],
    expertise: [
      [80, 'masterful'],
      [70, 'exceptional'],
      [60, 'superior quality'],
      [50, 'finely crafted'],
      [40, 'well crafted'],
      [30, 'sloppily made'],
      [20, 'somewhat amateur'],
      [10, 'amateur'],
      [0, 'blatantly amateur']
    ]
  },
  get: {
    lookAround (alchemist) {
      const lookAround = [
        {
          cleanliness: 80,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + ' is an extremely clean shop. Sheafs of paper are stacked in piles neatly, with recipes being used currently carefully placed on stands. The typical chemical burns that stain most alchemist shops are nowhere to be found.'
        },
        {
          cleanliness: 70,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + ' is a very clean shop (as far as alchemist shops go). There are sheafs of paper, presumably recipes, neatly stacked on benches away from the ominous bubbling of pots that are brewing new concoctions.'
        },
        {
          cleanliness: 60,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " is pretty clean, by alchemical standards. There's a decent sense of order, and sheafs of paper are for the most part kept away from the pots and jugs of strangely coloured brews that stand in a line on the desk."
        },
        {
          cleanliness: 50,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " is as clean as you'd expect for a shop that deals with magical, often volatile chemicals. There's some sense of order, with papers (presumably recipes) kept in stacks, some of them concerningly close to the pots and jugs of strangely coloured brews that clutter the desk."
        },
        {
          cleanliness: 40,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " is somewhat messy; a dangerous trait for a shop that deals with magical, often volatile chemicals. There's a vague sense of order, although the papers that are strewn around the room do little to help. There are pots and pans of mixtures yet to be decanted crowding the desk."
        },
        {
          cleanliness: 30,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " is rather messy; a dangerous trait for a shop that deals with magical, often volatile chemicals. There's little sense of order, and you accidentally step on a recipe as you make your way through the shop. There are pots and pans of mixtures yet to be decanted crowding the desk, leaving the currently brewing potions to take residence on the floor, where they could be easily knocked over."
        },
        {
          cleanliness: 20,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " is extremely messy; a very dangerous trait for a shop that deals with magical, often volatile chemicals. There's no sense of order, and you accidentally step in something that fizzled rather disconcertingly as you make your way through the shop. There are pots and pans of mixtures yet to be cleaned crowding the desk, leaving the currently brewing potions to take residence on the floor, where they could be easily knocked over."
        },
        {
          cleanliness: 10,
          wealth: 10,
          note: 'Looking around, ' + alchemist.name + " must have had an explosion the day before; there is no other possible reason that a shop that deals with magical, often volatile chemicals would be so cluttered, crowded, and blatantly a danger to itself and the half-mile radius surrounding it. There are pots and pans of mixtures that have already spilt over crowding the desk, with potions that are currently brewing strewn around the floor. There's little hope to walk through the shop without putting your boot in something that you probably would prefer not to put it in. Just as you try and hesitate, you hear the distinct sound of 'no, please don't go!' come from the floorboards, which at first seemed to be sticky, but on closer inspection, was more... 'grabby'."
        }
      ]
      return lookAround
    },
    priceTalk (alchemist) {
      const priceTalk = [
        {
          priceModifier: 5,
          wealth: 80,
          priceTalk: 'Be warned, these prices might be... out of your range'
        },
        {
          priceModifier: 5,
          wealth: 50,
          priceTalk: "Fair warning; the prices ain't what they used to be, by a long shot."
        },
        {
          priceModifier: 5,
          wealth: 20,
          priceTalk: "I'm afraid that times are tough, there's a bit of a surcharge on the fun stuff."
        },
        {
          priceModifier: 2,
          wealth: 80,
          priceTalk: 'Fair warning, premium products come with a premium price.'
        },
        {
          priceModifier: 2,
          wealth: 50,
          priceTalk: "Fair warning; the prices ain't what they used to be."
        },
        {
          priceModifier: 2,
          wealth: 20,
          priceTalk: "Things might be a wee bit more expensive than you're used to, but that's the cost of doing business at the moment."
        },
        {
          priceModifier: -2,
          wealth: 80,
          priceTalk: 'These are priced to move, so I can make some space and get some new stock in.'
        },
        {
          priceModifier: -2,
          wealth: 50,
          priceTalk: 'Priced to move!'
        },
        {
          priceModifier: -2,
          wealth: 20,
          priceTalk: 'Priced to sell, so I can afford some new stock!'
        },
        {
          priceModifier: -4,
          wealth: 80,
          priceTalk: "Everything must go! I'm getting in entirely new, custom stock in a couple day's time, and need the space clear."
        },
        {
          priceModifier: -4,
          wealth: 50,
          priceTalk: "I've got a massive sale going on at the moment!"
        },
        {
          priceModifier: -4,
          wealth: 20,
          priceTalk: "Everything must go- can't afford to keep " + alchemist.name + " open much longer, so I'm getting rid of the final stock."
        }
      ]
      return priceTalk
    }
  }
}
