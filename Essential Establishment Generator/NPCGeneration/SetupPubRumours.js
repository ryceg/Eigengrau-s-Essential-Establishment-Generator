setup.createPubRumour = function() {
    var pubRumour;
    var tempRumour = Object.assign({
    origin:["a child",
            "a fat merchant",
            "a priest",
            "a sailor",
            "a soldier",
            "a magician",
            "a noble",
            "a rogue",
            "a crazy monk",
            "a drunken farmer",
            "the butcher",
            "the tailor"].random(),
            });

    switch (tempRumour.origin) {
              case "a child":
                  Object.assign(tempRumour, {
                      complication: [
                         "got drunk off his dad's grog",
                         "got washed out to sea",
                         "got stuck on a runaway horse",
                         "found an old well",
                         "disappeared for 3 days",
                         "found an old tomb",
                         "met a weird stranger",
                         "found a magic item",
                         "saw a ghost",
                         "was sleepwalking",
                         "walked off into the forest",
                         "stole a loaf of bread from the hermit"
                         ].random(),
                  });
                  break;
              case "a fat merchant":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got washed out to sea",
                      "went to an auction",
                      "went to buy out a competitor in the next town over",
                      "went to discuss trade terms in the next town over",
                      "went to find a better horse for his cart",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",
                    ].random(),
                  });
                  break;
              case "a priest":
                  Object.assign(tempRumour, {
                      complication: ["got drunk off the sacramental wine",
                      "got washed out to sea",
                      "was seen in bed with the barmaid $barmaid.name",
                      "was seen in the brothel",
                      "accidentally made a pilgrimage to the wrong temple",
                      "accidentally made a pilgrimage to the wrong god",
                      "accidentally made a sacrifice to the wrong god",
                      "accidentally blessed people with regular water instead of holy water",
                      "got stuck on a runaway horse",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "saw a ghost",
                      "was sleepwalking",
                      "walked off into the forest"].random(),
                  });
                  break;
              case "a sailor":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "got washed out to sea",
                      "got washed out to sea",
                      "got washed out to sea",
                      "got washed out to sea",
                      "went to an auction",
                      "tried to abandon his ship",
                      "tried to sneak one of the whores onboard his ship",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a soldier":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "got washed out to sea",
                      "went to an auction",
                      "accidentally stabbed a guy",
                      "accidentally insulted the lord",
                      "tried to cheat one of the whores",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a magician":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "got washed out to sea",
                      "went to an auction",
                      "tried to cast a tricky spell",
                      "tried to show off in front of the barmaid, $barmaid.name",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "tried to perform an old magic spell",
                      "tried to cast a spell way above his abilities",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a noble":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "got washed out to sea",
                      "went to an auction",
                      "was seen in the brothel",
                      "tried to buy out a merchant in the next town over",
                      "tried to buy the Lord's horse from the stablemaster behind his back",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a rogue":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "got washed out to sea",
                      "went to an auction",
                      "accidentally stabbed a guy",
                      "stabbed the wrong guy",
                      "stole something from the lord",
                      "accidentally insulted the lord",
                      "tried to cheat one of the whores",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a crazy monk":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "brewed something really strong",
                      "got washed out to sea",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "a drunken farmer":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "brewed something really strong",
                      "got washed out to sea",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "the butcher":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "was cutting up meat and found something weird",
                      "was cutting up meat and found something weird",
                      "was cutting up meat and found something weird",
                      "was cutting up a cow which came alive",
                      "got washed out to sea",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
              case "the tailor":
                  Object.assign(tempRumour, {
                      complication: ["got drunk",
                      "got drunk",
                      "got really drunk",
                      "tried to circumcize a noble while he was taking his measurements",
                      "got washed out to sea",
                      "tried to woo the barmaid, $barmaid.name",
                      "got stuck on a runaway horse",
                      "found an old well",
                      "disappeared for 3 days",
                      "found an old tomb",
                      "met a weird stranger",
                      "found a magic item",
                      "was sleepwalking",
                      "walked off into the forest",].random(),
                  });
                  break;
    }

    switch (tempRumour.complication) {
          case "got drunk":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;
          case "got really drunk":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",
                  "a really good reason to not drink so much"].random(),
              });
              break;
          case "got washed out to sea":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",
                  "a type of goblin with fins"].random(),
              });
              break;
          case "got stuck on a runaway horse":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",
                  "saddles exist for a reason"].random(),
              });
              break;
          case "found an old well":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a bucket"].random(),
              });
              break;
          case "disappeared for 3 days":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;
          case "found an old tomb":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;
          case "met a weird stranger":
              Object.assign(tempRumour, {
                  discovery: ["a new venereal disease",
                  "a cursed item",
                  "a treasure map",
                  "it was actually three midgets in a trench coat",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;
          case "found a magic item":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "it was cursed",
                  "a sleeping monster",
                  "swords are sharp",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;
          case "tried to woo the barmaid, $barmaid.name":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "swords are sharp",
                  "it was actually three midgets in a trench coat",
                  "a new venereal disease",
                  "a sleeping monster",
                  "a treasure map",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "tried to circumcize a noble while he was taking his measurements":
              Object.assign(tempRumour, {
                  discovery: [
                  "a cursed item",
                  "a sleeping monster",
                  "a treasure map",
                  "swords are sharp",
                  "swords are sharp",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "was cutting up meat and found something weird":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "a really good reason to not drink so much",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "brewed something really strong":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "a really good reason to not drink so much",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "tried to buy the Lord's horse from the stablemaster behind his back":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "swords are sharp",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",].random(),
              });
              break;


          case "tried to cheat one of the whores":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a new venereal disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "swords are sharp",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "tried to cast a tricky spell":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a really good reason to stop drinking so much",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          case "was seen in the brothel":
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a new venereal disease",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          default:
              Object.assign(tempRumour, {
                  discovery: ["a new disease",
                  "a cursed item",
                  "a sleeping monster",
                  "a sleeping monster",
                  "a treasure map",
                  "a villain thought dead, returned to life",
                  "a book of secrets",
                  "a key to a vast fortune",
                  "a supressed truth about the ruling kingdom",
                  "a door to another plane",].random(),
              });
              break;

          }

    switch (tempRumour.discovery) {
          case "a new disease":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "my bum itches!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "swords are sharp":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "there's blood everywhere!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a new venereal disease":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "there's blood everywhere!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "my bum itches!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a cursed item":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "my bum itches!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a sleeping monster":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a treasure map":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "I'm looking for a shovel!",
                    "I'm trying to get in on the action!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a villain thought dead, returned to life":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a book of secrets":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "the word on the street is that the priest was sleeping with $barmaid.name!",
                    "they found out about my hemmorhoids!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a key to a vast fortune":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "we're just looking for a lock!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a supressed truth about the ruling kingdom":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "there's blood everywhere!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          case "a door to another plane":
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "there's blood everywhere!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "my bum itches!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          default:
              Object.assign(tempRumour, {
                  result: [
                    "people are disappearing!",
                    "people are sick!",
                    "if you don't tell ten other people about this in ten days, you'll die!",
                    "the king has decreed strange new laws!",
                    "the temple has issued strange new tenets!",
                    "the sun might not come back up!",
                    "people are having bad dreams every night!",
                    "people are unable to sleep!",
                    "people are afraid to come outside!",
                  ].random(),
                });
                break;
          }



pubRumour = ["Did you hear?", "Did you hear the news?", "Did you hear about the news?", "Did you hear?"].random() + " " + tempRumour.origin.toUpperFirst() + " " + tempRumour.complication + " and discovered " + tempRumour.discovery + ", and now " + tempRumour.result;

return pubRumour;
};
