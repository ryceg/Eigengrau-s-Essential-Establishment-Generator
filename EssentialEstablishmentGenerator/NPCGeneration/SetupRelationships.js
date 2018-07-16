setup.setAsPartners = function(npc1, npc2) {
    var npcs = State.variables.npcs;
    if(!npc1 || !npc2 || !npc1.id || !npc2.id) {
        console.log("Called setAsPartners() with a null/undefined argument");
        return;
    }
    /* Why not call the attribute simply "partner" or "partnerID"? */
    var npcsToClean = [];
    if(npc1.partnerID && npcs[npc1.partnerID]) {
        /* NPC1 already had a valid partner; mark it for removal */
        npcsToClean.push(npcs[npc1.partnerID]);
    }
    if(npc2.partnerID && npcs[npc2.partnerID]) {
        /* NPC2 already had a valid partner; mark it for removal */
        npcsToClean.push(npcs[npc2.partnerID]);
    }
    /* Remove "old" partners first */
    npcsToClean.forEach(function(n) {
        delete n.partnerID;
    });
    /* Link the two */
    npc1.partnerID = npc2.id;
    npc2.partnerID = npc1.id;
};
