export const isEven = value => value % 2;

export function $(selector) {
  return document.querySelector(selector);
}

export function $All(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Return number of occurances of {val} in {arr}
 *
 * @param {*} val - value to find
 * @param {[*]} arr - array to look in
 * @returns {Number}
 */
export function occuranceOf(val, arr) {
  let occurances = arr.filter(element => element === val)

  return occurances.length;
}
