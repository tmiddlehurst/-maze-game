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
exports.$ = $;
exports.$All = $All;
exports.occuranceOf = occuranceOf;
exports.lastInArray = lastInArray;
var isEven = exports.isEven = function isEven(value) {
  return value % 2;
};

function $(selector) {
  return document.querySelector(selector);
}

function $All(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Return number of occurances of {val} in {arr}
 *
 * @param {*} val - value to find
 * @param {[*]} arr - array to look in
 * @returns {Number}
 */
function occuranceOf(val, arr) {
  var occurances = arr.filter(function (element) {
    return element === val;
  });

  return occurances.length;
}

/**
 * Return last item of array {Array}
 *
 * @param {Array} array
 */
function lastInArray(array) {
  return array[array.length - 1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floodFillPathFinder = floodFillPathFinder;

var _util = __webpack_require__(0);

function floodFillPathFinder(grid, start, end) {
  var paths = [[start]];
  var fastestRoute = null;
  var noRouteAvailable = null;

  var i = 0;

  while (!fastestRoute && !noRouteAvailable) {
    var result = floodNextTiles(grid.tiles, paths, end);

    if (result.fastestRoute) {
      return fastestRoute = result.fastestRoute;
    }

    if (i === 100) {
      noRouteAvailable = true;
      throw 'No route available';
    }

    paths = result.paths;
    i++;
  }
  return fastestRoute;
}

function floodNextTiles(tiles, currentPaths, target) {
  var resultPaths = [];
  var fastestRoute = null;

  currentPaths.forEach(function (path, _, paths) {
    var currentTile = tiles[(0, _util.lastInArray)(path)];
    var neighbours = findNextTiles(currentTile, path);

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

    var updatedPaths = neighbours.map(function (nextTile) {
      return path.concat(nextTile);
    });

    resultPaths = resultPaths.concat(updatedPaths);
  });

  return {
    'paths': resultPaths,
    'fastestRoute': fastestRoute
  };
}

function findNextTiles(tile, processedTiles) {
  return tile.walkableNeighbours.filter(function (n) {
    return !processedTiles.includes(n);
  });
}

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines a character within the game.
 * Includes methods to render character, move character position.
 * @param {String} name
 * @param {Integer} startPosition coordinate for starting position. e.g. [0,4].
 * @param {Array} grid grid that the character lives in.
*/
var Character = function () {
  function Character(name, startPosition, grid) {
    var _this = this;

    _classCallCheck(this, Character);

    this.name = name;
    this.position = startPosition;
    this.grid = grid;

    this.getMoveTile = {
      'w': function w(pos) {
        return pos - _this.grid.width;
      },
      'a': function a(pos) {
        return pos - 1;
      },
      's': function s(pos) {
        return pos + _this.grid.width;
      },
      'd': function d(pos) {
        return pos + 1;
      }
    };
    this._renderSprite();
  }

  /**
   * Moves the character using either tileNumber or keyboard key
   *
   * @param {Number} tile - Tile number to move to
   * @param {String} key - Keyboard key
   */


  _createClass(Character, [{
    key: 'move',
    value: function move(key) {
      var tile = this.getMoveTile[key](this.position);

      // Check if target tile exists & is a wall
      if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
        return;
      }

      // Destroy & rerender character sprite
      this._destroySprite(this.position);
      this._renderSprite(tile);
    }
  }, {
    key: '_destroySprite',
    value: function _destroySprite(tile) {
      this.position = null;
      (0, _util.$)('#tile-' + tile).innerHTML = null;
    }
  }, {
    key: '_renderSprite',
    value: function _renderSprite() {
      var tile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position;

      this.position = tile;
      (0, _util.$)('#tile-' + tile).innerHTML = '<div class="character ' + this.name + '"></div>';
    }
  }]);

  return Character;
}();

exports.default = Character;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _clock = __webpack_require__(4);

var _clock2 = _interopRequireDefault(_clock);

var _grid = __webpack_require__(5);

var _grid2 = _interopRequireDefault(_grid);

var _maze = __webpack_require__(6);

var _maze2 = _interopRequireDefault(_maze);

var _character = __webpack_require__(2);

var _character2 = _interopRequireDefault(_character);

var _baddie = __webpack_require__(7);

var _baddie2 = _interopRequireDefault(_baddie);

var _lights = __webpack_require__(8);

var _lights2 = _interopRequireDefault(_lights);

var _pathFinding = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var clock = new _clock2.default();
  var grid = new _grid2.default('.game-area', 50); // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  var maze = new _maze2.default('.game-area');
  var lights = new _lights2.default();
  var player = new _character2.default('player', 112, grid);

  var baddie = void 0;

  setTimeout(function () {
    baddie = new _baddie2.default('baddie', 112, grid);
    baddie.toggleWalk.call(baddie);
    locatePlayerEvery(150);
  }, 2000);

  document.addEventListener('keypress', function (event) {
    event.preventDefault();
    var key = event.key;

    if (key === ' ') {
      lights.toggleOnOff();
      clock.toggleStartStop();
      baddie.toggleWalk();
      return;
    }

    if (['w', 'a', 's', 'd'].includes(key)) {
      player.move(key);
    }
  });

  clock.toggleStartStop();

  function locatePlayerEvery(miliseconds) {
    var findingPlayerInterval = setInterval(function () {
      if (player.position !== baddie.position) {
        baddie.path = (0, _pathFinding.floodFillPathFinder)(grid, baddie.position, player.position);
      } else {
        alert("you have been caught");
        baddie.toggleWalk();
        clearInterval(findingPlayerInterval);
      }
    }, miliseconds);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines the main game clock.
 */
var Clock = function () {
  function Clock() {
    var _this = this;

    _classCallCheck(this, Clock);

    this.intervalId;
    this.time = 0;

    (0, _util.$)('.clock-start_stop').addEventListener('click', function () {
      return _this.toggleStartStop();
    });
  }

  _createClass(Clock, [{
    key: 'toggleStartStop',
    value: function toggleStartStop() {
      this.intervalId ? this._pause() : this._start();
    }
  }, {
    key: '_start',
    value: function _start() {
      var _this2 = this;

      this.intervalId = setInterval(function () {
        _this2.time += 0.025;
        (0, _util.$)('.clock-face').innerHTML = _this2.time.toFixed(1);
      }, 25);
      (0, _util.$)('.clock-start_stop').innerText = 'Stop';
    }
  }, {
    key: '_pause',
    value: function _pause() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      (0, _util.$)('.clock-start_stop').innerText = 'Start';
    }
  }]);

  return Clock;
}();

exports.default = Clock;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _pathFinding = __webpack_require__(1);

var _pathFinding2 = _interopRequireDefault(_pathFinding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAVED_MAZE = "1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1".split(',');

/**
 *
 * @param {*} tileId
 * @param {*} gridWidth
 */
function _findNeighbours(tileId, gridWidth, savedMaze) {
  var dirFunctions = [function (pos) {
    return pos - gridWidth;
  }, function (pos) {
    return pos - 1;
  }, function (pos) {
    return pos + gridWidth;
  }, function (pos) {
    return pos + 1;
  }];

  var neighbours = [];

  dirFunctions.forEach(function (f) {
    var neighbourId = f(tileId);
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

var Grid = function () {
  function Grid(containerSelector, tileDimension) {
    var _this = this;

    _classCallCheck(this, Grid);

    var savedMaze = window.localStorage.getItem('maze').split(',') || SAVED_MAZE;

    this.container = (0, _util.$)(containerSelector);
    this.width = this.container.clientWidth / tileDimension;
    this.height = this.container.clientHeight / tileDimension;

    this.tiles = new Array(Math.floor(this.height * this.width)).fill().map(function (e, i) {
      var walkableNeighbours = _findNeighbours(i, _this.width, savedMaze);
      var isWall = savedMaze[i] === "1";
      return {
        isWall: isWall,
        id: i,
        walkableNeighbours: walkableNeighbours,
        isJunction: !isWall && walkableNeighbours.length > 2,
        iscorridor: !isWall && walkableNeighbours.length === 2
      };
    });

    this._render();
  }

  _createClass(Grid, [{
    key: '_render',
    value: function _render() {
      var blockRenderString = this.tiles.reduce(function (string, tile, i) {
        var classes = '';
        classes += tile.isWall ? ' tile-wall' : '';
        // classes += tile.isJunction ? ' tile-junction' : '';
        // classes += tile.iscorridor ? ' tile-corridor' : '';
        return string += '<div style="height:50px;width:50px;" id="tile-' + i + '" data-tileIndex="' + i + '" class="tile' + classes + '"></div>';
      }, '');

      this.container.innerHTML = blockRenderString;
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAZES = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Defines a save state for a game maze.
 *
 * Saves maze by converting to an binary array, wall = 1.
 * Loads maze by iterating over saved array to render tiles.
 */
var Maze = function () {
  function Maze(gameAreaSelector) {
    var _this = this;

    _classCallCheck(this, Maze);

    this.gameArea = (0, _util.$)(gameAreaSelector);
    this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
    (0, _util.$)('.maze-edit').addEventListener('click', function () {
      return _this.isEditing();
    });
    (0, _util.$)('.maze-save').addEventListener('click', function () {
      return _this.saveMaze();
    });
  }

  _createClass(Maze, [{
    key: 'isEditing',
    value: function isEditing() {
      this.gameArea.addEventListener('click', function (event) {
        var classList = event.target.classList;

        if (classList.contains('tile')) {
          classList.toggle('tile-wall');
        }
      });
    }
  }, {
    key: 'saveMaze',
    value: function saveMaze() {
      var tiles = (0, _util.$All)('.tile');
      var newMaze = [];
      tiles.forEach(function (t) {
        if (t.classList.contains('tile-wall')) {
          newMaze.push(1);
        } else {
          newMaze.push(0);
        }
      });
      window.localStorage.setItem('maze', newMaze);
    }
  }]);

  return Maze;
}();

exports.default = Maze;
var MAZES = exports.MAZES = {
  testMaze: "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1",
  maze1: "1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1"
};

/***/ }),
/* 7 */
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

  function Baddie() {
    _classCallCheck(this, Baddie);

    var _this = _possibleConstructorReturn(this, (Baddie.__proto__ || Object.getPrototypeOf(Baddie)).apply(this, arguments));

    _this.path = (0, _pathFinding.floodFillPathFinder)(_this.grid, _this.position, 139);
    _this.intervalId;
    return _this;
  }

  _createClass(Baddie, [{
    key: 'move',
    value: function move(tile) {
      // Check if target tile exists & is a wall
      if (!tile || !this.grid.tiles[tile] || this.grid.tiles[tile].isWall) {
        return;
      }

      // Destroy & rerender character sprite
      this._destroySprite(this.position);
      this._renderSprite(tile);
    }
  }, {
    key: 'toggleWalk',
    value: function toggleWalk() {
      this.intervalId ? this._stopWalk() : this._walk();
    }
  }, {
    key: '_walk',
    value: function _walk() {
      var _this2 = this;

      this.intervalId = setInterval(function () {
        var nextTile = _this2.path[1];
        _this2.move(nextTile);
      }, 137);
    }
  }, {
    key: '_stopWalk',
    value: function _stopWalk() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }]);

  return Baddie;
}(_character2.default);

exports.default = Baddie;

/***/ }),
/* 8 */
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