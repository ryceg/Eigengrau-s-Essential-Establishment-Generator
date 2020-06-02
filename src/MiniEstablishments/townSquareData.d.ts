interface Setup {
  townSquare: {
    rollData: {
      cleanliness: [number, string][]
      size: [number, string][]
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
