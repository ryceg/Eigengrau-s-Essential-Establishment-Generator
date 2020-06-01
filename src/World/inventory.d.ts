interface Setup {
  inventory: (InventoryDataA | InventoryDataB)[]
}

interface InventoryData {
  name: string
  cost: number
  availabilityLocation: string[]
  availability: number
}

interface InventoryDataA extends InventoryData {
  type: "tools" | "weapon" | "armour" | "adventuring gear" | "consumable"
}

interface InventoryDataB extends InventoryData {
  dietary: "omni" | "carni" | "veg"
}
