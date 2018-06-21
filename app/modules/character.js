import { $, $All, findTile } from './util.js';
import { moveMap, isWalkable } from './path-finding.js';

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Array} maze grid that the character lives in.
*/
export default class Character {
  constructor(name, maze) {
    this.moveInterval;
    this.direction;
    this.name = name;
    this.maze = maze;
    this.stepsTaken = 0;
  }

  /**
   * Set move direction
   *
   * @param {String} direction N/E/S/W
   */
  setMoveDirection(direction) {
    this.direction = move[direction];

    if (!this.moveInterval) {
      this._startWalk();
    }
    console.log(`player direction is now` + direction)
  }

  /**
   * Public spawn character method
   *
   * @param {Co-ords} tile
   */
  spawn(tile) {
    this._destroySprite();
    this._renderSprite(tile);
  }

  /**
   * Initiate walk interval
   *
   * @param {Integer} intervalTime ms
   */
  _startWalk(intervalTime = 200) {
    this.moveInterval = setInterval(() => {
      let nextTile = moveMap[this.direction](this.position);

      if (isWalkable(nextTile)) {
        this._moveTo(newTile);
        console.log('Player move');
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


  /**
   * Render character at `tile`
   *
   * @param {Co-ords} tile
   */
  _moveTo(tile) {
    this.stepsTaken++;

    // Destroy & rerender character sprite
    this._destroySprite();
    this._renderSprite(tile);
  }


  _destroySprite() {
    const [x, y] = this.position;

    $(`#tile-${y}-${x}`).innerHTML = null;
    this.position = null;
  }

  _renderSprite(tile = this.position) {
    const [x, y] = tile;

    $(`#tile-${y}-${x}`).innerHTML = `<div class="character ${this.name}"></div>`;
    this.position = tile;
  }
}
