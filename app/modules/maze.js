import { $, $All } from './util.js';

/**
 * Defines a save state for a game maze.
 *
 * Saves maze by converting to an binary array, wall = 1.
 * Loads maze by iterating over saved array to render tiles.
 */
export default class Maze {
  constructor(gameAreaSelector) {
    this.gameArea = $(gameAreaSelector);
    this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
    $('.maze-edit').addEventListener('click', () => this.isEditing());
    $('.maze-save').addEventListener('click', () => this.saveMaze());
  }

  isEditing() {
    $(this.gameArea).addEventListener('click', event => {
      let classList = event.target.classList;

      if (classList.contains('tile2')) {
        classList.toggle('tile-wall');
      }
    });
  }

  saveMaze() {
    let tiles = $All('.tile');
    let newMaze = tiles.map(
      e => (e.classList.contains('tile-wall') ? 1 : 0)
    );
    window.localStorage.setItem('maze', newMaze);
  }
}
