// Draw a random Svg maze;

const $ = (selector) => document.querySelector(selector);

const directionLookup = {
  name: 'N', rotation: 0,
  name: 'S', rotation: 180,
  name: 'E', rotation: 90,
  name: 'W', rotation: 270
}

/**
 * @type {Number} length - must be less than board height-playerwidth.
 * @type {Number} xstart - x coordinate of start point.
 * @type {Number} ystart - y coordinate of start point.
 * @type {string} orientation - direction to place wall (N,S,E,W).
 */
class Wall {
  constructor(length, xstart, ystart, orientation) {
    this.length = length;
    this.x = xstart;
    this.y = ystart;
    this.direction = directionLookup.
      find('name', orientation.toUpperCase())
        .rotation;
    this.walkable = false;
  }
}