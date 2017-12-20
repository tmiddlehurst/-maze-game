import { $ } from './util.js';

/**
 *
 * Defines a tile within the game grid.
 * Sets index, dimensions, 'isWall'.
 */
export class Tile {
  /**
   *
   * @param {Number} dimension - height/width value
   * @param {Number} i - Index
   * @param {String} isWall - "Is wall" flag
   */
  constructor(dimension, i, isWall) {
    this.dimension = dimension;
    this.index = i;
    this.isWall = isWall;
  }
}

/**
 * Defines the game grid in which to build the maze.
 */
export default class Grid {
  /**
   *
   * @param {String} container - querySelector for container element.
   * @param {Number} dimension - height and width value for each square tile.
   */
  constructor(container, tileDimension) {
    this.container = $(container);

    // Number of cols/rows
    this.width = this.container.clientWidth / tileDimension;
    this.height = this.container.clientHeight / tileDimension;

    const tileTotal = Math.floor(this.height * this.width);

    this.savedMaze =
      window.localStorage.getItem('maze').split(',') ||
      new Array(area).fill();

    this.tiles = new Array(tileTotal)
      .fill()
      .map((e, i) => new Tile(tileDimension, i, this.savedMaze[i] == 1));

    this.render();
  }

  render() {
    this.container.innerHTML = null;
    this.tiles.forEach((e, i) => {
      let t = document.createElement('div');
      t.setAttribute(
        'style',
        `height:${e.dimension}px;width:${e.dimension}px;`
      );
      t.setAttribute('data-tileIndex', i);
      t.classList.add('tile');
      e.isWall ? t.classList.add(['tile-wall']) : (t.innerText = i);
      this.container.appendChild(t);
    });
  }
}

// /**
//  * Defines a save state for a game maze.
//  *
//  * Saves maze by converting to an array of binaries, 1 == wall, 0 == walkable
//  * Loads maze by iterating over saved array to render tiles.
//  */
// class Maze {
//   constructor(gameAreaSelector) {
//     this.gameArea = $(gameAreaSelector);
//     this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
//     $('.edit-maze').addEventListener('click', () => this.isEditing());
//     $('.save-maze').addEventListener('click', () => this.saveMaze());

//     this.loadMaze();
//   }

//   isEditing() {
//     $(this.gameArea).addEventListener('click', event => {
//       let classList = event.target.classList;

//       if (classList.contains('tile')) {
//         classList.toggle('tile-wall');
//       }
//     });
//   }

//   loadMaze() {
//     let tiles ile');
//     tiles.forEach((e, i) => {
//       if (this.savedMaze[i] == 1) {
//         e.classList.add('tile-wall');
//       }
//     });
//   }

//   saveMaze() {
//     let tiles ile');
//     let newMaze = tiles.map(
//       e => (e.classList.contains('tile-wall') ? '1' : '0')
//     );
//     window.localStorage.setItem('maze', newMaze);
//   }
// }
