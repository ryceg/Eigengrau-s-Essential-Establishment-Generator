/* eslint-disable camelcase */
/* eslint-disable no-template-curly-in-string */
import { Town, NPC } from '@lib'
interface NovelAIScenario {
    /** Just the versioning, for future compatibility, I assume. */
    scenarioVersion: number
    /** Human-readable title. */
    title: string
    /** Human readable brief overview of the story.
     * I have no idea if this impacts generation.
     */
    description: string
    /** The prompt part of it, that is inserted into the story window. */
    prompt: string
    /**
     * Tags associated with the story.
     * I have no idea if this impacts generation.
     * */
    tags: string[]
    context: [
      /**
       * This first one is the context.
       * I'm not sure where it sits in the hierarchy.
       */
      {
        text: string,
        contextConfig: ContextConfig
      },
      /**
       * This second one is the author's note.
       * It dictates broad stroke stuff like the writing style.
       * */
      {
        text: string
        contextConfig: ContextConfig
      }
    ],
    placeholders: Placeholder[],
    settings: {
      parameters: {
        temperature: number
        max_length: number
        min_length: number
        /**
         * This setting affects the pool of tokens the AI will pick from by only selecting the most likely tokens, then redistributing the probability for those that remain. The pool will only contain the K most likely tokens. If the setting is set to 10, then your pool will contain the 10 most likely tokens. (Top-10 Sampling).
         *
         * In plain English, lowering this setting causes more consistent Completions at the cost of creativity.
         */
        top_k: number
        top_p: number
        tail_free_sampling: number
        /**
         * Because text generation is based on patterns, repetition is a constant concern. The Repetition Penalty introduces an artificial dampener to the probability of a token depending on the frequency of its appearance in the Current Context.
         *
         * As such, increasing this value makes a word less likely to appear for each time it shows up in the text. Do take note that this can get really awkward with words that are recurrent in the current context, such as names, or objects being discussed. With high Repetition Penalty, the AI may find itself unable to use a word repeatedly, and will need to substitute it with another which may be inappropriate.
         */
        repetition_penalty: number
        /**
         * Defines the number of tokens that will be checked for repetitions, starting from the last token generated.
         * The larger the range, the more tokens are checked.
         */
        repetition_penalty_range: number
        /**
         * The penalty to repeated tokens is applied differently based on distance from the final token.
         * The distribution of that penalty follows a S-shaped curve.
         * If the sloping is set to 0, that curve will be completely flat.
         * All tokens will be penalized equally.
         * If it is set to a very high value, it'll act more like two steps: Early tokens will receive little to no penalty, but later ones will be considerably penalized.
         */
        repetition_penalty_slope: number
        /**
         * Any Tokens added here will have their likelihoods reduced to zero.
         * This means they will not appear in Completions.
         * As this adjusts the relationships between Tokens, this will have an impact on the phrasing chosen by the AI.
         * Be careful about what you ban, because this can heavily disrupt output if used incorrectly.
         */
        bad_words_ids: string[]
      },
      /**
       * A sentence delimiter separates subsequent text from the previous clause. Trimming AI responses to the last delimiter will prevent words from appearing after the latest delimiter in the generation.
       *
       * Basically, this setting prevents dangling words from appearing like this:
       *
       * `The door is open, and as I peer through, I see`
       *
       * To this:
       *
       * `The door is open, and as I peer through,`
       *
       * Keep in mind that this can cause very short outputs depending on the current settings.
       */
      trimResponses: boolean
      banBrackets: boolean
      /** Determines the theme */
      prefix?: string
    },
    lorebook: {
      lorebookVersion: 1,
      entries: LorebookEntry[]
    },
    author: string
}

interface LorebookEntry {
    /** The name of the lorebook entry */
    displayName: string
    /** The actual entry */
    text: string
    keys: string[]
    contextConfig: ContextConfig
    lastUpdatedAt: number
    /**
     * Determines how many characters of text will be read by the AI when it looks for lorebook keys.
     * @default 1000
     * */
    searchRange: number
    /** @default true */
    enabled: boolean
    /**
     * If `true`, the entry will ALWAYS be in the context (if it can fit in there).
     * @default false
     * */
    forceActivation: boolean
    /**
     * By default, Lorebook Entries are inserted relative to the top, or the bottom of the text, see Insertion Position.
     * When this toggle is ON, entries are inserted relative to the last occurrence of the Key found in the context.
     * @default false
     */
    key_relative_insertion: boolean
    /**
     * When ON, this entry will also look for its keys in other Lore Book entries, the Memory, and the Author's note.
     * Search Range will be disregarded if this toggle is ON.
     * @default false
     */
    cascading_activation: boolean
}

