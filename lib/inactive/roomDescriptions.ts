interface RoomDescription {
  wealth: number
  cleanliness: number
  note: string
}

export const roomDescriptions: RoomDescription[] = [
  { wealth: 20, cleanliness: 20, note: 'This is a disgusting, poverty stricken den of filth.' },
  { wealth: 20, cleanliness: 40, note: 'This is a dirty room with no personal possessions.' },
  { wealth: 20, cleanliness: 60, note: 'This is a reasonably clean room, all things considered, but it is still extremely bare of any possessions.' },
  { wealth: 20, cleanliness: 80, note: 'This room has been meticulously kept clean, and there is not a single bit of dirt anywhere. There is also nothing else here.' },
  { wealth: 40, cleanliness: 20, note: 'This is a modest room, but it has not been cleaned in years, and reeks of filth.' },
  { wealth: 40, cleanliness: 40, note: 'This is a relatively modest room, but it is in dire need of cleaning.' },
  { wealth: 40, cleanliness: 60, note: 'This is an average sized room, that has been kept reasonably clean.' },
  { wealth: 40, cleanliness: 80, note: 'This is an average sized room, that is impeccably clean.' },
  { wealth: 60, cleanliness: 20, note: 'The filth of the room does not do this well off family any favours.' },
  { wealth: 60, cleanliness: 40, note: 'This room is rather dirty, and the lavish tapestries on the wall are in desperate need of some cleaning.' },
  { wealth: 60, cleanliness: 60, note: 'This is a nice, well kempt room. There is a tasteful tapestry on the wall.' },
  { wealth: 60, cleanliness: 80, note: 'This room is spotless, with a pleasant scent of lemon filling the air.' },
  { wealth: 80, cleanliness: 20, note: 'The golden cutlery is covered in mold. It is lavish, but totally filthy, and utterly disgusting here.' },
  { wealth: 80, cleanliness: 40, note: 'The rich purples have given way to dark splotches of dirt and mould, and the room is in dire need of a clean.' },
  { wealth: 80, cleanliness: 60, note: 'This is a lavishly decorated room, and is quite pleasant.' },
  { wealth: 80, cleanliness: 80, note: 'This is almost a throne room; the decorations are obscenely wealthy, and the cleanliness is beyond reproach.' }
]
