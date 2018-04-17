setup.createBuilding = function() {
    var material = ["wooden", "wooden", "wooden", "wooden", "wooden", "stone", "stone", "stone", "stone", "hewn rock", "chiseled stone"];
    var purpose = ["home", "barber", "alchemist's shop", "blacksmithery", "temple", "tannery", "butchery", "library"];
    var outside = ["a horse grazing on the bushes nearby", "a rusted shovel near a somewhat overgrown flowerbed", "a well with an old rope, but no bucket to go on the end", "a dog panting by the door", "a cat lazily lounging in the shade", "a muddy pair of boots by the door", "a sign from the local paper which reads '$newspaperheadline'"];
    var disrepair = ["dilapidated", "ruined", "old", "somewhat rickety", "well-loved", "well-kept", "brand new"];
/* wealthroll: random(1, 100),
pricemodifier: random(-10, 10),
populationroll: random(1, 100),
reputationroll: random(1, 100),
sinroll: random(1, 100),
sizeroll: random(20, 80),
diversityroll: random(20, 80),
roughnessroll: random(1, 100),
cleanlinessroll: random(1, 100),
expertiseroll: random(1, 100),
intricacyroll: random(1, 100),
hardinessroll: random(1, 100),
magicroll: random(1, 20)*/
    return {
        material : material.random(),
        purpose : purpose.random(),
        outside : outside.random(),
        disrepair : disrepair.random()
    };
};
