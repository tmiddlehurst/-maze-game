import { $, occuranceOf } from './util.js';

export function findJunctions(grid) {

  const walkableTiles = grid.tiles.filter(tile => !tile.isWall);
  const walkableTileIds = walkableTiles.map(tile => tile.id);

  const junctions = walkableTiles.filter(tile => {
    let tileNeighbours = _findNeighbours(tile, walkableTileIds, grid.width);

    if ( occuranceOf(null, tileNeighbours) < 2 ) {
      return tile;
    }
  });

  junctions.forEach((junction) => {
    let id = junction.id;
    $(`#tile-${id}`).classList.add('junction');
  });
}

function _findNeighbours(tile, walkableTileIds, gridWidth) {
  const dirFunctions = [
    (pos) => pos - gridWidth,
    (pos) => pos - 1,
    (pos) => pos + gridWidth,
    (pos) => pos + 1,
  ];

  return dirFunctions.map(f => {
    const neighbour = f(tile.id)
    return walkableTileIds.includes(neighbour) ? neighbour : null;
  });
}
