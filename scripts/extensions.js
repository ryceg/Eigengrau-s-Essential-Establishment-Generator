/* eslint-disable */

/***********************************************************************************************************************

	lib/extensions.js

	Copyright © 2013–2018 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

import Patterns from "../src/lib/patterns";

/*
	JavaScript Polyfills.

	NOTE: The ES5 and ES6 polyfills come from the vendored `es5-shim.js` and `es6-shim.js` libraries.
*/
(() => {
  /*******************************************************************************
		Utility Functions.
	*******************************************************************************/

  /*
		Trims whitespace from either the start or end of the given string.
	*/
  const _trimString = (() => {
    // Whitespace regular expressions.
    const startWSRe = new RegExp(`^${Patterns.space}${Patterns.space}*`);
    const endWSRe = new RegExp(`${Patterns.space}${Patterns.space}*$`);

    function trimString(str, where) {
      const val = String(str);

      if (!val) {
        return val;
      }

      switch (where) {
        case "start":
          return startWSRe.test(val) ? val.replace(startWSRe, "") : val;

        case "end":
          return endWSRe.test(val) ? val.replace(endWSRe, "") : val;

        default:
          throw new Error(
            `_trimString called with incorrect where parameter value: "${where}"`
          );
      }
    }

    return trimString;
  })();

  /*
		Generates a pad string based upon the given string and length.
	*/
  function _createPadString(length, padding) {
    const targetLength = Number.parseInt(length, 10) || 0;

    if (targetLength < 1) {
      return "";
    }

    let padString = typeof padding === "undefined" ? "" : String(padding);

    if (padString === "") {
      padString = " ";
    }

    while (padString.length < targetLength) {
      const curPadLength = padString.length;
      const remainingLength = targetLength - curPadLength;

      padString +=
        curPadLength > remainingLength
          ? padString.slice(0, remainingLength)
          : padString;
    }

    if (padString.length > targetLength) {
      padString = padString.slice(0, targetLength);
    }

    return padString;
  }

  /*******************************************************************************
		Polyfills.
	*******************************************************************************/

  /*
		[ES2016] Returns whether the given element was found within the array.
	*/
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      configurable: true,
      writable: true,

      value(/* needle [, fromIndex] */) {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "Array.prototype.includes called on null or undefined"
          );
        }

        if (arguments.length === 0) {
          return false;
        }

        const length = this.length >>> 0;

        if (length === 0) {
          return false;
        }

        const needle = arguments[0];
        let i = Number(arguments[1]) || 0;

        if (i < 0) {
          i = Math.max(0, length + i);
        }

        for (; /* empty */ i < length; ++i) {
          const value = this[i];

          if (value === needle || (value !== value && needle !== needle)) {
            return true;
          }
        }

        return false;
      }
    });
  }

  /*
		[ES2017] Returns a string based on concatenating the given padding, repeated as necessary,
		to the start of the string so that the given length is reached.

		NOTE: This pads based upon Unicode code units, rather than code points.
	*/
  if (!String.prototype.padStart) {
    Object.defineProperty(String.prototype, "padStart", {
      configurable: true,
      writable: true,

      value(length, padding) {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.padStart called on null or undefined"
          );
        }

        const baseString = String(this);
        const baseLength = baseString.length;
        const targetLength = Number.parseInt(length, 10);

        if (targetLength <= baseLength) {
          return baseString;
        }

        return (
          _createPadString(targetLength - baseLength, padding) + baseString
        );
      }
    });
  }

  /*
		[ES2017] Returns a string based on concatenating the given padding, repeated as necessary,
		to the end of the string so that the given length is reached.

		NOTE: This pads based upon Unicode code units, rather than code points.
	*/
  if (!String.prototype.padEnd) {
    Object.defineProperty(String.prototype, "padEnd", {
      configurable: true,
      writable: true,

      value(length, padding) {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.padEnd called on null or undefined"
          );
        }

        const baseString = String(this);
        const baseLength = baseString.length;
        const targetLength = Number.parseInt(length, 10);

        if (targetLength <= baseLength) {
          return baseString;
        }

        return (
          baseString + _createPadString(targetLength - baseLength, padding)
        );
      }
    });
  }

  /*
		[ES Proposal] Returns a string with all whitespace removed from the start of the string.
	*/
  if (!String.prototype.trimStart) {
    Object.defineProperty(String.prototype, "trimStart", {
      configurable: true,
      writable: true,

      value() {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.trimStart called on null or undefined"
          );
        }

        return _trimString(this, "start");
      }
    });
  }

  if (!String.prototype.trimLeft) {
    Object.defineProperty(String.prototype, "trimLeft", {
      configurable: true,
      writable: true,

      value() {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.trimLeft called on null or undefined"
          );
        }

        return _trimString(this, "start");
      }
    });
  }

  /*
		[ES Proposal] Returns a string with all whitespace removed from the end of the string.
	*/
  if (!String.prototype.trimEnd) {
    Object.defineProperty(String.prototype, "trimEnd", {
      configurable: true,
      writable: true,

      value() {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.trimEnd called on null or undefined"
          );
        }

        return _trimString(this, "end");
      }
    });
  }

  if (!String.prototype.trimRight) {
    Object.defineProperty(String.prototype, "trimRight", {
      configurable: true,
      writable: true,

      value() {
        if (this == null) {
          // lazy equality for null
          throw new TypeError(
            "String.prototype.trimRight called on null or undefined"
          );
        }

        return _trimString(this, "end");
      }
    });
  }
})();

