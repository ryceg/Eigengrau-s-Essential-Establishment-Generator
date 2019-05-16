// Attaches itself to the *global* node object.
global.setup = {}
global.random = (min, max) => { return (min+max)/2} ; // mock random global func to be deterministic
require('../EssentialEstablishmentGenerator/GeneralStore/JS/GeneralStoreRenders')

const store = {
  roll: {
    cleanliness: 50,
    expertise: 50,
    activity: 50
  },
  size: 40
};

test("Testing general store rendering...", () => {
  const expected = {
    roll: {
      cleanliness: 50,
      expertise: 50,
      activity: 50,
      warmth: 65.5,
    },
    size: 'slightly cramped',
    "warmth": "uncomfortably warm",
    cleanliness: 'somewhat messy',
    expertise: 'well-crafted',
    activity: 'not terribly busy'
  }
  expect(setup.GeneralStoreRenders(store)).toEqual(expected); // use toEqual to test object value equality
})
