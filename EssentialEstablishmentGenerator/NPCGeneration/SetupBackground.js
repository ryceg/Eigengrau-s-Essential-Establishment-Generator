setupBackground = function(npc) {
  switch (npc.background) {
      case "acolyte":
          npc.knownLanguages = npc.knownLanguages + availableLanguages.push(availableLanguages.random());
          npc.backgroundOrigin = npc.backgroundOrigin || ["I ran away from home at a young age, and found refuge in a temple.", "My family gave me to a temple, since they were unable to care for me.", "I grew up in a household with strong religious convictions. Entering the service of the Gods seemed to be the natural progression.", "An impassioned sermon struck a chord deep in me, and compelled me to serve the faith.", "I followed a childhood friend into religious service because we made a pact to never be apart.", "I followed a lover into religious service, but tragically, they were killed. The faith was the only thing that stopped me from ending my own life."].random();
          npc.bond = npc.bond || ["I would die to recover an ancient artifact of my faith that was lost long ago.",
              "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
              "I owe me life to the priest who took me in when my parents died.",
              "Everything I do is for the common people.",
              "I will do anything to protect the temple where I served.",
              "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "charlatan":
          npc.backgroundOrigin = npc.backgroundOrigin || ["As a youngster, I was left to my own devices. My knack for manipulating people helped me survive.", "I learned early on that people are easy to exploit, and are gullible and too trusting.", "I often got into trouble as a youngster, but talked my way out of it.", "I took up cheating as a hobby, then was sort of adopted by a local scam artist. It just sort of became a way of life for me.", "After a charlatan fleeced my family, I decided to learn all the tricks I could so I would never fall for another scam."].random();
          npc.bond = npc.bond || ["I fleeced the wrong person, a lord called <<print $name.man.pluck()>>, and must work to ensure that he never crosses paths with me or those I care about.",
              "I owe everything to my mentor <<print $name.man.pluck()>>--a horrible person who's probably rotting in jail somewhere.",
              "Somewhere out there I have a child, litte <<print $name.man.pluck()>>, who doesn't know me. I'm going to try and make the world better for him.",
              "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
              "A powerful person, Lord <<print $name.man.pluck()>>, killed someone I love. Some day soon, I'll have my revenge.",
              "I swindled and ruined a person who didn't deserve it, and now I seek to atone for my misdeeds but might never be able to forgive myself."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "criminal":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I resented authority in my younger days, and I saw a life of crime as a way to get back at those that I thought had wronged me.", "I resented authority as a youngster, and saw a life of crime as the best way to fight back against tyranny and oppression.", "I fell in with a gang of reprobates and ne’er-do- wells, and I learned my specialty from them.", "A relative taught me the trade to prepare me for the family trade.", "I left home at a relatively young age, and found refuge in a thieves' guild.", "I was always bored, so I started committing minor crimes to pass the time. The adrenaline rush was addictive, and soon I was going on to bigger and better heists."].random();
          npc.bond = npc.bond || ["I'm trying to pay off an old debt I owe to a generous benefactor.",
              "My ill-gotten gains go to support my family.",
              "Something important was taken from me, and I aim to steal it back.",
              "I will become the greatest thief that ever lived.",
              "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
              "Someone I loved died because of a mistake I made. That will never happen again."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "entertainer":
          npc.backgroundOrigin = npc.backgroundOrigin || ["Members of my family made ends meet by performing, so it was fitting for me to follow their example", "I always had a keen insight into what made other people laugh and cry. A life as an entertainer seemed to be the natural continuation of that.", "I saw a bard perform once, and it inspired me so much that I decided to follow in his footsteps.", "I ran away from home to join a minstrel troupe.", "I earned extra coin by performing on the streets as a child, and I never seemed to stop.", "A traveling entertainer took me in to teach me the trade, and I learned to love it."].random();
          npc.bond = npc.bond || ["My instrument is my most treasured possession, and it reminds me of someone I love.",
              "Someone stole my precious instrument, and someday I'll get it back.",
              "I want to be famous, whatever it takes.",
              "I idolize a hero of the old tales and measure my deeds against that person's.",
              "I will do anything to prove myself superior to my hated rival.",
              "I would do anything for the other members of my old party."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "folk hero":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I learned what was right and wrong from my family.", "I was always enamored by tales of heroes and wished I could be something more than ordinary.", "I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.", "One of my relatives was an adventurer, and l was inspired by that person’s courage.", "A mad old hermit spoke a prophecy when l was born, saying that I would accomplish great things.", "I have always stood up for those who are weaker than me."].random();
          npc.bond = npc.bond || ["I have a family, but I have no idea where they are.  One day, I hope to see them again.",
              "I worked the land, I love the land, and I will protect the land.",
              "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
              "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
              "I protect those who cannot protect themselves.",
              "I wish my childhood sweetheart had come with me to pursue my destiny."].random();
              npc.wealth = npc.wealth += 1000;
          break;
      case "guild artisan":
          npc.backgroundOrigin = npc.backgroundOrigin || ["l was apprenticed to a master who taught me the guild’s business.", "I helped a guild artisan keep a secret, and in return, I was taken on as an apprentice.", "One of my relatives who belonged to the guild made a place for me.", "I was always good with my hands, so I figured that I would make something of it.", "I wanted to get away from my home situation and start a new life, so I learned a trade in secret and ran away one night.", "I learned the essentials from an old mentor, but I had to join a guild to finish my learning once he passed away."].random();
          npc.bond = npc.bond || ["The workshop where I learned my trade is the most important place in the world to me.",
              "I created a great work for someone, and then found them unworthy to receive it; I'm still looking for someone worthy.",
              "I owe my guild a great debt for forging me into the person I am today.",
              "I pursue wealth to secure someone's love.",
              "One day I will return to my guild and prove that I am the greatest artisan of them all.",
              "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."].random();
          npc.wealth = npc.wealth += 2500;
          break;
      case "hermit":
          npc.backgroundOrigin = npc.backgroundOrigin || ["My enemy ruined my reputation, and I had to flee to a life of solitude to escape further disparagement.", "I am comfortable with isolation, as I seek inner peace.", "I find myself in love with nature, and prefer the company of the animals and plants to that of people.", "I never liked the people that I grew up with, so it was easy for me to leave it all behind and strike out a new life, alone.", "I felt compelled to forsake my past, and did so with great reluctane. Even now, I sometimes regret my decisions."].random();
          npc.bond = npc.bond || ["Nothing is more important than the other members of my hermitage, order, or association.",
              "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
              "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
              "I entered seclusion because I loved someone I could not have.",
              "Should my discovery come to light, it could bring ruin to the world.",
              "My isolation gave me great insight into a great evil that only I can destroy."].random();
          npc.wealth = npc.wealth += 500;
          break;
      case "noble":
          npc.knownLanguages = npc.knownLanguages + availableLanguages.push(availableLanguages.random());
          npc.backgroundOrigin = npc.backgroundOrigin || ["My family has been disgraced, and I intend to restore our once pristine reputation.", "I come from an old and storied family, and it fell to me to preserve the family name.", "My family recently came by its title, and that elevation thrust us into a new and strange world.", "My family has a title, but none of my ancestors have done anything of note.", "My family is filled with remarkable people. I hope to live up to their reputation.", "I hope to increase my family's power and influence."].random();
          npc.bond = npc.bond || ["I will face any challenge to win the approval of my family.",
              "My house's alliance with another noble family must be sustained at all costs.",
              "Nothing is more important that the other members of my family.",
              "I am in love with the heir of a family that my family despises.",
              "My loyalty to my sovereign is unwavering.",
              "The common folk must see me as a hero of the people."].random();
          npc.wealth = npc.wealth += 2500;
          break;
      case "outlander":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.", "From a young age, I couldn't abide the stink of cities, and sought out the wilderness for respite from the chaos of people.", "I came to understand the darkness that lurks in the wilds, and l vowed to combat it.", "My people live on the edges of civilisation, and I learned the methods of survival from my family.", "After a personal tragedy, I retreated to the wilderness to be alone with my thoughts.", "My family moved away from civilisation, and I learnt to adapt with the harsh environment."].random();
          npc.bond = npc.bond || ["My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
              "An injury to the unspoiled wilderness of my home is an injury to me.",
              "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
              "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
              "I suffer awful visions of a coming disaster and will do anything to prevent it.",
              "It is my duty to provide children to sustain my tribe."].random();
          npc.wealth = npc.wealth += 1000;
          break;
      case "sage":
          npc.knownLanguages = npc.knownLanguages + availableLanguages.push(availableLanguages.random());
          npc.backgroundOrigin = npc.backgroundOrigin || ["I was naturally curious, so I packed up and went to a university to learn more about the world.", "My mentor’s teachings opened my mind to new possibilities in that field of study.", "I was always an avid reader, and became a sage to learn more from the thousands of books that I tended to.", "I discovered an old library and pored over the texts I found there. That experience awakened a hunger in me for knowledge that I still seek.", "I impressed a traveling wizard, who told me that I was squandering my talents and that I should seek out an education to take advantage of my gifts.", "My father gave me a basic education which whetted my appetite for more knowledge, and I left home to build on what I knew."].random();
          npc.bond = npc.bond || ["It is my duty to protect my students.",
              "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
              "I work to preserve a library, university, scriptorium, or monastery.",
              "My life's work is a series of tomes related to a specific field of lore.",
              "I've been searching my whole life for the answer to a certain question.",
              "I sold my soul for knowledge; I hope to do great deeds and win it back."].random();
          npc.wealth = npc.wealth += 1000;
          break;
      case "sailor":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I was press-ganged by pirates and forced to serve as a deck-hand on their ship until I could escape from their clutches.", "I wanted to see the world, so I signed on as a deck- hand for a merchant ship.", "One of my relatives was a sailor, and took me to sea when I was young, which inspired a life-long love of the oceans and the water.", "I needed to escape from town quickly, so I stowed away on a ship. They found me out, and force me to work as a deck-hand as payment for my passage.", "Reavers attacked my village, and I found refuge in a ship.", "There were few prospects where I was living, so I hopped on board a boat, to seek my fortunes elsewhere."].random();
          npc.bond = npc.bond || ["I'm loyal to my captain first, everything else second.",
              "The ship is most important--crewmates and captains come and go.",
              "I'll always remember my first ship.",
              "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
              "I was cheated of my fair share of the profits, and I want to get my due.",
              "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "soldier":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I wanted fame and fortune, so I signed up to the militia to prove my mettle. I don't think I knew what I was doing, but my determination carried me through my contract, and I never stopped.", "I wanted to protect my village from monsters, so I learnt swordcraft and how to fight. Then I learnt that you could earn coin for it, too.", "I was forced to enlist in the local militia to fight for my lord. Many of my friends are dead because of him.", "Invaders attacked my village, and I vowed to never let my family be unprotected again, so I picked up the sword.", "I was always playing with a sword as a kid, and it wasn't until a visiting adventurer sparred with me for fun that I realised that I had a real talent."].random();
          npc.bond = npc.bond || ["I would lay down my life for the people I served with.",
              "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
              "My honor is my life.",
              "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
              "Those who fight beside me are those worth dying for.",
              "I fight for those who cannot fight for themselves."].random();
          npc.wealth = npc.wealth += 1000;
          break;
      case "urchin":
          npc.backgroundOrigin = npc.backgroundOrigin || ["My parents died, leaving nobody to look after me, so I took care of myself.", "I had to escape my homelife. I lived off crumbs and scraps, but it was better than the alternative.", "Raiders attacked my village when I was a child, leaving me the only survivor. I had to walk for three days to the next town over, and begged to survive.", "My family was swindled, and we lost everything we had. I had to beg on the streets to look after my family.", "A thief took me in, and in exchange for food and shelter, I would keep an eye on the streets while he pulled off heists."].random();
          npc.bond = npc.bond || ["My town or city is my home, and I'll fight to defend it.",
              "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
              "I owe my survival to another urchin who taught me to live on the streets.",
              "I owe a debt I can never repay to the person who took pity on me.",
              "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
              "No one else is going to have to endure the hardships I've been through."].random();
          npc.wealth = npc.wealth += 1500;
          break;
      case "commoner":
          npc.backgroundOrigin = npc.backgroundOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
          npc.bond = npc.bond || ["I am trying to pay off a debt that I inherited from my father.",
              "I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.",
              "I was a nobleman once, but made the wrong man an enemy.",
              "I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.",
              "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
              "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
              "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
              "I live for the sea; nothing gives me more pleasure than fishing off my boat.",
              "My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.",
              "The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.",
              "I love the quiet life. Nothing disturbs me more than a disturbance of the peace.",
              "My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.",
              "I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.",
              "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
              "My father was a drunkard, a gambler, and an abusive man. I will break the cycle.",
              "I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.",
              "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
              "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
              "My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.",
              "I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.",
              "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
              "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
              "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
              "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
              "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
              "I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.",
              "I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.",
              "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
              "I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.",
              "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
              "I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.",
              "I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.",
              "I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!",
              ].random();
          npc.wealth = npc.wealth += 500;
          break;
      default:
          npc.backgroundOrigin = npc.backgroundOrigin || ["I was born into poverty. I've slowly worked my way to where I am today.", "I had a bad string of bets which left me with no other choice than to skip town.", "I was born into a lowly family, and that's where I'll likely stay.", "I was a soldier in the army, with a lot of potential. But then, I made a tactical mistake, which led to my dismissal.", "I was found guilty of a crime that I did not commit, and was sentenced to serfdom.", "I grew up in a loving household, but all the love in the world could not pay the debts which we had.", "I was one of seven children, and when I was old enough to work, my parents put me to it.", "I was one of eight children, and had to work from a young age to support my family.", "I was the eldest of four children, but when my father died, I had to leave school and work to support my family."].random();
          npc.bond = npc.bond || ["I am trying to pay off a debt that I inherited from my father.",
              "I was swindled out of a large inheritance, and had to go into hiding to keep my family safe.",
              "I was a nobleman once, but made the wrong man an enemy.",
              "I had to sell a magical heirloom to pay off a debt. Now I want to buy it back.",
              "When wandering through a forest, I found a portal to another realm. When I took others to it, it had disappeared. One day I'll find it again.",
              "I followed my beloved here, and we made a life together, until raiders took them in the night. One day, I'll have my revenge.",
              "A witch-doctor had claimed to be able to cure my baby. The bastard had lied, and he died at just six weeks. I'll find him one day, and make him wish he had never been born.",
              "I live for the sea; nothing gives me more pleasure than fishing off my boat.",
              "My home was a simple one, but it had a certain charm about it. An arsonist burnt it down, and I intend to catch them.",
              "The lord that took my daughter as a guarantee for my debt never intended to return her. I intend to make him.",
              "I love the quiet life. Nothing disturbs me more than a disturbance of the peace.",
              "My friends are my world. If my life consists of working for five days, then going to the tavern with my buddies, I will be content.",
              "I know my lot in life; feudalism dictates that one should serve the other. I disagree, and will fight to my dying breath to change the system.",
              "I can't change the past, but I can change my future. I'll work harder and better to provide a better life for my children.",
              "My father was a drunkard, a gambler, and an abusive man. I will break the cycle.",
              "I want to perfect my craft. Nothing gives me more satisfaction than someone praising my work.",
              "When my mother died, I found a list of men in her possessions. One of them is my father. I'll find him.",
              "When I was young, my parents died, and the church took me in. I'll spread the good word, and the work that they do.",
              "My father taught me how to read. All I want to do in life is to further my knowledge on how the world works.",
              "I never learnt how to read. One day, I will be able to tell my son what the words on parchment mean.",
              "I have a tendency to gamble away my earnings. This is the third town I've moved to to escape debtors.",
              "My livelihood depended on a horse, which an adventurer took off with. I'll make him pay.",
              "I used to fear anyone who didn't look like me until some adventurers from distant lands saved my life. Now I want to see the whole world and the planes beyond.",
              "My lord raised the taxes to absurd levels so he could conscript people as punishment. I broke into my lord's manor one night, took a string of pearls, and sold it. I'll never forget that thrill.",
              "I have a knack for magic but my parents couldn't afford a tutor. I want to become the mage I knew I could be.",
              "I am the fifth child and will not inherit anything. I need to find somewhere I can settle down.",
              "I was a farmer, got conscripted, went off to war, and came back broken. I want my grandchildren to have peaceful lives.",
              "I got really drunk, fell asleep in a box that got loaded on a boat, and wound up in a big city I've never heard of. My village is so small and secluded I don't even know what country it's in! How do I get home?",
              "I was the cook for a band of thieves who lived in a forest and stole from the rich to give to the poor. They all got arrested. I need another job I guess.",
              "I was an ordinary maid in a vampire's castle. Some adventurers staked my former boss. I have to readjust to living with the living.",
              "I was the village priest but lost my church when a charismatic preacher moved in and converted all my worshipers. I need a sign from heaven to restore my faith.",
              "I love haggling, meeting new folks, and helping people find what they need. My dream is to build the finest tavern and shop.",
              "I was petrified 1000 years ago by a medusa while foraging for mushrooms. A wizard found and cured me but left without explaining anything. I must readjust and relearn everything!",
              ].random();
    return npc;
  }
};
