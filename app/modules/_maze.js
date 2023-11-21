import { $, $All } from './utils.js';

/**
 * Defines a save state for a game maze.
 *
 * Saves maze by converting to an binary array, wall = 1.
 * Loads maze by iterating over saved array to render tiles.
 */
export default class _Maze {
  constructor(gameAreaSelector) {
    const LOCAL_STORAGE = window.localStorage;
    this.gameArea = $(gameAreaSelector);
    this.savedMaze = LOCAL_STORAGE.getItem('maze-1').split(',') || [];
    this.mazeInEdit = null;
    this.numberOfMazes = LOCAL_STORAGE.getItem('')

    $('.maze-edit').addEventListener('click', () => this.isEditing());
    $('.maze-save').addEventListener('click', () => this.saveMaze());
    $('.maze-new').addEventListener('click', () => this.newMaze());
  }

  isEditing() {
    this.gameArea.addEventListener('click', event => {
      let classList = event.target.classList;

      if (classList.contains('tile')) {
        classList.toggle('tile-wall');
      }
    });
  }

  newMaze() {

  }

  _getMaze(x) {
    const localStorage = window.localStorage;
    try {
      localStorage.getItem(`maze-${x}`)
    } catch(err) {
      throw (err, 'That maze doesn\'t exist');
    }
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
    window.localStorage.setItem('mazes', [newMaze, 1]);
  }
}

export const MAZES = {
  testMaze: "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1",
  maze1: "1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1"
}