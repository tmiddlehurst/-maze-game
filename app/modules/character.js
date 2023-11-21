import { $ } from './utils.js';
import { moveMap, isWalkable } from './path-finding.js';

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Array} maze grid that the character lives in.
*/
export default class Character {
  constructor(name, maze) {
    this.name = name;
    this.maze = maze;
    this.moveInterval;
    this.direction;
    this.stepsTaken = 0;
  }

  /**
   * Public spawn character method
   *
   * @param {Co-ords} tile
   */
  spawn(tile) {
    if (this.position) {
      this._destroySprite();
    }
    this._renderAt(tile);
  }

  /**
   * Set move direction
   *
   * @param {String} direction N/E/S/W
   */
  setMoveDirection(direction) {
    if (!this.moveInterval) {
      this._startWalk();
    }

    this.direction = direction;
    console.log(`player direction is now ${direction}`)
  }

  /**
   * Initiate walk interval
   *
   * @param {Integer} intervalTime ms
   */
  _startWalk(intervalTime = 200) {
    this.moveInterval = setInterval(() => {
      let nextTile = moveMap[this.direction](this.position);

      if (isWalkable(this.maze, nextTile)) {
        console.log('Step');
        this.stepsTaken++;
        this._destroySprite();
        this._renderAt(nextTile);

      } else this._stopWalk();

    }, intervalTime)
  }

  /**
   * End walk interval
   */
  _stopWalk() {
    clearInterval(this.moveInterval);
    this.moveInterval = null;
  }

  _destroySprite() {
    const [y, x] = this.position; // TODO: X and Y in the grid are the wrong way around, fix this at some point?

    $(`#tile-${y}-${x}`).innerHTML = null;
    this.position = null;
  }

  _renderAt(tile = this.position) {
    const [y, x] = tile;

    $(`#tile-${y}-${x}`).innerHTML = `<div class="character ${this.name}"></div>`;
    this.position = tile;
  }
}
