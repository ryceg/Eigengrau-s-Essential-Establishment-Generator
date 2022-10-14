# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 2.9

### Added
- Fancy new link animation
- Images generated via DallE2 for every building and faction type
- Ability to export pantheons during the export process
- Native share menu for iOS & Android
- Explanation tooltip for the politics and economic ideologies
- Confectionary shops (thanks, dcorriveau!)
- Added a terminal warning when on Windows to fix a common issue when installing.
- 🎲 favicon!
- Added a create building button to the detailed town page.
- Added a dockerfile for ease of dev setup.

### Changed
- Fixed a rather pesky and persistent bug where changing racial or religious weights would not be reflected in the town.
- Fixed a bug where popups on the town editing page would not fire after the first interaction.
- Made the banner text a little easier to read.
- Fixed an issue where smithies and guardhouses could not be created on roads (thanks, Saxeen!)
- Fixed the alchemist not showing consumables
- The catchphrase button now can fire on any page.

### Removed
- ENnies related stuff
- Removed dead code for createTownBiome
- Started the process of removing getters and setters. Down with object oriented, long live functional programming!

### Known Issues
- If you navigate back to a page with an image then it won't load the image. This was present in 2.9, and nobody noticed. Oh well.

## 2.9

### Added
- Restart link in the breadcrumb header
- Added links to stuff to footer
- Added icons to sidebar
- Added request to vote for the generator

### Changed
- Unlocked Pantheon system thanks to Patrons.
- Changed some CSS with the importing of Pantheons.
- Fixed a typo or two.
- Fixed an issue where creating customers would ignore input fields.
- Updated dependencies

### Removed
- Credits/Legal from the sidebar

## 2.8.13

### Added
- NovelAI exporting feature.

## 2.8.12

### Added
- You can now link directly to buildings and the owners of buildings that were pre-generated.

### Changed
- The generator no longer uses the `location.hash` for the seed, and instead uses the `location.search` property. 

## 2.8.11

### Added
- Some of the NPC stats are now editable.

### Changed 
- Fixed racial description while editing town demographics not updating.
- Fixed an annoying issue where the period at the end of the sentence for racial and religious demographics would be pushed to a new line.
- Made the dropcap on NPC profile pages standardized
- The text following the dropcap on the NPC profile page is no longer indented weirdly.
- Fixed NPC gender not changing or refreshing properly when editing.
- Fixed buildings not working in the nav bar.
- Made the profiles just pass the ID as a string, which should be slightly faster.


## 2.8.10

### Added
- Flex to button rows so they are a little more responsive on smaller screens.
### Changed
- Fixed a bug where the key to roads was being assigned rather than the road itself, resulting in the error in NPCs profile.
- Changed expanded details to use – rather than - so there is less shifting of the text.
- Shifted RiTa to an imported module.
- Fixed the surface level NPC editing issue.

### Removed
- SugarCube history has been removed (as it was not being used), which should reduce lag on larger towns.

## 2.8.9

### Added
- Toast to notify user when they have selected an invalid combination of town terrain + location.
### Changed
- Fixed an issue with editing towns not working. Like, at all.
- Fixed an issue where changing town location and terrain would throw an error.
- Made religion testing a little more robust.
- Wording and CSS on the welcome screen.
- Town now fully generates on start instead of in two passes.

## 2.8.8

### Added
- Browser back and forward navigation!
- Quick roleplay questions to the toolbox
- Homebrewery export function
- Hyperlinking to both Homebrewery and GMBinder exports (so you can click on links in the PDF to jump to the profile.)
- Added some CSS for the details elements, indicating when there's an expandable element.
- Added toast notifications for settings that only propagate on restart.
- Added a toast notification that warns when two column format is not supported.


### Changed
- Changed the background from a vomit-inducing pink to a dark grey when dialogues or settings are open.
- Fixed biome not showing up in town editing.
- Adjusted the CSS so that the `<h1>` heading on the town page is always visible, no matter the viewport size.
- Dark mode secondary colour has been changed from a brown to a gold.
- Made one column the default and two columns the optional.
- Fixed an error where "pastors" were not being found.
- Shifted the quick scenario generator to the bottom of the page.
- Banner links now open in new tabs
- Toolbox is now one always column.
- Made the sexuality descriptors more inclusive
- Breadcrumb now displays the character's name, not their description
- Fixed an issue with editing probability of deities that are at 0% worship.
- Fixed an issue where the breadcrumb would create empty paragraphs.
- Fixed an issue with widowed elements.
- Fixed an issue with Patreon supporters not displaying properly on subsequent navigation.
- Cookies consent is now a dialog box.
- Welcome page is now a dialog box.

