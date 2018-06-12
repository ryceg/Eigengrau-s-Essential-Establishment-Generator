setup.getNPCProfession = function(profession) {
/* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
  var V = State.variables;
  var roll    = (V.town.population / profession.sv);
  var professionCount = (roll >= 1 ? Math.trunc(roll) : Number(random(1, 100) <= roll * 100));
  var creationInstances;
  var npcs = V.NPCArray.filter(function(npc) { return npc.profession === profession.profession; });

  if (professionCount >= 1){
    // If there's at least one person
    if(npcs.length < professionCount) {
        // Create the missing NPCs
        for(var i = npcs.length - professionCount; i > 0; -- i) {
            // setup.createNPC({profession: profession.profession});
            setup.createNPC();
        }
    } else if (npcs.length > professionCount) {
        // if there's more than there should be, remove then add just the right amount back
        V.NPCArray = V.NPCArray.filter(function(npc) { return npc.profession !== profession.profession; });
        Array.prototype.push.apply(V.NPCArray, npcs.splice(0, professionCount));
    }}
}
