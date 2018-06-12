setup.getNPCProfession = function(profession) { // I'm not really sure how

/* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
  var roll    = (State.variables.town.population / profession.sv);
  var professionCount = (roll >= 1 ? Math.trunc(roll) : Number(random(1, 100) <= roll * 100));
  var creationInstances;
  var npcs = State.variables.NPCArray.filter(function(npc) { return npc.profession === profession.profession; });

  if (professionCount >= 1){ // If there's at least one person
      if (npcs < professionCount){ // Test to see if the number of people that match that profession in the indexed array is less than the number that should be created
          creationInstances = (professionCount - npcs; // if there are less people, define the deficit
          while (creationInstances > 0) { // and use that deficit in a while loop to create NPCs
            creationInstances--
            State.setVar(profession, setup.createNPC({profession: profession})); // Using the setup.createNPC function, with the profession. I don't know if I'm going to run into issues with State.setVar
          }
      }
      else if (npcs > professionCount){ // if there's more than there should be
        while (npcs !== professionCount) { //splice them outta the array.
              State.variables.NPCArray[index].splice(State.variables.NPCArray[index].indexOf(profession), 1); /* Using splice removes the item and reindexes the array. This might cause problems further down the line. */
        }
      }
  }
};
