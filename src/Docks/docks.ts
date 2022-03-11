
import { Customer } from '../setup'
import { docksRollData } from './rollData'
import { shipsData } from './ship/shipsData'

setup.initDocks = () => {
  setup.docks = docksData
}

export const docksData: {
  rollData: typeof docksRollData
  notableFeature: string[]
  notice: string[]
  get: {
    customers: Customer[]
  }
  ships: typeof shipsData
} = {
  rollData: docksRollData,
  notableFeature: [
    // which are best known for _
    'the foul smelling fish that fisherman haul in',
    'being a good place to get mugged',
    'a large lookout post that warns the shipmaster of approaching ships',
    'an impressive looking boat that has been moored for many years',
    'being the best place to go if you are looking to get into a fight',
    'single handedly keeping the brothels in business',
    'its ships that are all incredible smelly, but rather swift on the waters',
    'being a tourist attraction',
    'the Sea Priests and clergymen who roam the docks blessing ships before they set sail',
    "it's shipwrights. The dry docks here have birthed a large portion of the local navy",
    'a fine dining restaurant that hangs suspended off the end of the pier',
    "it's shady wharfmaster, who appears to be willing to turn a blind eye to just about anything for the right price",
    "it's large ornate lighthouse, an ancient statue of a humanoid figure with all details eroded by time. It holds the lighthouse's beacon aloft in it's hand",
    'the waters around the docks being infested with predatory fish and poisonous snakes',
    'the exotic stone used to construct the docks',
    "a peculiar ship docked here, constricted from living trees fed from it's soil filled hull",
    'the sun bleached wrecks littering the shore line',
    'local urban legends about ghosts ships and damned crew members',
    'the time the local the local militia and fishermen held back a pirate raid on the town here',
    'the large marble slabs that anchor the docks to the shore',
    'the thick oak timbers of the piers',
    'the enormous hand crafted ropes that tie down the ships',
    'a huge lighthouse that guides ships to the port',
    'being built inside an enormous cavern'
  ],
  notice: [
    'a pair of beggars arguing over a dead fish',
    'some seagulls flying overhead',
    'an entrepreneurial fellow selling hot foods from a cart',
    'a sailor struggling to lift a coil of rope',
    'a pair of burly men shifting a barrel onto a ship',
    'a captain pointing at a map, arguing with another man',
    'there is a certain quietness to the air; nobody is shouting as is usual in dockyards',
    'the atmosphere is a little on edge; sailors are more curt than usual, and the dock hands are grimacing as they load the ships with goods',
    'there is a foul stench in the air; like a rotting fish, only much larger, with no escape from the stomach turning scent to be found in buildings, or behind a scented hankerchief',
    'a pair of sailors accidentally dropping one of their crates of cargo into the water',
    'a sailor in the water trying to rescue a dropped supply barrel',
    'a crew unfurling the sails of their ship as they head for open waters',
    // a(n) enormous/large/moderately sized/regular/small/tiny/single stall fish market selling a large variety of fish/an inconceivable number of fish, crabs, shrimp, and other sea creatures/a small selection of fish/a pitiful variety fish
    'a small group of men posing for a portrait with the carcass of an enormous sea monster strung up from a tall wooden pole',
    'a person in dirty rags attempting to sell a single fish to passersby',
    'an incredibly large <<print ["schooner", "barque", "frigate", "galleon", "caravel", "galley"].random()>> docked out in the water. It is ornately painted with the figurehead of a magical animal',
    'a large crowd gathered in front of an absolutely gargantuan severely damaged ship slowly drifting into port',
    'a lone fisherman sitting at the edge and waiting for his catch',
    'two men pulling up crab traps out of the water',
    'a haggard old woman weaving baskets out of seaweed'
  ],
  ships: shipsData,
  get: {
    customers: [
      {
        relationshipDescription: 'regular',
        relationships: {
          building: {
            relationship: 'regular',
            reciprocalRelationship: 'place of work'
          },
          associatedNPC: {
            relationship: 'acquaintance'
          }
        },
        base: {
          professionSector: 'naval'
        },
        description (building, npc) { return `${npc.firstName} works with ships.` }
      },
      {
        relationshipDescription: 'shipwright',
        relationships: {
          building: {
            relationship: 'shipwright',
            reciprocalRelationship: 'place of work'
          },
          associatedNPC: {
            relationship: 'acquaintance'
          }
        },
        base: {
          profession: 'shipwright'
        },
        description (building, npc) { return `${npc.firstName} constructs and repairs ships in ${building.name}.` }
      },
      {
        relationshipDescription: 'bosun',
        relationships: {
          building: {
            relationship: 'bosun',
            reciprocalRelationship: 'place of work'
          },
          associatedNPC: {
            relationship: 'acquaintance'
          }
        },
        base: {
          profession: 'bosun'
        },
        description (building, npc) { return `${npc.firstName} works to organise equipment to be loaded off ${building.name} and onto ${npc.hisher} ship.` }
      },
      {
        relationshipDescription: 'stevedore',
        relationships: {
          building: {
            relationship: 'stevedore',
            reciprocalRelationship: 'place of work'
          },
          associatedNPC: {
            relationship: 'acquaintance'
          }
        },
        base: {
          profession: 'stevedore'
        },
        description (building, npc) { return `${npc.firstName} hauls stuff off ships and onto ${building.name}.` }
      }
    ]
  }
}
