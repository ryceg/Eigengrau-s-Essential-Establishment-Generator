# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Unreleased

### Added
- Changed license to MIT
- Road system
- Export to Foundry VTT 
- Export to GMBinder
- Export to JSON
- Faction editing
### Changed
- Buildings are ordered via road.
- Overhauled the faction resources.
- Changed the errors to be slightly less obtrusive.
- Fixed a bug with marriages
- Fixed a bug with tavern sleep
- Ported over a lot of code to TypeScript

### Removed
- Weapons in NPC profile (for now- they'll be back!)
## 2.6.3

### Added
- Tag that will make it much easier to force one-column layout for elements that should always be presented in one column
- Some traits and bits of text here and there
- Lots of interfaces for improved code reliability in future
- Sliders and editing for factions

### Changed
- Made widescreen layout slightly less cramped
- Made blockquote margin less ridiculous on small screens
- Welcome & tutorial are now one column
- Attempts to fix the ongoing issues with Google Analytics
- Behind the scenes, shifted to a centralised source for NPC relationships.
- Restructured rollData to directly access property
- Fix bug with stevedores
- Patreon credits now displays twenty random patrons, weighted according to their pledge.
- Fixed bug with children being raised by grandmothers not being passed the town object.
- Refactored some code so it's more maintainable
- Update dependencies
 
## 2.6.2

### Added
- Factions now use a weighted probability for the type to spawn.

### Changed
- Fixed museum curators
- Fixed blacksmith missions
- Fixed children sometimes breaking professions
- Fixed courier bug in plothooks
- Fixed high thief background being invalid

## 2.6.1

### Added 
- Added error tracking with Sentry.
- Added option to disable Google Analytics in settings.
- Added special wording when income earned per day is less than a copper.
- Autoupdating pronouns on NPC edit.
- More tavern size / wealth descriptions.

### Changed
- Fixed bug with alchemist selling.
- Fixed biome generation setting not working.
- Fixed bug with half-elves sometimes not having an age descriptor.
- Renamed "play lover" relationship to "fellow play lover" since it sounded real weird.
- Fix murderers breaking everything (because of course).
- Fix certain changes not saving on editing NPCs.
- Fix taverns always being converted houses.

## 2.6

### Added
- Footer
- Jewellers
- Cleanliness descriptions to ships
- Quick editing for racial demographics
- Racial demographic sliders now update instantly
- More racial demographics descriptions
- Castle-specific requests for assistance
- Capacity for factional policing
- Multiple of the same building can now be generated on launch
- Building owners' professions are no longer hardcoded (expect to see goldsmiths and other specialised versions of professions now)
- Added test for ga() so adblockers don't make the generator complain (there are no ads, just Google Analytics tracking, just FYI!)
- New syntax extension to the workflow

### Changed
- Guards are now a faction.
- Forced one column for town edit page.
- Money lenders and predatory debtors will only spawn if there's the population for them. If not, then a criminal will be selected instead.
- Definitions of extremely sexist societies
- Fixed tables getting cut in half in two-column layouts.
- Fixed castle ruler looking for array printing everything
- Fixed town square encounters not rendering properly nine times out of ten.
- Fixed races not changing properly.
- Fixed creating magic armour not working
- Fixed renaming towns not applying to buildings and factions that feature the name
- Fixed local build script for Windows
- Updated dependencies

### Removed
- Rumour WIP from the toolbox since it was a mess of spaghetti code
- Removed large title in the sticky header

### Known issues
- NPC profiles still break on refresh
- Sliders are still very bugged. We know.
- Tippy not being used in Settings menu
- Still no consistent style language between links that take to new page, append, or replace existing content
- Spymasters still sometimes live in abject poverty.
- "Error: <<run>>: bad evaluation: Reduce of empty array with no initial value" sometimes appears on NPC profile pages.

## 2.5

### Added
- Artwork by Juho Huttunen
- Paper watercolours in DMG style by /u/FlamableConcrete
- Two column style
- Some auto-updating elements
- Goblins
- Castles
- Dungeons
- Prisoners
- Sieges
- Infinite breadcrumbs
- Hover information for settlement size
- Description of racial makeup to the start page.
- Ability to edit dominant gender
- Customers and expanded relationships
- Relationships between buildings and NPCs
- Added race in dropdown NPC creation tool in the toolbox.

### Changed
- Equality slider has changed; previously 0 was a completely matriarchal society, 50 was perfect egalitarianism, and 100 was patriarchal. Now, there is a dropdown for which gender is the 'dominant' gender, and 0 is sexist with 100 being perfect egalitarianism.
- Changed the function that generates initial buildings to test for whether a person with the corresponding profession lives in the town (don't flip a coin to see if there's a bakery when you've already got a concrete answer of whether there's a baker!)
- Population definitions for villages, towns, and cities have been increased.
- Fixed some bugs introduced in the last update.
- Bug fixes for Tippy on profiles
- Fix tavern material being [object Object]
- Alchemist bugs
- Fix creating new faction.
- Fix some slider bugs.
- Fix tavern material bug.
- Put patreon supporters list in a table.
- Improvements to onboarding process and tutorial.
- Formatting improvements in town edit
- Fixed empty headers sometimes appearing in shops


### Removed
- 'Return' option in profile pages has been removed to force navigation through the breadcrumb.

### Known issues
- Sliders are still very bugged. We know.
- Tippy not being used in Settings menu
- Still no consistent style language between links that take to new page, append, or replace existing content
- Spymasters still sometimes live in abject poverty.
- Sticky heading does not span the entire width on some viewports
- NPC profiles still break on refresh
- Changing town name still does not update establishments
- Two column layout sometimes slices tables in half


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