### Removed
- "Sliders" popup.

## 2.8.7

### Changed
- New format for religion data
- Button now appears above <h1>
- Fixed issue where religion percentage would change
- Fixed issue where race makeup description would not print

### Removed
- Holy Days in religion (still present in the data structure, just not active until we have it up and running)
- Quick edit races (formatting and UX was terrible)

## 2.8.6

### Added
- Edit button to buildings that have an editor (it's still rather terrible, but at least now it's more visible)
- Custom image uploading for Hero patrons accessible in the settings.

### Changed
- Fixed issue with Patreon thanks list sometimes breaking.
- Modified formatting
- Shifted notification down slightly so it does not collide with the header
- Fixed an issue with Tippy not initialising for elements created in a table.

### Removed
- Obsolete 'Show Sliders' setting.

## 2.8.5

### Added
- Disable NSFW setting which removes slavery and brothels from being generated.
- Unlocked GMBinder exporting for everyone because we hit 100 Patrons! Thanks!

### Changed
- Fixed GMBinder output issue.
- Fixed guardhouse "People Around" not generating properly.

## 2.8.4

### Changed
- Fixed tippy which was left on debug mode. Oops.

## 2.8.3

### Added
- Religion exporting to Foundry and GMBinder
- Data tags for profiles

## 2.8.1

### Added
- Button to edit pantheon in dropdown religion percentage list
- Clearer delineation of what is and isn't Patron content.
- Automatic removal of analytics for local-run copies
- Automatic unlocking of Patreon content on local copies
- Prepositions for terrain, to make it sound more natural.

### Changed
- Made Patreon paywall deactivate if being run locally.
- Fixed error with town editing
- Fixed sidebar popups not showing up
- Fixed error with faction editing
- Fixed error with editing town biome 
- Fixed local / online hosting images error (hopefully)

## 2.8

### Added
- Lizardfolk (thanks, Sytone!)
- Nonbinary pronouns & NPCs
- Add labels and accessibility features to elements (people that use screenreaders, please let me know if an element is missing features!)
- Add collapsible elements where you might not want to see everything all at once.
- Live counters for Patreon supporters, Discord, and GitHub forks.
- Fun stats to Credits
- Dark mode
- Styling to tooltips that conforms to DM info / readout to player blocks.
- Pseudo-elements for drop caps and first line after `<h1>` element.
- Road profile page, for adding buildings to a specific road.
- Ability to create new relationship
- Ability to edit existing relationships, and add descriptions.
- Print @media CSS to make printing pages at least slightly prettier (though you should definitely use the exporters!)
- Add NPCs to roads.
- Religion system (still very buggy)
- Pendragon style personalities that feed into stress and calm traits
- New alternate splash image for cities and towns by Juho Huttunen

### Changes
- Fixed customers and faction NPCs not respecting the parameters passed to them.
- Fixed faction leader error in profiles.
- Fixed some images not displaying properly in the GMBinder export.
- Updated fonts (j was not rendering correctly) (thanks Ners!)
- New version of Tippy
- Title on sidebar is no longer an image
- Population distribution tooltip now is presented as an ordered list
- Fixed some issues in NPC editing
- Relationships in the NPC edit page now delete the relationship, rather than the whole entity.

### Removed
- Removed taverns doubling as brothels (temporarily)
- Removed many unnecessary wrapped span elements to make the output cleaner.
- Removed Blacksmith 'missions' to rework them.


## 2.7

### Added

- Changed license to MIT.
- Road system.
- Export to JSON.
- Faction editing.
- Tavern illustration.
- Guardhouses
- General Store illustration.
- Foundry export functionality.
- GMBinder export functionality.

### Changed
- Buildings are ordered via road.
- Overhauled the faction resources.
- Changed the errors to be slightly less obtrusive.
- Fixed a bug with marriages.
- Fixed a bug with tavern sleep.
- Ported over a lot of code to TypeScript.
- Fixed an issue with mercenaries in the town square.
- Fixed a bug with general store crud.
- Fixed a bug with general store owners reading books.
- Toned down the road reproduction rate for cities and towns.
- Changed so only the link is highlighted when creating a new building.

### Removed
- Weapons in NPC profile (for now- they'll be back!)
- Individual NPC export (just copy + paste, you'll be fine.)

### Known issues
- NPC history is still sometimes broken.

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
