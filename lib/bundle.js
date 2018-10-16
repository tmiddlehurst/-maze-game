/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * check for even/odd number
 *
 * @param {Number} value
 */
var isEven = function isEven(value) {
  return value % 2;
};

/**
 *  JQuery-like DOM element selector
 *
 * @param {String} selector
 */
function $(selector) {
  return document.querySelector(selector);
}

/**
 *  Returns a nodelist of all DOM elements selected by `selector`
 *
 * @param {String} selector
 */
function $All(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Return random int between `min` and `max`
 *
 * @param {Number} min
 * @param {Number} max
 */

function randomIntBetween(min, max) {
  return min + Math.round(Math.random() * max);
}

/**
 * Return last item in array
 *
 * @param {Array} array
 */
function $tail(array) {
  return array[array.length - 1];
}

// ***** UNUSED ******

/**
 * Return number of occurances of {val} in {arr}
 *
 * @param {*} val - value to find
 * @param {[*]} arr - array to look in
 * @returns {Number}
 */
function countOf(val, arr) {
  var occurances = arr.filter(function (element) {
    return element === val;
  });

  return occurances.length;
}

exports.isEven = isEven;
exports.$ = $;
exports.$All = $All;
exports.randomIntBetween = randomIntBetween;
exports.$tail = $tail;
exports.countOf = countOf;

// WOULD THIS WORK?
// let safeWhile = function(condition, limiter, fn) {
//   let i = 0
//   while(condition) {
//     if (i >= limiter) {
//       break;
//     }
//     return fn();
//     i++
//   }
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveMap = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.isWalkable = isWalkable;
exports.coordsToIndex = coordsToIndex;
exports.indexToCoords = indexToCoords;
exports.pathFinder = pathFinder;

var _util = __webpack_require__(0);

var moveMap = exports.moveMap = {
  'N': function up(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return [x - 1, y];
  },
  'E': function right(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return [x, y + 1];
  },
  'S': function down(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];

    return [x + 1, y];
  },
  'W': function left(_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        x = _ref8[0],
        y = _ref8[1];

    return [x, y - 1];
  }
};

function isWalkable(maze, _ref9) {
  var _ref10 = _slicedToArray(_ref9, 2),
      x = _ref10[0],
      y = _ref10[1];

  if (maze[x] && maze[x][y]) {
    return maze[x][y] === 1;
  } else return false;
}

/**
 * Get walkable neighbouring tiles
 *
 * @param {Number} i - Tile index
 * @param {Array} maze - Maze
 * @returns {Array} Array of tile indices
 */
function _getWalkableNeighbours(i, maze) {
  var width = maze[0].length;

  var _indexToCoords = indexToCoords(i, width),
      _indexToCoords2 = _slicedToArray(_indexToCoords, 2),
      x = _indexToCoords2[0],
      y = _indexToCoords2[1];

  var neighbours = [];

  for (var dir in moveMap) {
    var newTile = moveMap[dir]([x, y]);

    if (isWalkable(maze, newTile)) {
      neighbours.push(coordsToIndex(newTile, width));
    }
  }
  return neighbours;
}

/**
 *
 * @param {Coords} [x,y] - Coordinates to convert
 * @param {Number} width - Maze width
 */
function coordsToIndex(_ref11, width) {
  var _ref12 = _slicedToArray(_ref11, 2),
      x = _ref12[0],
      y = _ref12[1];

  return x + y * width;
}

/**
 *
 * @param {Number} i - Index to convert
 * @param {*} width
 */
function indexToCoords(i, width) {
  var x = i % width;
  var y = (i - x) / width;

  return [x, y];
}

