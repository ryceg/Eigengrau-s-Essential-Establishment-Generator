type Output<A> = "object" | keyof A

type Exclusion<T> = (town: Town, obj: Arg<T>) => boolean

interface Arg<T> {
  probability?: number
  exclusions?(town: Town, obj: T): boolean
  function?(town: Town, obj: T): any
  [key: string]: any
}

interface Setup {
  weightedRandomFetcher<A extends Arg<T>, T, O extends Output<A>>(
    town: Town,
    args: Record<string, A>,
    obj?: T,
    exclusionFunction?: Exclusion<T>,
    output?: O,
    defaultProbability?: number
  ): /* 
    We use a conditional return here
    to cover all the available cases.
  */
  undefined extends O
    ? A["function"]
    : O extends "object"
    ? A
    : A[O] extends Function
    ? ReturnType<A[O]>
    : A[O]
}
