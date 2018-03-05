import { floodFillPathFinder } from './path-finding.js';
import Character from './character.js';

export default class Baddie extends Character {
  constructor() {
    super(...arguments);
    this.intervalId;
    this.path = floodFillPathFinder(this.grid, this.position, 139);
  }

  /**
   * Toggle baddie walk interval
   *
   * @param {Number} intervalTimeMs Number of miliseconds between baddie move
   */
  toggleWalk(intervalTimeMs) {
    this.intervalId ? this._stopWalk() : this._walk(intervalTimeMs);
  }

  /**
   * Move to a tile
   *
   * @param {Integer} tile tileId to move to
   */
  _moveTo(tile) {
    // Check if target tile exists & is not a wall
    if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
      return;
    }

    // Destroy & rerender character sprite
    this._destroySprite(this.position);
    this._renderSprite(tile);
  }

  /**
   * Start walk interval
   * @param {Number} intervalTime Number of miliseconds between baddie move
   */
  _walk(intervalTime = 75) {

    this.intervalId = setInterval(() => {
      let nextTile = this.path[1];
      this._moveTo(nextTile);
    }, intervalTime);
  }

  _stopWalk() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}