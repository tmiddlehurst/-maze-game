import { $ } from './util.js';

export default class Clock {
  constructor(buttonSelector, faceSelector) {
    this.intervalId;
    this.time = 0;
    this.button = $(buttonSelector);
    this.face = $(faceSelector);
    $(buttonSelector).addEventListener('click', () => this.toggleStartStop());
  }

  toggleStartStop() {
    this.intervalId ? this.pause() : this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.time += 0.1;
      this.face.innerHTML = this.time.toFixed(1);
    }, 100);
    this.button.innerText = 'Stop';
  }

  pause() {
    clearInterval(this.intervalId);
    this.button.innerText = 'Start';
  }
}
