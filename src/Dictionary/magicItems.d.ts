interface Setup {
  magicItems: Record<string, MagicItem>
}

interface MagicItem {
  price: {
    sane: string | number,
    DMPG: string | number,
    DMG: string
  },
  rarity: 'common' | 'uncommon' | 'rare' | 'very rare' | 'legendary',
  source: string,
  page: string | number,
  type: string
}