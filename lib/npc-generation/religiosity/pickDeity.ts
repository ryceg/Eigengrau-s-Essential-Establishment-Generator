
export const pickDeity = (deityPicker: number, pool: Record<string, {
  probability: number;
  name: string;
}>) => {
  for (const item in pool) {
    deityPicker -= pool[item].probability
    if (deityPicker < 0) {
      return item
    }
  }
  return pool[Object.keys(pool)[0]].name
}
