setup.createClass = function (npc) {

  switch (npc.dndClass) {
    case 'barbarian':
      npc.dndClassOrigin = npc.dndClassOrigin || ['My devotion to my people lifted me in battle, and I learned to control my bloodlust.', 'The spirits of my ancestors called out to me to complete a task, so I took up the way of the barbarian.', 'I lost control in battle one day, as if something else was guiding me as I slaughtered my enemies.', 'I went on a spiritual journey to find myself, and discovered the inner rage that I had could be tamed, used, and controlled.', "I was struck by lightning, but miraculously lived. Ever since that day, I've been stronger, faster, and able to push through any struggle.", 'I needed an outlet to channel my anger, otherwise I would have snapped, and killed an innocent person.'].random()
      npc.background = npc.background || ['charlatan', 'criminal', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'outlander', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a huge greataxe', 'a battleaxe', 'a greatsword', 'two handaxes', 'two warhammers'].random()
      npc.wealth = npc.wealth += (dice('2d4') * 1000)
      break
    case 'bard':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I awakened my latent bardic abilities through trial and error.', 'I was a gifted performer, and eventually attracted the attention of a legendary bard, who decided to teach me to further my talents into the realm of magic.', 'I joined a society of scholars and orators, who helped teach me how to harness my music and turn it into magic.', 'I felt a great calling to recount the tales of heros past, and bring them alive through song and stories.', 'I joined one of the great colleges to learn old lore, and did music as an elective.', 'I picked up an instrument one day, and found that I could play it perfectly.'].random()
      npc.background = npc.background || ['charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'noble', 'outlander', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 1000)
      break
    case 'cleric':
      npc.dndClassOrigin = npc.dndClassOrigin || ['My god called on me to serve the faith as a cleric, so I abandoned my previous life, and set out for the nearest temple.', "I saw the injustice and horrors of the world, and felt that I couldn't live without trying to do something about it.", "My god gave me a sign that I was needed to do something important, some time in the future. I'm still waiting for my time to serve, but when it happens, I'll be ready.", "I've always been devout, but it wasn't until I completed a pilgrimage to a sacred site that I found my true calling.", 'I used to serve in the beauracracy of the church, but found the work unrewarding. Being able to spread the message to the farthest corners of the land is much more satisfying work.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 1000)
      break
    case 'druid':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I found a place among a group of druids after I fled a catastrophe.', 'I saw too much devastation in the wilds where I used to play for days as a child, and decided to protect the wilderness.', 'I have always had an affinity with animals, so I decided to explore it, and found that I had a gift to converse with them.', 'I befriended a druid that frequented an old pub, and he convinced me that the world needed me to carry on his work as a druid.', 'Whiie l was growing up, I saw spirits all around me— entities no one else could perceive. I sought out the druids to help me understand the visions, and communicate with these beings.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'charlatan', 'folk hero', 'folk hero', 'folk hero', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a mace', 'a mace', 'a morning star', 'a club', 'a quarterstaff', 'a crossbow', 'a longbow', 'a longbow'].random()
      npc.knownLanguages = npc.knownLanguages || ['Druidic'].push()
      npc.wealth = npc.wealth += (dice('2d4') * 1000)
      break
    case 'fighter':
      npc.dndClassOrigin = npc.dndClassOrigin || [
        'I wanted to hone my combat skills, and so I joined a war college',
        'I  grew up fighting, and I refined my talents by defending myself against people who crossed me.',
        'I squired for a knight, who taught me how to fight, care for my steed, and conduct myself with honor. I decided to take up that path for myself.',
        'Monster attacks led me to believe that there was no other way for me to be able to defend my family.',
        'I joined the army, and learnt how to fight in a group as a team against a common enemy.',
        'I always had a knack for just about any weapon which I picked up.'].random()
      npc.background = npc.background || ['acolyte', 'charlatan', 'criminal', 'criminal', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'outlander', 'outlander', 'sage', 'sailor', 'sailor', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a huge greataxe', 'a battleaxe', 'a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a long sword', 'a long bow', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 1000)
      break
    case 'monk':
      npc.dndClassOrigin = npc.dndClassOrigin || [
        'I stumbled into a portal and took refuge in a strange monastery, where I learned how to defend mysel fagainst the forces of darkness.',
        'I was chosen to study at a secluded monastery, where I learnt the fundamental techniques to set me on the path to eventual mastery.',
        'I sought out the instruction of a monk to gain a greater understanding of my world, and my purpose in it.',
        'I was overwhelmed with grief when I lost my sister, and found solace in meditation with the monks.',
        'I always felt a power within me, and sought out an order of monks to help me understand it and harness that energy for good.',
        'I was wild, and undisciplined as a child, until I realised the error of my ways. I sought out the monks to atone for my sins.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['fists', 'fists', 'fists', 'a quarterstaff', 'a quarterstaff'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 100)
      break
    case 'paladin':
      npc.dndClassOrigin = npc.dndClassOrigin || ['A magical being appeared before me, and called on me to undertake a holy quest.', 'One of my ancestors left a holy quest unfulfilled, so I seek to rectify this.', 'The world is a dark and terrible place. I seek to be a beacon of hope for those that may not have the courage to go on otherwise.', "I served as a paladin's squire, and admired his honesty and conduct. I decided to follow in his footsteps, and champion the good and decency that he represented.", 'Evil must be opposed on all fronts, and I decided to be the first line of defense against such scum.', 'Becoming a paladin was a natural consequence of my unwavering faith. I saw the need for the faith to be protected with sword and shield.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'soldier', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin'].random()
      npc.weapon = npc.weapon || ['a greatsword', 'a long sword', 'a long sword', 'a long sword', 'a short sword', 'a war pick', 'a falcheon', 'a halberdier'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 1000)
      break
    case 'rogue':
      npc.dndClassOrigin = npc.dndClassOrigin || [
        "I've always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.",
        'A thief wronged me, so I focused my training on mastering those skills to better combat foes of that sort.',
        "Know thy enemy. I aim to learn everything there is to know about the Thieves' guild, and then I'll bring it all tumbling down.",
        'An experienced rogue saw something in me, and taught me several useful tricks.',
        'I took up with a group of ruffians, that taught me how to get what I want without direct confrontation.',
        "I'm a sucker for a shiny bauble or bag of coins, as long as I can get it without risking life and limb.",
        "I just love the thrill of the heist. There's nothing that makes me feel more alive than taking something from right under someone's nose."
      ].random()
      npc.background = npc.background || ['charlatan', 'charlatan', 'charlatan', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'criminal', 'folk hero', 'folk hero', 'guild artisan', 'guild artisan', 'hermit', 'noble', 'noble', 'outlander', 'sailor', 'soldier', 'urchin', 'urchin', 'urchin', 'urchin', 'urchin'].random()
      npc.weapon = npc.weapon || ['a long sword', 'a long sword', 'two daggers', 'two daggers', 'two daggers', 'two daggers', 'a crossbow', 'a crossbow', 'a crossbow'].random()
      npc.wealth = npc.wealth += (dice('4d4') * 1000)
      break
    case 'ranger':
      npc.dndClassOrigin = npc.dndClassOrigin || [
        'I always had a way with animals, and was able to calm them with a gentle touch and soothing word.',
        'I found purpose while I was honing my hunting skills by bringing dangerous beasts down from the outskirts of civilisation.',
        'I suffer from wanderlust, so I found the life of the ranger to be freeing; to me, wandering without a fixed home is freeing.',
        'I met a grizzled ranger who taught me the secrets of woodcraft and surviving in the wild.',
        'I served in the army, and led my division by scouting ahead, blazing trails and tracking our enemies.'
      ].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'folk hero', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'outlander', 'outlander', 'outlander', 'outlander', 'sage', 'sailor', 'soldier', 'soldier', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'a long bow', 'a long bow', 'two daggers'].random()
      npc.wealth = npc.wealth += (dice('5d4') * 1000)
      break
    case 'sorcerer':
      npc.dndClassOrigin = npc.dndClassOrigin || ['When I was born, all of the milk turned to cheese. My family is convinced that it was a harbinger for my powers.', 'I suffered a terrible strain, which brought forth my dormant powers. I have fought to control it ever since.', "My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn't until I started displaying strange talents that the full truth of my heritage came out.", 'A monster attacked one of my friends when I was younger, and I lashed out in a burst of energy, saving my friend, but unlocking the torrent of power which I still struggle to control.', "After a magical conflagration, I realised that while I was unharmed, I had been fundamentally changed by the outburst of magical energy. I'm only just beginning to understand what has happened to me."].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'charlatan', 'charlatan', 'charlatan', 'criminal', 'entertainer', 'entertainer', 'folk hero', 'folk hero', 'guild artisan', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a long bow', 'two daggers', 'a dagger', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('3d4') * 1000)
      break
    case 'warlock':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.', 'While wandering through a forbidden place, I came across a magical entity, which offered to form a pact with me.', 'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.', 'During a crisis, I prayed for any being to help me. The creature that answered was my patron.', 'My future patron visited me in my dreams, and offered great power in exchange for my servie.', 'One of my ancestors had a pact with my patron, which bound me to the same fate.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('4d4') * 1000)
      break
    case 'wizard':
      npc.dndClassOrigin = npc.dndClassOrigin || ['An old wizard chose me from among several candidates to serve an apprenticeship.', 'When I became lost in a magical forest, a hedge wizard took me in, and taught me the fundamentals of magic so that I could navigate my way out.', 'I grew up listening to tales of great wizards that could change reality with a flick of their hand. I knew from a young age that I wanted to hold that sort of power.', 'One of my relatives was an accomplished wizard in their own right, and they recognised the same potential in me that their mentor saw in them.', 'While exploring the restricted section of a library, I came across a magical tome, which sparked the interest in me.', 'I was a prodigy that demonstrated mastery of the arcane arts at a very young age. When I became old enough to set out on my own, I did so to continue my studies and expand my powers.'].random()
      npc.background = npc.background || ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'hermit', 'noble', 'noble', 'noble', 'outlander', 'sage', 'sage', 'sage', 'sage', 'sage', 'sailor', 'soldier', 'urchin'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a longsword', 'a longsword', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('4d4') * 1000)
      break
    case 'bartender':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I came across $tavern.name as a youngster, and spent many a night here drinking with my buddies. When the old owner died, it went to auction, and I tried to kep the dream alive by buying it. One by one all my friends grew out of it, or moved away.', "Before I ran $tavern.name, it was my dad's. I kept the family business going to support him in his old age.", "When I first got to $town.name, it was practically a ghost town. We built $tavern.name as a social hub for the folk, and it's now what it is today.", 'The old owner was a problem gambler, and when they auctioned off $tavern.name, I jumped at it.', "The old owner thought that $tavern.name wasn't profitable. In the first six months of my stewardship, I turned it around, and have made it the best bloody pub in $town.name!", "Running $tavern.name was the family business, and it was always going to be my lot in life. I'm not angry or disappointed or anything, but I would like to see the world one day, and it stops me from doing that.", 'I was just a kitchen hand when this place started. The owner and I worked through thick and thin, and when his daughter died, he had nobody to leave it to, except for me.', "My parents bought this place as an investment. I don't know what they were thinking- when have you ever heard of a pub being profitable?"].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('3d4') * 1000)
      break
    case 'blacksmith':
      npc.dndClassOrigin = npc.dndClassOrigin || ['I was an apprentice in $smithy.name, and took up the title when my old master passed on.', 'I was a tinkerer, and just drifted from town to town doing odd jobs for people until I came to $town.name. I fell in love with the place, and then settled here.', "I followed my love here, set up shop, and now we're happily married, with a steady job and a roof over our heads.", "My father was a blacksmith before me, and then I took up the trade to make him proud. Or at least, I hope I've made him proud. He passed before I opened up shop.", "I was an apprentice, and my old master bitterly despised me because my father married his love. I worked so hard to perfect my craft to impress him thinking that the issue was with me, and then the bastard had a heart attack. Left everything to her. What's my mum gonna do with a smithy?!", 'I spent a lot of time in the mountains with the Dwarves, and they taught me a thing or two while I was there.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a longsword', 'a longsword', 'a longsword', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('2d4') * 1000)
      break
    case 'commoner':
      npc.dndClassOrigin = npc.dndClassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", 'I had a bad string of bets which left me with no other choice than to skip town.', "I was born into a lowly family, and that's where I'll likely stay.", 'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.', 'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.', 'I grew up in a loving household, but all the love in the world could not pay the debts which we had.', 'I was one of seven children, and when I was old enough to work, my parents put me to it.', 'I was one of eight children, and had to work from a young age to support my family.', 'I was the eldest of four children, but when my father died, I had to leave school and work to support my family.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('2d4') * 100)
      break
    default:
      npc.dndClassOrigin = npc.dndClassOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", 'I had a bad string of bets which left me with no other choice than to skip town.', "I was born into a lowly family, and that's where I'll likely stay.", 'I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.', 'I was found guilty of a crime that I did not commit, and was sentenced to serfdom.', 'I grew up in a loving household, but all the love in the world could not pay the debts which we had.', 'I was one of seven children, and when I was old enough to work, my parents put me to it.', 'I was one of eight children, and had to work from a young age to support my family.', 'I was the eldest of four children, but when my father died, I had to leave school and work to support my family.'].random()
      npc.background = npc.background || ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble', 'noble'].random()
      npc.weapon = npc.weapon || ['a crossbow', 'a quarterstaff', 'a quarterstaff', 'a longsword', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger', 'a dagger'].random()
      npc.wealth = npc.wealth += (dice('1d4') * 1000)
      return npc
  }
}
