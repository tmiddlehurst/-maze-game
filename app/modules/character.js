import * as util from './util.js';

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 *
 * @param {String} name
 * @param {String} grid - CSS selector for parent grid
 * @param {Array} position - coordinate array for starting position. e.g. [0,4]
 */
export default class Character {
  constructor(name, startPosition, grid) {
    this.name = name;
    this.position = startPosition;
    this.gridWidth = grid.columns;
    this.tiles = grid.tiles;

    this.render();
    document.addEventListener('keypress', event => this.moveOne(event.key));
  }

  render(newPosition = this.position, oldPosition) {
    if (oldPosition) {
      util.$All('.tile').item(oldPosition).innerHTML = null;
    }
    util.$All('.tile').item(newPosition).innerHTML = `<div class="${this.name}"></div>`;
  }

  moveOne(key) {
    if (!util.isValidKey) {
      return;
    }

    const initialPosition = this.position;
    const finalPosition = util.moves[key](initialPosition, this.gridWidth);

    if (
      !this.tiles[finalPosition] ||
      this.tiles[finalPosition].isWall
    ) {
      return;
    }

    this.position = finalPosition;
    this.render(finalPosition, initialPosition);
  }
}
