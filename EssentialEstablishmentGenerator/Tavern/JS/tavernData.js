setup.tavernLookAround = function (tavern) {
  setup.lookAroundData = [
    {
      populationRoll: 90,
      roughnessRoll: 70,
      note: 'You can barely hear each other over the din of the other patrons, who are pretty rowdy. One elbows you in the ribs as they try to get around you to the bar.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 60,
      note: 'You find it difficult to hear each other over the din of the crowds that are drunkenly cavorting around.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 50,
      note:
      'It must be peak hour for the ' + tavern.wordnoun + '. The barmaid is running back and forth between customers and the kitchen, trying desperately to keep ontop of the ever growing requests for more ale.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 40,
      note: 'The ' + tavern.wordnoun + ' is packed, and the patrons are clamouring to find the few barmaids that are on staff.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 20,
      note: "There's barely enough room to stand, let alone find a seat in the " + tavern.lighting + ' ' + tavern.wordnoun + '.'
    },
    {
      populationRoll: 60,
      roughnessRoll: 60,
      note: 'The ' + tavern.wordnoun + " is packed with patrons, and you're pushed to the side as somebody makes for the latrine in a hurry."
    },
    {
      populationRoll: 70,
      roughnessRoll: 60,
      note:
      "It's peak hour for " + tavern.name + ' and you can tell that the bartender is concerned about a fight breaking out.'
    },
    {
      populationRoll: 70,
      roughnessRoll: 20,
      note: 'The ' + tavern.wordnoun + " is pretty packed with patrons, and it's difficult for you to find a seat."
    },
    {
      populationRoll: 60,
      roughnessRoll: 20,
      note:
      'The ' + tavern.wordnoun + ' is quite full, and the owner is clearly enjoying the amount of business " + bartender.hisher + " ' + tavern.wordnoun + ' is receiving.'
    },
    {
      populationRoll: 50,
      roughnessRoll: 60,
      note:
      "There's a fair number of people in the " + tavern.wordnoun + ' with quite a few swords on display.'
    },
    {
      populationRoll: 50,
      roughnessRoll: 20,
      note:
      "There's a decent number of people in name, and you manage to find a seat without too much trouble."
    },
    {
      populationRoll: 40,
      roughnessRoll: 60,
      note: 'The clientele is pretty rough, and might have scared off some of the less rambunctious potential customers.'
    },
    {
      populationRoll: 40,
      roughnessRoll: 20,
      note: "There's a reasonable amount of customers in the " + tavern.wordnoun + '. The barmaid is happily walking back and forth from the kitchen, taking out plates as they are delivered.'
    },
    {
      populationRoll: 30,
      roughnessRoll: 60,
      note: "The few people that are in the tavern bear scars, and openly talk of their violent exploits. It's pretty clear that they have scared away any regular clientele."
    },
    {
      populationRoll: 30,
      roughnessRoll: 30,
      note:
      'There are basically no people in the tavern, save for a few battle-hardened men talking in the corner.'
    },
    {
      populationRoll: 30,
      roughnessRoll: 20,
      note: tavern.name + " is basically empty, and there's not much for the barmaid to do, who settles for polishing a glass."
    },
    {
      populationRoll: 20,
      roughnessRoll: 60,
      note:
      "There's not very many customers in name at the moment. You see a couple of adventurers hunked over in the corner, quietly discussing battle plans, but nothing of particular interest in the clientele."
    },
    {
      populationRoll: 20,
      roughnessRoll: 20,
      note: "It's almost just you and the bartender in here."
    }
  ]
  return setup.lookAroundData
}

