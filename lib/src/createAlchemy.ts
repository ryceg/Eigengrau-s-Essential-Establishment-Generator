import { assign, capitalizeFirstLetter } from './utils'
import { random } from './random'

interface Base {
  type: string
}

export function createAlchemy (base?: Base) {
  const type = ['alchemical ingredient', 'body part', 'substance', 'preserved herb', 'brewing potion', 'potion']
  const smallThing = ['bats', 'bees', 'beetles', 'blossoms', 'flowers', 'brains', 'cats', 'centipedes', 'crabs', 'dragonflies', 'earwigs', 'eels', 'eels', 'feathers', 'frogs', 'gallstones', 'geckos', 'hornets', 'imps', 'jellyfish', 'lamprey', 'leeches', 'locusts', 'mice', 'mold', 'lichen', 'moths', 'mushrooms', 'truffles', 'newts', 'octopus-creatures', 'ooze-globules', 'piranha', 'praying mantises', 'rats', 'roaches', 'scarab beetles', 'shrews', 'slugs', 'snails', 'snakes', 'songbirds', 'spiders', 'stinkbugs', 'tapeworms', 'tentacles', 'ticks', 'toads', 'turtles', 'vines', 'wasps', 'worms']
  const preservationMethod = ['distilled', 'dried', 'ground-up', 'jellied', 'pickled', 'powdered', 'smoked', 'salt-cured', 'smoke-cured', 'stewed']
  const bodyPart = ['ankle-bone', 'bladder', 'blood', 'brain', 'dung', 'ears', 'entrails', 'eye', 'face', 'finger', 'fingernail', 'foot', 'gallstone', 'hair', 'hand', 'heart', 'intestine', 'kidney', 'kidney stone', 'knee bone', 'knuckle bone', 'liver', 'lung', 'rib', 'shin-bone', 'skin', 'skin', 'skin', 'skull', 'spittle', 'stomach', 'teeth', 'teeth', 'thumbs', 'toenail', 'tongue', 'tongue']
  const bodyPartOrigin = ['beggar', 'beautiful woman', 'addict', 'accused man', 'assassin', 'artisan', 'barber', 'barbarian', 'cuckold', 'witch', 'wizard', 'warlock', 'priest', 'thief', 'pauper', 'cheat', 'scammer', 'crook', 'pirate', 'princess', 'torturer', 'prisoner', 'rebel', 'traitor', 'traitor', 'coward', 'coward']
  const herb = ['bloodgrass', 'chromus slime', 'ephedra', 'emetic wax', 'fennel silk', 'gengko bush', 'hyacinth nectar', 'lavender sprigs', 'mandrake root', 'wild sageroot', 'arctic creeper', 'amanita cap', 'basilisk breath', 'cactus juice', 'drakus flower', 'harrada leaf', 'quicksilver lichen', 'radiant synthseed', 'spineflower berries', 'wyrmtongue petals', 'arrow root', 'blue toadshade', 'cosmos glond', "Devil's bloodleaf", "fiend's ivy", 'hydrathistle', 'ironwood heart', 'luminous cap dust', 'mortflesh powder', 'nightshade berries', 'primordial balm', 'rock vine', 'scilia beans', 'silver hibiscus', 'tail leaf', 'verdant nettle', 'voidroot', 'wispstalks', 'wrackwort bulbs']
  const herbPreservation = ['distilled liquid of', 'essence of', 'oil of', 'paste made from', 'pickled', 'powdered', 'dried', 'preserved']
  const substanceForm = ['chips', 'cubes', 'disks', 'flakes', 'granules', 'gravel', 'chunks', 'nuggets', 'pebbles', 'polyhedrons', 'powder', 'rocks', 'sequins', 'small cylinders', 'wire']
  const substanceType = ['amber', 'brimstone', 'bronze', 'brass', 'chitin', 'coal', 'emerald', 'ruby', 'sapphire', 'incense', 'iron', 'steel', 'obsidion', 'turquoise', 'opal', 'jade', 'pearl', 'rust', 'salt']
  const liquidTitle = ['potion', 'elixir', 'draught', 'vial', 'philter', 'tonic', 'brew', 'ichor', 'juice', 'concoction']
  const potionPurpose = ['love potion', 'fertility tonic', 'magical cure-all', 'terrible poison', 'component for a summoning ritual', 'component for a necromantic ritual', 'component for a polymorphing hex', 'component for a beguiling charm', 'potent acid solvent', 'potentially explosive substance', 'substitute for alcohol', 'substitute for drugs', 'substitute for food', 'substitute for animal feed']
  const potionContainer = ['conical smooth glass bottle', 'square glass bottle', 'not quite watertight leather waterskin', 'stone flask', 'metal thermos', 'glass syringe', 'small medical vial', 'small shot sized bottle', 'large metal bottle', 'capped horn', 'rather decorative glass bottle', 'geometric diamond shaped bottle', 'translucent long wine bottle', 'translucent beer bottle', 'leather pouch', 'spray bottle', 'coloured bottle', 'bone flask', 'small metal vial', 'large bottle that can be swigged several times']
  const vesselDescriptor = ['delicate', 'tiny', 'heavy-bottomed', 'thick', 'grimy', 'polished', 'shiny', 'blackened', 'well-worn', 'round-bottomed', 'quite large', 'comically large']
  const vesselMaterial = ['ceramic', 'iron', 'copper', 'steel', 'bronze', 'glass', 'glass']
  const vesselType = ['tea kettle', 'cauldron', 'vat', 'flask with an oddly shaped neck', 'flask', 'pot', 'saucepan']
  const liquidColour = ['clear', 'blue', 'green', 'red', 'pale green', 'pink', 'light blue', 'white', 'black', 'dark grey', 'light grey', 'yellow', 'orange', 'gold', 'orange', 'bronze', 'metallic', 'purple', 'brown', 'dark red']
  const liquidSecondary = ['flecks of colour', 'swirls of colour', 'fizzing bubbles', 'bubbles suspended in it', 'some kind of bone floating in it', 'leaves and flowers in it', 'two separating liquid', 'a bright glow', 'a soft glow', 'stripes of colour', 'translucency', 'a cloudy murkiness', 'blood within it', 'dirt floating in it', 'chunks of metal in it', 'some type of gore from a slain creature', 'steam coming from it', 'a face in the liquid', 'constantly moving and shifting liquid', 'a constant heat']
  const liquidTexture = ['thick and sludgy', 'thin and watery', 'airy and bubbly', 'slimey', 'almost solid', 'oily', 'chunky', 'bitty', 'milky', 'almost gaseous']
  const smell = ['nothing at all', 'sulphur', 'fresh air', 'baking cookies', 'flowers', 'rotting meat', 'egg', 'rotten eggs', 'fresh bread', 'blood', 'home', 'vomit', 'garlic', 'fruit', 'chocolate', 'beer', 'smoke', 'wood', 'death', 'orc', 'wet dog', 'wet goblin', 'perfume', 'cheap perfume', 'musk', 'garbage', 'sand', 'the forest', 'nuts', 'acid', 'spicy things', 'mint', 'chemicals', 'dirt', 'something bad flavoured to taste better', 'alcohol', 'sugar', 'a damp cave', 'strange', 'something indescribable but nice', 'something indescribable but horrid', 'rain', 'medical equipment', 'bacon', 'coffee', 'cut grass', 'vanilla', 'the sea', 'roast meat', 'festive', 'lavender', 'lilac and gooseberries', 'a fresh baby', 'a new axe', 'citrus', 'leather', 'metal', 'a forge', 'fresh cake', 'paint', 'wine', 'polish', 'cheese', 'fish', 'compost', 'the sewers', 'apples', 'holy oils', 'massage oil', 'a brothel', 'old fruit', 'roses', 'something that stirs memories', 'gingerbread', 'cinnamon', 'candy', 'fumes', 'bark', 'chicken', 'beef', 'human flesh', 'gunpowder', 'a storm', 'success', 'gold', 'mayonnaise', 'barbeque', 'salt', 'pepper', 'aromatic spices', 'fruit punch', 'water', 'fresh water', 'stagnant water', 'mud', 'a colour', 'music', 'the end of the world', 'the worst, most terrible thing ever', 'magically the most desirable thing to you']
  const potionLabel = ['its name and title in bold letters', 'its description in ornate elvish', 'its description in elvish with a relevant mythic story', 'its description on dwarven', 'Dwarven runes', 'its description in gnomish', 'Gnomish diagrams for its use', 'the words USE ONLY IN EMERGANCIES scrawled on it', 'a mass produced label claiming the company has no fault for any side effects', 'a mass produced label saying that it’s a new flavour', 'very tiny print describing how the potion was made in great detail, around 1000 words', 'its name in Bold words in Giant', 'is scrawled off', 'has faded beyond reading', 'has been scraped off', 'its description and a random fact', 'its description and a small compliment to make your day better', 'its description and a joke', 'its description in infernal', 'its description in some ancient language', 'all in some kind of symbols', 'all in some kind of raised symbols for the blind to read', 'its description in elemental languages', 'its name and flavour', 'its name with a warning about side effects', 'its name and its recommended buying price', 'bloody prints all over it', 'name engraved into the container', 'its name glowing with minor magic', 'a cartoony mascot', 'a warning of an ancient curse', 'its name and description in invisible ink', 'its description in draconic', 'several different names and descriptions plastered over each other', 'a name of a completely different potion to what it does', 'a title describing the exact opposite', 'a money back guarantee', 'a coupon for a free potion', 'a living face looking around', 'its name and recipe for other alchemists', 'a heartfelt love letter for someone', 'a heartfelt hate letter for someone', 'a persons name', "the potion won't work unless asked by its name to do so", 'a strange prophecy', 'a small doodle', 'a note saying DO NOT DRINK', 'a passive aggressive note about other people drinking potions that do not belong to them', 'brightly glowing letters', "that plays a very quiet sing song 'till the bottle is empty", 'ornate and beautiful designs', 'very practical designs', 'holy symbols', 'unholy symbols', 'Fey symbols and Sylvan writing', 'a riddle, the lid not opening unless the riddle is solved', 'saying its designed for babies', 'saying that it shouldn’t be drank by anyone under 18', 'a note saying it is illegal contraband being confiscated', 'a note saying the alchemist thinks it is its greatest work', 'a note saying the alchemist is sorry for ever creating it', 'a note saying that it never should have been made and copius blood stains over the bottle', 'it says you’re being watched', 'its description in Druidic', 'its description in Orcish', 'its description in Goblin', 'its description in Halfling', 'its description in Celestial', 'its description in Undercommon', 'its description in Deep speech', 'its description in strange arcane symbols', 'a map of where the potion was made', 'a small puzzle for kids', 'a list of ingredients in their chemical forms', 'a list of possible side effects as long as the bottle is', 'a red X', 'a sad face', 'an angry face', 'a happy face', 'a healing symbol', 'a cheesy pun potion name', 'growing with vines', 'growing with flowers', 'growing with crystals', 'growing with rock', 'shamanistic symbols and shavings', 'no words just a single colour', 'water damaged but a just barely legible label', 'a label as if it was some kind of present', 'a label showing how many calories it is', 'a warning about potion abuse and to only take in moderation', 'a label with warnings and side effects all scribbled out', 'that only shows the side effects', 'a mysterious number- print random(0, 100)', 'a code name', 'a few unrelated letters', 'the name of one of the party members', 'the name of the bad guy', 'crawling with bugs', 'covered in something unspeakable', 'covered in glitter. It gets everywhere']
  const potionSideEffect = ['nothing bad at all', 'puts the user to sleep', 'rapid hair growth all over the body', 'bleeding from the eyes', 'vivid hallucinations', 'flashbacks of your own eventual demise', 'the skin to crack and appear distorted', 'spots to grow on the skin', 'diarrhoea', 'vomiting', 'blurred vision', 'blindness', 'deafness', 'mutism', 'health loss via rapid bleeding', 'a sudden horrific accent', 'the irresistible urge to dance', 'the hearing of demons', 'loss of balance', 'everything tasting like dirt for some time', 'excessive drooling', 'loss of intelligence', 'loss of strength', 'loss of speed', 'loss of charisma', 'genuine happiness', 'hunger', 'thirst', 'trouble breathing', 'sudden moustache', 'poisoning', 'petrification', 'stunning', 'immobilisation', 'increased libido', 'fidgeting', 'itchiness', 'rashes', 'attracting bears', 'magically being covered in dirt', 'a horrifying stench', 'baldness', 'swelling', 'loss of a random item', 'curses', '1d8 damage', "weakness to <<print ['shocking', 'fire', 'ice', 'the opposite sex'].random()>>", 'weakness to physical damage', 'feelings of guilt', 'feelings of anxiety', 'feelings of shame', 'sneezing', 'uncontrollable crying', 'need to sing heroic music', 'urge to hug', 'kleptomania', 'burping', 'loss of smell', 'insomnia', 'paranoia', 'bad luck', 'summoning imps that want to kill you', 'summoning angry bees', 'fear of something', 'temporary madness', 'relaxation', 'the appreciation of colours and sound', 'tripping the hell out', 'painful lust', 'light headedness', 'increased confidence', 'recklessness', 'rage', 'sadness', 'dizziness', 'pain', 'slight possession', 'an allergic reaction to your favourite food', 'a strong belief that you are someone else', 'severe debt', 'grumpiness', 'muscle spasms', 'a bloated feeling', 'a cold', 'a fever', 'becoming strangely light', 'weakness', 'the urge to fight', 'the need to make friends', 'nausea', 'mood swings', 'addiction', 'the need for booze', 'drunkeness', 'coughing', 'uncontrollable babbling', 'slight aches', 'a bad taste for some time', 'giddiness', 'laughter']
  const potionStrength = ['regular with no side effect', 'regular with a slight side effect', 'regular with a strong side effect', 'minor with a strong side effect', 'minor with a slight side effect', 'major with a strong side effect', 'major with a small side effect', 'poisonous. Almost no positive effect and is all side effect', 'temporary, but strong and wears off quickly', 'seemingly permanent']
  const potionTitle = ['Healing', 'Vigor', 'Vitality', 'Might', 'Courage', 'Giant Strength', 'Flame Resistance', 'Cold Resistance', 'Necro Resistance', 'Radiant Resistance', 'Stoneskin', 'Acid Resistance', 'Lightning Resistance', 'Succubus Charm', 'Shielding', 'Flame Breath', 'Growth', 'Shrinking', 'Comprehension', 'Fertility', 'Intimidation', 'Luck', 'Mana', 'Arcane', 'Animal form', 'Dreams', 'Nightmares', 'Stamina', 'Fleet foot', 'Knowledge', 'The Bard', 'Disguise', 'Feast', 'Youth', 'Age', 'Furnace', 'Eagle Sight', 'Health', 'Invulnerability', 'Riddle me gone', 'Horrifying appearance', 'Beautiful appearance', 'Swordsmanship', 'Bowmanship', 'Nymph breath', 'Midas', 'Berserker', 'Utter Hatred', 'Oracle', 'Demonic Leech', 'Fey Nature', 'Tracelessness', 'Gracefulness', 'Goblin Climb', 'Dead Ringer', 'One Leafed Clover', 'Possession', 'Owls Wake', 'Hawks Flight', 'Peace', 'Rejuvenation', 'Sphinxes Truth', 'Serpent Tongue', 'Navigation', 'Hook Horror', 'Schaffensfreude', 'Invisibility', 'Wild magic', 'Fame', 'Goats Trek', 'Gargoyle Toughness', 'Atomic Clock', 'Transmutation', 'Iron Skin', 'Sex Change', 'Race Change', 'Musical Breath', 'Utter Understanding', 'Split Form', 'Flavour', 'Glimmer', 'Love', 'Poison', 'Rebirth', 'Elemental form', 'True form', 'Gods Touch', 'Antidepressant', 'Ghostly Form', 'Artisans Skill', 'Godly form', 'Bless Weapon', 'Euphoria', 'Bodyguard', 'Babelfish', 'Preservation', 'Fear', 'Night vision', 'Tracking', 'Cure-all']
  const potionEffect = ['instantly regenerates some health when drank', 'gives temporary health when drank', 'slowly regenerates health over a period of some hours', 'gives a bonus to attack rolls after drinking', 'gives immunity to fear and some temporary inspiration', 'gives the user much more strength', 'gives resistance to fire damage', 'gives resistance to cold damage', 'gives resistance to necrotic damage', 'gives resistance to radiant damage', 'gives resistance to martial damage', 'gives resistance to acid', 'gives resistance to lightning damage', 'makes the drinker irresistible to nearby people', 'gives the user a magical shield of energy', 'gives the user fire breath for a short time', 'makes the user double in size', 'makes the user half in size', 'lets the user understand all languages', 'makes the user very fertile, almost certain to make a baby under its effects', 'gives the user a huge booming voice that terrifies those around', 'gives the user a temporary boost to luck', 'gives the user more magical power to cast with', 'gives the user more powerful spells', 'makes the user turn into a random animal', 'makes the user get lost in a hallucinary dream world of their perfect dream', 'makes the user get lost in a hallucinary dream world of their worst nightmares', 'gives the user more stamina and constitution', 'makes the user have more speed', 'increases the users intelligence temporarily', 'increases the users dexterity temporarily', 'changes the users form to a disguised form of any race and appeance', 'removes all hunger and thirst from the target', 'makes the user grow some years younger', 'makes the user grow some years older', 'makes the user radiate with a damaging aura', 'gives the user strong vision and a bonus to perception', 'cures all diseases and illnesses', 'freezes the user in stasis that makes them immune to damage but they cannot move or act', 'gives the user the cure to a single riddle', 'makes the user look more ugly for a time', 'makes the user appear more attractive for a time', 'makes the user more effective and versatile with a blade', 'makes the user more effective with a bow or ranged weapon', 'gives water breathing', 'makes the user turn things to gold', 'makes the user rage with great strength', 'makes the user have bonuses against a particular type of enemy', 'lets the user divinate the future', 'heals a portion of all damage the user deals', 'lets the user become one with animals and nature around them', 'makes the user very hard to follow', 'makes the user have a better acrobatics skill', 'gives the user a bonus to climbing', 'makes the user appear completely dead to all magic', 'gives the user worst luck', 'lets the user gain control of a nearby creature, their body comatosed while they do', 'makes the user need no sleep for a time', 'lets the user fly', 'makes the user very calm and unable to harm others', 'heals a single scar or bad injury on the user such as a missing arm', 'makes the user tell the truth', 'makes the user only able to lie', 'makes the user unable to get lost and find where they need', 'turns the users hands become sharp weaponised blades', 'makes the enemies take damage as they deal it to the user', 'makes the user invisible', 'taps into wild magic making an absolutely random thing happen', 'makes the user more famous', 'makes the user immune to the toils of long travels and bad weather', 'increases the users constitution', 'lets the user know the exact time and date', 'lets the user have the ability to change somethings properties', 'turns the users skin to metal giving them many resistances', 'changes the users gender', 'changes the users race', 'makes the user say everything in song, and fey music follows them in the air', 'makes the user know very intimately about one exact thing', 'turns the user into two or three tiny versions of themselves and controls them all', 'makes anything and everything taste amazing!', 'makes the user and its gear instantly clean and as good looking as possible', 'makes the user and someone else fall in love', 'poisons the user, weakening them', 'resurrects the user if they die soon after drinking', 'turns the user to an elemental form relevant to their personality', 'turns the user into a familiar like creature similar to their personality', 'gives the user a holy connection to their god or fiendish deity', 'does what it says on the tin', 'makes the user intangible and able to phase through objects', 'gives the user skill in a particular art temporarily', 'improves all stats', 'makes the users weapons do more damage', 'makes the user feel amazing and trip out', 'creates a spectral bodyguard for a short time who obeys orders', 'lets the user speak any language but not understand it', 'stops whatever its poured on from rotting or degrading', 'makes the user terrified', 'gives the ability to see in the dark', 'lets the user track an enemy', 'cures any status effects']

  const output = {
    type: random(type)
  }

  assign(output, base)

  if (output.type === 'alchemical ingredient') {
    return {
      ...output,
      preservationMethod: random(preservationMethod),
      smallThing: random(smallThing)
    }
  }

  if (output.type === 'body part') {
    return {
      ...output,
      preservationMethod: random(preservationMethod),
      bodyPart: random(bodyPart),
      bodyPartOrigin: random(bodyPartOrigin)
    }
  }

  if (output.type === 'substance') {
    return {
      ...output,
      substanceForm: random(substanceForm),
      substanceType: random(substanceType)
    }
  }
  if (output.type === 'preserved herb') {
    return {
      ...output,
      herbPreservation: random(herbPreservation),
      herb: random(herb),
      readout: `${random(herbPreservation)} ${random(herb)}`
    }
  }

  if (output.type === 'brewing potion') {
    const temp = {
      vesselDescriptor: random(vesselDescriptor),
      vesselMaterial: random(vesselMaterial),
      vesselType: random(vesselType),
      liquidTexture: random(liquidTexture),
      liquidColour: random(liquidColour),
      liquidSecondary: random(liquidSecondary),
      potionPurpose: random(potionPurpose)
    }
    return {
      ...output,
      ...temp,
      containerDescription: `${temp.vesselDescriptor} ${temp.vesselMaterial} ${temp.vesselType}`,
      liquidDescription: `${temp.liquidTexture} ${temp.liquidColour} liquid with ${temp.liquidSecondary}`
    }
  }

  if (output.type === 'potion') {
    const potionTitleRoll = random(0, 99)

    assign(output, {
      potionContainer: random(potionContainer),
      potionLabel: random(potionLabel),
      potionStrength: random(potionStrength),
      potionSideEffect: random(potionSideEffect),
      smell: random(smell),
      taste: random(smell),
      liquidTitle: random(liquidTitle),
      liquidColour: random(liquidColour),
      liquidSecondary: random(liquidSecondary),
      liquidTexture: random(liquidTexture),
      potionTitleRoll,
      potionTitle: potionTitle[potionTitleRoll],
      potionEffect: potionEffect[potionTitleRoll]
    })

    assign(output, {
      titleReadout: `${capitalizeFirstLetter(output.liquidTitle)} of ${output.potionTitle}`,
      descriptionReadout: `The potion is in a ${output.potionContainer}, and has a label showing ${output.potionLabel}. It looks ${output.liquidColour} with ${output.liquidSecondary}. ` + `It is ${output.liquidTexture} and smells of ${output.smell} but tastes of ${output.taste}.`
    })

    const getEffectReadout = () => {
      switch (output.potionStrength) {
        case 'regular with no side effect':
          return `The potion's strength is ${output.potionStrength}, and ${output.potionEffect}.`
        case 'temporary, but strong and wears off quickly':
          return `The potion's strength is ${output.potionStrength}, and ${output.potionEffect}.`
        case 'seemingly permanent':
          return `The potion's strength is ${output.potionStrength}, and ${output.potionEffect}.`
        case 'poisonous. Almost no positive effect and is all side effect':
          return `The potion's strength is ${output.potionStrength}, and allegedly ${output.potionEffect} but has the strong side effect of ${output.potionSideEffect}.`
        default:
          return `The potion's strength is ${output.potionStrength}, and ${output.potionEffect}, with the side effect of ${output.potionSideEffect}.`
      }
    }

    assign(output, {
      effectReadout: getEffectReadout()
    })

    return output
  }

  throw new Error(`Invalid type: '${type}'.`)
}
