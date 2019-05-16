console.log("Testing general store rendering...");

// Attaches itself to the *global* node object.
global.setup = {}

require('../EssentialEstablishmentGenerator/GeneralStore/JS/GeneralStoreRenders')

const store = {
  roll: {
    cleanliness: 50,
    expertise: 50,
    activity: 50
  },
  size: 40
};
console.log(setup.GeneralStoreRenders(store));
