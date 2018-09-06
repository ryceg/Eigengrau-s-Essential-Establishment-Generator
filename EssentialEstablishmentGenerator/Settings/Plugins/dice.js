// operations, by chapel; for sugarcube 2.x
// v1.0.0
// adds a dice roller and 'fairmath'

// options object
setup.operations = {
  tryGlobal: true,
  nicknames: true,
  fmRange: [0, 100]
}

/*
	I couldn't decide on which syntax mode was best, expecially for dice.
	So I wound up including a bunch of options, and they all work essentially the same way.
	Though the dice 'parser' [e.g. dice('string')] syntax and the shortcuts [e.g. x.fm(), x.d()]
	perform slightly worse / are slightly slower than the other potential syntax modes.
	Supported syntax:
		1. the dice roller: (all the following work and are all equivalent to '3d6+10')
			a. dice(3, 6) + 10
			b. dice('3d6 + 10')
			c. dice('3d6+10')
			d. dice('3d6') + 10
			e. (3).dice(6) + 10
			f. (3).d(6) + 10
			g. !!! dice('3d6' + 10) -- Will roll 3 610-sided dice; the parser can't accept mixed arguments
		2. the fairmath system (based on the ChoiceScript stats system)
			a. (100).fairmath(-20)  [=80]
			b. (90).fm(20)          [=92]
			c. Math.fm(50, 40)      [=70]
			d. Math.fairmath(0, 10) [=10]
		3. Notes.
			a. dice() is also available as setup.dice.roll()
			b. you only need to use parens on bare numbers, none are required for variables
			c. be careful! rolling dice with floating point numbers or negatives will cause errors
			d. likewise, fairmath will spit out errors if it's given bizarre numbers

	Options:
		tryGlobal : sends setup.dice.roll() to the global scope as dice() if true
		nicknames : include the shorter method calls [Math.fm(), <number>.fm(), and <number>.d()]
		fmRange   : move the minimum and maximum range for the fairmath system, if you need to
					note that the results are constrained by this range, but can never actually hit it
					that is, [0, 100] will limit the actual numbers to 1-99,
					[10, 45] would limit the results to 11-44, etc.

*/

/*					DICE					*/

// dice helpers
setup.dice = {
  processDice: function (a, b) {
		// find the number of dice and the type of die
    var roll = [], i, result = 0
    if (typeof a === 'string') {
      roll = a.split('d')
    } else if (typeof a === 'number' && b) {
      roll = [a, b]
    } else if (Array.isArray(a) && a.length >= 2) {
      a.length = 2
      roll = a
    } else {
      throw new TypeError('setup.dice.processDice(): could not process arguments...')
    }
    for (i = 0; i < roll[0]; i++) {
			/*
				we're going to roll each die.  we could generate a number
				between the max and min possible simply enough,
				but real dice have weights -- rolling 3d6 is far more likely to result
				in 10 or 11 than in 3 or 18, and pure randomization will not emulate this
			*/
      var die = 0
      die = Math.floor(Math.random() * roll[1]) + 1
      result += die // update result
    }
    return result // this prelimary result ignores modifiers; it only rolls the dice
  },
  processString: function (string) {
		// recieves strings like '1d6 + 6' or 1d20+3'
    var parsed = []
		// remove all whitespace and trim
    string = string.trim().replace(/\s/g, '')
		// check for and return the parts of the roll (2 chunks: '1d6' and '+6')
    parsed = string.match(/(\d*d\d*)(.*)/)
    return [parsed[1], Number(parsed[2])] // send the data off as an array
  },
  roll: function (a, b) {
    if (typeof a === 'string') {
      var result = setup.dice.processString(a)
			/*
				the expression below rolls the dice and adds the modifier,
				which must be additive (i.e. +5 or -5, but never *5)
			*/
      return setup.dice.processDice(result[0]) + result[1]
    } else {
			// just run it, it'll toss out its own errors
      return setup.dice.processDice(a, b)
    }
  }
}