/*
	JavaScript Extensions.
*/
(() => {
  const _nativeMathRandom = Math.random;

  /*******************************************************************************
		Utility Functions.
	*******************************************************************************/

  /*
		Returns a pseudo-random whole number (integer) within the given bounds.
	*/
  function _random(/* [min ,] max */) {
    let min;
    let max;

    switch (arguments.length) {
      case 0:
        throw new Error("_random called with insufficient parameters");
      case 1:
        min = 0;
        max = arguments[0];
        break;
      default:
        min = arguments[0];
        max = arguments[1];
        break;
    }

    if (min > max) {
      [min, max] = [max, min];
    }

    return Math.floor(_nativeMathRandom() * (max - min + 1)) + min;
  }

  /*
		Returns an object (`{ char, start, end }`) containing the Unicode character at
		position `pos`, its starting position, and its ending position—surrogate pairs
		are properly handled.  If `pos` is out-of-bounds, returns an object containing
		the empty string and start/end positions of `-1`.

		This function is necessary because JavaScript strings are sequences of UTF-16
		code units, so surrogate pairs are exposed and thus must be handled.  While the
		ES6/2015 standard does improve the situation somewhat, it does not alleviate
		the need for this function.

		NOTE: Will throw exceptions on invalid surrogate pairs.

		IDEA: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
	*/
  function _getCodePointStartAndEnd(str, pos) {
    const code = str.charCodeAt(pos);

    // Given position was out-of-bounds.
    if (Number.isNaN(code)) {
      return { char: "", start: -1, end: -1 };
    }

    // Code unit is not a UTF-16 surrogate.
    if (code < 0xd800 || code > 0xdfff) {
      return {
        char: str.charAt(pos),
        start: pos,
        end: pos
      };
    }

    // Code unit is a high surrogate (D800–DBFF).
    if (code >= 0xd800 && code <= 0xdbff) {
      const nextPos = pos + 1;

      // End of string.
      if (nextPos >= str.length) {
        throw new Error("high surrogate without trailing low surrogate");
      }

      const nextCode = str.charCodeAt(nextPos);

      // Next code unit is not a low surrogate (DC00–DFFF).
      if (nextCode < 0xdc00 || nextCode > 0xdfff) {
        throw new Error("high surrogate without trailing low surrogate");
      }

      return {
        char: str.charAt(pos) + str.charAt(nextPos),
        start: pos,
        end: nextPos
      };
    }

    // Code unit is a low surrogate (DC00–DFFF) in the first position.
    if (pos === 0) {
      throw new Error("low surrogate without leading high surrogate");
    }

    const prevPos = pos - 1;
    const prevCode = str.charCodeAt(prevPos);

    // Previous code unit is not a high surrogate (D800–DBFF).
    if (prevCode < 0xd800 || prevCode > 0xdbff) {
      throw new Error("low surrogate without leading high surrogate");
    }

    return {
      char: str.charAt(prevPos) + str.charAt(pos),
      start: prevPos,
      end: pos
    };
  }

  /*******************************************************************************
		Extensions, General.
	*******************************************************************************/

  /*
		Concatenates one or more unique elements to the end of the base array
		and returns the result as a new array.  Elements which are arrays will
		be merged—i.e. their elements will be concatenated, rather than the
		array itself.
	*/
  Object.defineProperty(Array.prototype, "concatUnique", {
    configurable: true,
    writable: true,

    value(/* variadic */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.concatUnique called on null or undefined"
        );
      }

      const result = Array.from(this);

      if (arguments.length === 0) {
        return result;
      }

      const items = Array.prototype.reduce.call(
        arguments,
        (prev, cur) => prev.concat(cur),
        []
      );
      const addSize = items.length;

      if (addSize === 0) {
        return result;
      }

      const indexOf = Array.prototype.indexOf;
      const push = Array.prototype.push;

      for (let i = 0; i < addSize; ++i) {
        const value = items[i];

        if (indexOf.call(result, value) === -1) {
          push.call(result, value);
        }
      }

      return result;
    }
  });

  /*
		Returns the number of times the given element was found within the array.
	*/
  Object.defineProperty(Array.prototype, "count", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex ] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.count called on null or undefined"
        );
      }

      const indexOf = Array.prototype.indexOf;
      const needle = arguments[0];
      let pos = Number(arguments[1]) || 0;
      let count = 0;

      while ((pos = indexOf.call(this, needle, pos)) !== -1) {
        ++count;
        ++pos;
      }

      return count;
    }
  });

  /*
		Removes and returns all of the given elements from the array.
	*/
  Object.defineProperty(Array.prototype, "delete", {
    configurable: true,
    writable: true,

    value(/* needles */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.delete called on null or undefined"
        );
      }

      if (arguments.length === 0) {
        return [];
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return [];
      }

      const needles = Array.prototype.concat.apply([], arguments);
      const needlesLength = needles.length;
      const indices = [];

      for (let i = 0; i < length; ++i) {
        const value = this[i];

        for (let j = 0; j < needlesLength; ++j) {
          const needle = needles[j];

          if (value === needle || (value !== value && needle !== needle)) {
            indices.push(i);
            break;
          }
        }
      }

      const result = [];

      // Copy the elements (in original order).
      for (let i = 0, iend = indices.length; i < iend; ++i) {
        result[i] = this[indices[i]];
      }

      const splice = Array.prototype.splice;

      // Delete the elements (in reverse order).
      for (let i = indices.length - 1; i >= 0; --i) {
        splice.call(this, indices[i], 1);
      }

      return result;
    }
  });

  /*
		Removes and returns all of the elements at the given indices from the array.
	*/
  Object.defineProperty(Array.prototype, "deleteAt", {
    configurable: true,
    writable: true,

    value(/* indices */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.deleteAt called on null or undefined"
        );
      }

      if (arguments.length === 0) {
        return [];
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return [];
      }

      const splice = Array.prototype.splice;
      const cpyIndices = [
        ...new Set(
          Array.prototype.concat
            .apply([], arguments)
            // Map negative indices to their positive counterparts,
            // so the Set can properly filter out duplicates.
            .map(x => (x < 0 ? Math.max(0, length + x) : x))
        ).values()
      ];
      const delIndices = [...cpyIndices].sort((a, b) => b - a);
      const result = [];

      // Copy the elements (in originally specified order).
      for (let i = 0, iend = cpyIndices.length; i < iend; ++i) {
        result[i] = this[cpyIndices[i]];
      }

      // Delete the elements (in descending numeric order).
      for (let i = 0, iend = delIndices.length; i < iend; ++i) {
        splice.call(this, delIndices[i], 1);
      }

      return result;
    }
  });

  /*
		Removes and returns all of the elements that pass the test implemented
		by the given predicate function from the array.
	*/
  Object.defineProperty(Array.prototype, "deleteWith", {
    configurable: true,
    writable: true,

    value(predicate, thisArg) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.deleteWith called on null or undefined"
        );
      }
      if (typeof predicate !== "function") {
        throw new Error(
          "Array.prototype.deleteWith predicate parameter must be a function"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return [];
      }

      const splice = Array.prototype.splice;
      const indices = [];
      const result = [];

      // Copy the elements (in original order).
      for (let i = 0; i < length; ++i) {
        if (predicate.call(thisArg, this[i], i, this)) {
          result.push(this[i]);
          indices.push(i);
        }
      }

      // Delete the elements (in reverse order).
      for (let i = indices.length - 1; i >= 0; --i) {
        splice.call(this, indices[i], 1);
      }

      return result;
    }
  });

  /*
		Returns the first element from the array.
	*/
  Object.defineProperty(Array.prototype, "first", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.first called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return;
      }

      return this[0];
    }
  });

  /*
		Returns a new array consisting of the flattened source array (flat map reduce).
	*/
  Object.defineProperty(Array.prototype, "flatten", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.flatten called on null or undefined"
        );
      }

      return Array.prototype.reduce.call(
        this,
        (prev, cur) => prev.concat(cur instanceof Array ? cur.flatten() : cur),
        []
      );
    }
  });

  /*
		Returns whether all of the given elements were found within the array.
	*/
  Object.defineProperty(Array.prototype, "includesAll", {
    configurable: true,
    writable: true,

    value(/* needles */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.includesAll called on null or undefined"
        );
      }

      if (arguments.length === 1) {
        if (arguments[0] instanceof Array) {
          return Array.prototype.includesAll.apply(this, arguments[0]);
        }

        return Array.prototype.includes.apply(this, arguments);
      }

      for (let i = 0, iend = arguments.length; i < iend; ++i) {
        if (
          !Array.prototype.some.call(
            this,
            function(val) {
              return val === this.val || (val !== val && this.val !== this.val);
            },
            { val: arguments[i] }
          )
        ) {
          return false;
        }
      }

      return true;
    }
  });

  /*
		Returns whether any of the given elements were found within the array.
	*/
  Object.defineProperty(Array.prototype, "includesAny", {
    configurable: true,
    writable: true,

    value(/* needles */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.includesAny called on null or undefined"
        );
      }

      if (arguments.length === 1) {
        if (arguments[0] instanceof Array) {
          return Array.prototype.includesAny.apply(this, arguments[0]);
        }

        return Array.prototype.includes.apply(this, arguments);
      }

      for (let i = 0, iend = arguments.length; i < iend; ++i) {
        if (
          Array.prototype.some.call(
            this,
            function(val) {
              return val === this.val || (val !== val && this.val !== this.val);
            },
            { val: arguments[i] }
          )
        ) {
          return true;
        }
      }

      return false;
    }
  });

  /*
		Returns the last element from the array.
	*/
  Object.defineProperty(Array.prototype, "last", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError("Array.prototype.last called on null or undefined");
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return;
      }

      return this[length - 1];
    }
  });

  /*
		Randomly removes an element from the base array and returns it.
	*/
  Object.defineProperty(Array.prototype, "pluck", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.pluck called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return;
      }

      const index = _random(0, length - 1);

      return Array.prototype.splice.call(this, index, 1)[0];
    }
  });

  /*
		Randomly removes the given number of unique elements from the base array
		and returns the removed elements as a new array.
	*/
  Object.defineProperty(Array.prototype, "pluckMany", {
    configurable: true,
    writable: true,

    value(wantSize) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.pluckMany called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return [];
      }

      let want = Math.trunc(wantSize);

      if (!Number.isInteger(want)) {
        throw new Error(
          "Array.prototype.pluckMany want parameter must be an integer"
        );
      }

      if (want < 1) {
        return [];
      }

      if (want > length) {
        want = length;
      }

      const splice = Array.prototype.splice;
      const result = [];
      let max = length - 1;

      do {
        result.push(splice.call(this, _random(0, max--), 1)[0]);
      } while (result.length < want);

      return result;
    }
  });

  /*
		Appends one or more unique elements to the end of the base array and
		returns its new length.
	*/
  Object.defineProperty(Array.prototype, "pushUnique", {
    configurable: true,
    writable: true,

    value(/* variadic */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.pushUnique called on null or undefined"
        );
      }

      const addSize = arguments.length;

      if (addSize === 0) {
        return this.length >>> 0;
      }

      const indexOf = Array.prototype.indexOf;
      const push = Array.prototype.push;

      for (let i = 0; i < addSize; ++i) {
        const value = arguments[i];

        if (indexOf.call(this, value) === -1) {
          push.call(this, value);
        }
      }

      return this.length >>> 0;
    }
  });

  /*
		Randomly selects an element from the base array and returns it.
	*/
  Object.defineProperty(Array.prototype, "random", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.random called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return;
      }

      const index = _random(0, length - 1);

      return this[index];
    }
  });

  /*
		Randomly selects the given number of unique elements from the base array
		and returns the selected elements as a new array.
	*/
  Object.defineProperty(Array.prototype, "randomMany", {
    configurable: true,
    writable: true,

    value(wantSize) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.randomMany called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return [];
      }

      let want = Math.trunc(wantSize);

      if (!Number.isInteger(want)) {
        throw new Error(
          "Array.prototype.randomMany want parameter must be an integer"
        );
      }

      if (want < 1) {
        return [];
      }

      if (want > length) {
        want = length;
      }

      const picked = new Map();
      const result = [];
      const max = length - 1;

      do {
        let i;
        do {
          i = _random(0, max);
        } while (picked.has(i));
        picked.set(i, true);
        result.push(this[i]);
      } while (result.length < want);

      return result;
    }
  });

  /*
		Randomly shuffles the array and returns it.
	*/
  Object.defineProperty(Array.prototype, "shuffle", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.shuffle called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return this;
      }

      for (let i = length - 1; i > 0; --i) {
        const j = Math.floor(_nativeMathRandom() * (i + 1));

        if (i === j) {
          continue;
        }

        // [this[i], this[j]] = [this[j], this[i]];
        const swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }

      return this;
    }
  });

  /*
		Prepends one or more unique elements to the beginning of the base array
		and returns its new length.
	*/
  Object.defineProperty(Array.prototype, "unshiftUnique", {
    configurable: true,
    writable: true,

    value(/* variadic */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.unshiftUnique called on null or undefined"
        );
      }

      const addSize = arguments.length;

      if (addSize === 0) {
        return this.length >>> 0;
      }

      const indexOf = Array.prototype.indexOf;
      const unshift = Array.prototype.unshift;

      for (let i = 0; i < addSize; ++i) {
        const value = arguments[i];

        if (indexOf.call(this, value) === -1) {
          unshift.call(this, value);
        }
      }

      return this.length >>> 0;
    }
  });

  /*
		Returns a bound function that supplies the given arguments to the base function, followed
		by the arguments are supplied to the bound function, whenever it is called.
	*/
  Object.defineProperty(Function.prototype, "partial", {
    configurable: true,
    writable: true,

    value(/* variadic */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Function.prototype.partial called on null or undefined"
        );
      }

      const slice = Array.prototype.slice;
      const fn = this;
      const bound = slice.call(arguments, 0);

      return function() {
        const applied = [];
        let argc = 0;

        for (let i = 0; i < bound.length; ++i) {
          applied.push(bound[i] === undefined ? arguments[argc++] : bound[i]);
        }

        return fn.apply(this, applied.concat(slice.call(arguments, argc)));
      };
    }
  });

  /*
		Returns the given numerical clamped to the specified bounds.
	*/
  Object.defineProperty(Math, "clamp", {
    configurable: true,
    writable: true,

    value(num, min, max) {
      const value = Number(num);
      return Number.isNaN(value) ? NaN : value.clamp(min, max);
    }
  });

  /*
		Returns a decimal number eased from 0 to 1.

		NOTE: The magnitude of the returned value decreases if num < 0.5 or increases if num > 0.5.
	*/
  Object.defineProperty(Math, "easeInOut", {
    configurable: true,
    writable: true,

    value(num) {
      return 1 - (Math.cos(Number(num) * Math.PI) + 1) / 2;
    }
  });

  /*
		Returns the number clamped to the specified bounds.
	*/
  Object.defineProperty(Number.prototype, "clamp", {
    configurable: true,
    writable: true,

    value(/* min, max */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Number.prototype.clamp called on null or undefined"
        );
      }

      if (arguments.length !== 2) {
        throw new Error(
          "Number.prototype.clamp called with an incorrect number of parameters"
        );
      }

      let min = Number(arguments[0]);
      let max = Number(arguments[1]);

      if (min > max) {
        [min, max] = [max, min];
      }

      return Math.min(Math.max(this, min), max);
    }
  });

  /*
		Returns a copy of the given string with all RegExp metacharacters escaped.
	*/
  if (!RegExp.escape) {
    (() => {
      const _regExpMetaCharsRe = /[\\^$*+?.()|[\]{}]/g;
      const _hasRegExpMetaCharsRe = new RegExp(_regExpMetaCharsRe.source); // to drop the global flag

      Object.defineProperty(RegExp, "escape", {
        configurable: true,
        writable: true,

        value(str) {
          const val = String(str);
          return val && _hasRegExpMetaCharsRe.test(val)
            ? val.replace(_regExpMetaCharsRe, "\\$&")
            : val;
        }
      });
    })();
  }

  /*
		Returns a formatted string, after replacing each format item in the given format string
		with the text equivalent of the corresponding argument's value.
	*/
  (() => {
    const _formatRegExp = /{(\d+)(?:,([+-]?\d+))?}/g;
    const _hasFormatRegExp = new RegExp(_formatRegExp.source); // to drop the global flag

    Object.defineProperty(String, "format", {
      configurable: true,
      writable: true,

      value(format) {
        function padString(str, align, pad) {
          if (!align) {
            return str;
          }

          const plen = Math.abs(align) - str.length;

          if (plen < 1) {
            return str;
          }

          // const padding = Array(plen + 1).join(pad);
          const padding = String(pad).repeat(plen);
          return align < 0 ? str + padding : padding + str;
        }

        if (arguments.length < 2) {
          return arguments.length === 0 ? "" : format;
        }

        const args =
          arguments.length === 2 && arguments[1] instanceof Array
            ? [...arguments[1]]
            : Array.prototype.slice.call(arguments, 1);

        if (args.length === 0) {
          return format;
        }

        if (!_hasFormatRegExp.test(format)) {
          return format;
        }

        // Possibly required by some old buggy browsers.
        _formatRegExp.lastIndex = 0;

        return format.replace(_formatRegExp, (match, index, align) => {
          let retval = args[index];

          if (retval == null) {
            // lazy equality for null
            return "";
          }

          while (typeof retval === "function") {
            retval = retval();
          }

          switch (typeof retval) {
            case "string":
              /* no-op */ break;
            case "object":
              retval = JSON.stringify(retval);
              break;
            default:
              retval = String(retval);
              break;
          }

          return padString(
            retval,
            !align ? 0 : Number.parseInt(align, 10),
            " "
          );
        });
      }
    });
  })();

  /*
		Returns whether the given string was found within the string.
	*/
  Object.defineProperty(String.prototype, "contains", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.contains called on null or undefined"
        );
      }

      return String.prototype.indexOf.apply(this, arguments) !== -1;
    }
  });

  /*
		Returns the number of times the given substring was found within the string.
	*/
  Object.defineProperty(String.prototype, "count", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex ] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.count called on null or undefined"
        );
      }

      const needle = String(arguments[0] || "");

      if (needle === "") {
        return 0;
      }

      const indexOf = String.prototype.indexOf;
      const step = needle.length;
      let pos = Number(arguments[1]) || 0;
      let count = 0;

      while ((pos = indexOf.call(this, needle, pos)) !== -1) {
        ++count;
        pos += step;
      }

      return count;
    }
  });

  /*
		Returns the first Unicode code point from the string.
	*/
  Object.defineProperty(String.prototype, "first", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.first called on null or undefined"
        );
      }

      // Required as `this` could be a `String` object or come from a `call()` or `apply()`.
      const str = String(this);

      // Get the first code point—may be one or two code units—and its end position.
      const { char } = _getCodePointStartAndEnd(str, 0);

      return char;
    }
  });

  /*
		Returns the last Unicode code point from the string.
	*/
  Object.defineProperty(String.prototype, "last", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.last called on null or undefined"
        );
      }

      // Required as `this` could be a `String` object or come from a `call()` or `apply()`.
      const str = String(this);

      // Get the last code point—may be one or two code units—and its end position.
      const { char } = _getCodePointStartAndEnd(str, str.length - 1);

      return char;
    }
  });

  /*
		Returns a copy of the base string with `delCount` characters replaced with `replacement`, starting at `startAt`.
	*/
  Object.defineProperty(String.prototype, "splice", {
    configurable: true,
    writable: true,

    value(startAt, delCount, replacement) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.splice called on null or undefined"
        );
      }

      const length = this.length >>> 0;

      if (length === 0) {
        return "";
      }

      let start = Number(startAt);

      if (!Number.isSafeInteger(start)) {
        start = 0;
      } else if (start < 0) {
        start += length;

        if (start < 0) {
          start = 0;
        }
      }

      if (start > length) {
        start = length;
      }

      let count = Number(delCount);

      if (!Number.isSafeInteger(count) || count < 0) {
        count = 0;
      }

      let res = this.slice(0, start);

      if (typeof replacement !== "undefined") {
        res += replacement;
      }

      if (start + count < length) {
        res += this.slice(start + count);
      }

      return res;
    }
  });

  /*
		Returns an array of strings, split from the string, or an empty array if the string is empty.
	*/
  Object.defineProperty(String.prototype, "splitOrEmpty", {
    configurable: true,
    writable: true,

    value(/* [ separator [, limit ]] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.splitOrEmpty called on null or undefined"
        );
      }

      // Required as `this` could be a `String` object or come from a `call()` or `apply()`.
      if (String(this) === "") {
        return [];
      }

      return String.prototype.split.apply(this, arguments);
    }
  });

  /*
		Returns a copy of the base string with the first Unicode code point uppercased,
		according to any locale-specific rules.
	*/
  Object.defineProperty(String.prototype, "toLocaleUpperFirst", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.toLocaleUpperFirst called on null or undefined"
        );
      }

      // Required as `this` could be a `String` object or come from a `call()` or `apply()`.
      const str = String(this);

      // Get the first code point—may be one or two code units—and its end position.
      const { char, end } = _getCodePointStartAndEnd(str, 0);

      return end === -1 ? "" : char.toLocaleUpperCase() + str.slice(end + 1);
    }
  });

  /*
		Returns a copy of the base string with the first Unicode code point uppercased.
	*/
  Object.defineProperty(String.prototype, "toUpperFirst", {
    configurable: true,
    writable: true,

    value() {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "String.prototype.toUpperFirst called on null or undefined"
        );
      }

      // Required as `this` could be a `String` object or come from a `call()` or `apply()`.
      const str = String(this);

      // Get the first code point—may be one or two code units—and its end position.
      const { char, end } = _getCodePointStartAndEnd(str, 0);

      return end === -1 ? "" : char.toUpperCase() + str.slice(end + 1);
    }
  });

  /*******************************************************************************
		Extensions, JSON.
	*******************************************************************************/

  /*
		Define `toJSON()` methods on each prototype we wish to support.
	*/
  Object.defineProperty(Date.prototype, "toJSON", {
    configurable: true,
    writable: true,

    value() {
      return ["(revive:date)", this.toISOString()];
    }
  });
  Object.defineProperty(Function.prototype, "toJSON", {
    configurable: true,
    writable: true,

    value() {
      /*
				The enclosing parenthesis here are necessary to force the function expression code
				string, returned by `this.toString()`, to be evaluated as an expression during
				revival.  Without them, the function expression, which is likely nameless, will be
				evaluated as a function definition—which will throw a syntax error exception, since
				function definitions must have a name.
			*/
      return ["(revive:eval)", `(${this.toString()})`];
    }
  });
  Object.defineProperty(Map.prototype, "toJSON", {
    configurable: true,
    writable: true,

    value() {
      return ["(revive:map)", [...this]];
    }
  });
  Object.defineProperty(RegExp.prototype, "toJSON", {
    configurable: true,
    writable: true,

    value() {
      return ["(revive:eval)", this.toString()];
    }
  });
  Object.defineProperty(Set.prototype, "toJSON", {
    configurable: true,
    writable: true,

    value() {
      return ["(revive:set)", [...this]];
    }
  });

  /*
		Utility method to allow users to easily wrap their code in the revive wrapper.
	*/
  Object.defineProperty(JSON, "reviveWrapper", {
    configurable: true,
    writable: true,

    value(code, data) {
      if (typeof code !== "string") {
        throw new TypeError(
          "JSON.reviveWrapper code parameter must be a string"
        );
      }

      return ["(revive:eval)", [code, data]];
    }
  });

  /*
		Backup the original `JSON.parse()` and replace it with a revive wrapper aware version.
	*/
  Object.defineProperty(JSON, "_real_parse", {
    value: JSON.parse
  });
  Object.defineProperty(JSON, "parse", {
    configurable: true,
    writable: true,

    value(text, reviver) {
      return JSON._real_parse(text, (key, val) => {
        let value = val;

        /*
					Attempt to revive wrapped values.
				*/
        if (value instanceof Array && value.length === 2) {
          switch (value[0]) {
            case "(revive:set)":
              value = new Set(value[1]);
              break;
            case "(revive:map)":
              value = new Map(value[1]);
              break;
            case "(revive:date)":
              value = new Date(value[1]);
              break;
            case "(revive:eval)":
              try {
                /* eslint-disable no-eval */
                // For post-v2.9.0 `JSON.reviveWrapper()`.
                if (value[1] instanceof Array) {
                  const $ReviveData$ = value[1][1]; // eslint-disable-line no-unused-vars
                  value = eval(value[1][0]);
                }

                // For regular expressions, functions, and pre-v2.9.0 `JSON.reviveWrapper()`.
                else {
                  value = eval(value[1]);
                }
                /* eslint-enable no-eval */
              } catch (ex) {
                /* no-op; although, perhaps, it would be better to throw an error here */
              }
              break;
          }
        }

        /*
					Call the custom reviver, if specified.
				*/
        if (typeof reviver === "function") {
          try {
            value = reviver(key, value);
          } catch (ex) {
            /* no-op; although, perhaps, it would be better to throw an error here */
          }
        }

        return value;
      });
    }
  });

  /*******************************************************************************
		Extensions, Deprecated.
	*******************************************************************************/

  /*
		[DEPRECATED] Returns whether the given element was found within the array.
	*/
  Object.defineProperty(Array.prototype, "contains", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.contains called on null or undefined"
        );
      }

      return Array.prototype.includes.apply(this, arguments);
    }
  });

  /*
		[DEPRECATED] Returns whether all of the given elements were found within the array.
	*/
  Object.defineProperty(Array.prototype, "containsAll", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.containsAll called on null or undefined"
        );
      }

      return Array.prototype.includesAll.apply(this, arguments);
    }
  });

  /*
		[DEPRECATED] Returns whether any of the given elements were found within the array.
	*/
  Object.defineProperty(Array.prototype, "containsAny", {
    configurable: true,
    writable: true,

    value(/* needle [, fromIndex] */) {
      if (this == null) {
        // lazy equality for null
        throw new TypeError(
          "Array.prototype.containsAny called on null or undefined"
        );
      }

      return Array.prototype.includesAny.apply(this, arguments);
    }
  });
})();
