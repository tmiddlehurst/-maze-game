import { $ } from './util.js';

/**
 * Renders a random maze of square tiles with dimensions width x height within a container
 *
 * @param {String} containerSelector - querySelector for container element.
 * @param {Number} dimension - px dimension for each tile.
 */
export function renderMaze(containerSelector, maze) {
  const container = $(containerSelector);
  const height = maze.length;
  const width = maze[0].length;

  let i = 0;
  let blockRenderString = '';

  for (let j = 0; j < height; j++) {
    for (let k = 0; k < width; k++) {
      let classes = '';

      if (maze[j][k] === 0) {
        classes += ' tile-wall';
      }

      blockRenderString += `<div style="height:${(container.clientHeight / height)}px;width:${(container.clientWidth / width)}px;" id="tile-${j}-${k}" class="tile${classes} index-${i}"></div>`;
      i++;
    }
  }

  container.innerHTML = blockRenderString;
  return maze;
}

export class MazeFeatures {
  constructor() {
    $('.gate-tile').innerHTML += `<div class="gate-tile_gate"></div>`;
  }
  removeGate() {
    $('.gate-tile').innerHTML = null;
  }
}
