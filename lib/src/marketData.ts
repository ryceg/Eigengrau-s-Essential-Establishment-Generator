import jsonData from './marketData.data.json'

interface MarketData {
  vendors: {
    selling: string[]
    shouts: string[]
    suffix: string[]
    tent: string[]
  };
  location: string[]
  size: string[]
  cleanliness: string[]
  draw: string[]
  organisation: string[]
  crowd: string[]
}

export const market: MarketData = jsonData
