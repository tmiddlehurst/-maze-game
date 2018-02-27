import { $, $All, findTile } from './util.js';

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Integer} startPosition coordinate for starting position. e.g. [0,4].
 * @param {Array} grid grid that the character lives in.
*/
export default class Character {
  constructor(name, startPosition, grid) {
    this.name = name;
    this.position = startPosition;
    this.grid = grid;

    this.getMoveTile = {
      'w': (pos) => pos - this.grid.width,
      'a': (pos) => pos - 1,
      's': (pos) => pos + this.grid.width,
      'd': (pos) => pos + 1,
    };
    this._renderSprite();
  }

  /**
   * Moves the character using either tileNumber or keyboard key
   *
   * @param {Number} tile - Tile number to move to
   * @param {String} key - Keyboard key
   */
  move(key) {
    let tile = this.getMoveTile[key](this.position);

    // Check if target tile exists & is a wall
    if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
      return;
    }

    // Destroy & rerender character sprite
    this._destroySprite(this.position);
    this._renderSprite(tile);
  }

  _destroySprite(tile) {
    this.position = null;
    $(`#tile-${tile}`).innerHTML = null;
  }

  _renderSprite(tile = this.position) {
    this.position = tile;
    $(`#tile-${tile}`).innerHTML = `<div class="character ${this.name}"></div>`;
  }
}