//TODO: Fix this funct
function pathFinder(maze, start, target) {
  var width = maze[0].length;

  start = coordsToIndex(start, width);
  target = coordsToIndex(target, width);

  var noPossibleRoute = false;
  var fastestRoute = null;
  var paths = [[start]];
  var i = 0;

  // Extend `path` by one tile in each possible new direction.
  function _extend(path) {
    var neighbours = _getWalkableNeighbours((0, _util.$tail)(path), maze);
    debugger;

    // Neighbouring of current tile which are NOT in the current path. (Prevents Back-tracking)
    // TODO: PROBLEM: cannot check for presence of an array (coordinate pair) within another array (path)
    var validTiles = neighbours.filter(function (tile) {
      return !path.includes(tile);
    });

    if (validTiles.length) {
      // Check if target has been reached
      if (validTiles.includes(target)) {
        return fastestRoute = path.concat(target);
      }

      return validTiles.map(function (tile) {
        return path.concat(tile);
      });
    }
  }

  while (!fastestRoute && !noPossibleRoute) {
    // Check if i is too large to be a realistic search (guard against infinite search when target cannot be reached)
    if (i === 500) {
      noPossibleRoute = false;
      console.log('No route available');
    }

    paths = paths.reduce(function (a, path) {
      return a.concat(_extend(path));
    }, []);
    i++;
  }
  return fastestRoute || null;
}

// /**
//  *
//  * Check if a tile index corresponds to a walkabletile
//  *
//  * @param {Maze} maze Binary maze array
//  * @param {Number} i Tile index
//  */
// function _isValidTileIndex(maze, i) {
//   return maze[i] && maze[i] === 1;
// }


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
//     let [x, y] = $tail(path);

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
//   let [tX, tY] = $tail(path);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _pathFinding = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Array} maze grid that the character lives in.
*/
var Character = function () {
  function Character(name, maze) {
    _classCallCheck(this, Character);

    this.name = name;
    this.maze = maze;
    this.moveInterval;
    this.direction;

    this.stepsTaken = 0;
  }

  /**
   * Public spawn character method
   *
   * @param {Co-ords} tile
   */


  _createClass(Character, [{
    key: 'spawn',
    value: function spawn(tile) {
      if (this.position) {
        this._destroySprite();
      }
      this._renderAt(tile);
    }

    /**
     * Set move direction
     *
     * @param {String} direction N/E/S/W
     */

  }, {
    key: 'setMoveDirection',
    value: function setMoveDirection(direction) {
      if (!this.moveInterval) {
        this._startWalk();
      }

      this.direction = direction;
      console.log('player direction is now ' + direction);
    }

    /**
     * Initiate walk interval
     *
     * @param {Integer} intervalTime ms
     */

  }, {
    key: '_startWalk',
    value: function _startWalk() {
      var _this = this;

      var intervalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

      this.moveInterval = setInterval(function () {
        var nextTile = _pathFinding.moveMap[_this.direction](_this.position);

        if ((0, _pathFinding.isWalkable)(_this.maze, nextTile)) {
          console.log('Step');
          _this.stepsTaken++;
          _this._destroySprite();
          _this._renderAt(nextTile);
        } else _this._stopWalk();
      }, intervalTime);
    }

    /**
     * End walk interval
     */

  }, {
    key: '_stopWalk',
    value: function _stopWalk() {
      clearInterval(this.moveInterval);
      this.moveInterval = null;
    }
  }, {
    key: '_destroySprite',
    value: function _destroySprite() {
      var _position = _slicedToArray(this.position, 2),
          y = _position[0],
          x = _position[1]; // TODO: X and Y in the grid are the wrong way around, fix this at some point?

      (0, _util.$)('#tile-' + y + '-' + x).innerHTML = null;
      this.position = null;
    }
  }, {
    key: '_renderAt',
    value: function _renderAt() {
      var tile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position;

      var _tile = _slicedToArray(tile, 2),
          y = _tile[0],
          x = _tile[1];

      (0, _util.$)('#tile-' + y + '-' + x).innerHTML = '<div class="character ' + this.name + '"></div>';
      this.position = tile;
    }
  }]);

  return Character;
}();

exports.default = Character;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _maze = __webpack_require__(4);

var _generateMaze = __webpack_require__(5);

var _pathFinding = __webpack_require__(1);

var _character = __webpack_require__(2);

var _character2 = _interopRequireDefault(_character);

var _baddie = __webpack_require__(6);

var _baddie2 = _interopRequireDefault(_baddie);

var _lights = __webpack_require__(7);

