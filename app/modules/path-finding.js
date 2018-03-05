import { $, lastInArray } from './util.js';

export function floodFillPathFinder(grid, start, end) {
  let paths = [[start]];
  let noPossibleRoute = false;
  let fastestRoute = null;
  let i = 0;

  while (!fastestRoute && !noPossibleRoute) {
    let result = _floodNextTiles(grid.tiles, paths, end);

    if (result.fastestRoute) {
      return fastestRoute = result.fastestRoute;
    }

    /* Check if i is too large to be a realistic search
    guards against an infinite loop if end position can't be reached */
    if (i === 500) {
      noPossibleRoute = true;
      throw 'No route available';
    }

    paths = result.paths;
    i++
  }
  return fastestRoute;
}

function _floodNextTiles(tiles, currentPaths, target) {
  let resultPaths = [];
  let fastestRoute = null;

  currentPaths.forEach((path, _, paths) => {
    let currentTile = tiles[lastInArray(path)];

    /* Find neighbours of current tile which are not in the current path
     prevents Back-tracking */
    let neighbours = currentTile.walkableNeighbours.filter(neighbour => !path.includes(neighbour));

    // Check if target has been reached
    if (neighbours.includes(target)) {
      // console.log('TARGET ACQUIRED');
      // console.log(path.concat(target));
      return fastestRoute = path.concat(target);
    }

    // Check for dead end
    if (neighbours.length === 0) {
      return;
    }

    let updatedPaths = neighbours.map(nextTile => path.concat(nextTile));

    resultPaths = resultPaths.concat(updatedPaths);

  });

  return {
    'paths': resultPaths,
    'fastestRoute': fastestRoute,
  }
}

// function findNextTiles(tile, processedTiles) {
//   return tile.walkableNeighbours.filter(n => !processedTiles.includes(n));
// }

// export function findJunctions(grid) {
//   return grid.tiles.filter(tile => tile.isJunction);
// }

// function _findNeighbours(tile, walkableTileIds, gridWidth) {
//   const dirFunctions = [
//     (pos) => pos - gridWidth,
//     (pos) => pos - 1,
//     (pos) => pos + gridWidth,
//     (pos) => pos + 1,
//   ];

//   tile.neighbours = dirFunctions.map(f => {
//     const neighbour = f(tile.id)
//     return walkableTileIds.includes(neighbour) ? neighbour : null;
//   });
// }
