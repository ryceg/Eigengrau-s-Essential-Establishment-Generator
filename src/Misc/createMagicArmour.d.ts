interface Setup {
  createMagicArmour(): MagicArmour
}

interface MagicArmour {
  type: string
  name: string
  prefixArmour: string
  suffixArmour: string
  prefixProperty: string
  suffixProperty: string
  description: string
}
