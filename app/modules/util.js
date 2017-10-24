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
  }
};

/**
 * Check if pressed key is within the moves object.
 */
const isValidKey = key => !Object.keys(moves).includes(key);

const isEven = value => value % 2;

function $(selector) {
  return document.querySelector(selector);
}
function $All(selector) {
  return document.querySelectorAll(selector);
}
function lightsOff(targetSelector) {
  $(targetSelector).classList.toggle('lights_off');
}

export { $, $All, isEven, moves, isValidKey, lightsOff };
