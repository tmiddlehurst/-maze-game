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
    this.gameArea.addEventListener('click', event => {
      let classList = event.target.classList;

      if (classList.contains('tile')) {
        classList.toggle('tile-wall');
      }
    });
  }

  saveMaze() {
    let tiles = $All('.tile');
    let newMaze = []
    tiles.forEach(t => {
      if (t.classList.contains('tile-wall')) {
        newMaze.push(1);
      } else {
        newMaze.push(0);
      }
    });
    window.localStorage.setItem('maze', newMaze);
  }
}

export const MAZES = {
  testMaze: "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1",
  maze1: "1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1"
}