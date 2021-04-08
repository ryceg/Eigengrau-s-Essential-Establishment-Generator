import { NPC } from './lib/npc-generation/_common'
import { Town } from './lib/town/_common'

/*******************************************************************************
  SugarCube overrides.
*******************************************************************************/

declare module 'twine-sugarcube' {
  export interface SugarCubeSettingVariables {
    silverStandard?: boolean
    ignoreGender?: boolean
    showTutorial?: boolean
    showBiomeGeneration?: boolean
    showSliders?: boolean
    forceOneColumn?: boolean
    hideAds?: boolean
    disableAnalytics?: boolean
  }

  /**
   * TODO: Fill in these types.
   */
  export interface SugarCubeStoryVariables {
    town: Town
    npcs: Record<string, NPC>
    [key: string]: unknown
  }

  export interface Util {
   slugify(): string
   fromCssTime(): number
   escape(): string
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface SugarCubeSetupObject extends Setup {
  }
}

export {}
