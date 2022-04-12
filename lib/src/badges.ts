interface Badge {
  /** Override the default left-hand-side text (URL-Encoding needed for spaces or special characters!) */
  label?: string
  /**
   * Insert one of the named logos from (bitcoin, dependabot, discord, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or simple-icons.
   * Simple-icons are referenced using names as they appear on the simple-icons site.
   * If the name includes spaces, replace them with dashes (e.g: ?logo=visual-studio-code)
   * @see https://simpleicons.org/
   * */
  logo?: string
  /** Right-hand-side text (URL-Encoding needed for spaces or special characters!) */
  message?: string
  /**
   * Set background of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).
   */
  color?: string
  /**
   * Set the color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported).
   * Supported for named logos but not for custom logos.
   * */
  logoColor?: string
  /** Set the horizontal space to give to the logo */
  logoWidth?: number
  /**
   * Specify what clicking on the left/right of a badge should do.
   * Note that this only works when integrating your badge in an<object> HTML tag, but not an<img> tag or a markup language.
   */
  link?: URL | string
  /**
   * Set background of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported).
   */
  labelColor?: string
  style?: 'plastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'social'
  /** Generated from label and message if not provided. */
  alt?: string
  /**
   * Defines where to get the badge from. For dynamic badges, this should be the endpoint
   * @example '/github/stars/ryceg/Eigengrau-s-Essential-Establishment-Generator'
   * @default '/badge/'
   */
  source?: string
  /** For styling the img */
  imgArgs?: string
}

export const createFunBadge = () => {
  return lib.createBadge(lib.random(lib.badges.fun), { imgArgs: 'style=width:100% id="fun-badge" onclick="funBadgeClick(this)"' })
}

export const createBadgeSrc = (badge: Badge, opts: Partial<Badge>) => {
  let url = 'https://img.shields.io'
  Object.assign(badge, opts)
  url += encodeURI(badge.source || '/badge/')
  if (!badge.source) {
    url += encodeURI(`${badge.label}-`)
    url += encodeURI(`${badge.message}-`)
    url += encodeURI(`${badge.color || 'blue'}`)
  } else {
    if (badge.label) url += encodeURI(`?label=${badge.label}`)
  }
  // ? url += '&' : url += '?'
  if (url.includes('endpoint') || url.includes('?label=')) {
    url += '&'
  } else {
    url += '?'
  }

  url += encodeURI(`style=${badge.style || 'for-the-badge'}`)
  if (badge.source) url += encodeURI(`&color=${badge.color}`)
  if (badge.logo) url += encodeURI(`&logo=${badge.logo}`)
  if (badge.logoWidth) url += encodeURI(`&logoWidth=${badge.logoWidth}`)
  if (badge.labelColor) url += encodeURI(`&labelColor=${badge.labelColor}`)
  return url
}

export const createBadge = (badge: Badge, opts: Partial<Badge>) => {
  const url = createBadgeSrc(badge, opts)
  const alt = badge.alt || `${badge.label} ${badge.message}` || 'A fun badge'
  let img = `<img alt="${alt}" `

  if (badge.imgArgs) img += badge.imgArgs
  img += ` src="${url}">`

  if (badge.link) return `<a href="${badge.link}" target="_blank">${img}</a>`
  return img
}