setup.getTavernMenu = function (tavern, bartender) {
  setup.tavernMenu = [
    { wealthRoll: 80,
      roughnessRoll: 80,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu. " + bartender.name + " proudly tells you that there are no stinkin' vegetables, and that " + tavern.name + ' stocks only the finest meats.',
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's available to drink, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The server then tells you that while " + tavern.name + ' is proud of its menu, it caters to an exclusively carnivorous diet.'].random()
    },
    { wealthRoll: 80,
      roughnessRoll: 30,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the food that's on menu. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire $tavern.wordnoun',
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire $tavern.wordnoun.'].random()
    },
    { wealthRoll: 80,
      roughnessRoll: 50,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu.",
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. It goes without saying that the kitchen is able to accomodate even the pickiest of royalty."].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 80,
      note:
      ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food, but curiously no vegetables. " + bartender.name + " spits when you mention this, and says 'no stinkin' veggies around here. We eat meat and we like it, so if you don't like it, yer not eatin'.",
        "There's your standard beers, with the $tavern.wordnoun specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, and mutton, but strangely, no breads, cheeses, or potatoes of any description; you hear another patron loudly state that he loves not having to put up with those 'pointy ears complaining about the lack of green stuff' in " + tavern.name + '.'].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 30,
      note:
      ["There's ales available. The food is a peculiarly limited menu; roast vegetables, breads, cheeses, but no meats, despite " + tavern.name + ' clearly being able to afford it.',
        "There's your standard beers, with the $tavern.wordnoun specialising in ales, which are allegedly quite good. As far as food is concerned, there's breads, cheeses, and all the vegetables you could ever ask for, but not a single bone of meat is available.",
        'Drinks are pretty standard, with a house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 20,
      // bartender.race === "elf",
      note: 'Drinks are pretty standard, with the house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'
    },
    { wealthRoll: 60,
      roughnessRoll: 30,
      note:
      ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food.",
        "There's your standard beers, with the $tavern.wordnoun specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, breads and cheeses, and mutton."].random()
    },
    { wealthRoll: 40,
      roughnessRoll: 60,
      note:
      ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. You suspect that " + bartender.firstName + ' has watered it down. As far as food is concerned, there is the usual mutton and breads available.',
        '' + bartender.firstName + " says that they have some freshly brewed ale, although you soon discover that to be a lie; it's lukewarm, and barely carbonated."].random()
    },
    { wealthRoll: 40,
      roughnessRoll: 30,
      note:
      ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. As far as food is concerned, there is the usual mutton and breads available.",
        "There's a limited range of beers, some of which have very clearly soured.",
        'The food on offer is rather plain, with nothing terribly interesting or appetizing. The beer is unfortunately not much better.'].random()
    },
    { wealthRoll: 20,
      roughnessRoll: 30,
      note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."},
    { wealthRoll: 10,
      roughnessRoll: 30,
      note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."}
  ]
  return setup.tavernMenu
}

setup.getSleep = function (tavern) {
  setup.sleepData = [
    {
      restfulness: 90,
      sleepEasy: 2,
      note: "You unsurprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: 0,
      note: "You get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: 0,
      note: "You surprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 2,
      note: "You unsurprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 0,
      note: "You get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: -2,
      note: "You surprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 70,
      sleepEasy: 2,
      note: "You unsurprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: 0,
      note: "You get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: -2,
      note: "You surprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: 2,
      note: "You get an alright night's sleep, which is disappointing considering the quality of " + tavern.name + ", but you awake feeling reasonably refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: 0,
      note: "You get an alright night's sleep, and awake feeling reasonably refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: -2,
      note: "You get an alright night's sleep despite the poor quality of " + tavern.name + ", but you awake feeling reasonably refreshed"
    },
    {
      restfulness: 30,
      sleepEasy: 2,
      note: "You get an awful night's sleep, which is disappointing considering the quality of " + tavern.name + ", and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
    },
    {
      restfulness: 30,
      sleepEasy: 0,
      note: "You get an awful night's sleep, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
    },
    {
      restfulness: 30,
      sleepEasy: -2,
      note: "You get an awful night's sleep, which is unsurprising considering the quality of " + tavern.name + ", and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
    },
    {
      restfulness: 10,
      sleepEasy: 2,
      note: "The night seems to go on forever, and you just can't get to sleep, despite the comforts provided. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: 0,
      note: "The night seems to go on forever, and you just can't get to sleep. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: -2,
      note: "The night seems to go on forever, and you just can't get to sleep, probably due to the conditions that you were expected to sleep in. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    }
  ]
  return setup.sleepData
}
