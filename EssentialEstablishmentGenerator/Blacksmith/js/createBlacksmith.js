
setup.createBlacksmith = function (town, smithy) {
  const blacksmith = setup.createNPC(town, {
    dndClass: 'blacksmith',
    hasClass: false,
    profession: 'blacksmith',
    idle: ['talking with a customer', 'picking $blacksmith.hisher nose', 'playing a card game by $blacksmith.himherself', 'sharpening a knife', 'stocking the forge with fresh coals', 'lugging a piece of metal to be worked on', 'wiping the sweat from $blacksmith.hisher brow', 'taking a drink of water', 'sweating profusely from exertion', 're-stocking the shop with new metalcrafts', 'hanging a new looking sword up on the wall', 'leaning back in a chair behind the counter playing with a hammer', 'unpacking a large crate that looks to be full of metal ingots of some sort', 'eyeing up the craftsmanship of a large axe', 'pouring molten metal into a cast in the far back', 'stoking the flames of the forge'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'chief owner', 'master smith', 'resident smith'].seededrandom(),
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'sizes you up, before $blacksmith.heshe nods at you', 'checks you out for just a moment before smiling at you', 'grunts in your direction when you walk in', 'eyes you up and down slowly', 'stops what $blacksmith.heshe is doing and looks your way']
  })
  return blacksmith
}
