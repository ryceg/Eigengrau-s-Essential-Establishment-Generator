setup.createBuilding = function() {
    var material          = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "marble"].random();
    var purpose           = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"].random();
    var outside           = ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"].random();
    var disrepair         = ["dilapidated", "ruined", "old", "somewhat rickety", "", "", "", "", "", "", "", "well-loved", "well-kept", "brand new"].random();
    var lighting          = ["poorly lit", "somewhat dark", "dimly lit", "well lit", "brightly lit", "well lit", "brightly lit", "bright and welcoming", "fire-lit"].random();
    var road1             = ["Castle", "Keep", "Kings", "Queens", "Prince", "Princess", "Lords", "Ladies", "Noble", "Duke", "Duchess", "Rogue", "Priest", "Abbott", "Pope", "Spring", "Winter", "Summer", "Autumn", "Butcher", "Tailor", "Smith", "Potter", "Baker", "Farrier", "Old", "New", "Common", "Main", "High", "Low", "Butcher", "Tailor", "Smith", "Potter", "Baker", "Farrier", "Old", "New", "Common", "Main", "High", "Low", "North", "South", "West", "East"].random();
    var road2             = ["Street", "Street", "Street", "Street", "Lane", "Lane", "Lane", "Road", "Road", "Road", "Road", "Square", "Square", "Market", "Way", "Crescent", "Close", "Wynd", "Row"].random();
    var road              = road1 + " " + road2;
    var magicRoll         = Math.floor(Math.random() * 80) + 20;
    var magic;
    var pricemodifier     = random(-10, 10);
    var sizeRoll          = Math.floor(Math.random() * 80) + 20;
    var size;
    var diversityRoll     = Math.floor(Math.random() * 80) + 20;
    var diversity;
    var wealthRoll        = random(1, 100);
    var wealth;
    var populationRoll    = random(1, 100);
    var population;
    var reputationRoll    = random(1, 100);
    var reputation;
    var sinRoll           = random(1, 100);
    var sin;
    var roughnessRoll     = random(1, 100);
    var roughness;
    var cleanlinessRoll   = random(1, 100);
    var cleanliness;
    var bedcleanliness;
    var expertiseRoll     = random(1, 100);
    var expertise;
    var activityRoll      = random(1, 100);
    var activity;
    var hardinessRoll     = random(1, 100);
    var hardiness;
    var note;

    sinRoll.clamp(1, 100);
    wealthRoll.clamp(1, 100);
    reputationRoll.clamp(1, 100);
    cleanlinessRoll.clamp(1, 100);
    populationRoll.clamp(1, 100);
    roughnessRoll.clamp(1, 100);
    diversityRoll.clamp(1, 100);
    sizeRoll.clamp(1, 100);
    magicRoll.clamp(1, 100);


    /* ------------------------- WEALTH -------------------------- */
    if (wealthRoll > 95){
    		 wealth = "kingly";}
    	else if (wealthRoll > 80){
    		 wealth = "aristocratic";}
    	else if (wealthRoll > 70){
    		 wealth = "wealthy";}
    	else if (wealthRoll > 60){
    		 wealth = "comfortable";}
    	else if (wealthRoll > 50){
    		 wealth = "modest";}
    	else if (wealthRoll > 25){
    		 wealth = "poor";}
    	else if (wealthRoll <= 25){
    		 wealth = "squalid";}


    /* ------------------------- SIZE -------------------------- */
    if (sizeRoll > 80){
    		 size = "huge";}
    	else if (sizeRoll > 70){
    		 size = "quite large";}
    	else if (sizeRoll > 60){
    		 size = "large";}
    	else if (sizeRoll > 50){
    		 size = "spacious";}
    	else if (sizeRoll > 40){
    		 size = "medium";}
    	else if (sizeRoll > 30){
    		 size = "slightly cramped";}
    	else if (sizeRoll > 20){
    		 size = "small";}
    	else if (sizeRoll <= 20){
    		 size = "tiny";}


    /* ------------------------- ROUGHNESS -------------------------- */

    	if (roughnessRoll > 80){
    		 roughness = "bloodthirsty";}
    	else if (roughnessRoll > 60){
    		 roughness = "rough";}
    	else if (roughnessRoll > 50){
    		 roughness = "alright";}
    	else if (roughnessRoll > 40){
    		 roughness = "placid";}
    	else if (roughnessRoll > 30){
    		 roughness = "calm";}
    	else if (roughnessRoll > 20){
    		 roughness = "tranquil";}
    	else if (roughnessRoll <= 20){
    		 roughness = "utterly serene";}


    /* ------------------------- CLEANLINESS -------------------------- */

    	if (cleanlinessRoll > 80){
    		 cleanliness = "absolutely spotless";
         bedcleanliness = "perfectly prepared, with fresh sheets and a lemon scent in the air of the room";}
    	else if (cleanlinessRoll > 70){
    		 cleanliness = "spotless";
         bedcleanliness = "freshly cleaned and neat";}
    	else if (cleanlinessRoll > 60){
    		 cleanliness = "hygienic";
         bedcleanliness = "tidy and neat";}
    	else if (cleanlinessRoll > 50){
    		 cleanliness = "decently hygienic";
         bedcleanliness = "reasonably clean";}
    	else if (cleanlinessRoll > 40){
    		 cleanliness = "slightly grubby";
         bedcleanliness = "somewhat tidy";}
    	else if (cleanlinessRoll > 30){
    		 cleanliness = "quite dirty";
         bedcleanliness = "disgusting";}
    	else if (cleanlinessRoll > 20){
    		 cleanliness = "rather filthy";
         bedcleanliness = "teeming with rats";}
    	else if (cleanlinessRoll <= 20){
    		 cleanliness = "absolutely putrid";
         bedcleanliness = "festering with bugs";}



    /* ------------------------- SIN -------------------------- */

    	if (sinRoll > 80){
    		 sin = "corrupt";}
    	else if (sinRoll > 70){
    		 sin = "venal";}
    	else if (sinRoll > 60){
    		 sin = "sleazy";}
    	else if (sinRoll > 50){
    		 sin = "seedy";}
    	else if (sinRoll > 40 && roughnessRoll > 60){
    		 sin = "surprisingly trustworthy";}
    	else if (sinRoll > 40){
    		 sin = "trustworthy";}
    	else if (sinRoll > 30 && roughnessRoll > 60){
    		 sin = "surprisingly reliable";}
    	else if (sinRoll > 30){
    		 sin = "reliable";}
    	else if (sinRoll <= 20 && roughnessRoll > 60){
    		 sin = "surprisingly honest";}
    	else if (sinRoll <= 20){
    		 sin = "honest";}



    /* ------------------------- REPUTATION -------------------------- */

    if (reputationRoll > 80){
    		 reputation = "famous";}
    	else if (reputationRoll > 60){
    		 reputation = "well known";}
    	else if (reputationRoll > 40){
    		 reputation = "relatively well known";}
    	else if (reputationRoll > 20){
    		 reputation = "somewhat unknown";}
    	else if (reputationRoll <= 20){
    		 reputation = "infamous";}



    return {
        material          : material,
        purpose           : purpose,
        lighting          : lighting,
        outside           : outside,
        disrepair         : disrepair,
        road1             : road1,
        road2             : road2,
        road              : road,
        wealthRoll        : wealthRoll,
        wealthy           : wealth,
        magicRoll         : magicRoll,
        magic             : magic,
        pricemodifier     : pricemodifier,
        sizeRoll          : sizeRoll,
        size              : size,
        diversityRoll     : diversityRoll,
        diversity         : diversity,
        populationRoll    : populationRoll,
        population        : population,
        reputationRoll    : reputationRoll,
        reputation        : reputation,
        sinRoll           : sinRoll,
        sin               : sin,
        roughnessRoll     : roughnessRoll,
        roughness         : roughness,
        cleanlinessRoll   : cleanlinessRoll,
        cleanliness       : cleanliness,
        bedcleanliness    : bedcleanliness,
        expertiseRoll     : expertiseRoll,
        expertise         : expertise,
        activityRoll      : activityRoll,
        activity          : activity,
        hardinessRoll     : hardinessRoll,
        hardiness         : hardiness,
        note              : note
    };
};
