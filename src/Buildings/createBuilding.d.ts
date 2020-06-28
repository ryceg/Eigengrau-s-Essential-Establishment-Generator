interface Setup {
  createBuilding(town: Town, type?: string, base?: Partial<Building>): Building
}

interface Building {
  type: string
  lighting: string
  outside: string
  material: any
  [key: string]: any
}
