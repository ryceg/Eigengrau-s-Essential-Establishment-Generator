import RiTa from 'rita'

interface RitaAnalyze {
  phones: string
  pos: string
  stresses: string
  syllables: string
  tokens: string
}

export function extractIpa (word: string) {
  return arpabetToIpa(RiTa.analyze(word) || word)
}

// export function convertToPastTense (sentence: string) {
//   const basics: Record<string, string> = {
//     is: 'was',
//     are: 'were',
//     has: 'had',
//     have: 'had'
//   }
//   const output: string[] = []
//   const tokens: string[] = RiTa.tokenize(sentence)
//   for (const word of tokens) {
//     if (basics[word]) {
//       output.push(basics[word])
//     } else if (RiTa.isVerb(word)) {
//       output.push(
//         RiTa.pastPart(
//           RiTa.singularize(word)))
//     } else {
//       output.push(word)
//     }
//   }
//   return RiTa.untokenize(output)
// }

export function arpabetToIpa (analyze: RitaAnalyze) {
  // const ipaSounds = {
  //   'ɑ': {
  //     examples: ['fast, car, hard, bath'],
  //     type: ''
  //   },
  //   'ɔ': {
  //     examples: ['talk, law, bored, yawn, jaw'],
  //     type: ''
  //   },
  //   'ɚ': {
  //     examples: ['hearse, assert, mirth'],
  //     type: ''
  //   },
  //   'ɝ': {
  //     examples: ['hearse, assert, mirth'],
  //     type: ''
  //   },
  //   'ɨ': {
  //     examples: ['the weak vowel heard in the second syllable of roses'],
  //     type: ''
  //   },
  //   // 'ʉ': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'ɾ': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'l̩': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'm̩': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'n̩': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'ɾ̃': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'ɹ': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   // 'ʍ': {
  //   //   examples: [],
  //   //   type: ''
  //   // },
  //   'ɪə': {
  //     examples: ['ear', 'clear', 'tear', 'beer', 'fear'],
  //     type: ' '
  //   },
  //   'eə': {
  //     examples: ['there', 'care', 'stairs', 'pear'],
  //     type: ' '
  //   },
  //   'əʊ': {
  //     examples: ['no', 'don’t', 'stones', 'alone', 'hole'],
  //     type: ' '
  //   },
  //   'g': {
  //     examples: ['girl', 'green', 'grass', 'flag'],
  //     type: ' '
  //   },
  //   'ʈʃ': {
  //     examples: ['choose', 'cheese', 'church', 'watch'],
  //     type: ' '
  //   },
  //   'ɫ': {
  //     examples: ['law', 'lots', 'leap', 'long', 'pill', 'cold', 'chill', 'melt'],
  //     type: ' '
  //   },
  //   'b': {
  //     examples: ['buy', 'cab'],
  //     type: 'Consonants'
  //   },
  //   'd': {
  //     examples: ['dye', 'cad', 'do'],
  //     type: 'Consonants'
  //   },
  //   'ð': {
  //     examples: ['thy', 'breathe', 'those', 'brothers', 'others', 'father'],
  //     type: 'Consonants'
  //   },
  //   'dʒ': {
  //     examples: ['giant', 'badge', 'jam'],
  //     type: 'Consonants'
  //   },
  //   'f': {
  //     examples: ['fan', 'caff', 'phi'],
  //     type: 'Consonants'
  //   },
  //   'ɡ': {
  //     examples: ['guy', 'bag'],
  //     type: 'Consonants'
  //   },
  //   'h': {
  //     examples: ['high', 'ahead'],
  //     type: 'Consonants'
  //   },
  //   'hw': {
  //     examples: ['why'],
  //     type: 'Consonants'
  //   },
  //   'j': {
  //     examples: ['yes', 'hallelujah'],
  //     type: 'Consonants'
  //   },
  //   'k': {
  //     examples: ['sky', 'crack'],
  //     type: 'Consonants'
  //   },
  //   'l': {
  //     examples: ['lie', 'sly', 'gal'],
  //     type: 'Consonants'
  //   },
  //   'm': {
  //     examples: ['my', 'smile', 'cam'],
  //     type: 'Consonants'
  //   },
  //   'n': {
  //     examples: ['nigh', 'snide', 'can'],
  //     type: 'Consonants'
  //   },
  //   'ŋ': {
  //     examples: ['sang', 'sink', 'singer'],
  //     type: 'Consonants'
  //   },
  //   'θ': {
  //     examples: ['thigh', 'math'],
  //     type: 'Consonants'
  //   },
  //   'p': {
  //     examples: ['pie', 'spy', 'cap'],
  //     type: 'Consonants'
  //   },
  //   'r': {
  //     examples: ['rye', 'try', 'very'],
  //     type: 'Consonants'
  //   },
  //   's': {
  //     examples: ['sigh', 'mass'],
  //     type: 'Consonants'
  //   },
  //   'ʃ': {
  //     examples: ['shy', 'cash', 'emotion'],
  //     type: 'Consonants'
  //   },
  //   't': {
  //     examples: ['tie', 'sty', 'cat', 'atom'],
  //     type: 'Consonants'
  //   },
  //   'tʃ': {
  //     examples: ['china', 'catch'],
  //     type: 'Consonants'
  //   },
  //   'v': {
  //     examples: ['vie', 'have'],
  //     type: 'Consonants'
  //   },
  //   'w': {
  //     examples: ['wye', 'swine'],
  //     type: 'Consonants'
  //   },
  //   'z': {
  //     examples: ['zoo', 'has'],
  //     type: 'Consonants'
  //   },
  //   'ʒ': {
  //     examples: ['equation', 'pleasure', 'vision', 'beige'],
  //     type: 'Consonants'
  //   },
  //   'x': {
  //     examples: ['ugh', 'loch', 'Chanukah'],
  //     type: 'Marginal consonants'
  //   },
  //   'ʔ': {
  //     examples: ['uh-oh /ˈʔʌʔoʊ/'],
  //     type: 'Marginal consonants'
  //   },
  //   '˜': {
  //     examples: ['bon vivant /ˌbɒ̃ viːˈvɒ̃/'],
  //     type: 'Marginal consonants'
  //   },
  //   'ɑː': {
  //     examples: ['palm', 'father', 'bra'],
  //     type: 'Full vowels'
  //   },
  //   'ɒ': {
  //     examples: ['lot', 'pod', 'John'],
  //     type: 'Full vowels'
  //   },
  //   'æ': {
  //     examples: ['trap', 'pad', 'ban'],
  //     type: 'Full vowels'
  //   },
  //   'aɪ': {
  //     examples: ['price', 'ride', 'file', 'fine', 'pie'],
  //     type: 'Full vowels'
  //   },
  //   'aʊ': {
  //     examples: ['mouth', 'loud', 'foul', 'down', 'how'],
  //     type: 'Full vowels'
  //   },
  //   'ɛ': {
  //     examples: ['dress', 'bet', 'fell', 'men'],
  //     type: 'Full vowels'
  //   },
  //   'eɪ': {
  //     examples: ['face', 'made', 'fail', 'vein', 'pay'],
  //     type: 'Full vowels'
  //   },
  //   'ɪ': {
  //     examples: ['kit', 'lid', 'fill', 'bin'],
  //     type: 'Full vowels'
  //   },
  //   'iː': {
  //     examples: ['fleece', 'seed', 'feel', 'mean', 'sea'],
  //     type: 'Full vowels'
  //   },
  //   'ɔː': {
  //     examples: ['thought', 'Maud', 'dawn', 'fall', 'straw'],
  //     type: 'Full vowels'
  //   },
  //   'ɔɪ': {
  //     examples: ['choice', 'void', 'foil', 'coin', 'boy'],
  //     type: 'Full vowels'
  //   },
  //   'oʊ': {
  //     examples: ['goat', 'code', 'foal', 'bone', 'go'],
  //     type: 'Full vowels'
  //   },
  //   'ʊ': {
  //     examples: ['foot', 'good', 'full', 'woman'],
  //     type: 'Full vowels'
  //   },
  //   'uː': {
  //     examples: ['goose', 'food', 'fool', 'soon', 'chew', 'do'],
  //     type: 'Full vowels'
  //   },
  //   'juː': {
  //     examples: ['cute', 'mule', 'puny', 'beauty', 'huge', 'you', 'tune'],
  //     type: 'Full vowels'
  //   },
  //   'ʌ': {
  //     examples: ['strut', 'bud', 'dull', 'gun'],
  //     type: 'Full vowels'
  //   },
  //   'ɑːr': {
  //     examples: ['start', 'bard', 'barn', 'snarl', 'star'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɒr': {
  //     examples: ['rob', 'top', 'watch', 'squat', 'moral', 'forage'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ær': {
  //     examples: ['barrow', 'marry'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'aɪər': {
  //     examples: ['ireland', 'hire (= /aɪr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'aɪ.ər': {
  //     examples: ['higher', 'buyer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'aʊər': {
  //     examples: ['flour (= /aʊr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'aʊ.ər': {
  //     examples: ['flower'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɛr': {
  //     examples: ['error', 'merry'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɛər': {
  //     examples: ['square', 'mare', 'scarce', 'cairn', 'Mary (= /eɪr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'eɪ.ər': {
  //     examples: ['layer (one who lays)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɪr': {
  //     examples: ['mirror', 'Sirius'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɪər': {
  //     examples: ['near', 'beard', 'fierce', 'serious (= /iːr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'iː.ər': {
  //     examples: ['freer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɔːr': {
  //     examples: ['north', 'born', 'war', 'Laura'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɔː.ər': {
  //     examples: ['sawer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɔɪər': {
  //     examples: ['coir (= /ɔɪr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɔɪ.ər': {
  //     examples: ['employer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɔər': {
  //     examples: ['force', 'more', 'boar', 'oral (= /oʊr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'oʊ.ər': {
  //     examples: ['mower'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ʊr': {
  //     examples: ['courier'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ʊər': {
  //     examples: ['boor', 'moor', 'tourist (= /uːr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'uː.ər': {
  //     examples: ['truer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'jʊər': {
  //     examples: ['cure (= /juːr/)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'juː.ər': {
  //     examples: ['fewer'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ɜː': {
  //     examples: ['nurse', 'word', 'girl', 'fern', 'furry'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ʌr': {
  //     examples: ['hurry', 'nourish (in the UK)'],
  //     type: 'Full vowels followed by R'
  //   },
  //   'ə': {
  //     examples: ['comma', 'Rosa’s', 'ago', 'quiet', 'focus'],
  //     type: 'Reduced vowels'
  //   },
  //   'i': {
  //     examples: ['happy', 'serious[24] (either /ɪ/ or /iː/)'],
  //     type: 'Reduced vowels'
  //   },
  //   'ᵻ': {
  //     examples: ['roses', 'enough[26] (either /ɪ/ or /ə/)'],
  //     type: 'Reduced vowels'
  //   },
  //   'ər': {
  //     examples: ['letter', 'perceive'],
  //     type: 'Reduced vowels'
  //   },
  //   'əl': {
  //     examples: ['bottle (either [əl] or [l̩])'],
  //     type: 'Reduced vowels'
  //   },
  //   'ən': {
  //     examples: ['button (either [ən] or [n̩])'],
  //     type: 'Reduced vowels'
  //   },
  //   'əm': {
  //     examples: ['rhythm (either [əm] or [m̩])'],
  //     type: 'Reduced vowels'
  //   },
  //   'u': {
  //     examples: ['situation (either /ʊ/ or /uː/)'],
  //     type: 'Reduced vowels'
  //   },
  //   'ᵿ': {
  //     examples: ['beautiful', 'curriculum ([jᵿ])[27] (either /ʊ/ or /ə/)'],
  //     type: 'Reduced vowels'
  //   },
  //   'ˈ': {
  //     examples: ['intonation /ˌɪntəˈneɪʃən/,'],
  //     type: 'Stress'
  //   },
  //   'ˌ': {
  //     examples: ['battleship /ˈbætəlʃɪp'],
  //     type: 'Stress'
  //   },
  //   '.': {
  //     examples: ['/haɪər/ hire', '/haɪ.ər/ higher'],
  //     type: 'Syllabification'
  //   }
  // }
  const arpabetToIpaTable: Record<string, string> = {
    AA: 'ɑ',
    AE: 'æ',
    AH: 'ʌ',
    AO: 'ɔ',
    AW: 'aʊ',
    AX: 'ə',
    AXR: 'ɚ',
    AY: 'aɪ',
    EH: 'ɛ',
    ER: 'ɝ',
    EY: 'eɪ',
    IH: 'ɪ',
    IX: 'ɨ',
    IY: 'i',
    OW: 'oʊ',
    OY: 'ɔɪ',
    UH: 'ʊ',
    UW: 'u',
    UX: 'ʉ',
    B: 'b',
    CH: 'tʃ',
    D: 'd',
    DH: 'ð',
    DX: 'ɾ',
    EL: 'l̩',
    EM: 'm̩',
    EN: 'n̩',
    F: 'f',
    G: 'ɡ',
    HH: 'h',
    JH: 'dʒ',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    NG: 'ŋ',
    NX: 'ɾ̃',
    P: 'p',
    Q: 'ʔ',
    R: 'ɹ',
    S: 's',
    SH: 'ʃ',
    T: 't',
    TH: 'θ',
    V: 'v',
    W: 'w',
    WH: 'ʍ',
    Y: 'j',
    Z: 'z',
    ZH: 'ʒ'
  }
  const arrayOfWords = analyze.phones.split(' ')
  let resultantString = ''
  for (const word of arrayOfWords) {
    const phoneme = word.split('-')
    for (const key of phoneme) {
      resultantString += arpabetToIpaTable[key.toUpperCase()]
    }
    resultantString += ' '
  }

  return `/${resultantString}/.`
}
