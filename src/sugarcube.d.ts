/* eslint-disable @typescript-eslint/no-explicit-any */

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
    [key: string]: unknown
  }
}

declare global {
  const setup: Setup
}

export {}