// global dice() function; dice('[x]d[y] +/- [z]') -or- dice(2, 10) [2d10]
// ex. $var = dice('2d10+5'); _var = dice('3d6 - 1'); _var = dice(3, 6) + 10; etc
if (setup.operations.tryGlobal) { // test options
  window.dice = window.dice || setup.dice.roll
}
// send to global scope without breaking anything
// always available via setup.dice.roll() when unavailable here

// dice method; Number.prototype.dice(number)
// ex. (1).dice(6) + 10; $roll = $die.number.dice($die.type); etc
if (!Number.prototype.dice) {
  Object.defineProperty(Number.prototype, 'dice', {
    configurable: true,
    writable: true,

    value: function (val) {
			// errors and weirdness
      if (this === 0) {
        return 0
      }
      if (this < 0) {
        throw new TypeError('Number.prototype.dice: cannot roll a negative number of dice!')
      }
      if (val == null || typeof val !== 'number' || val <= 0 || arguments.length < 1) {
        throw new TypeError('Number.prototype.dice: error in argument')
      }
      if (!Number.isInteger(this) || !Number.isInteger(val)) {
        throw new TypeError('Number.prototype.dice: cannot roll partial dice!')
      }

			// call the dice processing function
      return setup.dice.processDice(this, val)
    }
  })
}

/*					FAIRMATH				*/

// fairmath method; Number.prototype.fairmath(value)
// ex. (20).fairmath(30); $var = $var.fairmath(-10); etc
if (!Number.prototype.fairmath) {
  Object.defineProperty(Number.prototype, 'fairmath', {
    configurable: true,
    writable: true,

    value: function (val) {
			// errors
      var op = setup.operations.fmRange

      // if (this < op[0] || this > op[1]) {
      //   throw new TypeError('Number.prototype.fairmath called on a number that is out of the defined range (the number was ' + this + ').')
      // }
      if (val == null || typeof val !== 'number' || val > 100 || val < -100 || arguments.length < 1) {
        throw new TypeError('Number.prototype.fairmath given incorrect argument or an argument that is out of the valid 0-100 range.')
      }

			// do the 'fair' math!
      if (val === 0) { // a 0 increase or decrease; just trunc and clamp
        return Math.clamp(Math.trunc(this), op[0], op[1])
      }
      if (val < 0) { // number is negative, representing a decrease
        val = val * -1 // make positive for the math below
        return Math.clamp(Math.trunc(
					this - ((this - op[0]) * (val / op[1]))
				), op[0], op[1])
      }
      if (val > 0) { // number is positive, represeting an increase
        return Math.clamp(Math.trunc(
					this + ((op[1] - this) * (val / op[1]))
				), op[0], op[1])
      }
			// something inexplicable happened
      throw new Error('Number.prototype.fairmath encountered an unspecified error.')
    }
  })
}

// Math.fairmath() method
if (!Math.fairmath) {
  Object.defineProperty(Math, 'fairmath', {
    configurable: true,
    writable: true,

    value: function (base, val) {
      return base.fairmath(val)
    }
  })
}

/*					EXTRAS					*/

// now for some shortcuts
if (setup.operations.nicknames) {
  if (!Math.fm) { // Math.fm()
    Object.defineProperty(Math, 'fm', {
      configurable: true,
      writable: true,

      value: function (base, val) {
        return base.fairmath(val)
      }
    })
  }
  if (!Number.prototype.fm) { // <number>.fm()
    Object.defineProperty(Number.prototype, 'fm', {
      configurable: true,
      writable: true,

      value: function (val) {
        return this.fairmath(val)
      }
    })
  }
  if (!Number.prototype.d) { // <number>.d()
    Object.defineProperty(Number.prototype, 'd', {
      configurable: true,
      writable: true,

      value: function (val) {
        return this.dice(val)
      }
    })
  }
}
