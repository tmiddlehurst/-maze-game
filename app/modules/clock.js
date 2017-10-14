import * as util from './util.js';

export default class Clock {
  constructor() {
    this.time = 0;
    this.intervalId;

    util.$('.clock-start_btn').addEventListener('click', this.start.bind(this));
    util.$('.clock-pause_btn').addEventListener('click', this.pause.bind(this));
  }

  _updateClock(clock, time) {
    clock.innerHTML = time;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.time += 0.1;
      this._updateClock(util.$('.clock-face'), this.time.toFixed(1));
    }, 100);
  }

  pause() {
    clearInterval(this.intervalId);
  }
}