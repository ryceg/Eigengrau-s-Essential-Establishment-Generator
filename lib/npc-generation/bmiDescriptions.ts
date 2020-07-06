import jsonData from './bmiDescriptions.data.json'

interface BMIDescription {
  bmi: number
  muscleMass: number
  weight: string
}

export const bmiDescriptions: BMIDescription[] = jsonData
