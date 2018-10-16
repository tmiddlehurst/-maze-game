/**
 * check for even/odd number
 *
 * @param {Number} value
 */
const isEven = value => value % 2;

/**
 *  JQuery-like DOM element selector
 *
 * @param {String} selector
 */
function $(selector) {
  return document.querySelector(selector);
}

/**
 *  Returns a nodelist of all DOM elements selected by `selector`
 *
 * @param {String} selector
 */
function $All(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Return random int between `min` and `max`
 *
 * @param {Number} min
 * @param {Number} max
 */

function randomIntBetween(min, max) {
  return min + Math.round(Math.random() * max);
}

/**
 * Return last item in array
 *
 * @param {Array} array
 */
function $tail(array) {
  return array[(array.length - 1)];
}

// ***** UNUSED ******

/**
 * Return number of occurances of {val} in {arr}
 *
 * @param {*} val - value to find
 * @param {[*]} arr - array to look in
 * @returns {Number}
 */
function countOf(val, arr) {
  let occurances = arr.filter(element => element === val)

  return occurances.length;
}

export { isEven, $, $All, randomIntBetween, $tail, countOf }

// WOULD THIS WORK?
// let safeWhile = function(condition, limiter, fn) {
//   let i = 0
//   while(condition) {
//     if (i >= limiter) {
//       break;
//     }
//     return fn();
//     i++
//   }
// }