setup.getNPCProfession = function(base) {
  var townpop = State.variables.town.population;
  var roll    = (State.variables.town.population / profession.sv); /* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
  var rollPercentage = (roll *= 100);
  var rollRandom = Math.random(1, 100);
  var professionCount;
  var creationInstances;



  if (roll < 1){ /* if the population cannot support 1, then it's converted into a percentage chance that there's one of them */

        if (rollRandom > rollPercentage){
            professionCount = 1;
          else{
            professionCount = 0;
          }
        }
  }
  else{
    professionCount = Math.trunc(roll);
  }

  if (professionCount >= 1){
      if (State.variables.NPCArray.profession.count < professionCount){
          creationInstances = (professionCount -= State.variables.NPCArray.profession.count);
          for (creationInstances = 0; creationInstances > 0; creationInstances--) {
            State.setVar(profession, setup.createNPC({profession: profession}));
          }
      }
      else if (State.variables.NPCArray.profession.count > professionCount){
        while (State.variables.NPCArray.indexOf(profession) !== professionCount) {
              State.variables.NPCArray.splice(State.variables.NPCArray.indexOf(profession), 1); /* Using splice removes the item and reindexes the array. This might cause problems further down the line. */
        }
      }
  }
};
