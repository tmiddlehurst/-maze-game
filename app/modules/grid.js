import { $ } from './util.js';

/**
 *
 * Defines a tile within the game grid.
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
 * Defines the base game grid in which to build the maze.
 */
export default class Grid {
  /**
   *
   * @param {String} containerSelector - querySelector for container element.
   * @param {Number} dimension - height and width value for each square tile.
   */
  constructor(containerSelector, tileDimension) {
    this.container = $(containerSelector);

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