var _lights2 = _interopRequireDefault(_lights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CORE GAME FUNCTION
window.onload = function () {
  var LIGHTS = new _lights2.default();
  var INPUT_HANDLER = inputHandler();

  var PLAYER = void 0;
  var BADDIE = void 0;
  var MAZE = void 0;

  (function newGame() {
    MAZE = (0, _generateMaze.generateMaze)(32, 16);
    PLAYER = new _character2.default('player', MAZE);
    BADDIE = new _baddie2.default('baddie', MAZE, PLAYER);

    (0, _maze.renderMaze)('.game-area', MAZE);
    PLAYER.spawn([1, 0]);

    setTimeout(function () {
      BADDIE.spawn([1, 0]);
      BADDIE.toggleWalk(75);
    }, 5000);
  })();

  //KeyPress Handler
  function inputHandler() {
    return document.addEventListener('keydown', function (event) {
      var actionMap = {
        'ArrowUp': function ArrowUp() {
          return playerMove('N');
        },
        'ArrowRight': function ArrowRight() {
          return playerMove('E');
        },
        'ArrowDown': function ArrowDown() {
          return playerMove('S');
        },
        'ArrowLeft': function ArrowLeft() {
          return playerMove('W');
        },
        'w': function w() {
          return playerMove('N');
        },
        'd': function d() {
          return playerMove('E');
        },
        's': function s() {
          return playerMove('S');
        },
        'a': function a() {
          return playerMove('W');
        },
        ' ': function _() {
          return toggleLight();
        }
      };
      var action = actionMap[event.key];

      function toggleLight() {
        LIGHTS.toggleOnOff();
        BADDIE.toggleWalk();
        return;
      }

      function playerMove(direction) {
        return PLAYER.setMoveDirection.call(PLAYER, direction);
      }

      if (action) action();
    });
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MazeFeatures = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.renderMaze = renderMaze;

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Renders a random maze of square tiles with dimensions width x height within a container
 *
 * @param {String} containerSelector - querySelector for container element.
 * @param {Number} dimension - px dimension for each tile.
 */
function renderMaze(containerSelector, maze) {
  var container = (0, _util.$)(containerSelector);
  var height = maze.length;
  var width = maze[0].length;

  var i = 0;
  var blockRenderString = '';

  for (var j = 0; j < height; j++) {
    for (var k = 0; k < width; k++) {
      var classes = '';

      if (maze[j][k] === 0) {
        classes += ' tile-wall';
      }

      blockRenderString += '<div style="height:' + container.clientHeight / height + 'px;width:' + container.clientWidth / width + 'px;" id="tile-' + j + '-' + k + '" class="tile' + classes + ' index-' + i + '"></div>';
      i++;
    }
  }

  container.innerHTML = blockRenderString;
  return maze;
}

var MazeFeatures = exports.MazeFeatures = function () {
  function MazeFeatures() {
    _classCallCheck(this, MazeFeatures);

    (0, _util.$)('.gate-tile').innerHTML += '<div class="gate-tile_gate"></div>';
  }

  _createClass(MazeFeatures, [{
    key: 'removeGate',
    value: function removeGate() {
      (0, _util.$)('.gate-tile').innerHTML = null;
    }
  }]);

  return MazeFeatures;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMaze = generateMaze;

var _util = __webpack_require__(0);

/**
 * Generate a random maze of specified width and height
 *
 * @param {Integer} mazeWidth
 * @param {Integer} mazeHeight
 */
function generateMaze(mazeWidth, mazeHeight) {

  var maze = [];
  var moves = [];

  // build the 3d 'matrix' for the grid, an array of arrays
  for (var i = 0; i < mazeHeight; i++) {
    maze[i] = [];
    for (var j = 0; j < mazeWidth; j++) {
      maze[i][j] = 0;
    }
  }

  // starts at [1,1] instead of [0,0] to make a 1-wide wall around the maze?
  var posX = 1;
  var posY = 1;

  maze[1][0] = 1;
  maze[posX][posY] = 1;

  moves.push(posY + posY * mazeWidth); // 1+1*81 = 82,  [82]

  // game.time.events.loop(Phaser.Timer.SECOND / 25, function () {
  while (moves.length) {

    // String containing possible move directions
    var possibleDirections = "";

    // Build directions string by concatenating possible directions
    if (posX + 2 > 0 && posX + 2 < mazeHeight - 1 && maze[posX + 2][posY] === 0) {
      possibleDirections += "S";
    }

    if (posY + 2 > 0 && posY + 2 < mazeWidth - 1 && maze[posX][posY + 2] === 0) {
      possibleDirections += "E";
    }

    if (posX - 2 > 0 && posX - 2 < mazeHeight - 1 && maze[posX - 2][posY] === 0) {
      possibleDirections += "N";
    }

    if (posY - 2 > 0 && posY - 2 < mazeWidth - 1 && maze[posX][posY - 2] === 0) {
      possibleDirections += "W";
    }

    // If there are possible directions, choose a random move
    if (possibleDirections) {

      var move = (0, _util.randomIntBetween)(0, possibleDirections.length - 1);

      switch (possibleDirections[move]) {
        case "N":
          maze[posX - 2][posY] = 1;
          maze[posX - 1][posY] = 1;
          posX -= 2;
          break;
        case "S":
          maze[posX + 2][posY] = 1;
          maze[posX + 1][posY] = 1;
          posX += 2;
          break;
        case "W":
          maze[posX][posY - 2] = 1;
          maze[posX][posY - 1] = 1;
          posY -= 2;
          break;
        case "E":
          maze[posX][posY + 2] = 1;
          maze[posX][posY + 1] = 1;
          posY += 2;
          break;
      }
      moves.push(posY + posX * mazeWidth);
    } else {
      var back = moves.pop();
      posX = Math.floor(back / mazeWidth);
      posY = back % mazeWidth;
    }
  }

  // maze[(mazeHeight - 2)][(mazeWidth -2)] = 1; // end tile?
  // maze[(mazeHeight - 2)][(mazeWidth -1)] = 1; // end tile?
  return maze;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathFinding = __webpack_require__(1);

var _character = __webpack_require__(2);

var _character2 = _interopRequireDefault(_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Baddie = function (_Character) {
  _inherits(Baddie, _Character);

  function Baddie(name, maze, player) {
    _classCallCheck(this, Baddie);

    // If i set this.playerPos = player.position, will this be a reference to player.position always or will it just cache the value of player.position when this class is instantiated?
    var _this = _possibleConstructorReturn(this, (Baddie.__proto__ || Object.getPrototypeOf(Baddie)).apply(this, arguments));

    _this.player = player;
    _this.stepsTaken = 0;

    _this._locatePlayerInterval = null;
    _this._walkInterval = null;
    _this._path = [];
    return _this;
  }

  _createClass(Baddie, [{
    key: 'toggleWalk',
    value: function toggleWalk(intervalMilis) {
      this._walkInterval ? this._stopWalk() : this._startWalk(intervalMilis);
    }
  }, {
    key: '_locatePlayer',
    value: function _locatePlayer() {
      var maze = this.maze,
          position = this.position,
          player = this.player;

      var path = (0, _pathFinding.pathFinder)(maze, position, player.position);

      return path ? path : [[0, 0]];
    }
  }, {
    key: '_locatePlayerInterval',
    value: function _locatePlayerInterval() {
      var _this2 = this;

      this._locatePlayerInterval = setInterval(function () {
        _this2._path = _this2._locatePlayer();
      }, 1500);
    }

    /**
     * Start walk interval
     * @param {Number} intervalTime Number of miliseconds between baddie move
     */

  }, {
    key: '_startWalk',
    value: function _startWalk() {
      var _this3 = this;

      var intervalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 75;

      this._path = this._locatePlayer();
      this.walkInterval = setInterval(function () {
        var nextTile = _this3._path[1];
        _this3._step(nextTile);
        if (nextTile = _this3.player.position) {
          _this3._tearDown();
        }
      }, intervalTime);
    }
  }, {
    key: '_tearDown',
    value: function _tearDown() {
      console.log(this.name + ' SHUTTING DOWN');
      clearInterval(this._locatePlayerInterval);
      clearInterval(this._walkInterval);
      this._walkInterval = null;
      this._locatePlayerInterval = null;
    }
  }]);

  return Baddie;
}(_character2.default);

exports.default = Baddie;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines 'lights' in the game area to hide/show walkable path and characters.
 */
var Lights = function () {
  function Lights() {
    _classCallCheck(this, Lights);
  }

  _createClass(Lights, [{
    key: 'toggleOnOff',
    value: function toggleOnOff() {
      (0, _util.$)('.game-area').classList.toggle('lights_off');
    }
  }]);

  return Lights;
}();

exports.default = Lights;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map