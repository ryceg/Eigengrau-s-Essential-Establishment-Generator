import { constrainArray } from '../src/constrainRecord'
import { NPC } from '../npc-generation/_common'
import { Town } from '../town/_common'
import { Guardhouse } from './_common'

interface GuardhouseNotableFeature {
  exclusions?(town: Town): boolean
  function(): string
}

interface GuardhouseEvidenceLockerItem {
  function(): string
}

interface OfficeDescription {
  wealth: number
  size: number
  description: string
}

interface HoldingCell {
  reason: string
  base?: Partial<NPC>
}

export const guardhouseData = {
  name: {
    wordNoun: [
      'watchtower',
      'barracks',
      'garrison',
      'quarters',
      'fort',
      'station',
      'command post',
      'office',
      'command'
    ] as string[],
    adjective: [
      'yellow',
      'green',
      'blue',
      'red',
      'black',
      'white',
      'grey',
      'grim',
      'silent',
      'watchful',
      'dark',
      'ancient',
      'old',
      'new',
      'bronze',
      'iron',
      'sterling'
    ] as string[]
  },
  notableFeature: constrainArray<GuardhouseNotableFeature>()([
    // the guardhouse is known for
    {
      function () {
        return 'housing the entire list of laws of the town, codified into stone tablets available for anyone to view in the foyer, signifying that the law is for everyone.'
      }
    },
    {
      function () {
        return 'a large broken stone statue which is displayed by the foyer. It is kept there for its historical and cultural significance.'
      }
    },
    {
      function () {
        return 'a small complex by the side is a cooperative of the town, a popular place to shop and chat. Guards and townsfolk are seen operating it together.'
      }
    },
    {
      function () {
        return 'a bathing pool in the courtyard which is free for citizens to use, safe in the knowledge that their possessions are kept in the guardhouse, away from sticky fingers.'
      }
    },
    {
      function () {
        return 'The entire list of laws of the town, codified into stone tablets available for anyone to view in the foyer, signifying that the law is for everyone.'
      }
    },
    {
      function () {
        return 'being incredibly fortified; after protests, the guards fortified the building, which made the citizenry protest even more, with the situation soon spiraling out of control.'
      }
    },
    {
      function () {
        return 'housing a huge vault that wealthy or high ranking visitors to the town can store valuable items in during their stay, knowing it is under constant guard.'
      }
    },
    {
      function () {
        return 'also housing the civil and criminal court building.'
      }
    },
    {
      exclusions (town: Town) {
        return town.economicIdeology !== 'primitivism' && town.roll.sin > 50
      },
      function () {
        return "the town's moneylenders also occupy the same building. The townsfolk often look to it with disgust as moneylender and guard are often a pair."
      }
    }
  ]),
  evidenceLocker: {
    // Inside the evidence locker, there is ___
    items: constrainArray<GuardhouseEvidenceLockerItem>()([
      {
        function () {
          return 'some confiscated weaponry from captured bandits. One of the weapons is highly personalised and decorated.'
        }
      },
      {
        function () {
          return 'an object given by a concerned townsperson. The object was discovered by the townsperson recently, and they were reportedly immensely disturbed as they dropped it off.'
        }
      },
      {
        function () {
          return 'a caged animal that was taken from a swindling vendor. One of the guards has acquired a fondness for it.'
        }
      },
      {
        function () {
          return "an excellently forged letter from someone important. It's location suggests it was forgotten or misplaced before it could be destroyed."
        }
      },
      {
        function () {
          return 'a barrel that hides contraband underneath a thin layer of cured meat.'
        }
      },
      {
        function () {
          return 'a lone sending stone. Its pair is nowhere to be seen.'
        }
      },
      {
        function () {
          return 'a couple of improperly made potions or draughts. It was taken from a illicit alchemist working for a syndicate.'
        }
      },
      {
        function () {
          return "a broken cloak which still has vague traces of magic. It's decorated with religious symbols."
        }
      },
      {
        function () {
          return 'forfeited precious goods from a merchant. The goods were stolen to be resold at a black market'
        }
      },
      {
        function () {
          return "an exotic plant, confiscated from a traveller. It's apparently dear to them, and they were last seen shouting expletives at the building."
        }
      },
      {
        function () {
          return 'some bloodstained and ripped clothing that was found in an alleyway. The owner has yet to be found and noone has come forward with clues.'
        }
      },
      {
        function () {
          return 'a scroll for a dangerous spell that was found being carried by a novice spellcaster'
        }
      },
      {
        function () {
          return 'a small bag of gold coins stamped with the seal of a city that fell to ruin centuries ago, discovered in the rags of a man who starved to death in an alleyway.'
        }
      },
      {
        function () {
          return 'a list of persons that a corrupt guard might have been given to create or plant incriminating evidence on.'
        }
      },
      {
        function () {
          return 'some confiscated weaponry from captured bandits. One of the weapons is highly personalised and decorated.'
        }
      },
      {
        function () {
          return 'some documents in foreign writing or language. Kept in a small scroll case.'
        }
      },
      {
        function () {
          return 'some used bindings, showing a lot of damage. Different from those used by the guards.'
        }
      },
      {
        function () {
          return 'some gaudy outfit, the style and make of which are rare in the general area.'
        }
      },
      {
        function () {
          return 'some pendant. The symbols relate to an important organisation.'
        }
      },
      {
        function () {
          return 'a cane with a hidden compartment. It belonged to a noble of ill repute.'
        }
      }
    ])
  },
  get: {
    /** @example `At the moment, ______ */
    event: (town: Town, guardhouse: Guardhouse) => [
      {
        exclusions (town: Town) { return town.roll.law > 50 },
        function () { return 'an execution is taking place.' }
      },
      {
        function () { return "a guard is taking down a witness's statement." }
      },
      {
        function () { return "a guard is holding a child's hand, who appears to be slightly lost." }
      },
      {
        function () { return 'a duo of two people in handcuffs are currently trying to throw each other under the bus.' }
      },
      {
        function () { return 'a celebration is taking place; the guardhouse is decked in cheer and decor, the joyous noise audible outside.' }
      },
      {
        exclusions (town: Town, guardhouse: Guardhouse) { return guardhouse.roll.expertise > 60 },
        function () { return 'a community program is going on. Townsfolk of all ages are seen inside, eagerly waiting. One of the guards is currently leading a small discussion.' }
      },
      {
        exclusions (town: Town, guardhouse: Guardhouse) { return guardhouse.roll.expertise < 50 },
        function () { return "a sizable number of people in the midst of a heated discussion. They're threatening something if their demands aren't accepted." }
      },
      {
        function () { return `a person of authority is performing an inspection of ${guardhouse.name}.` }
      },
      {
        function () { return "a noble is arguing about some fine which was levied against them- they clearly don't think that it's fair." }
      },
      {
        exclusions (town: Town, guardhouse: Guardhouse) { return guardhouse.roll.expertise < 50 },
        function () { return "a noble is arguing about some fine which was levied against them- they clearly don't think that it's fair, and after some money exchanges hands, it appears that the fine has been reduced in severity." }
      },
      {
        function (town: Town, guardhouse: Guardhouse) {
          if (guardhouse.roll.expertise > 80) return 'a husband and wife are shouting, trying to get into the guard house, but are being blocked. They are screaming about the guards ignoring their child who has gone missing. The guards are patiently explaining something to them- it seems that they are quite used to the pair.'
          if (guardhouse.roll.expertise > 50) return 'a husband and wife are shouting, trying to get into the guard house, but are being blocked. They are screaming about the guards ignoring their child who has gone missing, but the guards are totally disinterested- a stark contrast to the frantic parents, they seem unperturbed, even annoyed.'
          if (guardhouse.roll.expertise <= 50) return 'a husband and wife are shouting, trying to get into the guard house, but are being blocked. They are screaming about the guards ignoring their child who has gone missing, but the guards are actively jeering, seeming to take some amusement in the couples pleading.'
        }
      }
    ] as {
      function(): string
    }[],
    officeItems: [
      // There is ____
      'a fine looking sword which has a gem embedded in the pommel- looks mostly decorative, but could definitely hurt someone if it was put to use.',
      'a bookshelf full of anti-magic books to prevent people from escaping the jail cells.',
      'a small painted portrait of the captains family.',
      'a wall scroll with major city laws written on it.',
      'a map of the city with pinpoints in it showing the location of murders that all have something in common.',
      "a row of small honorary nameplates with names of former guards. They're nailed neatly around the room, plated in precious metal.",
      "a small cabinet with cloth draped over it. It's tucked into the corner wall, easily missed in plain sight.",
      "a small bust placed on the desk. It's clearly expensive and symbolic.",
      "a small shrine to a deity. It's well kept and maintained.",
      "an amulet on the desk. The chain is polished from wear. It's been left out possibly accidentally."
    ] as string[],
    officeDescription: (guardhouse: Guardhouse) => [
      {
        wealth: 90,
        size: 10,
        description: "This seems to be less of a functioning constabulary office, and more of a person's private weapons range; all manner of shiny, expensive stabby toys line the walls."
      },
      {
        wealth: 90,
        size: 30,
        description: "This is a small, but very well funded office. There are rows of weapons, armour, and other peace-keeping related items lining the walls, and there's a rather nice oak table in the centre of the room. It almost gives off the vibe of a boy's clubhouse."
      },
      {
        wealth: 90,
        size: 90,
        description: 'One could easily mistake this guardhouse for a castle. The tall stone walls are immaculately maintained. Inside, there is a large courtyard with several training dummies, an armory with neatly maintained weapons and armor, and a well organized office with many desks.'
      },
      {
        wealth: 90,
        size: 70,
        description: 'This office is a large hall. Most of the space is filled with training areas or tables. On the far wall, there are a series of massive desks covered in papers and writing supplies. An array of clean and polished weapons and armor dominates one of the other walls.'
      },
      {
        wealth: 90,
        size: 50,
        description: 'This office fits in with the rest of the town. One room is devoted to all manner of supplies, from weapons and armor to chains and barricades. It appears to be excellently stocked. The other room is mainly used for bookkeeping, with a large array of neatly bound books that detail all manner of useful information. It is dominated by several large bookshelves and an immaculately maintained desk.'
      },
      {
        wealth: 70,
        size: 90,
        description: 'This office is a large building containing several inter-connected rooms. There are rooms for training, storage, bookkeeping, and rest. Each room seems to be well-maintained, but all furniture is of middling quality. Most of the funds seem to have been directed to the upkeep of the building. The armory and bookkeeping room both appear to be in good shape.'
      },
      {
        wealth: 70,
        size: 70,
        description: 'This large office appears to have been the common room of an inn in the past. Several tables with chairs have been placed around the office, and there is a roaring fire in the hearth. Along one wall, a repurposed bar is used as a desk, with the cabinets behind the bar being used for the storage of books. The storage room is in the back where the kitchen used to be, and has a variety of simple weapons. Most of the weapons are servicable, but nothing more.'
      },
      {
        wealth: 70,
        size: 50,
        description: 'The two rooms of this office are connected by a small doorway. One room seems to mainly be used as a meeting or bookkeeping area. It contains a squat table covered in papers, with several writing implements scattered around. The other room seems to be used for storage, and is stocked with weapons and supplies. Most of the weapons seem to be well-maintained, but there are not a large number of spare weapons. The supplies are useful but limited.'
      },
      {
        wealth: 70,
        size: 30,
        description: "This constable's office looks almost like a dining room. A large table of fine make surrounded by chairs sits at the centre, and books are piled in the middle. The books appear to have been cheaply bound, likely by a member of the guard rather than a professional binder. There are a few weapons in the corner, and they seem usable but not extraordinary."
      },
      {
        wealth: 70,
        size: 10,
        description: 'This office is a small but well-stocked booth. A few well-polished weapons are propped up against the walls. They seem well-made, but not of the highest quality. A small but servicable desk sits below a tiny window.'
      },
      {
        wealth: 50,
        size: 90,
        description: 'There are a variety of rooms in this office, but only around half of them are actively used. The unused rooms are slightly dusty, and are primarily used for storage. The rooms that appear to see frequent use are the armory, main desk, and training room. These rooms all seem well maintained, but perhaps in need of a bit more money. The weapons and armor in the armory are of common but sturdy make, and contain no expensive materials.'
      },
      {
        wealth: 50,
        size: 70,
        description: "This constable's office is fairly large and rather well-organized. There are several tables and chairs that seem to have been scrapped together, and most of the furniture in general seems to be made on a budget. There is a small training circle and a reasonably large weapons rack. The weapons are simple wooden weapons, but are clearly regularly used and maintained. There are a few pieces of leather armor lying around, but nothing more expensive than that."
      },
      {
        wealth: 50,
        size: 50,
        description: 'This office is almost the picture of an average guardhouse. A simple desk and several old shelves sit in one room. In the other room, there is a neat rack of weapons. Most of the weapons appear to have been maintained, but they were clearly made with an eye for cost over quality.'
      },
      {
        wealth: 50,
        size: 30,
        description: 'While this office is only one room, the space seems to have been used well. A writing desk with scattered papers sits in one corner, and the other wall has a small collection of weapons. There is also a small table in the center of the room, likely used for meals. All of the weapons look like they were cheaply made, but they seem usuable enough.'
      },
      {
        wealth: 50,
        size: 10,
        description: 'This tiny room has a single chair and a club hanging on the wall. Fitting several people into this room would be uncomfortable, and there are minimal decorations. The club and chair both seem to be of decent quality. While there is no desk for writing, there are a few writing tools and a slab of wood that could be used as a writing surface.'
      },
      {
        wealth: 30,
        size: 90,
        description: 'This office seems almost awkwardly large, as the vast majority of the space is not used. Most of the rooms are currently empty, and are filled with dust. There is a reasonably large writing desk of poor make in one of the rooms. The desk is covered in books, loose papers, and a few writing tools. There is also an armory, but it contains only a few wooden clubs and quarterstaffs.'
      },
      {
        wealth: 30,
        size: 70,
        description: 'This office is made up of three rooms, with one room for training, another for bookkeeping, and the last as an armory. The training room is entirely empty, and seems to be rarely used. The bookkeeping room contains a tiny desk and a few papers but little else. The armory contains a few clubs.'
      },
      {
        wealth: 30,
        size: 50,
        description: 'This office was once made of two rooms, but the wall between them seems to have collapsed at some point. Most of the wall wreckage has been cleared away, but it still looks quite odd. The merged room has one table with a few roughly bound books and an old writing tool. There are also a few wooden weapons lying around, but they seem to just be roughly carved pieces of scrap wood.'
      },
      {
        wealth: 30,
        size: 30,
        description: 'This office is small but serviceable. There are two wooden weapons of poor make hung on the wall. There is one tiny desk, and an old book, but no writing tools. One of the corners of the room seems to be in danger of collapse.'
      },
      {
        wealth: 30,
        size: 10,
        description: "This constable's office seems to have been almost an afterthought. The office is tiny and shoddy, but usable. The office contains only a chair and an old quarterstaff."
      },
      {
        wealth: 10,
        size: 90,
        description: 'This is an immense constable office, but it is squalid and rotting. Parts of the walls have collapsed, and only some of the space is usable. There is no equipment in sight, and the few desks in the rooms are on the verge of collapse.'
      },
      {
        wealth: 10,
        size: 70,
        description: 'While this office is large, most of the space is entirely unused. All of the desks have been shoved into one room, and all of the equipment has been pushed into another room. The desks and equipment are both minimal and poorly maintained.'
      },
      {
        wealth: 10,
        size: 50,
        description: 'This office consists of two rooms, but one is unusable due to a broken floor. The other room seems to be used for bookkeeping. Most of the books are not bound, and are just stacks of paper. Several of them seem to be heavily stained or otherwise damaged. There are no supplies or weapons to be found, other than a few rations of food and a broken dagger.'
      },
      {
        wealth: 10,
        size: 30,
        description: 'The size of a small room, this office seems almost abandoned. There appears to be a massive spider web in the corner, and there are several layers of dust on many surfaces. There is one table in the room that seems used, but it seems rather unstable. There is a large spear sitting in the corner, but the wood is rotten and the metal looks rusted.'
      },
      {
        wealth: 10,
        size: 10,
        description: 'This is a tiny hole in the wall that serves as the local constabulary. There are a few heavily rusted weapons piled in the corner, but no furniture.'
      }
    ] as OfficeDescription[],
    /** @example `In the holding cell is ${reason}` */
    holdingCell: [
      {
        reason: 'a gnome dressed in black rogues gear caught beating up a man in an alley. She claims she was stopping him from committing a crime.',
        base: {
          race: 'gnome',
          gender: 'woman',
          profession: 'rogue'
        }
      },
      {
        reason: "a man caught trying to drink some of the alchemist's potions to get high.",
        base: {
          gender: 'man',
          calmTrait: 'curious about narcotics'
        }
      },
      {
        reason: 'a drunken half-orc, sleeping it off after starting a huge bar brawl.',
        base: {
          race: 'half-orc'
        }
      },
      {
        reason: 'the wife of a merchant accused of trying to poison her husband.',
        base: {
          gender: 'woman'
        }
      },
      {
        reason: 'a clerk from the Gold Exchange caught embezzling to fund his gambling addiction.',
        base: {
          gender: 'man',
          profession: 'clerk',
          stressTrait: 'reckless',
          calmTrait: 'happy-go-lucky'
        }
      },
      {
        reason: 'an itinerant alchemist who sold potions that did not work as advertised',
        base: {
          profession: 'alchemist'
        }
      },
      {
        reason: 'the village idiot.',
        base: {
          calmTrait: 'simple',
          stressTrait: 'confused'
        }
      },
      {
        reason: 'a dirty guard. He still bears some symbols that identify him.',
        base: {
          gender: 'man',
          profession: 'guard'
        }
      },
      {
        reason: 'someone arrested for a very minor offense. She seems impatient and frustrated.',
        base: {
          gender: 'woman'
        }
      },
      {
        reason: 'a traveler that was arrested for disturbing the peace. He seems unaware of his crime.',
        base: {
          profession: 'tourist'
        }
      },
      {
        reason: 'a convicted murderer. The crime was ambiguous, and he confessed.',
        base: {
          gender: 'man'
        }
      },
      {
        reason: 'a person claiming to be someone else. Arrested after the other called the guards on him.',
        base: {
          gender: 'man',
          note: 'May, or may not be a doppelganger.'
        }
      },
      {
        reason: "a woman claiming the town was influenced by mind manipulating magic. The guards insist she's insane.",
        base: {
          gender: 'woman',
          stressTrait: 'paranoid',
          calmTrait: 'creative'
        }
      },
      {
        reason: 'a youth, sulking in the corner. The guards claim he is an accomplice to a recent crime.',
        base: {
          ageStage: 'child',
          gender: 'man'
        }
      },
      {
        reason: 'a mysterious person. He claims he is imprisoned for a crime. The guards refute it and claim he refuses to leave the cell.',
        base: {
          gender: 'man'
        }
      },
      {
        reason: 'a bard, imprisoned for playing a raunchy tune within earshot of a very uptight sergeant.',
        base: {
          profession: 'bard'
        }
      },
      {
        reason: 'a criminal who is refusing to talk, fearing retribution.',
        base: {
          background: 'criminal'
        }
      }
    ] as HoldingCell[]
  }
}
