
setup.createBlacksmith = function (town, smithy) {
  const blacksmith = setup.createNPC(town, {
    dndClass: 'blacksmith',
    hasClass: false,
    profession: 'blacksmith',
    idle: ['talking with a customer', 'picking $blacksmith.hisher nose', 'playing a card game by $blacksmith.himherself', 'sharpening a knife', 'stocking the forge with fresh coals', 'lugging a piece of metal to be worked on', 'wiping the sweat from $blacksmith.hisher brow', 'taking a drink of water', 'sweating profusely from exertion', 're-stocking the shop with new metalcrafts', 'hanging a new looking sword up on the wall', 'leaning back in a chair behind the counter playing with a hammer', 'unpacking a large crate that looks to be full of metal ingots of some sort', 'eyeing up the craftsmanship of a large <<print either($smithy.weapons)>>', 'pouring molten metal into a cast in the far back', 'stoking the flames of the forge'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'chief owner', 'master smith', 'resident smith'].seededrandom(),
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'sizes you up, before $blacksmith.heshe nods at you', 'checks you out for just a moment before smiling at you', 'grunts in your direction when you walk in', 'eyes you up and down slowly', 'stops what $blacksmith.heshe is doing and looks your way'],
    currentproject: [
      "a <<print either($smithy.weapons)>> for a lord's son.",
      "a <<print either($smithy.weapons)>> which I'm hoping to sell on the market in a couple day's time.",
      "a <<print either($smithy.weapons)>> which I'm hoping to sell on the market in a couple day's time.",
      'a mace for the priest; nothing too special, just because his old one was starting to get a bit rusty.',
      "a dagger for uh, a client which I'm not at liberty to name.",
      "a greataxe. Dunno why, just thought that it'd be fun to try and make one.",
      "a set of horseshoes for ol' Bessie. Nah, I'm just messin' with ya. I'm working on a <<print either($smithy.weapons)>>. Should be pretty fun once it's finished!",
      "a <<print either($smithy.weapons)>> for my son, he's growing up so fast- he'll be six next winter!",
      'a <<print either($smithy.weapons)>> for the captain of the guard, town.guard.captain.name.',
      'a <<print either($smithy.weapons)>> for the captain of the guard, $town.guard.captain.name.',
      "a commission by the town guard to make new <<print either($smithy.weapons)>>s for all the guardsmen. It'll probably take a damn long time.",
      'fleshing out the stock of the shop at the moment. Mostly general items like nails, horeshoes, and what not'
    ].seededrandom()
  })
  return blacksmith
}
