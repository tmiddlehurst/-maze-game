import { $, $All, findTile } from './util.js';

const DIRECTION_MAP = {
  w: 'UP',
  ArrowUp: 'UP',
  a: 'LEFT',
  ArrowLeft: 'LEFT',
  s: 'DOWN',
  ArrowDown: 'DOWN',
  d: 'RIGHT',
  ArrowRight: 'RIGHT',
}

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
    this.stepsTaken = 0;
    this.moveInterval;
    this.moveDirection;

    this.moveMap = {
      UP: (pos) => pos - this.grid.width,
      RIGHT: (pos) => pos + 1,
      DOWN: (pos) => pos + this.grid.width,
      LEFT: (pos) => pos - 1,
    };
    this._renderSprite();
  }

  setMoveDirection(key) {
    this.moveDirection = DIRECTION_MAP[key];

    if (!this.moveInterval) {
      this._walk();
    }
    console.log(`player direction is now ${DIRECTION_MAP[key]}`)
  }

  _walk(intervalTime = 200) {
    this.moveInterval = setInterval(() => {
      let move = this.moveMap[this.moveDirection];
      let newTile = move(this.position);

      this._moveTo(newTile);

      console.log('Player move')
    }, intervalTime)
  }

  /**
   * Moves the character using keyboard key
   *
   * @param {String} key - Keyboard key
   */
  _moveTo(tile) {

    // Check if target tile exists & is a wall
    if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
      return;
    }

    this.stepsTaken++;
    // this._playStepAudio();

    // Destroy & rerender character sprite
    this._destroySprite(this.position);
    this._renderSprite(tile);
  }

  _playStepAudio() {
    let stepAudio;

    if (this.stepsTaken % 2 === 0) {
      stepAudio = $('#footstep-2');
    } else stepAudio = $('#footstep-1');

    stepAudio.play();
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
