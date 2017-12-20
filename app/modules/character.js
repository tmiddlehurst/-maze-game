import { $, $All } from './util.js';

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Integer} startPosition - coordinate for starting position. e.g. [0,4]
 */
export default class Character {
  constructor(name, startPosition) {
    this.position = startPosition;
    this.name = name;
    this._renderSprite();
    document.addEventListener('keypress', function() {
      const actionKeymap = {
        'w': 'up',
        'a': 'left',
        's': 'down',
        'd': 'right',
      };
      // window.grid.move
    })
  }

  _destroySprite(atTile) {
    this.position = null;
    $All('.tile').item(atTile).innerHTML = null;
  }

  _renderSprite(atTile = this.position) {
    this.position = atTile;
    $All('.tile').item(atTile).innerHTML = `<div class="${this.name}"></div>`;
  }

  moveTo(tile) {
    this._destroySprite(this.position);
    this._renderSprite(tile);
  }
}
