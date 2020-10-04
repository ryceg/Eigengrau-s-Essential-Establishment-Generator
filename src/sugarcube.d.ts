import { NPC } from '../lib/npc-generation/_common'

/*******************************************************************************
  SugarCube overrides.
*******************************************************************************/

declare module 'twine-sugarcube' {
  export interface SugarCubeSettingVariables {
    silverStandard?: boolean
    ignoreGender?: boolean
    showTutorial?: boolean
    showBiomeGenerationSettings?: boolean
    forceOneColumn?: boolean
    hideAds?: boolean
  }

  /**
   * TODO: Fill in these types.
   */
  export interface SugarCubeStoryVariables {
    npcs: Record<string, NPC>
    [key: string]: unknown
  }
}

declare global {
  const setup: Setup
}

export {}
