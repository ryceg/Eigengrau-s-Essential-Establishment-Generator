# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Unreleased

### Added
- Description of racial makeup to the start page.
- Ability to edit dominant gender
- Customers
- Relationships between buildings and NPCs

### Changed
- Added race in dropdown NPC creation tool in the toolbox.
- Fixed some bugs introduced in the last update.
- Bug fixes for Tippy
- Fix tavern material being [object Object]
- Alchemist bugs
- Fix creating new faction.
- Improvements to onboarding process

### Removed
- 'Return' option in profile pages has been removed to force navigation through the breadcrumb.

### Known issues
- Spymasters still sometimes live in abject poverty.

## [2.4.1](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/releases/tag/2.4.1)

### Added 
- Option to change biome before town creation
- Create NPC function in toolbox
- Added functionality to delete NPCs
- Added functionality to delete buildings
- More sophisticated breadcrumb system allowing for infinite links
- List of professions in town now shows associated NPCs, and gives option to create new NPC
- Hyperlink on version number to latest changelog

### Changed
- Minor fixes to NPC edit page, still thoroughly beta
- Genericized profile tool, increasing stability
- Fix encounter instability
- Fix (most) weather instability
- Fix nightmare function

### Removed
- Primitive plothook function from tavern patron

### Known Issues  
- Changing town name still does not update buildings that reference the town
- Weather still occasionally bugs out

## [2.4](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/releases/tag/2.4)

### Added 
- Tutorial
- Fletchers
- More meat in the butcher
- Additional text
- Indefinite article support
- NPC debt- creditors, debtors, and curtailed hoarding of wealth.
- PRNG by default, taken from the URL's location hash (everything after the #, incl. the hash)
- URL seeds following the gfycat naming convention of adjective+adjective+animal
- Temporary highlighting of newly created building
- Gender equality description, minor mechanical effects
- Option to disable 'realistic' gendered occupations
- NPC religion
- NPC relationships generator (previous was primitive, based off the Life Events function)
- - Includes friends, drinking buddies, exes, old flames, neighbors, acquaintances, and secret crushes
- NPC professions will generate relevant associations i.e. butlers will usually have an associated employer.
- - This is an ongoing project, which will help make towns feel like living, breathing entities.
- Baked good generator


### Changed
- Updated dependencies
- Tooltips use dotted underline instead of bolding text now
- Fixed Sugarcube & TweeGo install links
- Building list is now alphabetically ordered
- Fixed some bugs with roofs
- Minor bug with factions fixed
- New background
- Reduced file size slightly
- Relationships chart on NPC page now includes race, occupation, and the reciprocal relationship
- Communism, syndicalism, and alternate economic and political ideologies have been rebalanced to be much rarer.

### Known issues
- toUpperFirst() is sometimes not defined on the NPC profile page
- NPC partner's finances are totally separate, leading to amusing issues with spy masters living in abject poverty

## v2.3 (which was never released, so count this as v2.4, too)

### Added

- Generic structure creation function
- Deployment overhaul (thanks, Glinkis!)
- Link to Discord in the sidebar
- Link to Github Repository in the sidebar
- Tailors
- Bakeries
- Florists
- Butchers
- Cobblers
- Barbers
- Taxation
- Living standards
- Daily wage
- Over 300 new professions
- Profession descriptions
- Generate a crewmember function for ships
- Riddles
- Druid and Clergy factions
- Over 100 new prefixes and suffixes for town name generation
- Physical traits based on body parts
- 10 new potential life events
- Expanded Family Trees
- Blacksmith Plothooks
- Temple Blessings
- Tavern Unique Features

### Changed

- Plain text title to banner
- Buildings can share streets
- Grouping of buildings is now done via street _then_ type of building.
- Bug fixes for Mountain scenarios
- Dock ship descriptions expanded
- Market vendors no longer persist between different markets
- Minor UI Rework
- Button reskinning
- Minor temple readout reformat
- Minor Brothel readout reformat
- Minor Tavern Reformat
- Share button in sidebar
- Main Shops output rework
- New entertainers in tavern
- Blacksmith current projects now reflect the blacksmith's skills
- Tons of bug squashing


### Removed

- Dead code
- Non-poster based plothooks from the tavern

## v2.2

### Added

- More robust relationships system, including half-breed handling.
- NPC sexuality
- Social class system, which effects relationships and available occupations

### Changed

- Fixed most of the town slider bugs related to wealth and socioeconomic structure.
- Fixed market vendors resetting each visit.
- Fixed most of the weather bugs

### Removed

## v2.1

### Added

- Docks
- Town squares
- Town plothooks
- Poster based plothooks
- Option to omit weather
- Relationship chart! Now, when people talk of their friend that they met while travelling, you can _meet_ that friend!
- Blacksmiths that reference sisters or sons etc will now actually have those sisters or sons.

### Changed

- Huge behind the scenes overhaul of how things are linked to, simplifying a lot of things.
- Bug fixes for town leadership.
- Properly clamped establishments so they won't have rolls out of bounds.
- Fixed editing NPCs defaulting to male acolyte barbarians.
- Fixed broken town rolls
- Fixed NPC relationships not displaying properly
- Minor change to the formatting of the start page

### Removed

- The annoying hyperlink symbol for the Patreon & Ko-Fi links
