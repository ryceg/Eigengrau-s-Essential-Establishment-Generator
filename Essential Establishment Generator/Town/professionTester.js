setup.getNPCProfession = function(profession) { // I'm not really sure how
  var townpop = State.variables.town.population; // define the current town population
  var roll    = (State.variables.town.population / profession.sv); /* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
  var rollPercentage = (roll *= 100);
  var rollRandom = Math.random(1, 100);
  var professionCount;
  var creationInstances;

  if (roll > 1){ /* if the population cannot support 1, then it's converted into a percentage chance that there's one of them */
      professionCount = Math.trunc(roll);
    }
    else{
      if (rollRandom > rollPercentage){
            professionCount = 1;
        } else{
            professionCount = 0;
        }
      }
  };

  if (professionCount >= 1){ // If there's at least one person
      if (State.variables.NPCArray.profession.count < professionCount){ // Test to see if the number of people that match that profession in the indexed array is less than the number that should be created
          creationInstances = (professionCount -= State.variables.NPCArray.profession.count); // if there are less people, define the deficit
          for (creationInstances = 0; creationInstances > 0; creationInstances--) { // and use that deficit in a for loop to create NPCs
            State.setVar(profession, setup.createNPC({profession: profession})); // Using the setup.createNPC function, with the profession. I don't know if I'm going to run into issues with State.setVar
          }
      }
      else if (State.variables.NPCArray.profession.count > professionCount){ // if there's more than there should be
        while (State.variables.NPCArray.indexOf(profession) !== professionCount) { //splice them outta the array.
              State.variables.NPCArray.splice(State.variables.NPCArray.indexOf(profession), 1); /* Using splice removes the item and reindexes the array. This might cause problems further down the line. */
        }
      }
  }
};
