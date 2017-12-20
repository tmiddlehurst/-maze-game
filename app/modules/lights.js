import { $ } from './util.js';

export default class Lights {
  toggle() {
    $('.game-area').classList.toggle('lights_off');
  }
}
