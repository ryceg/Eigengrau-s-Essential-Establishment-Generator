setup.graveyard = {
  size: [
    // the graveyard is ______
    'unbelievably large, the rows of headstones stretch out farther than the eye can see',
    'extremely large, occupying several acres of land',
    'fairly large, with some very ornate looking tombstones',
    'decently sized, with several rows of plots',
    'fairly small, with only a few rows of plots',
    'quite small, with only a couple plots'
  ],
  location: [
    // it is _____
    'located just outside of the town',
    'situated near a beautiful tree',
    'connected via a long path',
    'directly behind the town\'s major temple',
    'located on the site of a battle from long ago',
    'located at the end of a long tunnel',
    'located near the center of town'
  ],
  cleanliness: [
    // it is _____
    'well-kempt, with the occassional bouquet of flowers laid on a gravestone',
    'overgrown with weeds, but the graves themselves are well upkept',
    'very well-kempt, with beatiful murals painted on many of the tombstones',
    'in need of some maintenance, with moss and vines creeping onto several gravestones',
    'nearly forgotten, with many headstones having fallen over or crumbled away'
  ],
  qualityDescriptors: [
    'simple', 'intricate', 'well made', 'poorly made', 'detailed', 'poorly kept', 'well kept', 'small', 'large'
  ],
  material: {
    metal: {
      type: ['metal', 'iron', 'wrought iron', 'copper', 'bronze', 'steel', 'gold', 'silver', 'brass'],
      secondaryDescriptors: ['rusty looking', 'gleaming', 'rusted', 'dulled', 'corroded', 'old looking', 'new looking', 'shiny', 'dull looking']
    },
    wood: {
      type: ['wooden', 'oak', 'pine', 'birchwood', 'maple wood', 'cherry wood'],
      secondaryDescriptors: ['dirty looking', 'overgrown', 'old looking', 'new looking', 'battered', 'fine looking', 'splintered', 'mossy', 'weathered', 'waterlogged']
    },
    stone: {
      type: ['granite', 'stone', 'marble', 'obsidian', 'onyx', 'sandstone', 'slate', 'basalt', 'alabaster', 'limestone', 'quartz', 'ivory', 'bone'],
      secondaryDescriptors: ['moss covered', 'chipped up', 'crumbling', 'cracked', 'weathered', 'brittle', 'rough', 'overgrown']
    }
  },
  additionalDetail: [
    '', ' with the graveyards name across the front', ' with the symbol of a local diety forged into the front', ' with runic symbols running across it', ' with the crest of the town exmblazoned on the top arch', ' with a memorial plaque attatched to one side'
  ],
  figureType: [
    'lion', 'dragon', 'deer', 'owl', 'skull', 'tiger', 'eagle', 'gryphon', 'phoenix', 'deity', 'demon', 'vampire', 'angel', 'saint', 'crow', 'vulture'
  ],
  feature: [
    // As you enter you notice ____
    'a $building.tree.tippyWord standing among the graves, colorful ribbons are tied to its many branches',
    'a large clump of $building.tree.species trees that create that create an area of shade, graves have been dug all around them',
    'a freshly dug grave awaiting its occupant',
    'several spades stuck into the ground next to an open grave',
    'a large grave surrounded by a wrought iron fence with a single gate. The grass inside the fence has been neatly tended to',
    'lines of thick, flowering, hedges divide the graveyard into sections',
    'there is a large crowd arround one of the graves arguing loudly',
    'one of the graves is surrounded by a group of mourners',
    'several of the graves are absolutely covered with flowers',
    'many of the headstones have candles burning on top of them with wax dripping down the sides',
    'several of the trees around the graveyard have wind chimes hanging from their branches',
    'a new tombstone is being put in by a caretaker of some sort',
    'there don\'t seem to be any birds chirping in the area',
    'low winds seem to moan among the headstones',
    'a small dirt mound covered in flowers dominates one part of the cemetery',
    'a large wooden coffin sitting next to an open grave',
    'a low stone wall surrounding the entire cemetery',
    'some of the tombstones have been completely grown over with weeds',
    'a couple of the headstones here have been defaced',
    'a wrought iron fence borders the cemetery on all sides',
    'a small stone paved path winds through the graveyard',
    'a hunched figure in the distance digging a new grave',
    'dark storm clouds are gathering above the graveyard'
  ],
  // A gravedigger is ___
  gravediggerLook: [
    'currently hard at work digging a new grave',
    'cleaning off one of the nearby gravestones',
    'slowly and meticulously placing flowers in front of each grave',
    'leaning against $building.associatedNPC.hisher shovel off in a corner',
    'sitting atop a nearby grave eating a pre-made meal',
    'filling in a nearby grave',
    'lighting a candle that is sitting atop one of the nearby graves',
    'dusting off $building.associatedNPC.hisher clothes after recently digging a fresh grave',
    'leaning against a nearby tree while smoking a pipe',
    'in the distance polishing $building.associatedNPC.hisher shovel with a dirty looking rag',
    'taking down a memorial from a recent funeral'
  ],
  // He/She says
  gravediggerChat: [
    'to watch out for ghosts and ghouls after midnight around here',
    'that this whole graveyard is haunted by the memories of those burried here',
    'to please be quiet as you tread upon this hallowed ground',
    'that visiting hours are ending soon and you should hurry up with your business here',
    'that they don\'t get too many visitors around here',
    'that later today a large funeral will be held here for a local landowner',
    'that one of the graves is haunted and the ghost keeps calling out to their lost love',
    'to watch out for wasps that have been making homes in the nearby trees',
    'to speak softly while visiting this place',
    'that the party made it just before peak visiting hours',
    'that at night the dead here walk among the living',
    'not to bother $building.associatedNPC.himher too much right now',
    'that you would not believe some of the stuff they\'ve seen on the job',
    'graverobbers have been trying to sneak in here during the night recently',
    'that someone recenlty vandalized the grave of a long dead local hero',
    'to avoid the back of the graveyard, but doesn\'t say why'
  ],
  nameSuffix: [
    'Spring', 'Gentle', 'Crescent', 'Burning', 'Autumn', 'Winter', 'Crystal', 'Rotten', 'Devils', 'Summer', 'Eternal', 'Guilty', 'Crown', 'Black', 'Glory', 'Hollow', 'Shadow',
    'Light', 'Sapphire', 'Dragon', 'Lion\'s', 'Forgotten', 'Dead', 'Golden', 'Silver', 'Endless'
  ],
  namePrefix: [
    'Oak', 'Hill', 'Lake', 'Mound', 'Springs', 'Memory', 'Gardens', 'Forest', 'River', 'Glory', 'Spirit', 'End', 'Park', 'Pine', 'Soul', 'Town', 'Woods', 'Grove', 'Tooth', 'Hills', 'Oaks', 'Seas', 'Afterlife'
  ]
}
