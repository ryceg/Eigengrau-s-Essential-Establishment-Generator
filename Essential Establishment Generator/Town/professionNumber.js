setup.getNPCProfessionNumber = function(profession) {
/* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
  var V = State.variables;
  var roll    = (V.town.population / profession.sv);
  var professionCount = (roll >= 1 ? Math.trunc(roll) : Number(random(1, 100) <= roll * 100));

console.log(professionCount);
};
