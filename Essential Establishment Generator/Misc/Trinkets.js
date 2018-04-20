setup.createTrinket = function() {

  originalowner     = ["a wizard of immense power", "a poor mother who had to sell it to feed her family", "a chronic gambler who had to make good on a bet", "a man who lost it in a game of cards", "a goblin who thought it was pretty"].random();
  value             = ["next to worthless", "barely a copper", "maybe a copper", "a copper or two", "perhaps three copper", "a meal or two", "a good night at the tavern", "a great night out at the tavern", "a round of beers", "board for a night at a tavern", "a silver, if that", "a handful of silver", "a decent bag of gold", "a sizable hunk of gold", "a considerable amount", "a treasury filled with gold", "a dragon's hoard"].random();
  material          = ["bone", "wood", "mahogany", "oak", "cedar", "crystal", "perpetually frozen ice", "glass", "iron", "lead", "leather"
 "bronze", "silver", "gold", "electrum", "platinum"].random();
  type              = ["tooth of a tiger", "rose", "doll", "key", "dagger", "fork", "rabbit's paw", "ring", "dice", "amulet", "necklace", "earring", "looking glass", "monocle", "telescope", "urn", "death mask", "mask"].random();

  return
      {
      originalowner : originalowner,
      value         : value,
      material      : material,
      type          : type
    };
};