export const badges: {
  sensible: Badge[]
  fun: Badge[]
  stats: Record<string, Badge>
} = {
  sensible: [
    {
      label: 'Coded in',
      message: 'VSCode',
      logo: 'visual-studio-code'
    },
    {
      label: 'Linting by',
      message: 'ESLint',
      logo: 'ESLint'
    },
    {
      label: 'Uses',
      message: 'TypeScript',
      logo: 'typescript'
    },
    {
      label: 'Uses',
      message: 'Google Domains',
      logo: 'Google Domains'
    },
    {
      label: 'Sponsor',
      message: 'on GitHub',
      logo: 'Github Sponsors',
      link: 'https://github.com/sponsors/ryceg'
    },
    {
      label: 'Buy me',
      message: 'a coffee',
      logo: 'ko-fi',
      link: 'https://ko-fi.com/eigengrausgenerator'
    },
    {
      label: 'Follow on',
      message: 'Reddit',
      logo: 'reddit',
      link: 'https://reddit.com/r/eigengrausgenerator'
    },
    {
      label: 'Errors by',
      message: 'Sentry',
      logo: 'sentry'
    }

  ],
  fun: [
    {
      label: 'Made with',
      message: 'real babies',
      color: 'pink'
    },
    {
      label: 'Ctrl + C',
      message: 'Ctrl + V'
    },
    {
      label: 'Contains',
      message: 'spaghetti code'
    },
    {
      label: 'Contains',
      message: 'technical debt'
    },
    {
      label: 'Designed in',
      message: 'MS Paint'
    },
    {
      label: 'Contains',
      message: 'tree nuts'
    },
    {
      label: 'Roll',
      message: 'initiative'
    },
    {
      label: 'Roll',
      message: 'to seduce',
      logo: 'tinder',
      color: 'FF6B6B'
    },
    {
      label: 'No added',
      message: 'PHP',
      logo: 'php'
    },
    {
      label: 'A wizard',
      message: 'did it'
    },
    {
      label: 'Boblin',
      message: 'the goblin'
    },
    {
      label: 'Just works.',
      message: 'Barely.'
    },
    {
      label: 'Please',
      message: 'hire me',
      link: 'https://linkedin.com/in/rhys-gray'
    },
    {
      label: 'Dwarves are natural',
      message: 'sprinters'
    },
    {
      label: 'Object(ive)',
      message: 'Oriented'
    },
    {
      label: 'Non-functional',
      message: 'Programming'
    },
    {
      label: 'Include me in the',
      message: 'screenshot'
    },
    {
      label: 'Tell /r/dndmemes',
      message: 'I said hi',
      link: 'https://www.reddit.com/r/dndmemes/submit'
    },
    {
      label: 'Don\'t use',
      message: 'Fumble Tables'
    },
    {
      label: 'Drug free',
      message: 'Group hallucinations'
    },
    {
      label: 'Level 20',
      message: 'Procrastinator'
    },
    {
      label: 'Peasant',
      message: 'Railgun'
    },
    {
      label: 'How does',
      message: 'grappling work'
    },
    {
      label: 'I am not a',
      message: 'clever man'
    },
    {
      label: 'Heal me',
      message: 'please',
      color: 'pink'
    },
    {
      label: 'murder',
      message: 'hobo'
    },
    {
      label: 'I have',
      message: 'Darkvision'
    },
    {
      label: 'Works on',
      message: 'my machine'
    },
    {
      label: 'Bring back',
      message: 'Club Penguin'
    },
    {
      label: 'how do you want to',
      message: 'do this'
    },
    {
      label: 'Cool motive.',
      message: 'Still murder.'
    },
    {
      label: "I'm chaotic",
      message: 'stupid'
    },
    {
      label: 'Clickety clackety',
      message: 'roll to attackety'
    },
    {
      label: "The poor man's",
      message: 'AI Dungeon',
      logo: 'AI Dungeon'
      // link: 'https://play.aidungeon.io/'
    },
    {
      label: 'No Brain',
      message: 'Required'
    },
    {
      label: 'I Cast',
      message: 'Fireball',
      color: 'red'
    },
    {
      label: 'Do we',
      message: 'level up yet',
      color: 'green'
    }
  ],
  stats: {
    discordOnline: {
      alt: 'Currently online in Discord',
      label: 'Discord',
      source: '/discord/441105601918009349',
      logo: 'Discord',
      link: 'https://discord.gg/A543VC5',
      color: '7289da',
      labelColor: '2c2f33'
    },
    patreonSupporters: {
      alt: 'Number of patrons currently supporting me',
      link: 'https://patreon.com/join/eigengrausgenerator',
      labelColor: '052d49',
      color: 'f96854',
      source: '/endpoint.svg?url=https://shieldsio-patreon.vercel.app/api?username=eigengrausgenerator'
    },
    subredditSubscribers: {
      alt: 'Subreddit subscribers',
      source: '/reddit/subreddit-subscribers/eigengrausgenerator',
      link: 'https://reddit.com/r/eigengrausgenerator',
      logo: 'reddit',
      color: 'FF5700'
    },
    githubStars: {
      alt: 'GitHub stars',
      label: 'GitHub Stars',
      source: '/github/stars/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      color: '6cc644'
    },
    githubForks: {
      alt: 'GitHub forks',
      label: 'GitHub Forks',
      source: '/github/forks/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      color: '6cc644'
    },
    githubContributors: {
      alt: 'GitHub Contributors',
      source: '/github/contributors/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      link: 'https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/graphs/contributors',
      color: '6cc644'
    },
    commitsSinceLastUpdate: {
      alt: 'Commits since last update',
      source: '/github/commits-since/ryceg/Eigengrau-s-Essential-Establishment-Generator/2.8',
      logo: 'github',
      color: '6cc644'
    },
    monthlyActivity: {
      alt: 'Monthly activity',
      source: '/github/commit-activity/m/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      link: 'https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/graphs/code-frequency',
      color: '6cc644'
    },
    timeSinceLastCommit: {
      alt: 'Time since last commit',
      source: '/github/last-commit/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      link: 'https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/network',
      color: '6cc644'
    },
    linesOfCode: {
      alt: 'Lines of code',
      source: '/tokei/lines/github/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      color: '6cc644'
    },
    issues: {
      alt: 'Issues',
      source: '/github/issues/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      link: 'https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues',
      logo: 'github',
      color: 'c9510c'
    },
    issuesClosed: {
      alt: 'Issues closed',
      source: '/github/issues-closed/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      link: 'https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aclosed',
      logo: 'github',
      color: '4078c0'
    },
    pullRequestsClosed: {
      alt: 'Pull requests closed',
      source: '/github/issues-pr-closed/ryceg/Eigengrau-s-Essential-Establishment-Generator',
      logo: 'github',
      color: '4078c0'
    }
  }
}