interface Placeholder {
  /**
   * The key that activates insertion of the context into the story.
   * Is regex.
  */
  key: string
  /** The value associated with the key. */
  description: string
  /** The default value. */
  defaultValue: string
}

interface ContextConfig {
    /**
     * These two are intended to work in tandem to allow for lengthier entries without losing coherence when the entry is trimmed.
     * For example, you could add the prefix `[` and the suffix `]` to encapsulate the entirety of your entry despite trimming.
     *
     * If your entry read as `Winston is a good soldier. Works well under pressure. Likes bunnies.`, and the last sentence was trimmed, it would still read as `[Winston is a good soldier. Works well under pressure.]` despite the end of the entry being trimmed - your prefix and suffix still remain.
     * You may also use a `\n` (a newline marker), which helps isolate the entry further by separating it with a full newline.
     *  @default '' */
    prefix: string
    /** @default '\n' */
    suffix: string
    /**
     * Keeps this number of tokens in the context window for this entry.
     * This will overwrite other content if necessary!
     * It's recommended to set it a little lower than the entry's full size.
     * @default 2048
     * */
    tokenBudget: number
    /** @default 0 */
    reservedTokens: number
    /** @default 400 */
    budgetPriority: number
    /**
     * If the entry needs to be inserted partially due to lack of room in the context window, should it trim from the beginning towards the end, (top) end towards the beginning, (bottom) or omit the entire entry if it can't fit fully (Do Not Trim)?
     * @default 'trimBottom'
     * */
    trimDirection: string
    /** @default 'newline' | 'token' */
    insertionType: string
    /**
     * How far from the top (if positive) or the bottom (if negative) will the entry be inserted in the window.
     * The unit is defined in Insertion Type.
     * It can be a number of tokens, sentences, and newlines.
     * @default -1
     * @example `If you set it to -3 Newline, then it will insert the entry's text as soon as it finds the third newline, reading back from the bottom of the window. -1 will mean it is always placed at the very bottom of the Context, just as positive 1 will always place it at the very top of the Context. 0 will always be the very top.`
     * */
    insertionPosition: number
}

/** Gets the passage, processes it, and then strips it of everything into just plain text. */
function getPassageText (passageName: string) {
  const passageContents = Story.get(passageName).processText().trim()
  const $offshore = $('<div />')
  const wikified = $offshore.wiki(passageContents)
  const unformatted = wikified[0].textContent || wikified[0].innerText || wikified[0].innerHTML
  const resultText = unformatted.replace(/  +/g, ' ')
  return resultText
}

function makePlaceholders (text: string, placeholder: string | string[]) {
  if (typeof placeholder === 'string') {
    text = text.replaceAll(placeholder, `\${${placeholder}}`)
  }
  if (Array.isArray(placeholder)) {
    for (const item of placeholder) {
      text = text.replaceAll(item, `\${${item}}`)
    }
  }
  return text
}

