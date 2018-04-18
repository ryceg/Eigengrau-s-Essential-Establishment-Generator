setup.createBuilding = function() {
    var material          = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone", "marble"];
    var purpose           = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"];
    var outside           = ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"];
    var disrepair         = ["dilapidated", "ruined", "old", "somewhat rickety", "well-loved", "well-kept", "brand new"];
    var magicroll         = Math.floor(Math.random() * 80) + 20;
    var pricemodifier     = Math.floor(Math.random() * 10) - 10;
    var sizeroll          = Math.floor(Math.random() * 80) + 20;
    var diversityroll     = Math.floor(Math.random() * 80) + 20;
    var wealthroll        = Math.floor(Math.random() * 99) + 1;
    var populationroll    = Math.floor(Math.random() * 99) + 1;
    var reputationroll    = Math.floor(Math.random() * 99) + 1;
    var sinroll           = Math.floor(Math.random() * 99) + 1;
    var roughnessroll     = Math.floor(Math.random() * 99) + 1;
    var cleanlinessroll   = Math.floor(Math.random() * 99) + 1;
    var expertiseroll     = Math.floor(Math.random() * 99) + 1;
    var intricacyroll     = Math.floor(Math.random() * 99) + 1;
    var hardinessroll     = Math.floor(Math.random() * 99) + 1;


    return {
        material          : material.random(),
        purpose           : purpose.random(),
        outside           : outside.random(),
        disrepair         : disrepair.random(),
        wealthroll        : wealthroll,
        magicroll         : magicroll,
        pricemodifier     : pricemodifier,
        sizeroll          : sizeroll,
        diversityroll     : diversityroll,
        populationroll    : populationroll,
        reputationroll    : reputationroll,
        sinroll           : sinroll,
        roughnessroll     : roughnessroll,
        cleanlinessroll   : cleanlinessroll,
        expertiseroll     : expertiseroll,
        intricacyroll     : intricacyroll,
        hardinessroll     : hardinessroll
    };
};
