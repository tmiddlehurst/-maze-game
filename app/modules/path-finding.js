import { $, tail } from './util.js';

export const moveMap = {
  'N': function up([x, y]) {
    return [(x - 1), y];
  },
  'E': function right([x, y]) {
    return [x, (y + 1)];
  },
  'S': function down([x, y]) {
    return [(x + 1), y];
  },
  'W': function left([x, y]) {
    return [x, (y - 1)];
  },
};

export function coordsToIndex([x, y], width) {
  return x + y * width;
}

export function indexToCoords(i, width) {
  let x = i % width;
  let y  = (i - x) / width;

  return [x, y];
}

/**
 * Check if a tile is walkable
 *
 * @param {Maze} maze Binary maze array
 * @param {Integer} i Tile index
 */
function isWalkable(maze, i) {
  return maze[i] && maze[i] === 1;
}

// export function isWalkable(maze, [x, y]) {
//   const width = maze[0].length;
//   const height = maze.length;

//   if (
//     x < 0 ||
//     y < 0 ||
//     y >= width ||
//     x >= height ||
//     maze[x][y] === 0
//   ) {
//     return false;
//   } else {
//     return true
//   }
// }

/**
 *
 * @param {Integer} i - Tile index
 * @param {Array} maze - Maze
 */
function _getWalkableNeighbours(i, maze) {
  let neighbours = [];

  for (let dir in moveMap) {
    // Bit dodgy - Convert index to coords to get new tile then convert new tile coords back to index.
    let newTile = coordsToIndex(dir(indexToCoords(i)));

    if (isWalkable(maze, newTile)) {
      return neighbours.concat(newTile)
    }
  }
  return neighbours;
}


export function pathFinder(maze, start, target) {
  let noPossibleRoute = false;
  let fastestRoute = null;
  let paths = [[start]];
  let i = 0;

  // Extend `path` by one tile in each possible new direction.
  function _extend(path) {
    let neighbours = _getWalkableNeighbours(tail(path), maze);

    // Neighbouring of current tile which are NOT in the current path. (Prevents Back-tracking)
    let validTiles = neighbours.filter(tile => {
      return !path.includes(tile);
    });

    if (validTiles.length) {
      // Check if target has been reached
      if (validTiles.includes(target)) {
        return fastestRoute = path.concat(target);
      }

      return validTiles.map(tile => path.concat(tile));
    }
  }

  while (!fastestRoute && !noPossibleRoute) {
    // Check if i is too large to be a realistic search (guard against infinite search when target cannot be reached)
    if (i === 500) {
      noPossibleRoute = false;
      console.log('No route available');
    }

    paths = paths.reduce((a, path) => {
      return a.concat(_extend(path));
    }, []);
    i++
  }
  return fastestRoute || null;
}


// class FloodFiller {
//   constructor(maze) {
//     this.maze = maze;
//     this.start = start;
//     this.target = target;
//     this.possibleRoute = true;
//     this.fastestRoute = null;
//   }

//   pathToTarget(start, target) {
//     this.target = target;

//     let paths = [[start]];
//     let i = 0;

//     while (!this.fastestRoute && this.possibleRoute) {
//       // Check if i is too large to be a realistic search (target cannot be reached)
//       if (i === 500) {
//         this.possibleRoute = false;
//         console.log('No route available');
//       }

//       paths = this._extendPaths(paths);
//       i++
//     }
//     return this.fastestRoute || this.possibleRoute;
//   }

//   _extendPaths(paths) {
//     let newPaths = paths.reduce((a, path) => {
//       return a.concat(this._extend(path));
//     }, []);

//     return newPaths;
//   }

//   _extend(path) {
//     // coordinates of path tip
//     let [x, y] = tail(path);

//     //Find neighbours of current tile which are not in the current path. (Prevents Back-tracking)
//     let validTiles = _findNeighbouringTiles([x, y], this.maze).filter(tile => !path.includes(tile));

//     // Check for dead end
//     if (validTiles.length === 0) {
//       return;
//     }

//     // Check if target has been reached
//     if (validTiles.includes(targetTile)) {
//       return this.fastestRoute = path.concat(target);
//     }

//     return validTiles.map(tile => path.concat(tile));
//   }
// }

//TODO: FINISH OFF REFACTOR OF THESE TWO FUNCTIONS

// function findChildPaths(path, maze, targetTile) {
//   let [tX, tY] = tail(path);
//   //Find neighbours of current tile which are not in the current path. (Prevents Back-tracking)
//   let tilesToFlood = _findNeighbouringTiles([tX, tY], maze).filter(neighbour => !path.includes(neighbour));

//   // Check for dead end
//   if (tilesToFlood.length === 0) {
//     return;
//   }

//   // Check if target has been reached
//   if (tilesToFlood.includes(targetTile)) {
//     return fastestRoute = path.concat(target);
//   }

//   return tilesToFlood.map(tile => path.concat(tile));
// }

// function _floodNext(tiles, paths, targetTile) {
//   let fastestRoute = null;
//   let nextPaths = [];

//   paths.forEach((path) => {
//     let childPaths = findChildPaths(path, maze, targetTile);

//     return nextPaths.concat(childPaths);
//   });

//   return {
//     'paths': nextPaths,
//     'fastestRoute': fastestRoute,
//   }
// }

// export function floodFiller(maze, start, end) {
//   let paths = [[start]];
//   let possibleRoute = false;
//   let fastestRoute = null;
//   let i = 0;

//   while (!fastestRoute && possibleRoute) {
//     let result = _floodNext(maze, paths, end);

//     if (result.fastestRoute) {
//       return fastestRoute = result.fastestRoute;
//     }

//     /* Check if i is too large to be a realistic search
//     guards against an infinite loop if end position can't be reached */
//     if (i === 500) {
//       possibleRoute = false;
//       console.log('No route available');
//     }

//     paths = result.paths;
//     i++
//   }
//   return fastestRoute;
// }