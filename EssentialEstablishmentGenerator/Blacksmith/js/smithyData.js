
setup.smithy = {
  get: {
    expertise: smithy => [
      {
        expertise: 80,
        wealth: 10,
        note: 'On the bench lies a <<print either($smithy.weapons)>>, and just by looking at it, you can tell that the blacksmith is extremely talented at $blacksmith.hisher craft; this is a weapon clearly fit for a king.'
      },
      {
        expertise: 70,
        wealth: 10,
        note: 'On the bench lies a <<print either($smithy.weapons)>>, and looking at it, you can tell that the blacksmith is talented at $blacksmith.hisher craft; this is a well made weapon.'
      },
      {
        expertise: 60,
        wealth: 10,
        note: 'On the bench is a <<print either($smithy.weapons)>>, and you can tell that $blacksmith.name is well trained; the weapon is more than servicable, and carries a nice heft to it.'
      },
      {
        expertise: 50,
        wealth: 10,
        note: "On the bench lies a <<print either($smithy.weapons)>>. Inspecting it, it's of slightly above average quality, and is made well."
      },
      {
        expertise: 40,
        wealth: 10,
        note: "On the bench is a <<print either($smithy.weapons)>>. Inspecting it, it's of slightly below average quality, and has an odd weight to it."
      },
      {
        expertise: 30,
        wealth: 10,
        note: "On the bench lies a <<print either($smithy.weapons)>>. Looking at it, you can see that it's not very well made."
      },
      {
        expertise: 20,
        wealth: 10,
        note: "On the bench lies a <<print either($smithy.weapons)>>. It's a respectable effort for an amateur, but for a professional blacksmith, it's rather poor quality."
      },
      {
        expertise: 10,
        wealth: 10,
        note: "On the bench lies a <<print either($smithy.weapons)>>. It's obviously amateurish. $blacksmith.firstName moves around the shop, unsure of $blacksmith.himherself, betraying $blacksmith.hisher lack of skills."
      }
    ],
    lookAround: smithy => [
      {
        cleanliness: 80,
        wealth: 10,
        note: "The smithy is fastidious, with a swept floor and tools stored neatly on the walls. There's a desk in the corner with a piece of parchment showing the current project's measurements, and the materials are neatly stored in bins. Clearly, whatever apprentice has been charged with upkeep of the smithy has taken their job very seriously. You can see that activity in " + smithy.name + ' is ' + smithy.activity + '.'
      },
      {
        cleanliness: 70,
        wealth: 10,
        note: 'You can see that activity in ' + smithy.name + ' is ' + smithy.activity + "; the smithy is very tidy, with a swept floor and tools stored neatly on the bench in a row. The forge has been recently swept, and there's a surprising lack of grime. On the wall are several project specifications nailed, with bins of their respective required materials underneath; it's clearly a well kempt smithy."
      },
      {
        cleanliness: 60,
        wealth: 10,
        note: 'You can see that activity in ' + smithy.name + ' is ' + smithy.activity + '; the smithy is tidy, with a swept floor and things in some semblance of order. There are sheafs of paper on the bench, with hunks of metal neatly holding each stack down; clearly, they are specifications for different projects, and the materials needed for each of them.'
      },
      {
        cleanliness: 50,
        wealth: 10,
        note: 'The smithy is reasonably tidy, with the usual dirt from ' + smithy.blacksmith.firstName + "'s current project on the floor. You can see that activity in " + smithy.name + 'is ' + smithy.activity + ". There are sheafs of parchment on the bench with measurements and specifications for projects, and there's a bucket of water still sizzling from a recent dousing in the corner."
      },
      {
        cleanliness: 40,
        wealth: 10,
        note: 'The smithy is somewhat messy, with the usual dirt and debris from ' + smithy.blacksmith.firstName + "'s current project on the floor; a half-hearted sweeping has been recently made, although all that did was push the dirt around the smithy to dirty up different parts of the floor. You can see that business in " + smithy.name + ' is ' + smithy.activity + '.'
      },
      {
        cleanliness: 30,
        wealth: 10,
        note: 'The smithy is rather messy, with tools strewn around, and spare hunks of metal littering the floor. You can see several projects lying either abandoned or at least temporarily forgotten, coated in a layer of dust. The bench top is cluttered with hammers, and the anvil itself has a layer of grime on it, in desperate need of a cleaning. You can see that business in ' + smithy.name + ' is ' + smithy.activity + '.'
      },
      {
        cleanliness: 20,
        wealth: 10,
        note: "The smithy is very messy, with tools and offcuts strewn around, and blackened cobwebs lining the ceiling. There's a layer of dust and grime on the bench top, and the floor has not been swept in quite a while. Business in " + smithy.name + ' is ' + smithy.activity + '.'
      },
      {
        cleanliness: 10,
        wealth: 10,
        note: 'The smithy is filthy, with smoke having blackened the walls and a thick layer of grime and dust coating every surface. The smell of various burnt woods, coals, and other things permeates your nostrils, and your boots leave visible footprints in the ash underfoot.'
      }
    ]
  },
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
    ],
    activity: [
      [80, 'extremely busy'],
      [70, 'very busy'],
      [60, 'rather busy'],
      [50, 'reasonably busy'],
      [40, 'not terribly busy'],
      [30, 'reasonably quiet'],
      [20, 'rather quiet'],
      [10, 'totally empty'],
      [0, 'totally empty']
    ]
  }
}
