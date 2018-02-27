import { floodFill } from './path-finding.js';
import Character from './character.js';

export default class Baddie extends Character {
  constructor() {
    super(...arguments);
    this.path = floodFill(this.grid, this.position, 139);
    this.intervalId;
  }

  move(tile) {
    // Check if target tile exists & is a wall
    if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
      return;
    }

    // Destroy & rerender character sprite
    this._destroySprite(this.position);
    this._renderSprite(tile);
  }

  toggleWalk() {
    this.intervalId ? this._stopWalk() : this._walk();
  }

  _walk() {
    this.intervalId = setInterval(() => {
      let nextTile = this.path[1];
      this.move(nextTile);
    }, 137);
  }

  _stopWalk() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}