import { $ } from './util.js';
import findJunctions from './path-finding.js';

/**
 *
 * @param {*} tileId
 * @param {*} gridWidth
 */
function _findNeighbours(tileId, gridWidth, savedMaze) {
  const dirFunctions = [
    (pos) => pos - gridWidth,
    (pos) => pos - 1,
    (pos) => pos + gridWidth,
    (pos) => pos + 1,
  ];

  let neighbours = []

  dirFunctions.forEach(f => {
    let neighbourId = f(tileId);
    if (savedMaze[neighbourId] === '0') {
      neighbours.push(neighbourId);
    }
  });

  return neighbours;
}

/**
 * Defines the base game grid in which to build the maze.
 *
 * @param {String} containerSelector - querySelector for container element.
 * @param {Number} dimension - px dimension for each tile.
 */
export default class Grid {
  constructor(containerSelector, tileDimension) {
    // const savedMaze = window.localStorage.getItem('maze').split(',')
    //   || new Array(area).fill();
    const savedMaze = "1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1".split(',');

    this.container = $(containerSelector);
    this.width = this.container.clientWidth / tileDimension;
    this.height = this.container.clientHeight / tileDimension;

    this.tiles = new Array(Math.floor(this.height * this.width))
      .fill()
      .map((e, i) => {
        let walkableNeighbours = _findNeighbours(i, this.width, savedMaze);
        let isWall = savedMaze[i] === "1"
        return {
          isWall: isWall,
          id: i,
          walkableNeighbours: walkableNeighbours,
          isJunction: (!isWall && walkableNeighbours.length > 2),
          iscorridor: (!isWall && walkableNeighbours.length === 2),
        }
      });

    this._render();
  }

  _render() {
    let blockRenderString = this.tiles.reduce((string, tile, i) => {
      let classes = '';
      classes += tile.isWall ? ' tile-wall' : '';
      // classes += tile.isJunction ? ' tile-junction' : '';
      // classes += tile.iscorridor ? ' tile-corridor' : '';
      return string += `<div style="height:50px;width:50px;" id="tile-${i}" data-tileIndex="${i}" class="tile${classes}"></div>`;
    }, '');

    this.container.innerHTML = blockRenderString;
  }
}
