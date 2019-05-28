/* eslint-disable */

/***********************************************************************************************************************

	markup/scripting.js

	Copyright © 2013–2018 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

/*
	===============================================================================
	WARNING  *  WARNING  *  WARNING  *  WARNING  *  WARNING  *  WARNING  *  WARNING
	===============================================================================

	Rollup.js' tree shaking will gut this file since most of its functions are
	meant to be called by user code, via `evalJavaScript` and `evalTwineScript`,
	and are not referenced anywhere within the codebase.

	Until I can find a workaround, tree shaking MUST NOT be enabled.
*/

// setup object.
const setup = {};


/*******************************************************************************
		User Functions.
	*******************************************************************************/

/*
		Returns a random value from its given arguments.
	*/
window.either = function either(/* variadic */) {
  if (arguments.length === 0) {
    return;
  }

  return Array.prototype.concat.apply([], arguments).random();
}



/*
		Returns a pseudo-random whole number (integer) within the range of the given bounds.
	*/
window.random = function random(/* [min ,] max */) {
  let min;
  let max;

  switch (arguments.length) {
    case 0:
      throw new Error("random called with insufficient parameters");
    case 1:
      min = 0;
      max = Math.trunc(arguments[0]);
      break;
    default:
      min = Math.trunc(arguments[0]);
      max = Math.trunc(arguments[1]);
      break;
  }

  if (!Number.isInteger(min)) {
    throw new Error("random min parameter must be an integer");
  }
  if (!Number.isInteger(max)) {
    throw new Error("random max parameter must be an integer");
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
		Returns a pseudo-random real number (floating-point) within the range of the given bounds.

		NOTE: Unlike with its sibling function `random()`, the `max` parameter
		is exclusive, not inclusive—i.e. the range goes to, but does not include,
		the given value.
	*/
window.randomFloat = function randomFloat(/* [min ,] max */) {
  let min;
  let max;

  switch (arguments.length) {
    case 0:
      throw new Error("randomFloat called with insufficient parameters");
    case 1:
      min = 0.0;
      max = Number(arguments[0]);
      break;
    default:
      min = Number(arguments[0]);
      max = Number(arguments[1]);
      break;
  }

  if (Number.isNaN(min) || !Number.isFinite(min)) {
    throw new Error("randomFloat min parameter must be a number");
  }
  if (Number.isNaN(max) || !Number.isFinite(max)) {
    throw new Error("randomFloat max parameter must be a number");
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.random() * (max - min) + min;
};
