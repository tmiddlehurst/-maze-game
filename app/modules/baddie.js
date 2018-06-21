import { pathFinder, isWalkable, coordsToIndex } from './path-finding.js';
import Character from './character.js';

export default class Baddie extends Character {
  constructor(name, maze, player) {
    super(...arguments);

    // If i set this.playerPos = player.position, will this be a reference to player.position always or will it just cache the value of player.position when this class is instantiated?
    this.player = player;
    this.stepsTaken = 0;

    this._locatePlayerInterval = null;
    this._walkInterval = null;
    this._path = [];
  }

  toggleWalk(intervalMilis) {
    this._walkInterval ? this._stopWalk() : this._startWalk(intervalMilis);
  }

  _locatePlayer() {
    let thisPos = coordsToIndex(this.position);
    let playerPos = coordsToIndex(this.player.position);

    let path = pathFinder(this.maze, thisPos, playerPos);

    return path ? [[0, 0]] : path;
  }

  _locatePlayerInterval() {
    this._locatePlayerInterval = setInterval(() => {
      this._path = this._locatePlayer();
    }, 1500);
  }

  /**
   * Start walk interval
   * @param {Number} intervalTime Number of miliseconds between baddie move
   */
  _startWalk(intervalTime = 75) {
    this._path = this._locatePlayer();
    this.walkInterval = setInterval(() => {
      let nextTile = this._path[1];
      this._step(nextTile);
      if (nextTile = this.player.position) {
        this._tearDown();
      }
    }, intervalTime);
  }

  _tearDown() {
    console.log(`${this.name} SHUTTING DOWN`);
    clearInterval(this._locatePlayerInterval);
    clearInterval(this._walkInterval);
    this._walkInterval = null;
    this._locatePlayerInterval = null;
  }
}