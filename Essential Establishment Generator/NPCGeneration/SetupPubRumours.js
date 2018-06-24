// /* setup.createPubRumour = function(base) {
//     var pubRumour = Object.assign({
//     origin:["a child",
//             "a fat merchant",
//             "a priest",
//             "a sailor",
//             "a soldier",
//             "a magician",
//             "a noble",
//             "a rogue",
//             "a crazy monk",
//             "a drunken farmer",
//             "the butcher",
//             "the tailor"].random(),
//             };
//
//     switch (rumour.origin) {
//               case "a child":
//                   Object.assign(rumour, {
//                       complication: [
//                          "got drunk off his dad's grog",
//                          "got washed out to sea",
//                          "got stuck on a runaway horse",
//                          "found an old well",
//                          "disappeared for 3 days",
//                          "found an old tomb",
//                          "met a weird stranger",
//                          "found a magic item",
//                          "saw a ghost",
//                          "was sleepwalking",
//                          "walked off into the forest",
//                          "stole a loaf of bread from the hermit"
//                          ].random(),
//                   });
//                   break;
//               case "a fat merchant":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "went to buy out a competitor in the next town over",
//                       "went to discuss trade terms in the next town over",
//                       "went to find a better horse for his cart",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",
//                     ].random(),
//                   });
//                   break;
//               case "a priest":
//                   Object.assign(rumour, {
//                       complication: ["got drunk off the sacramental wine",
//                       "got washed out to sea",
//                       "was seen in bed with the barmaid $barmaid.name",
//                       "was seen in the brothel",
//                       "accidentally made a pilgrimage to the wrong temple",
//                       "accidentally made a pilgrimage to the wrong god",
//                       "accidentally made a sacrifice to the wrong god",
//                       "accidentally bless people with regular water instead of holy water",
//                       "got stuck on a runaway horse",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "saw a ghost",
//                       "was sleepwalking",
//                       "walked off into the forest"].random(),
//                   });
//                   break;
//               case "a sailor":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "got washed out to sea",
//                       "got washed out to sea",
//                       "got washed out to sea",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "tried to abandon his ship",
//                       "tried to sneak one of the whores onboard his ship",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a soldier":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "accidentally stabbed a guy",
//                       "accidentally insulted the lord"
//                       "tried to cheat one of the whores",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a magician":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "tried to cast a tricky spell",
//                       "tried to show off in front of the barmaid, $barmaid.name",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "tried to perform an old magic spell",
//                       "tried to cast a spell way above his abilities",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a noble":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "tried to buy out a merchant in the next town over",
//                       "tried to buy the Lord's horse from the stablemaster behind his back",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a rogue":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "got washed out to sea",
//                       "went to an auction",
//                       "accidentally stabbed a guy",
//                       "stabbed the wrong guy",
//                       "stole something from the lord",
//                       "stole something from someone",
//                       "accidentally insulted the lord",
//                       "tried to cheat one of the whores",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a crazy monk":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "brewed something really strong",
//                       "got washed out to sea",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "a drunken farmer":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "brewed something really strong",
//                       "got washed out to sea",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "the butcher":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "was cutting up meat and found something weird",
//                       "was cutting up meat and found something weird",
//                       "was cutting up meat and found something weird",
//                       "was cutting up a cow which came alive",
//                       "got washed out to sea",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//                   });
//                   break;
//               case "the tailor":
//                   Object.assign(rumour, {
//                       complication: ["got drunk",
//                       "got drunk",
//                       "got really drunk",
//                       "tried to circumcize a noble while he was taking his measurements",
//                       "got washed out to sea",
//                       "tried to woo the barmaid, $barmaid.name",
//                       "got stuck on a runaway horse",
//                       "found an old well",
//                       "disappeared for 3 days",
//                       "found an old tomb",
//                       "met a weird stranger",
//                       "found a magic item",
//                       "was sleepwalking",
//                       "walked off into the forest",].random(),
//
//
//                   });
//                   break;
//     }
//
//     switch (rumour.origin) {
//           case "got drunk":
//           case "got washed out to sea":
//           case "got stuck on a runaway horse":
//           case "found an old well":
//           case "disappeared for 3 days":
//           case "found an old tomb":
//           case "met a weird stranger":
//           case "found a magic item":
//           case "were sleepwalking":
//           case "walked off into the forest":
//           }
//
//     switch (rumour.discovery) {
//           case "a new disease":
//           case "a cursed item":
//           case "a sleeping monster":
//           case "a treasure map":
//           case "a villain thought dead, returned to life":
//           case "a book of secrets":
//           case "a key to a vast fortune":
//           case "a supressed truth about the ruling kingdom":
//           case "a door to another plane":
//           }
//
//     switch (rumour.result) {
//           case "people are disappearing!":
//           case "people are sick!":
//           case "the king has decreed strange new laws!":
//           case "the temple has issued strange new tenets!":
//           case "the sun might not come back up!":
//           case "the moon might fracture!":
//           case "the world might be invaded!":
//           case "people are having bad dreams every night!":
//           case "people are unable to sleep!":
//           case "people are afraid to come outside!",
//           }
//
// }, base);
//
//
// }
// */
