
import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

export const gnome: RaceTrait = {
  muscleMass: 10,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [500, 'ancient'],
      [440, 'incredibly elderly'],
      [400, 'vulnerably elderly'],
      [360, 'withered'],
      [320, 'elderly'],
      [280, 'weathered'],
      [230, 'aged'],
      [180, 'old'],
      [130, 'middle aged'],
      [80, 'middle aged'],
      [50, 'early middle aged'],
      [40, 'adult'],
      [35, 'mid thirties'],
      [32, 'earlyish thirties'],
      [30, 'prime adult aged'],
      [26, 'young adult'],
      [24, 'youthful adult'],
      [22, 'relatively young'],
      [20, 'surprisingly young'],
      [19, 'nineteen year old'],
      [18, 'barely adult aged'],
      [17, 'late teenager'],
      [16, 'teenager'],
      [15, 'young teenager'],
      [14, 'adolescent'],
      [12, 'prepubescent'],
      [10, 'child'],
      [8, 'young child'],
      [6, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 200,
      ageModifier: () => dice(3, 100)
    },
    'settled adult': {
      baseAge: 40,
      ageModifier: () => dice(3, 75)
    },
    'young adult': {
      baseAge: 18,
      ageModifier: () => dice(2, 10)
    },
    'child': {
      baseAge: 6,
      ageModifier: () => dice(2, 6)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {

    },
    woman: {
      firstName: ['Abalaba', 'Bimpnottin', 'Breena', 'Buvvie', 'Callybon', 'Caramip', 'Carlin', 'Cumpen', 'Dalaba', 'Donella', 'Duvamil', 'Ella', 'Ellyjoybell', 'Ellywick', 'Enidda', 'Lilli', 'Loopmottin', 'Lorilla', 'Luthra', 'Mardnab', 'Meena', 'Menny', 'Mumpena', 'Nissa', 'Numba', 'Nyx', 'Oda', 'Oppah', 'Orla', 'Panana', 'Pynfle', 'Quilla', 'Ranala', 'Reddlepop', 'Roywyn', 'Salanop', 'Shamil', 'Sifiress', 'Symma', 'Tana', 'Tenena', 'Tervaround', 'Tippletoe', 'Ulia', 'Unvera', 'Veloptima', 'Virra', 'Waywocket', 'Yebe', 'Zanna'],
      beardProbability: 1,
      baseHeight: 35,
      baseWeight: 30,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(1, 1)
    },
    man: {
      firstName: ['Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap', 'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'lgden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper', 'Namfoodle', 'Oppleby', 'Orryn', 'Paggen', 'PaHabar', 'Pog', 'Qualen', 'Ribbles', 'Rimple', 'Roondar', 'Sappw', 'Seebo', 'Senteq', 'Sindri', 'Umpen', 'Warryn', 'Wiggens', 'Wobbles', 'Wrenn', 'Zaffrab', 'Zook'],
      beardProbability: 63,
      baseHeight: 36,
      baseWeight: 35,
      heightModifier: () => dice(2, 10),
      weightModifier: () => dice(1, 1)
    }
  },
  lastName: ['Albaratie', 'Bafflestone', 'Beren', 'Boondiggles', 'Cobblelob', 'Daergel', 'Dunben', 'Fabblestabble', 'Fapplestamp', 'Fiddlefen', 'Folkor', 'Garrick', 'Gimlen', 'Glittergern', 'Gobblefirn', 'Gummen', 'Horcusporcus', 'Humplebumple', 'Ironhide', 'Leffery', 'Lingenhall', 'Loofollue', 'Maekkelferce', 'Miggledy', 'Munggen', 'Murnig', 'Musgraben', 'Nackle', 'Ningel', 'Nopenstallen', 'Nucklestamp', 'Offund', 'Oomtrowl', 'Pilwicken', 'Pingun', 'Quillsharpener', 'Raulnor', 'Reese', 'Rofierton', 'Scheppen', 'Shadowcloak', 'Silverthread', 'Sympony', 'Tarkelby', 'Timbers', 'Turen', 'Umbodoben', 'Waggletop', 'Welber', 'Wildwander'],
  eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'],
  raceWords: {
    raceName: 'gnome',
    racePlural: 'gnomes',
    raceSingular: 'gnome',
    raceAdjective: 'gnomish',
    raceLanguage: 'Gnomish'
  },
  knownLanguages: ['Common', 'Gnomish'],
  beard: ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    'Gnome Cunning': 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
    "Artificer's Lore": 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
    'Tinker': "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.,,When you create a device, choose one of the following options:,,Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.,,Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.,,Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
  }
}
