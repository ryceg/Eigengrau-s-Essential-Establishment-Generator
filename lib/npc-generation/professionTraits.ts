interface ProfessionTraits {
  professionOrigin: string[]
  background: string[]
  weapon: string[]
  wealth: number
}

export const professionTraits: Record<string, ProfessionTraits> = {
  bartender: {
    professionOrigin: [
      'I came across the tavern as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.',
      "Before I ran the tavern, it was my dad's. I kept the family business going to support him in his old age.",
      "When I first got to $town.name, it was practically a ghost town. We built the tavern as a social hub for the folk, and it's now what it is today.",
      'The old owner was a problem gambler, and when they auctioned off the tavern, I jumped at it.',
      "The old owner thought that the tavern wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!",
      "Running the tavern was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.",
      'I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.',
      "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"
    ],
    background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'],
    weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
    wealth: 1400
  },
  blacksmith: {
    professionOrigin: [
      'I was an apprentice in the smithy, and took up the title when my old master passed on.',
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
    professionOrigin: [
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
    professionOrigin: [
      'I dared to dream that I could change the world, and rise above the others.',
      'I became furious with the corruption in politics, so I decided to enter the rat-race myself.',
      'I thought that I could do a better job than the last guy. I was right.'
    ],
    background: ['commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble', 'criminal'],
    weapon: ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'],
    wealth: 2400
  }
}
