
export type CommonLanguages = 'common' | 'elvish' | 'dwarvish' | 'giant' | 'goblin' | 'gnomish' | 'halfling' | 'orc'
export type ExoticLanguages = 'abyssal' | 'celestial' | 'draconic' | 'deep speech' | 'infernal' | 'primordial' | 'sylvan' | 'undercommon'
export type SecretLanguages = "thieves' cant" | 'druidic' | 'dark speech'
export type Languages = CommonLanguages | ExoticLanguages | SecretLanguages
export type LanguageScripts = 'common' | 'elvish' | 'dwarvish' | 'abyssal' | 'celestial' | 'draconic' | 'infernal' | 'deep speech'
export interface Language {
  type: 'common' | 'exotic' | 'secret'
  /** The language script used */
  script: LanguageScripts
  /** A brief description of how the language sounds */
  description: string
  /** Example of the people that speak it */
  spokenBy: string
  /** List of speakers */
  spokenByList: string[]
}
export const languages: Record<Languages, Language> = {
  'common': {
    type: 'common',
    script: 'common',
    description: '',
    spokenBy: 'Common is spoken by almost everyone- the language of humans, it is the lingua franca of almost all civilisations.',
    spokenByList: ['human', 'gnome', 'elf', 'tiefling', 'halfling', 'goblin', 'half-orc']
  },
  'elvish': {
    type: 'common',
    script: 'elvish',
    description: 'Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    spokenBy: '',
    spokenByList: []
  },
  'dwarvish': {
    type: 'common',
    script: 'dwarvish',
    description: 'Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
    spokenBy: '',
    spokenByList: []
  },
  'giant': {
    type: 'common',
    script: 'dwarvish',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'gnomish': {
    type: 'common',
    script: 'dwarvish',
    description: 'The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    spokenBy: '',
    spokenByList: []
  },
  'goblin': {
    type: 'common',
    script: 'dwarvish',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'halfling': {
    type: 'common',
    script: 'common',
    description: "The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    spokenBy: '',
    spokenByList: []
  },
  'orc': {
    type: 'common',
    script: 'dwarvish',
    description: 'Orcish is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
    spokenBy: '',
    spokenByList: []
  },
  'abyssal': {
    type: 'exotic',
    script: 'abyssal',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'celestial': {
    type: 'exotic',
    script: 'celestial',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'draconic': {
    type: 'exotic',
    script: 'draconic',
    description: 'Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    spokenBy: '',
    spokenByList: []
  },
  'deep speech': {
    type: 'exotic',
    script: 'deep speech',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'infernal': {
    type: 'exotic',
    script: 'infernal',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'primordial': {
    type: 'exotic',
    script: 'dwarvish',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'sylvan': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: 'elves',
    spokenByList: []
  },
  'undercommon': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'druidic': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  "thieves' cant": {
    type: 'exotic',
    script: 'common',
    description: '',
    spokenBy: '',
    spokenByList: []
  },
  'dark speech': {
    type: 'exotic',
    script: 'infernal',
    description: '',
    spokenBy: '',
    spokenByList: []
  }
}
