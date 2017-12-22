import { $ } from './util.js';


/**
 * Defines the main game clock.
 */
export default class Clock {
  constructor() {
    this.intervalId;
    this.time = 0;

    $('.clock-start_stop').addEventListener('click', () => this.toggleStartStop());
  }

  isRunning() {
    return this.intervalId.length != 0;
  }

  toggleStartStop() {
    this.intervalId ? this._pause() : this._start();
  }

  _start() {
    this.intervalId = setInterval(() => {
      this.time += 0.025;
      $('.clock-face').innerHTML = this.time.toFixed(1);
    }, 25);
    $('.clock-start_stop').innerText = 'Stop';
  }

  _pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    $('.clock-start_stop').innerText = 'Start';
  }
}
