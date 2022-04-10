
interface CastleDefenseData {
  reason: string[]
  innerWalls: string[]
  outerWalls: string[]
}

export const castleDefense: CastleDefenseData = {
  reason: [
    'the surrounding lands are part of a long-standing territorial dispute',
    'the surrounding land is held sacred',
    'the nearby lands are home to a rare herb, tree, or creature that has magical uses'
  ],
  outerWalls: [
    'very high stone walls',
    'incredibly thick stone walls',
    'a series of curtain walls and gatehouses',
    'a treacherous climb to reach the castle walls',
    'a moat filled with putrescent water',
    'a moat filled with thick, boot-sucking mud',
    'a moat filled with sharp spikes',
    'a moat that is home to one or more dangerous aquatic beasts',
    'an immense barbican',
    'a narrow footbridge to reach the postern',
    'hidden pitfalls full of sharp spikes',
    'a retractable drawbridge over a muddy moat',
    'caged war dogs'
  ],
  innerWalls: [
    'hundreds of arrow slits',
    "one of the world's largest dual-portcullis gates",
    'a winding climb to reach the entrance',
    'several covered parapets with murder holes under which intruders must pass',
    'a wide courtyard surrounded by flanking towers in the curtain wall',
    'an unusual or hidden means of entry',
    'several heavy-duty, mounted balistas',
    'several mounted buckets of hot tar',
    'a set of trapped stairs going up to the entrance that can be turned into a ramp',
    'a set of heavy iron doors'
  ]
}
