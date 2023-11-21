import { $ } from './utils.js';


/**
 * Defines the main game clock.
 */
export default class Clock {
  constructor() {
    this.intervalId;
    this.time = 0;
  }

  toggleStartStop() {
    this.intervalId ? this._pause() : this._start();
  }

  _start() {
    this.intervalId = setInterval(() => {
      this.time += 0.025;
      // $('.clock-face').innerHTML = this.time.toFixed(1);
    }, 25);
  }

  _pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
