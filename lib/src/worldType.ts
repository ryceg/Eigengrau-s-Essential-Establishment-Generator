/**
 * For specifying the origin of material.
 *
 * * 'earth' - for specifying things like June 12, etc.
 *
 * * 'fr': Forgotten Realms - DnD specific content.
 *
 * * 'pf': Pathfinder specific content.
 */
export type WorldType = 'earth' | 'fr' | 'gn'

export type SystemType = '5e' | 'Pathfinder' | 'Pathfinder 2e' | 'Dungeon World' | 'GURPS'

export type CurrencyFull = 'copper' | 'silver' | 'gold' | 'electrum' | 'platinum'
export type CurrencyAbbreviated = 'cp' | 'sp' | 'gp' | 'ep' | 'pp'

export type AlignmentsAbbreviated = 'LG' | 'NG' | 'CG' | 'LN' | 'LG' | 'LE' | 'N' | 'LN' | 'CN' | 'CE' | 'NE'
export type Alignments = 'Lawful Good' | 'Neutral Good' | 'Chaotic Good' | 'Lawful Neutral' | 'Lawful Good' | 'Lawful Evil' | 'Neutal' | 'Lawful Neutral' | 'Chaotic Neutral' | 'Chaotic Evil' | 'Neutral Evil'

export type ClericDomains = 'arcana' | 'death' | 'forge' | 'grave' | 'knowledge' | 'life' | 'light' | 'nature' | 'order' | 'peace' | 'tempest' | 'trickery' | 'twilight' | 'war'
