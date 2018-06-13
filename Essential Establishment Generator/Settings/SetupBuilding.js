setup.createBuilding = function() {
    var material          = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "marble"].random();
    var purpose           = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"].random();
    var outside           = ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"].random();
    var disrepair         = ["dilapidated", "ruined", "old", "somewhat rickety", "", "", "", "", "", "", "", "well-loved", "well-kept", "brand new"].random();
    var lighting          = ["poorly lit", "somewhat dark", "dimly lit", "well lit", "brightly lit", "well lit", "brightly lit", "bright and welcoming", "fire-lit"].random();
    var road1             = ["Castle", "Keep", "Kings", "Queens", "Prince", "Princess", "Lords", "Ladies", "Noble", "Duke", "Duchess", "Rogue", "Priest", "Abbott", "Pope", "Spring", "Winter", "Summer", "Autumn", "Butcher", "Tailor", "Smith", "Potter", "Baker", "Farrier", "Old", "New", "Common", "Main", "High", "Low", "Butcher", "Tailor", "Smith", "Potter", "Baker", "Farrier", "Old", "New", "Common", "Main", "High", "Low", "North", "South", "West", "East"].random();
    var road2             = ["Street", "Street", "Street", "Street", "Lane", "Lane", "Lane", "Road", "Road", "Road", "Road", "Square", "Square", "Market", "Way", "Crescent", "Close", "Wynd", "Row"].random();
    var road              = road1 + " " + road2;
    var magicroll         = Math.floor(Math.random() * 80) + 20;
    var magic;
    var pricemodifier     = random(-10, 10);
    var sizeroll          = Math.floor(Math.random() * 80) + 20;
    var size;
    var diversityroll     = Math.floor(Math.random() * 80) + 20;
    var diversity;
    var wealthroll        = random(1, 100);
    var wealth;
    var populationroll    = random(1, 100);
    var population;
    var reputationroll    = random(1, 100);
    var reputation;
    var sinroll           = random(1, 100);
    var sin;
    var roughnessroll     = random(1, 100);
    var roughness;
    var cleanlinessroll   = random(1, 100);
    var cleanliness;
    var bedcleanliness;
    var expertiseroll     = random(1, 100);
    var expertise;
    var activityroll      = random(1, 100);
    var activity;
    var hardinessroll     = random(1, 100);
    var hardiness;
    var note;

    sinroll.clamp(1, 100);
    wealthroll.clamp(1, 100);
    reputationroll.clamp(1, 100);
    cleanlinessroll.clamp(1, 100);
    populationroll.clamp(1, 100);
    roughnessroll.clamp(1, 100);
    diversityroll.clamp(1, 100);
    sizeroll.clamp(1, 100);
    magicroll.clamp(1, 100);


    /* ------------------------- WEALTH -------------------------- */
    if (wealthroll > 95){
    		 wealth = "kingly";}
    	else if (wealthroll > 80){
    		 wealth = "aristocratic";}
    	else if (wealthroll > 70){
    		 wealth = "wealthy";}
    	else if (wealthroll > 60){
    		 wealth = "comfortable";}
    	else if (wealthroll > 50){
    		 wealth = "modest";}
    	else if (wealthroll > 25){
    		 wealth = "poor";}
    	else if (wealthroll <= 25){
    		 wealth = "squalid";}


    /* ------------------------- SIZE -------------------------- */
    if (sizeroll > 80){
    		 size = "huge";}
    	else if (sizeroll > 70){
    		 size = "quite large";}
    	else if (sizeroll > 60){
    		 size = "large";}
    	else if (sizeroll > 50){
    		 size = "spacious";}
    	else if (sizeroll > 40){
    		 size = "medium";}
    	else if (sizeroll > 30){
    		 size = "slightly cramped";}
    	else if (sizeroll > 20){
    		 size = "small";}
    	else if (sizeroll <= 20){
    		 size = "tiny";}


    /* ------------------------- ROUGHNESS -------------------------- */

    	if (roughnessroll > 80){
    		 roughness = "bloodthirsty";}
    	else if (roughnessroll > 60){
    		 roughness = "rough";}
    	else if (roughnessroll > 50){
    		 roughness = "alright";}
    	else if (roughnessroll > 40){
    		 roughness = "placid";}
    	else if (roughnessroll > 30){
    		 roughness = "calm";}
    	else if (roughnessroll > 20){
    		 roughness = "tranquil";}
    	else if (roughnessroll <= 20){
    		 roughness = "utterly serene";}


    /* ------------------------- CLEANLINESS -------------------------- */

    	if (cleanlinessroll > 80){
    		 cleanliness = "absolutely spotless";
         bedcleanliness = "perfectly prepared, with fresh sheets and a lemon scent in the air of the room";}
    	else if (cleanlinessroll > 70){
    		 cleanliness = "spotless";
         bedcleanliness = "freshly cleaned and neat";}
    	else if (cleanlinessroll > 60){
    		 cleanliness = "hygienic";
         bedcleanliness = "tidy and neat";}
    	else if (cleanlinessroll > 50){
    		 cleanliness = "decently hygienic";
         bedcleanliness = "reasonably clean";}
    	else if (cleanlinessroll > 40){
    		 cleanliness = "slightly grubby";
         bedcleanliness = "somewhat tidy";}
    	else if (cleanlinessroll > 30){
    		 cleanliness = "quite dirty";
         bedcleanliness = "disgusting";}
    	else if (cleanlinessroll > 20){
    		 cleanliness = "rather filthy";
         bedcleanliness = "teeming with rats";}
    	else if (cleanlinessroll <= 20){
    		 cleanliness = "absolutely putrid";
         bedcleanliness = "festering with bugs";}



    /* ------------------------- SIN -------------------------- */

    	if (sinroll > 80){
    		 sin = "corrupt";}
    	else if (sinroll > 70){
    		 sin = "venal";}
    	else if (sinroll > 60){
    		 sin = "sleazy";}
    	else if (sinroll > 50){
    		 sin = "seedy";}
    	else if (sinroll > 40 && roughnessroll > 60){
    		 sin = "surprisingly trustworthy";}
    	else if (sinroll > 40){
    		 sin = "trustworthy";}
    	else if (sinroll > 30 && roughnessroll > 60){
    		 sin = "surprisingly reliable";}
    	else if (sinroll > 30){
    		 sin = "reliable";}
    	else if (sinroll <= 20 && roughnessroll > 60){
    		 sin = "surprisingly honest";}
    	else if (sinroll <= 20){
    		 sin = "honest";}



    /* ------------------------- REPUTATION -------------------------- */

    if (reputationroll > 80){
    		 reputation = "famous";}
    	else if (reputationroll > 60){
    		 reputation = "well known";}
    	else if (reputationroll > 40){
    		 reputation = "famous-ish";}
    	else if (reputationroll > 20){
    		 reputation = "reviled";}
    	else if (reputationroll <= 20){
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
        wealthroll        : wealthroll,
        wealthy           : wealth,
        magicroll         : magicroll,
        magic             : magic,
        pricemodifier     : pricemodifier,
        sizeroll          : sizeroll,
        size              : size,
        diversityroll     : diversityroll,
        diversity         : diversity,
        populationroll    : populationroll,
        population        : population,
        reputationroll    : reputationroll,
        reputation        : reputation,
        sinroll           : sinroll,
        sin               : sin,
        roughnessroll     : roughnessroll,
        roughness         : roughness,
        cleanlinessroll   : cleanlinessroll,
        cleanliness       : cleanliness,
        bedcleanliness    : bedcleanliness,
        expertiseroll     : expertiseroll,
        expertise         : expertise,
        activityroll      : activityroll,
        activity          : activity,
        hardinessroll     : hardinessroll,
        hardiness         : hardiness,
        note:             : note
    };
};
