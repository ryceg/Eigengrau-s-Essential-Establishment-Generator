interface Setup {
  createNightmare(base?: NightMareBase): string
}

interface NightMareBase {
  figure?: {
    type: string
    prefix?: string
    gender: string
    whoWhich?: string
  }
  location?: string
  wake?: string
  action?: string
  descriptor?: string
}
