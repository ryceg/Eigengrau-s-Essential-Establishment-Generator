setup.createAlchemistBrew = function() {

  var adjective     = ["delicate", "tiny", "heavy-bottomed", "thick", "grimy", "polished", "shiny", "blackened", "well-worn", "round-bottomed", "quite large", "comically large"].random();
  var material      = ["ceramic", "iron", "copper", "steel", "bronze", "glass", "glass"].random();
  var vessel        = ["tea kettle", "cauldron", "vat", "flask with an oddly shaped neck", "flask", "pot", "saucepan"].random();
  var ingredient    = ["eye of newt", "toe of frog", "wool of bat", "tongue of dog", "adder's fork", "blind-worm's sting", "lizard's leg", "howlet's wing", "monkey's paw", "pint of blood", "pound of flesh", "cup of mud", "beak of duck", "housecat's tail", "glob of mold", "rusty nail", "garlic bulb", "cob of corn", "stirge's foot"].random();
  var purpose       = ["love potion", "fertility tonic", "magical cure-all", "terrible poison", "component for a summoning ritual", "component for a necromantic ritual", "component for a polymorphing hex", "component for a beguiling charm", "potent acid solvent", "potentially explosive substance", "substitute for alcohol", "substitute for drugs", "substitute for food", "substitute for animal feed"].random();
  var appearance    = ["clear", "blue", "green", "red", "pale green", "pink", "light blue", "white", "black", "dark grey", "light grey", "yellow", "orange", "gold", "orange", "bronze", "metallic", "purple", "brown", "dark red"].random();
  var appearance2   = ["flecks of colour", "swirls of colour", "fizzing bubbles", "bubbles suspended in it", "some kind of bone floating in it", "leaves and flowers in it", "two separating liquids", "a bright glow", "a soft glow", "stripes of colour", "translucency", "a cloudy murkiness", "blood within it", "dirt floating in it", "chunks of metal in it", "some type of gore from a slain creature", "steam coming from it", "a face in the liquid", "constantly moving and shifting liquid"].random();
	var texture       = ["a thick and sludgy", "a thin and watery", "an airy and bubbly", "a slimey", "an almost solid", "an oily", "a chunky", "a chunky", "a soup-like", "an almost gaseous"].random();

  var containerDescription = "a " + adjective + " " + material + " " + vessel;
  var liquidDescription = texture + " " + appearance + " liquid with " + appearance2;

  return {
      adjective     : adjective,
      material      : material,
      vessel        : vessel,
      ingredient    : ingredient,
      purpose       : purpose,
      appearance    : appearance,
      appearance2   : appearance2,
      texture       : texture,
      containerDescription : containerDescription,
      liquidDescription : liquidDescription
    };
};
