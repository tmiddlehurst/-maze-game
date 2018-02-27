import { $, occuranceOf, lastInArray } from './util.js';

export function findJunctions(grid) {
  return grid.tiles.filter(tile => tile.isJunction);
}

export function floodFill(grid, start, end) {
  console.log('floodFill function called!');
  let i = 0;
  let fastestRoute = null;
  let noRouteAvailable = null;

  let paths = [[start]];

  while(!fastestRoute && !noRouteAvailable) {
    let result = fillNext(grid.tiles, paths, end);
    if (result.fastestRoute) {
      return fastestRoute = result.fastestRoute;
    } else {
      if (i === 100) {
        noRouteAvailable = true;
        throw 'No route available';
      }
      paths = result.paths;
      i++
    }
  }
  return fastestRoute;
}

function fillNext(tiles, paths, target) {
  let nextPaths = [];
  let fastestRoute = null;

  paths.forEach((path, _, paths) => {
    let currentIndex = lastInArray(path);
    let currentTile = tiles[currentIndex];
    let nextTiles = findNextTiles(currentTile, path);

    // Check if target has been reached
    if (nextTiles.includes(target)) {
      console.log('Pathfinder has found target');
      // console.log('TARGET ACQUIRED');
      console.log(path.concat(target));
      return fastestRoute = path.concat(target);
    }

    // Check for dead end
    if (nextTiles.length === 0) {
      return;
    } else {
      nextPaths = nextPaths.concat(nextTiles.map((nextTile, i, nextTiles) => {
        return path.concat(nextTile);
      }));
    }
  });
  return { 'paths': nextPaths, 'fastestRoute': fastestRoute }
}

function findNextTiles(tile, processedTiles) {
  return tile.walkableNeighbours.filter(n => !processedTiles.includes(n));

}


function _findNeighbours(tile, walkableTileIds, gridWidth) {
  const dirFunctions = [
    (pos) => pos - gridWidth,
    (pos) => pos - 1,
    (pos) => pos + gridWidth,
    (pos) => pos + 1,
  ];

  tile.neighbours = dirFunctions.map(f => {
    const neighbour = f(tile.id)
    return walkableTileIds.includes(neighbour) ? neighbour : null;
  });

}
