const $ = selector => document.querySelector(selector);
const $All = selector => document.querySelectorAll(selector);
const isEven = value => value % 2;

/**
 * L / R / U / D movement functions mapped to keys.
 */
const moves = {
  a: function(position) {
    return (position -= 1);
  },
  d: function(position) {
    return (position += 1);
  },
  w: function(position, width) {
    return (position -= width);
  },
  s: function(position, width) {
    return (position += width);
  },
};

/**
 * Check if pressed key is within the moves object.
 */
const isValidKey = key => !Object.keys(moves).includes(key);

export {$, $All, isEven, moves, isValidKey};