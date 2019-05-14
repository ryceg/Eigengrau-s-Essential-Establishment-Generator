# Eigengrau's Essential Establishment Generator

### A Tabletop Generator Unlike Any Other :game_die:

[Eigengrau's Essential Establishment Generator](https://eigengrausgenerator.com/), or EEEG for short, is a tabletop procedural generation tool for towns, npcs, and more. It creates paragraphs of text suitable to be read directly to the players during a game. No longer do you have to simply describe a generic, unnamed tavern as "small"- this is the sort of stuff that you can read out instead;
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

Also consider joining the [reddit.](www.reddit.com/r/EigengrausGenerator)

## Compiling the Generator :computer:
To compile EEG for local testing you will need the latest version of [TweeGo](https://www.motoslave.net/tweego/docs/) and [SugarCube](http://www.motoslave.net/sugarcube/2/). Make sure that TweeGo knows where the SugarCube format is using `export TWEEGO_PATH=LOCATIONOFSUGARCUBE`.

CD to above the directory, and use `tweego -o EEEG.html github/Eigengrau/EssentialEstablishmentGenerator --head=HeadContent/main.txt` to compile things all nicely. You want to CD outside of the directory to avoid generating EEEG.html inside (which would be compiled the next time you run), and you want to point it specifically at /EssentialEstablishmentGenerator to avoid compiling the `index.html`, which is a copy of the live.

You can save time once you've set your directories by saving this as a .bat file.

## Contributing :black_nib:
We love getting pull requests! You can find out more about contributing to the project [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Contributing) 

You can also find easy work to do on the generator [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)


## Built With :hammer:
* [Twine](https://twinery.org/) - The front end framework 
* [Sugarcube 2](https://www.motoslave.net/sugarcube/2/) - A format for Twine
* [TweeGo](https://www.motoslave.net/tweego/) - Twine command line compiler

##

You can support me on [Patreon](https://www.patreon.com/eigengrausgenerator)

I hope that you find it useful!

