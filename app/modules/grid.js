import { $ } from './util.js';
import findJunctions from './find-junctions.js';

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
    const savedMaze =
      window.localStorage.getItem('maze').split(',') ||
      new Array(area).fill();

    this.container = $(containerSelector);
    this.width = this.container.clientWidth / tileDimension;
    this.height = this.container.clientHeight / tileDimension;

    this.tiles = new Array(Math.floor(this.height * this.width))
      .fill()
      .map((e, i) => {
        return {
          isWall: savedMaze[i] == 1,
          id: i
        }
      });

    this._render();
  }

  _render() {
    let blockRenderString = this.tiles.reduce((string, e, i) => {
      return string += `<div style="height:50px;width:50px;" id="tile-${i}" data-tileIndex="${i}" class="tile ${e.isWall ? 'tile-wall' : ''}"></div>`;
    }, '');

    this.container.innerHTML = blockRenderString;
  }
}
