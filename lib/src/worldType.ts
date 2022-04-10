/**
 * For specifying the origin of material.
 *
 * * 'earth' - for specifying things like June 12, etc.
 *
 * * 'fr': Forgotten Realms - DnD specific content.
 *
 * * 'pf': Pathfinder specific content.
 */
export type WorldTypeAbbreviated = 'earth' | 'fr' | 'gn'

export type SystemType = '5e' | 'Pathfinder' | 'Pathfinder 2e' | 'Dungeon World' | 'GURPS'

export type CurrencyFull = 'copper' | 'silver' | 'gold' | 'electrum' | 'platinum'
export type CurrencyAbbreviated = 'cp' | 'sp' | 'gp' | 'ep' | 'pp'

export type AlignmentsAbbreviated = 'LG' | 'NG' | 'CG' | 'LN' | 'N' | 'CN' | 'CE' | 'NE' | 'LE'
export type Alignments = 'Lawful Good' | 'Neutral Good' | 'Chaotic Good' | 'Lawful Neutral' | 'Neutral' | 'Chaotic Neutral' | 'Lawful Evil' | 'Chaotic Evil' | 'Neutral Evil'

export type ClericDomains =
  | 'arcana'
  | 'death'
  | 'forge'
  | 'grave'
  | 'knowledge'
  | 'life'
  | 'light'
  | 'nature'
  | 'order'
  | 'peace'
  | 'tempest'
  | 'trickery'
  | 'twilight'
  | 'war'

export type WizardSchools =
  | 'Bladesinging'
  | 'Chronurgy'
  | 'Graviturgy'
  | 'Order of the Scribes'
  | 'School of Abjuration'
  | 'School of Conjuration'
  | 'School of Divination'
  | 'School of Enchantment'
  | 'School of Evocation'
  | 'School of Illusion'
  | 'School of Necromancy'
  | 'School of Transmutation'
  | 'War Magic'

export interface FifthEditionBookInfo {
  source: FifthEditionAbbr
  page?: number
}

export const WizardSchool: Record<WizardSchools, FifthEditionBookInfo> = {
  'Bladesinging': {
    source: 'TCoE'
  },
  'Chronurgy': {
    source: 'EGtW'
  },
  'Graviturgy': {
    source: 'EGtW'
  },
  'Order of the Scribes': {
    source: 'PHB'
  },
  'School of Abjuration': {
    source: 'PHB'
  },
  'School of Conjuration': {
    source: 'PHB'
  },
  'School of Divination': {
    source: 'PHB'
  },
  'School of Enchantment': {
    source: 'PHB'
  },
  'School of Evocation': {
    source: 'PHB'
  },
  'School of Illusion': {
    source: 'PHB'
  },
  'School of Necromancy': {
    source: 'PHB'
  },
  'School of Transmutation': {
    source: 'PHB'
  },
  'War Magic': {
    source: 'XGtE'
  }
}

export const ClericDomain: Record<ClericDomains, FifthEditionBookInfo | FifthEditionBookInfo[]> = {
  arcana: {
    source: 'SCAG'
  },
  death: {
    source: 'DMG'
  },
  forge: {
    source: 'XGtE'
  },
  grave: {
    source: 'XGtE'
  },
  knowledge: {
    source: 'PHB'
  },
  life: {
    source: 'PHB'
  },
  light: {
    source: 'PHB'
  },
  nature: {
    source: 'PHB'
  },
  order: {
    source: 'TCoE'
  },
  peace: {
    source: 'TCoE'
  },
  tempest: {
    source: 'PHB'
  },
  trickery: {
    source: 'PHB'
  },
  twilight: {
    source: 'TCoE'
  },
  war: {
    source: 'PHB'
  }
}

export type FifthEditionAbbr =
  /** 'Acquistions Incorporated' */
  'AcInc'
  /** 'Dungeon Master\'s Guide' */
  | 'DMG'
  /** 'Explorer\'s Guidet to Wildemount' */
  | 'EGtW'
  /** 'Eberron: Rising From The Last War' */
  | 'ERLW'
  /** 'Elemental Evil Player\'s Companion' */
  | 'EEPC'
  /** 'Guildmasters\' Guide to Ravnica' */
  | 'GGtR'
  /** 'Icewind Dale - Rime of the Frostmaiden' */
  | 'RotF'
  /** 'Locathah Rising' */
  | 'LR'
  /** 'Monster Manual' */
  | 'MM'
  /** 'Mystic Odysseys of Theros' */
  | 'MOoT'
  /** 'Mordenkainen\'s Tome of Foes ' */
  | 'MToF'
  /** 'One Grung Above Affiliate Link' */
  | 'OGA'
  /** 'Players Handbook' */
  | 'PHB'
  /** 'Sword Coast Adventurer\'s Guide' */
  | 'SCAG'
  /** 'Tasha\'s Cauldron of Everything' */
  | 'TCoE'
  /** 'Volo\'s Guide to Monsters' */
  | 'VGtM'
  /** 'Wayfarer\'s Guide to Eberron Affiliate Link' */
  | 'WGtE'
  /** 'Xanathar\'s Guide to Everything' */
  | 'XGtE'
