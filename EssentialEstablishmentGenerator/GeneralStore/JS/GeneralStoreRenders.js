setup.GeneralStoreRenders = function(GeneralStore) {
  let warmthRoll = random(1, 100);
  const { size, cleanliness, expertise, activity } = GeneralStore.roll;
  if (size > 80) {
    GeneralStore.size = "huge";
    warmthRoll -= 20;
  } else if (size > 70) {
    GeneralStore.size = "quite large";
    warmthRoll -= 15;
  } else if (size > 60) {
    GeneralStore.size = "large";
    warmthRoll -= 10;
  } else if (size > 50) {
    GeneralStore.size = "spacious";
    warmthRoll -= 5;
  } else if (size > 40) {
    GeneralStore.size = "medium";
  } else if (size > 30) {
    GeneralStore.size = "slightly cramped";
    warmthRoll += 15;
  } else if (size > 20) {
    GeneralStore.size = "small";
    warmthRoll += 15;
  } else if (size <= 20) {
    GeneralStore.size = "tiny";
    warmthRoll += 30;
  }

  const warmth = [
    [80, "swelteringly hot"],
    [70, "extremely warm"],
    [60, "uncomfortably warm"],
    [50, "nice and toasty"],
    [40, "quite warm"],
    [30, "warm"],
    [20, "mild"],
    [0, "cold"]
  ];
  for (let [num, descript] in warmth)
    if (warmthRoll > num) GeneralStore.warmth = descript;

  const cleanliness = [
    [80, "fastidious"],
    [70, "very tidy"],
    [60, "tidy"],
    [50, "reasonably tidy"],
    [40, "somewhat messy"],
    [30, "rather messy"],
    [20, "very messy"],
    [0, "filthy"]
  ];
  for (let [num, descript] in cleanliness)
    if (cleanliness > num) GeneralStore.cleanliness = descript;

  const exp = [
    [80, "masterful"],
    [70, "exceptional"],
    [60, "superior quality"],
    [50, "finely-crafted"],
    [40, "well-crafted"],
    [30, "somewhat well made"],
    [20, "somewhat amateur"],
    [20, "blatantly amateur"]
  ];
  for (let [num, descript] in exp)
    if (cleanliness > num) GeneralStore.expertise = descript;

  const activity = [
    [80, "extremely busy"],
    [70, "very busy"],
    [60, "rather busy"],
    [50, "reasonably busy"],
    [40, "not terribly busy"],
    [30, "not busy"],
    [20, "rather quiet"],
    [0, "very quiet"]
  ];
  for (let [num, descript] in activity)
    if (activity > num) GeneralStore.activity = descript;

  return GeneralStore;
};
