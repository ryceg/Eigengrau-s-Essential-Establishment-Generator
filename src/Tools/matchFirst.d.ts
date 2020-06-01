interface Setup {
  matchFirst: {
    equalTo: MatchModifier
    notEqualTo: MatchModifier
    largerThan: MatchModifier
    largerThanOrEqualTo: MatchModifier
    smallerThan: MatchModifier
    smallerThanOrEqualTo: MatchModifier
  }
}

type MatchCallback = (value: number, key: number) => boolean

type MatchModifier = <T>(
  value: number,
  map: Record<number, T>,
  defaultValue?: T
) => T
