import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { Town } from './_common'

export function getTownLaw (town: Town): string {
  const roll = town.roll.law
  const kleptocracyTable: ThresholdTable = [
    [90, `Law in ${town.name} is completely one sided. Those that breach the complex and codified list of laws and do not have the protection of the Thieves' Guild can expect hard labor, incarceration, or public execution. The Thieves' Guild controls the law, and have free reign as a result.`],
    [80, `Law in ${town.name} is totally one sided. Those that breach the complex list of laws and do not have the protection of the Thieves' Guild can expect hard labor, incarceration, or sometimes, even public execution. The Thieves' Guild controls the law, and have free reign as a result.`],
    [70, `Law in ${town.name} is very much in favour of the Thieves' Guild that runs the town. Their political power renders them virtually immune to the law, and criminals fear them more than the judicial system.`],
    [60, `Law in ${town.name} is in favour of the Thieves' Guild that runs the town. Their political power renders them largely above the law, and criminals fear them more than the judicial system.`],
    [50, `Law in ${town.name} is in favour of the Thieves' Guild that run the kleptocratic government. Their political power renders them mostly the law, and crime is rampant.`],
    [40, `Law in ${town.name} is slack, perhaps intentionally so- the Thieves' Guild that control the government would not be above bending the laws in their favour.`],
    [30, `Law in ${town.name} is quite slack as a result of a kleptocratic government. Those not aligned with the Thieves' Guild can expect harsh fines for crime.`],
    [20, `Law in ${town.name} is almost non existant for the members of the kleptocratic government that controls ${town.name}. For the common people, though, one can expect to lose a hand for stealing a loaf of bread without paying your Guild membership fees.`],
    [0, `Law in ${town.name} is basically non existant for the Thieves' Guild members that control the government. Common folk can lose a hand or their head for stealing a loaf of bread without paying their Guild membership fees, though.`]
  ]

  const lawTable: ThresholdTable = [
    [90, `Law in ${town.name} is overwhelmingly punitive, and those that breach the complex and codified list of laws can expect hard labor, incarceration, or public execution. Crime is seen as a stain, which cannot be erased, and only through retribution can it be redeemed.`],
    [80, `Law in ${town.name} is extremely punitive, and those that breach the complex list of laws can expect hard labor, incarceration, or sometimes public execution. Crime is an ugly stain on humanity, to be punished wherever possible.`],
    [70, `Law in ${town.name} is very much punitive based, and those that breach the laws can expect hard labor, incarceration, or sometimes public execution. Crime is an ugly stain on humanity, to be punished.`],
    [60, `Law in ${town.name} is punitive based, and those that breach the laws can expect hard labor, incarceration, fines, or, in some instances, public execution. Crime is an ugly stain on humanity, to be removed wherever possible.`],
    [50, `Law in ${town.name} is punitive, and those that breach the laws can expect hard labor, incarceration, fines, or, in rare instances, execution.`],
    [40, `Law in ${town.name} is somewhat reform-based, and those that breach the laws can expect hard labor, incarceration, or fines. The death penalty is typically reserved for traitors to the state.`],
    [30, `Law in ${town.name} is reform-based, and those that breach the laws can expect incarceration, fines, or going to an asylum for reform. The death penalty is reserved only for traitors to the state.`],
    [20, `Law in ${town.name} is reform-based, and those that breach the laws can expect incarceration, fines, asylums, or work-release programs to provide them with the chance to not become a recidivist. The death penalty is reserved only for traitors to the state.`],
    [0, `Law in ${town.name} is reform-based, and those that breach the laws can expect fines, penalties, or work-release programs to provide them with the best possible chance to not become a recidivist.`]
  ]

  const result = getRolledFromTable(town.politicalIdeology === 'magocracy' ? kleptocracyTable : lawTable, roll)
  assert(typeof result === 'string')
  return result
}
