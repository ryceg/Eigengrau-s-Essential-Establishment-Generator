# Eigengrau's Essential Establishment Generator

### A Tabletop Generator Unlike Any Other :game_die:

[Eigengrau's Essential Establishment Generator](https://eigengrausgenerator.com/), or EEEG for short, is a tabletop procedural generation tool for towns, npcs, and more. It creates paragraphs of text suitable to be read directly to the players during a game. No longer do you have to simply describe a generic, unnamed tavern as "small"- this is the sort of stuff that you can read out instead:

![](https://i.imgur.com/SMoFRno.png)


**What It's For**
* Generate thousands of unique towns for table play
* Create new plothooks for games
* Generate new NPCs to flesh out existing places
* Help new and veteran DMs come up with fresh ideas for their table

## Live Build :rocket:
Go to https://eigengrausgenerator.com/ to see the most current live build of EEEG in action!

## Community :family:
**Join our Discord to talk about the project in real time**
* Learn more about the project
* Ask questions and learn from other contributors
* Show off your work

**[DISCORD](https://discord.gg/A543VC5)**

Also consider joining the [reddit.](https://www.reddit.com/r/EigengrausGenerator)

## Compiling :computer:
To compile EEEG for local testing you will need the latest version of [TweeGo](http://www.motoslave.net/tweego/) and [SugarCube](http://www.motoslave.net/sugarcube/2/). 
```bash
# Show TweeGo knows where the SugarCube format is
export TWEEGO_PATH=LOCATION_OF_SUGARCUBE

# go to where you installed Tweego. If you installed it globally, feel free to skip this
cd $TWEEGO_PATH

# replace PROJECT_ROOT with wherever you git cloned the repository
tweego -o EEEG.html {PROJECT_ROOT}/EssentialEstablishmentGenerator --head={PROJECT_ROOT}/main.txt
```
This generates `EEEG.html` in the project root directory that you can open in a browser.

NOTE: You can save time once you've set your directories by saving that command as a `.bat` or `.sh` file.

## Contributing :black_nib:
We love getting pull requests! You can find out more about contributing to the project [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Contributing) 

If you don't want to code, that's okay! The Generator is built out of a novel's worth of words, and we're always in need of more descriptions. You can find writing tasks [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aopen+label%3AWriting)

You can also find easy work to do on the generator [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)


## Built With :hammer:
* [Twine](https://twinery.org/) - The front end framework 
* [Sugarcube 2](https://www.motoslave.net/sugarcube/2/) - A language for Twine
* [TweeGo](https://www.motoslave.net/tweego/) - Twine command line compiler

##

If you can't contribute pull requests consider supporting the generator through [Patreon](https://www.patreon.com/eigengrausgenerator)

We hope that you find it useful!

