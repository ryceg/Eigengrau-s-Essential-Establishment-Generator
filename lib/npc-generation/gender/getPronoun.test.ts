import { genderData } from '../genderData'
import { getPronoun } from './getPronoun'

describe('getPronoun', () => {
  it('gets the "he" pronoun for a man', () => {
    expect(getPronoun('man', 'heshe')).toEqual('he')
  })

  it('gets the "he" pronoun for a woman', () => {
    expect(getPronoun('woman', 'heshe')).toEqual('she')
  })

  it('gets the "he" pronoun for someone nonbinary', () => {
    expect(getPronoun('entity', 'heshe')).toEqual('it')
  })

  it('gets the "he" pronoun for a man programmatically', () => {
    expect(getPronoun('man', 'heshe')).toEqual(genderData.man.heshe)
  })

  it('gets the "hisherself" pronoun for a woman', () => {
    expect(getPronoun('woman', 'hisherself')).toEqual('herself')
  })

  it('gets the "hisherself" pronoun for a man', () => {
    expect(getPronoun('man', 'hisherself')).toEqual('hisself')
  })

  it('gets the "hisherself" pronoun for a nonbinary person', () => {
    expect(getPronoun('nonbinary', 'hisherself')).toEqual('theirself')
  })

  it('gets the "himherself" pronoun for a man', () => {
    expect(getPronoun('man', 'himherself')).toEqual('himself')
  })

  it('gets the "himherself" pronoun for a woman', () => {
    expect(getPronoun('woman', 'himherself')).toEqual('herself')
  })

  it('gets the "himherself" pronoun for a nonbinary person', () => {
    expect(getPronoun('nonbinary', 'himherself')).toEqual('themself')
  })
})
