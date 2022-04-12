import { closestMatch } from '../src/closestMatch'
import { random } from '../src/random'
import { Tavern } from './_common'

interface TavernDescription {
  size: number
  wealth: number
  note: string[]
}

export function getTavernDescription (tavern: Tavern) {
  const bartender = tavern.associatedNPC

  const descriptions: TavernDescription[] = [
    {
      size: 90,
      wealth: 10,
      note: [
        `${tavern.name} is just one huge, ${tavern.lighting} ${tavern.cleanliness} room, with a small section of the hall cordoned off as the kitchen and bar area. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.`,
        `${tavern.name} is huge, ${tavern.lighting}, and ${tavern.cleanliness}. There are several large ${tavern.material.noun} tables.`,
        `${tavern.name} looks suspiciously like a converted barn. A ${tavern.cleanliness} barn, but a barn all the same.`
      ]
    },
    {
      size: 40,
      wealth: 10,
      note: [
        `${tavern.name} is slightly cramped, and ${tavern.lighting}. The ${tavern.cleanliness} tables are a touch too close to the wall, and the bar area is the front of the kitchen, which doesn't seem to be a very efficient set up. The ${tavern.wealth} establishment is clearly in need of an extension to relieve the somewhat small ${tavern.structure.material.noun} pub of its congestion issues.`
      ]
    },
    {
      size: 30,
      wealth: 10,
      note: [
        `${tavern.name} is barely more than a large, ${tavern.cleanliness} house; the ${tavern.lighting} bar area is permanently crowded due to a bottleneck preventing barmaids from passing through without having to negotiate through thirsty patrons looking for refills.`
      ]
    },
    {
      size: 20,
      wealth: 10,
      note: [
        `${tavern.name} is very obviously a house that's been converted into a ${tavern.wordNoun}, probably as a hobby for the owner. It's unfortunately rather cramped inside, and taller patrons would be at risk of hitting their heads if they were careless inside the tiny ${tavern.structure.material.noun} building. The tavern is ${tavern.cleanliness}, and is ${tavern.lighting}.`
      ]
    },
    {
      size: 60,
      wealth: 30,
      note: [
        `${tavern.name} is nice and spacious. The bar is roomy and ${tavern.lighting}, with several stools in front of it for patrons that wish to while away the evening talking to ${bartender.firstName}. There's a couple large ${tavern.material.noun} tables, which are large enough to put out a map and still have room for your mugs of ale; perhaps a deliberate choice on the owner's part.`
      ]
    },
    {
      size: 50,
      wealth: 30,
      note: [
        `${tavern.name} is a tall building, but not particularly spacious; the ${tavern.cleanliness} bar occupies the ground floor which is ${tavern.lighting}, and you see a barmaid carrying a dish down from the stairs; the sign outside said that it had accomodation, so the beds must be on the third floor of the ${tavern.structure.material.noun} building.`,
        `${tavern.name} is a reasonably spacious building that is ${tavern.lighting}, and very similar to the countless other taverns that you've come across in your times, right down to the specials board being somewhat battered with so many uses, and the dart board with many holes constantly seeing use.`,
        `${tavern.name} is clearly a converted house; you can see that a bathroom was originally where the bar is, due to the unmistakable water staining that comes with bathtubs. The tavern is ${tavern.cleanliness}, and ${tavern.lighting}.`
      ]
    },

    {
      size: 90,
      wealth: 50,
      note: [
        `${tavern.name} is huge; it might have been a town hall or some other public building, but it's now a massive pub, with rows upon rows of tables in the ${tavern.cleanliness} ${tavern.wordNoun}.`
      ]
    },
    {
      size: 80,
      wealth: 50,
      note: [
        `${tavern.name} is quite large, ${tavern.lighting}, and ${tavern.cleanliness}. The ceiling is unusually high, and the amount of wood that ${bartender.firstName} must go through would be immense. The dining hall has several large ${tavern.material.noun} tables, fit for up to twelve people each. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.`
      ]
    },
    {
      size: 70,
      wealth: 50,
      note: [
        `${tavern.name} is very large indeed; the ${tavern.cleanliness} ${tavern.wordNoun} has rows of tables, as well as a dedicated kitchen and bar area, indicating that at least some thought went into its construction.`
      ]
    },
    {
      size: 60,
      wealth: 50,
      note: [
        `${tavern.name} is a large building, with the ${tavern.cleanliness} bar occupying the ground floor, and the beds for patrons are on the floor directly above you. It's ${tavern.lighting}.`
      ]
    },
    {
      size: 50,
      wealth: 50,
      note: [
        `${tavern.name} is no larger or nicer than you would expect; the ${tavern.cleanliness} ${tavern.wordNoun} is almost the platonic ideal of your average watering hole.`
      ]
    },
    {
      size: 30,
      wealth: 50,
      note: [
        `${tavern.name} is a little cramped. The ${tavern.cleanliness} ${tavern.wordNoun} has narrow corridors, and seating is up against the wall, making the barmaids have to constantly contend with tripping hazards.`
      ]
    },
    {
      size: 90,
      wealth: 90,
      note: [
        `${tavern.name} is probably some kind of converted mansion; there is far too much artistry in the construction of the ${tavern.cleanliness} ${tavern.wordNoun}'s ${tavern.material.noun} fixtures, and the decor is entirely too ${lib.random(['tasteful', 'tasteless', 'garish'])} to not come from money.`
      ]
    },
    {
      size: 70,
      wealth: 90,
      note: [
        `${tavern.name} is quite large and comfortably spacious. The construction of the ${tavern.cleanliness} ${tavern.wordNoun}'s ${tavern.material.noun} fixtures and the decor is ${lib.random(['tasteful', 'tasteless', 'garish'])}, and there's clearly been some decent money put into its construction; the ${tavern.material.noun} fixtures are rock solid, and quite beautiful.`
      ]
    },
    {
      size: 50,
      wealth: 90,
      note: [
        `${tavern.name} is very nice, compared to some of the taverns that you've been in. The ${tavern.cleanliness} ${tavern.wordNoun} is laid out in a sensible fashion, and the bar looks to be quite nice, all things considered.`
      ]
    },
    {
      size: 30,
      wealth: 90,
      note: [
        `${tavern.name} is quite nice, compared to some of the taverns that you've been in, if a little on the small side. The ${tavern.cleanliness} ${tavern.wordNoun} is laid out in a sensible fashion, and the kegs behind the bar look like they have the good variety of spouts.`
      ]
    },
    {
      size: 10,
      wealth: 90,
      note: [
        `${tavern.name} would be pleasant, if it weren't so interminably cramped; there is a deficit of space to the point where you suspect that it was perhaps built by halflings- very rich halflings. The ${tavern.cleanliness} ${tavern.wordNoun} is ${tavern.lighting}, but the walls feel oppresively close together, which makes it difficult to enjoy the gorgeous construction of the building itself.`
      ]
    }

  ]

  const note = closestMatch(descriptions, 'note', 'size', 'wealth', tavern.roll.size, tavern.roll.wealth)

  return random(note)
}
