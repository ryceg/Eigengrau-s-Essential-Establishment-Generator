dictData.js
setup.animalData = {

'animals': [
{
  name: 'akita',
  plural: 'akitas',
  group: 'mammal',
  size: 'medium',
  type: 'predator',
  area: 'land',
  desc: 'A medium sized dog with short ears and a long plush tail. They were originally bred to hunt bear and boar.',
  isDog: true,
  isCat: false,
  pet: true
},
{
  name: 'beagle',
  plural: 'beagles',
  group: 'mammal',
  size: 'small',
  type: 'prey',
  area: 'land',
  desc: 'A small dog with short floppy ears and a drooping tail. These animals are friendly and faithful companions.',
  isDog: true,
  isCat: false,
  pet: true
},
{
  name: 'mastiff',
  plural: 'mastiffs',
  group: 'mammal',
  size: 'medium',
  type: 'predator',
  area: 'land',
  desc: 'A large dog with a wrinkly, droopy face. Powerful but gentle these animals are excellent watchdogs.',
  isDog: true,
  isCat: false,
  pet: true
},
{
  name: 'burmese',
  plural: 'burmeses',
  group: 'mammal',
  size: 'small',
  type: 'prey',
  area: 'land',
  desc: 'A small, soldily built cat with short satiny fur. This cat is often bred and kept among priests.',
  isDog: false,
  isCat: true,
  pet: true
},
{
  name: 'javanese',
  plural: 'javanese',
  group: 'mammal',
  size: 'small',
  type: 'prey',
  area: 'land',
  desc: 'A small, lanky cat with fine, silky fur. This cat is highly intelligent and agile.',
  isDog: false,
  isCat: true,
  pet: true
},
{
  name: 'ragdoll cat',
  plural: 'ragdoll cats',
  group: 'mammal',
  size: 'small',
  type: 'prey',
  area: 'land',
  desc: 'Small cat with long, patterned fur and shining blue eyes. These cats take to tricks easy and are often found in traveling shows.',
  isDog: false,
  isCat: true,
  pet: true
}

]
/*  'aardwolf', 'aardvark', 'abyssinian', 'affenpinscher dog', 'agouti', 'ainu dog', 'akbash', 'akita dog', 'albatross', 'alligator', 'alpaca', 'anaconda', 'anteater', 'antelope', 'appenzeller dog', 'arctic fox', 'arctic hare', 'argali',
 'armadillo', 'avocet', 'aye aye', 'baboon', 'bactrian camel', 'badger', 'balinese cat', 'bander palm civet', 'bandicoot', 'barb', 'barn owl', 'basenji dog', 'basset hound', 'bat', 'beagle', 'bear', 'bearded collie',
'bearded dragon', 'beaver', 'bengal tiger', 'binturon', 'birman cat', 'bison', 'black bear', 'black rhino', 'bloodhound', 'bluetick coonhound', 'bobcat', 'bongo', 'bonobo', 'booby', 'border collie', 'border terrier',
'brown bear', 'budgerigar', 'buffalo', 'bulldog', 'bull mastiff', 'bullfrog', 'burrowing frog', 'caiman', 'caiman lizard', 'camel', 'canaan dog', 'capybara', 'caracal', 'cassowary', 'chameleon', 'chamois', 'cheetah',
'chicken', 'chihuaha', 'chimpanzee', 'chinchilla', 'chinook dog', 'chipmunk', 'collared peccary', 'common buzzard', 'cottontop tamarin', 'cougar', 'cow', 'coyote', 'crane', 'crested penguin', 'crocodile', 'cross river gorilla',
'cuscus', 'dachsund', 'dalmation', 'deer', 'desert tortoise', 'dhole', 'dingo', 'dodo', 'donkey', 'dormouse', 'duck', 'dwarf crocodile', 'eagle', 'eastern lowland gorilla', 'echidna', 'elephant', 'elephant shrew',
'emperor penguin', 'emperor tamarin', 'emu', 'falcon', 'fennec fox', 'ferret', 'field spaniel', 'flamingo', 'flying squirrel', 'fossa', 'fox', 'fox terrier', 'frigatebird', 'frilled lizard', 'frog', 'gecko', 'gerbil',
'ghariel', 'giant panda', 'gibbon', 'gilla monster', 'giraffe', 'goat', 'golden lion tamarin', 'golden oriole', 'golden retriever', 'goose', 'gopher', 'gorilla', 'great dane', 'grizzly bear', 'grouse', 'guinea fowl',
'hamster', 'hare', 'hedgehog', 'highland cattle', 'hippo', 'horned frog', 'horse', 'hyena', 'iguana', 'impala', 'indri', 'jackal', 'jaguar', 'kangaroo', 'kiwi', 'koala', 'komodo dragon', 'kudu', 'labrador retriever',
'leaf-tailed gecko', 'lemming', 'lemur', 'leopard', 'leopard tortoise', 'liger', 'lion', 'lizard', 'llama', 'long eared owl', 'lynx', 'maine coon', 'mandrill', 'marine toad', 'markhor', 'marsh frog', 'masked palm civet',
'mastiff', 'meerkat', 'mole', 'mongoose', 'monitor lizard', 'moose', 'mountain gorilla', 'mountain lion', 'mountain sheep', 'mouse', 'mule', 'newt', 'numbat', 'ocelot', 'okapi', 'olm', 'opossum', 'orangutan', 'ostrich', 'panther',
'patas monkey', 'pied tamarin', 'pig', 'pika', 'pink fairy armadillo', 'platypus', 'poison dart frog', 'poodle', 'polar bear', 'pool frog', 'pointer dog', 'porcupine', 'possum', 'proboscis monkey', 'puma', 'pygmy hippo', 'pygmy marmoset',
'quokka', 'quoll', 'rabbit', 'raccoon', 'raccoon dog', 'radiated tortoise', 'ragdoll cat', 'rat', 'rattlesnake', 'red panda', 'red wolf', 'red-handed tamarin', 'reindeer', 'rhino', 'royal penguin', 'rottweiler', 'rock hyrax',
'sabre-toothed tiger', 'saint bernard', 'salamander', 'sand lizard', 'saola', 'serval', 'sheep', 'skunk', 'sloth', 'snapping turtle', 'spadefoot toad', 'spectacled bear', 'spider monkey', 'squirrel', 'squirrel monkey',
'stoat', 'striped rocket frog', 'sun bear', 'uakari', 'vampire bat', 'vervet monkey', 'wallaby', 'warthog', 'water buffalo', 'water dragon', 'water vole', 'weasel', 'western gorilla', 'western lowland gorilla', 'white face capuchin',
'white rhino', 'white tiger', 'wild boar', 'wildebeest', 'wolf', 'wolverine', 'wombat', 'woolly monkey', 'yak', 'zebra', 'zebu'
],

'landAnimalsP': ['aardwolves', 'aardvarks', 'abyssinians', 'affenpinscher dogs', 'agoutis', 'ainu dogs', 'akbash dogs', 'akita doga', 'albatrosses', 'alligators', 'alpacas', 'anacondas', 'anteaters', 'antelopes', 'appenzeller dogs', 'arctic foxes', 'arctic hares', 'argalis',
 'armadillos', 'avocets', 'aye ayes', 'baboons', 'bactrian camels', 'badgers', 'balinese cats', 'bander palm civets', 'bandicoots', 'barbs', 'barn owls', 'basenji dogs', 'basset hounds', 'bats', 'beagles', 'bears', 'bearded collies',
'bearded dragons', 'beavers', 'bengal tigers', 'binturons', 'birman cats', 'bison', 'black bears', 'black rhinos', 'bloodhounds', 'bluetick coonhounds', 'bobcats', 'bongos', 'bonobos', 'boobies', 'border collies', 'border terriers',
'brown bears', 'budgerigars', 'buffalo', 'bulldogs', 'bull mastiffs', 'bullfrogs', 'burrowing frogs', 'caimans', 'caiman lizards', 'camels', 'canaan dogs', 'capybaras', 'caracals', 'cassowaries', 'chameleons', 'chamois', 'cheetahs',
'chickens', 'chihuahas', 'chimpanzees', 'chinchillas', 'chinook dogs', 'chipmunks', 'collared peccaries', 'common buzzards', 'cottontop tamarins', 'cougars', 'cows', 'coyotes', 'cranes', 'crested penguins', 'crocodiles', 'cross river gorillas',
'cuscuses', 'dachsunds', 'dalmations', 'deer', 'desert tortoises', 'dholes', 'dingos', 'dodos', 'donkeys', 'dormice', 'ducks', 'dwarf crocodiles', 'eagles', 'eastern lowland gorillas', 'echidnas', 'elephants', 'elephant shrews',
'emperor penguins', 'emperor tamarins', 'emus', 'falcons', 'fennec foxes', 'ferrets', 'field spaniels', 'flamingos', 'flying squirrels', 'fossas', 'foxes', 'fox terriers', 'frigatebirds', 'frilled lizards', 'frogs', 'geckos', 'gerbils',
'ghariels', 'giant pandas', 'gibbons', 'gilla monsters', 'giraffes', 'goats', 'golden lion tamarins', 'golden orioles', 'golden retrievers', 'geese', 'gophers', 'gorillas', 'great danes', 'grizzly bears', 'grouses', 'guinea fowls',
'hamsters', 'hares', 'hedgehogs', 'highland cattles', 'hippos', 'horned frogs', 'horses', 'hyenas', 'iguanas', 'impalas', 'indris', 'jackals', 'jaguars', 'kangaroos', 'kiwis', 'koalas', 'komodo dragons', 'kudus', 'labrador retrievers',
'leaf-tailed geckos', 'lemmings', 'lemurs', 'leopards', 'leopard tortoises', 'ligers', 'lions', 'lizards', 'llamas', 'long eared owls', 'lynxes', 'maine coons', 'mandrills', 'marine toads', 'markhors', 'marsh frogs', 'masked palm civets',
'mastiffs', 'meerkats', 'moles', 'mongooses', 'monitor lizards', 'moose', 'mountain gorillas', 'mountain lions', 'mountain sheeps', 'mice', 'mules', 'newts', 'numbats', 'ocelots', 'okapis', 'olms', 'opossums', 'orangutans', 'ostriches', 'panthers',
'patas monkeys', 'pied tamarins', 'pigs', 'pikas', 'pink fairy armadillos', 'platypuses', 'poison dart frogs', 'poodles', 'polar bears', 'pool frogs', 'pointer dogs', 'porcupines', 'possums', 'proboscis monkeys', 'pumas', 'pygmy hippos', 'pygmy marmosets',
'quokkas', 'quolls', 'rabbits', 'raccoons', 'raccoon dogs', 'radiated tortoises', 'ragdoll cats', 'rats', 'rattlesnakes', 'red pandas', 'red wolves', 'red-handed tamarins', 'reindeer', 'rhinos', 'royal penguins', 'rottweilers', 'rock hyraxes',
'sabre-toothed tigers', 'saint bernards', 'salamanders', 'sand lizards', 'saolas', 'servals', 'sheep', 'skunks', 'sloths', 'snapping turtles', 'spadefoot toads', 'spectacled bears', 'spider monkeys', 'squirrels', 'squirrel monkeys',
'stoats', 'striped rocket frogs', 'sun bears', 'uakaris', 'vampire bats', 'vervet monkeys', 'wallabys', 'warthogs', 'water buffalos', 'water dragons', 'water voles', 'weasels', 'western gorillas', 'western lowland gorillas', 'white face capuchins',
'white rhinos', 'white tigers', 'wild boars', 'wildebeest', 'wolves', 'wolverines', 'wombats', 'woolly monkeys', 'yaks', 'zebras', 'zebu'
],

*/
}
