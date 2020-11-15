interface Setup {
  townSquare: {
    passageData: {
      enter: string[]
      subsequentViews: string[]
    }
    rollData: {
      cleanliness: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
      size: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
    }
    feature(): string[]
    crowd: Record<string, Crowd>
    vignettes: Record<string, Vignette>
  }
}

interface Crowd {
  exclusions?(town: Town): boolean
  function(town: Town): string
}

interface Vignette {
  type: string[]
  exclusions?(town: Town): boolean
  function(town: Town): string
}
