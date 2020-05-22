interface Setup {
  /**
   * Creates the readout part of a tooltip.
   */
  createTippy(readout: string): string
  /**
   * Creates the word part of a tooltip.
   */
  createTippyWord(tippy: string, word: string): string
  /**
   * Creates a full tooltip, with both the readout and the word.
   */
  createTippyFull(readout: string, word: string): string
}