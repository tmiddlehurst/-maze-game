import * as util from './util.js';

/**
 * Defines a save state for a game maze.
 *
 * Saves maze by converting to an array of binaries, 1 == wall, 0 == walkable
 * Loads maze by iterating over saved array to render tiles.
 */
export default class Maze {
  constructor(gameAreaSelector) {
    this.gameArea = util.$(gameAreaSelector);
    this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
    util.$('.edit-maze').addEventListener('click', () => this.isEditing());
    util.$('.save-maze').addEventListener('click', () => this.saveMaze());
  }

  isEditing() {
    util.$(this.gameArea).addEventListener('click', event => {
      let classList = event.target.classList;

      if (classList.contains('tile')) {
        classList.toggle('tile-wall');
      }
    });
  }

  saveMaze() {
    let tiles = util.$All('.tile');
    let newMaze = tiles.map(
      e => (e.classList.contains('tile-wall') ? 1 : 0)
    );
    window.localStorage.setItem('maze', newMaze);
  }
}

// const DIRECTION_ROTATION = {
//   'N': 0,
//   'S': 180,
//   'E': 90,
//   'W': 270
// }

// *
//  * @type {Number} length - must be less than board height-playerwidth.
//  * @type {Number} xstart - x coordinate of start point.
//  * @type {Number} ystart - y coordinate of start point.
//  * @type {string} orientation - direction to place wall (N,S,E,W).

// class Wall {
//   constructor(length, xstart, ystart, orientation) {
//     this.length = length;
//     this.x = xstart;
//     this.y = ystart;
//     this.direction = directionLookup.
//       find('name', orientation.toUpperCase())
//         .rotation;
//     this.walkable = false;
//   }
// }