/** Exports to the NovelAI `.scenario` format. Still very much a work in progress. */
export function exportToNovelAI (town: Town, npcs: Record<string, NPC>) {
  State.temporary.exportType = 'novelai'
  const briefDescription = getPassageText('BriefDescription')
  const novel: NovelAIScenario = {
    scenarioVersion: 0,
    title: `The ${town.type} of ${town.name}`,
    /** Brief overview */
    description: `The ${town.type} of ${town.name} is a ${town.economicIdeologyIST} ${town.politicalIdeology} ${town.politicalSource}. It has a population of ${town.population}, and its citizens live a ${lib.getTownWealth(town.roll.wealth)} life. The ${town.type} grew around ${lib.articles.output(town.origin)}, and is comprised ${lib.getPredominantRace(lib.getDemographicPercentile(town)).amountDescriptive}.`,
    /** The prompt part of it */
    prompt: `${briefDescription}
    A population of ${town.population}, the denizens live ${lib.articles.output(lib.getTownWealth(town.roll.wealth))} existence. 
    ${town.economicIdeologyDescription(town)} ${setup.getPoliticalSourceDescription(town)}
    ${lib.getTownEconomics(town)} ${lib.getTownWelfare(town)}
    ${setup.getTownMilitary(town)} ${lib.getTownLaw(town)} ${lib.getTownArcana(town)}`,
    tags: [
      'fantasy',
      'dungeons and dragons',
      town.type,
      town.economicIdeology
    ],
    context: [
      {
        text: briefDescription,
        contextConfig: {
          prefix: '',
          suffix: '\n',
          tokenBudget: 2048,
          reservedTokens: 0,
          budgetPriority: 800,
          trimDirection: 'trimBottom',
          insertionType: 'token',
          insertionPosition: 0
        }
      },
      {
        text: `[This is a description of a fantasy ${town.type} for use in Dungeons and Dragons games.]`,
        contextConfig: {
          prefix: '',
          suffix: '\n',
          tokenBudget: 2048,
          reservedTokens: 2048,
          budgetPriority: -400,
          trimDirection: 'trimBottom',
          insertionType: 'newline',
          insertionPosition: -4
        }
      }
    ],
    placeholders: [
      {
        key: town.name,
        description: `the name of the ${town.type}`,
        defaultValue: town.name
      },
      {
        key: town.type,
        description: `the type of settlement ${town.name} is.`,
        defaultValue: town.type
      },
      {
        key: lib.getPolice(town.factions).name,
        description: 'The name of the guards',
        defaultValue: lib.getPolice(town.factions).name
      },
      {
        key: npcs[town.leader.key].name,
        description: 'name of the leader',
        defaultValue: npcs[town.leader.key].name
      }
    ],
    settings: {
      parameters: {
        temperature: 0.8,
        max_length: 40,
        min_length: 20,
        top_k: 50,
        top_p: 0.9,
        tail_free_sampling: 1,
        repetition_penalty: 2,
        repetition_penalty_range: 512,
        repetition_penalty_slope: 3.33,
        bad_words_ids: [

        ]
      },
      trimResponses: true,
      banBrackets: true,
      prefix: 'theme_generalfantasy'
    },
    lorebook: {
      lorebookVersion: 1,
      entries: [
      ] as LorebookEntry[]
    },
    author: 'Eigengraus Generator'
  }
  const defaults = {
    text: '',
    displayName: '',
    keys: [
    ],
    contextConfig: {
      prefix: '',
      suffix: '\n',
      tokenBudget: 2048,
      reservedTokens: 0,
      budgetPriority: 400,
      trimDirection: 'trimBottom',
      insertionType: 'newline',
      insertionPosition: -1
    },
    lastUpdatedAt: 1624016826515,
    searchRange: 1000,
    enabled: true,
    forceActivation: false,
    key_relative_insertion: false,
    cascading_activation: true
  }
  const npcData: LorebookEntry[] = []
  const buildingData: LorebookEntry[] = []
  const factionData: LorebookEntry[] = []
  for (const temp in npcs) {
    const npc = npcs[temp]
    const npcLore: LorebookEntry = {
      ...defaults,
      text: `${npc.name} is ${lib.articles.output(npc.profession)}. ${npc.heshe.toUpperFirst()} is ${lib.articles.output(npc.descriptor)} who is ${npc.calmTrait} when calm, but gets ${npc.stressTrait} when stressed.`,
      displayName: npc.name,
      keys: [
        npc.firstName,
        npc.name,
        npc.profession,
        npc.race
      ]
    }
    npcData.push(npcLore)
  }
  for (const temp in town.factions) {
    const faction = town.factions[temp]
    const factionLore: LorebookEntry = {
      ...defaults,
      text: faction.tippyDescription,
      displayName: faction.name,
      keys: [
        faction.name,
        faction.type,
        faction?.leader?.name || faction.wordNoun
      ]
    }
    factionData.push(factionLore)
  }
  for (const building of town.buildings) {
    const buildingLore: LorebookEntry = {
      ...defaults,
      text: building.tippyDescription || `${lib.articles.output(building.size || building.wealth || 'normal').toUpperFirst()} ${building.wordNoun} that's ${building.cleanliness}, and is known for ${building.notableFeature}.`,
      displayName: building.name,
      keys: [
        building.name,
        building.type,
        building.specialty || building.notableFeature || 'building'
      ]
    }
    buildingData.push(buildingLore)
  }
  novel.lorebook.entries.push(...npcData, ...buildingData, ...factionData)
  const placeholders = novel.placeholders.map(obj => {
    return obj.key
  })
  novel.prompt = makePlaceholders(novel.prompt, placeholders)
  downloadObjectAsJson(novel, `The ${town.type} of ${town.name}`)
  return novel
}

/** Downloads the object as a `.json` file. */
function downloadObjectAsJson (exportObj: NovelAIScenario | unknown, exportName: string) {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(exportObj))}`
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', `${exportName}.scenario`)
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
