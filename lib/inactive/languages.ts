
export type CommonLanguages = 'common' | 'elvish' | 'dwarvish' | 'giant' | 'goblin' | 'gnomish' | 'halfling' | 'orc'
export type ExoticLanguages = 'abyssal' | 'celestial' | 'draconic' | 'deep speech' | 'infernal' | 'primordial' | 'sylvan' | 'undercommon'
export type SecretLanguages = "thieves' cant" | 'druidic' | 'dark speech'
export type Languages = CommonLanguages | ExoticLanguages | SecretLanguages
export type LanguageScripts = 'common' | 'elvish' | 'dwarvish' | 'abyssal' | 'celestial' | 'draconic' | 'infernal' | 'deep speech'
interface Language {
  type: 'common' | 'exotic' | 'secret'
  /** The language script used */
  script: LanguageScripts
  /** A brief description of how the language sounds */
  description: string
  /** Example of the people that speak it */
  spokenBy: string
}
export const languages: Record<Languages, Language> = {
  'common': {
    type: 'common',
    script: 'common',
    description: '',
    spokenBy: 'Common is spoken by almost everyone- the language of humans, it is the lingua franca of almost all civilisations.'
  },
  'elvish': {
    type: 'common',
    script: 'elvish',
    description: 'Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    spokenBy: ''
  },
  'dwarvish': {
    type: 'common',
    script: 'dwarvish',
    description: 'Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
    spokenBy: ''
  },
  'giant': {
    type: 'common',
    script: 'dwarvish',
    description: '',
    spokenBy: ''
  },
  'gnomish': {
    type: 'common',
    script: 'dwarvish',
    description: 'The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    spokenBy: ''
  },
  'goblin': {
    type: 'common',
    script: 'dwarvish',
    description: '',
    spokenBy: ''
  },
  'halfling': {
    type: 'common',
    script: 'common',
    description: "The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    spokenBy: ''
  },
  'orc': {
    type: 'common',
    script: 'dwarvish',
    description: 'Orcish is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
    spokenBy: ''
  },
  'abyssal': {
    type: 'exotic',
    script: 'abyssal',
    description: '',
    spokenBy: ''
  },
  'celestial': {
    type: 'exotic',
    script: 'celestial',
    description: '',
    spokenBy: ''
  },
  'draconic': {
    type: 'exotic',
    script: 'draconic',
    description: 'Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    spokenBy: ''
  },
  'deep speech': {
    type: 'exotic',
    script: 'deep speech',
    description: '',
    spokenBy: ''
  },
  'infernal': {
    type: 'exotic',
    script: 'infernal',
    description: '',
    spokenBy: ''
  },
  'primordial': {
    type: 'exotic',
    script: 'dwarvish',
    description: '',
    spokenBy: ''
  },
  'sylvan': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: ''
  },
  'undercommon': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: ''
  },
  'druidic': {
    type: 'exotic',
    script: 'elvish',
    description: '',
    spokenBy: ''
  },
  "thieves' cant": {
    type: 'exotic',
    script: 'common',
    description: '',
    spokenBy: ''
  },
  'dark speech': {
    type: 'exotic',
    script: 'infernal',
    description: '',
    spokenBy: ''
  }
}
