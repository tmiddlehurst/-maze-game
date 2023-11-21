import { $ } from './utils.js';

/**
 * Defines 'lights' in the game area to hide/show walkable path and characters.
 */
export default class Lights {
  toggleOnOff() {
    $('.game-area').classList.toggle('lights_off');
  }
}
