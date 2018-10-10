setup.getSmithyLookAround = function (smithy) {
  var blacksmith = smithy.blacksmith
  setup.smithyLookAround = [
    {
      cleanlinessRoll: 80,
      wealthRoll: 10,
      note: "The smithy is fastidious, with a swept floor and tools stored neatly on the walls. There's a desk in the corner with a piece of parchment showing the current project's measurements, and the materials are neatly stored in bins. Clearly, whatever apprentice has been charged with upkeep of the smithy has taken their job very seriously. You can see that activity in " + smithy.name + ' is ' + smithy.activity + '.'
    },
    {
      cleanlinessRoll: 70,
      wealthRoll: 10,
      note: 'You can see that activity in ' + smithy.name + 'is ' + smithy.activity + "; the smithy is very tidy, with a swept floor and tools stored neatly on the bench in a row. The forge has been recently swept, and there's a surprising lack of grime. On the wall are several project specifications nailed, with bins of their respective required materials underneath; it's clearly a well kempt smithy."
    },
    {
      cleanlinessRoll: 60,
      wealthRoll: 10,
      note: 'You can see that activity in ' + smithy.name + 'is ' + smithy.activity + '; the smithy is tidy, with a swept floor and things in some semblance of order. There are sheafs of paper on the bench, with hunks of metal neatly holding each stack down; clearly, they are specifications for different projects, and the materials needed for each of them.'
    },
    {
      cleanlinessRoll: 50,
      wealthRoll: 10,
      note: 'The smithy is reasonably tidy, with the usual dirt from ' + blacksmith.firstName + "'s current project on the floor. You can see that activity in " + smithy.name + 'is ' + smithy.activity + ". There are sheafs of parchment on the bench with measurements and specifications for projects, and there's a bucket of water still sizzling from a recent dousing in the corner."
    },
    {
      cleanlinessRoll: 40,
      wealthRoll: 10,
      note: 'The smithy is somewhat messy, with the usual dirt and debris from ' + blacksmith.firstName + "'s current project on the floor; a half-hearted sweeping has been recently made, although all that did was push the dirt around the smithy to dirty up different parts of the floor. You can see that business in " + smithy.name + ' is ' + smithy.activity + '.'
    },
    {
      cleanlinessRoll: 30,
      wealthRoll: 10,
      note: 'The smithy is rather messy, with tools strewn around, and spare hunks of metal littering the floor. You can see several projects lying either abandoned or at least temporarily forgotten, coated in a layer of dust. The bench top is cluttered with hammers, and the anvil itself has a layer of grime on it, in desperate need of a cleaning. You can see that business in ' + smithy.name + ' is ' + smithy.activity + '.'
    },
    {
      cleanlinessRoll: 20,
      wealthRoll: 10,
      note: "The smithy is very messy, with tools and offcuts strewn around, and blackened cobwebs lining the ceiling. There's a layer of dust and grime on the bench top, and the floor has not been swept in quite a while. Business in " + smithy.name + ' is ' + smithy.activity + '.'
    },
    {
      cleanlinessRoll: 10,
      wealthRoll: 10,
      note: 'The smithy is filthy, with smoke having blackened the walls and a thick layer of grime and dust coating every surface. The smell of various burnt woods, coals, and other things permeates your nostrils, and your boots leave visible footprints in the ash underfoot.'
    }
  ]
  return setup.smithyLookAround
}

setup.getSmithyExpertise = function (smithy) {
  var blacksmith = smithy.blacksmith
  setup.smithyExpertise = [
    {
      expertiseRoll: 80,
      wealthRoll: 10,
      note: 'On the bench lies a <<print either($smithy.weapons)>>, and just by looking at it, you can tell that the blacksmith is extremely talented at $blacksmith.hisher craft; this is a weapon clearly fit for a king.'
    },
    {
      expertiseRoll: 70,
      wealthRoll: 10,
      note: 'On the bench lies a <<print either($smithy.weapons)>>, and looking at it, you can tell that the blacksmith is talented at $blacksmith.hisher craft; this is a well made weapon.'
    },
    {
      expertiseRoll: 60,
      wealthRoll: 10,
      note: 'On the bench is a <<print either($smithy.weapons)>>, and you can tell that $blacksmith.name is well trained; the weapon is more than servicable, and carries a nice heft to it.'
    },
    {
      expertiseRoll: 50,
      wealthRoll: 10,
      note: "On the bench lies a <<print either($smithy.weapons)>>. Inspecting it, it's of slightly above average quality, and is made well."
    },
    {
      expertiseRoll: 40,
      wealthRoll: 10,
      note: "On the bench is a <<print either($smithy.weapons)>>. Inspecting it, it's of slightly below average quality, and has an odd weight to it."
    },
    {
      expertiseRoll: 30,
      wealthRoll: 10,
      note: "On the bench lies a <<print either($smithy.weapons)>>. Looking at it, you can see that it's not very well made."
    },
    {
      expertiseRoll: 20,
      wealthRoll: 10,
      note: "On the bench lies a <<print either($smithy.weapons)>>. It's a respectable effort for an amateur, but for a professional blacksmith, it's rather poor quality."
    },
    {
      expertiseRoll: 10,
      wealthRoll: 10,
      note: "On the bench lies a <<print either($smithy.weapons)>>. It's obviously amateurish. $blacksmith.firstName moves around the shop, unsure of $blacksmith.himherself, betraying $blacksmith.hisher lack of skills."
    }
  ]
  return setup.smithyLookAround
}
