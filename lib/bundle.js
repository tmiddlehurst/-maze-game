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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
 * L / R / U / D movement functions mapped to keys.
 */
var moves = {
  a: function a(position) {
    return position -= 1;
  },
  d: function d(position) {
    return position += 1;
  },
  w: function w(position, width) {
    return position -= width;
  },
  s: function s(position, width) {
    return position += width;
  }
};

/**
 * Check if pressed key is within the moves object.
 */
var isValidKey = function isValidKey(key) {
  return !Object.keys(moves).includes(key);
};

var isEven = function isEven(value) {
  return value % 2;
};

function $(selector) {
  return document.querySelector(selector);
}
function $All(selector) {
  return document.querySelectorAll(selector);
}
function lightsOff(targetSelector) {
  $(targetSelector).classList.toggle('lights_off');
}

exports.$ = $;
exports.$All = $All;
exports.isEven = isEven;
exports.moves = moves;
exports.isValidKey = isValidKey;
exports.lightsOff = lightsOff;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _clock = __webpack_require__(2);

var _clock2 = _interopRequireDefault(_clock);

var _grid = __webpack_require__(3);

var _grid2 = _interopRequireDefault(_grid);

var _maze = __webpack_require__(4);

var _maze2 = _interopRequireDefault(_maze);

var _character = __webpack_require__(5);

var _character2 = _interopRequireDefault(_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var gameClock = new _clock2.default('.clock-start_stop', '.clock-face');
  // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  var gameGrid = new _grid2.default('.game-area', 50);
  var gameMaze = new _maze2.default();
  var player = new _character2.default('player', 112, gameGrid);

  (0, _util.$)('.lightswitch').addEventListener('click', function () {
    (0, _util.lightsOff)('.game-area');
  });
};

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

var Clock = function () {
  function Clock(buttonSelector, faceSelector) {
    var _this = this;

    _classCallCheck(this, Clock);

    this.intervalId;
    this.time = 0;
    this.button = (0, _util.$)(buttonSelector);
    this.face = (0, _util.$)(faceSelector);
    (0, _util.$)(buttonSelector).addEventListener('click', function () {
      return _this.toggleStartStop();
    });
  }

  _createClass(Clock, [{
    key: 'toggleStartStop',
    value: function toggleStartStop() {
      this.intervalId ? this.pause() : this.start();
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      this.intervalId = window.setInterval(function () {
        _this2.time += 0.1;
        _this2.face.innerHTML = _this2.time.toFixed(1);
      }, 100);
      this.button.innerText = 'Pause';
    }
  }, {
    key: 'pause',
    value: function pause() {
      window.clearInterval(this.intervalId);
      this.button.innerText = 'Start';
    }
  }]);

  return Clock;
}();

exports.default = Clock;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * Defines a tile within the game grid.
 * Sets index, dimensions and coordinates.
 */
var Tile =
/**
 *
 * @param {Number} dimension - height/width value
 * @param {Number} i - Index
 * @param {String} isWall - "Is wall" flag
 */
exports.Tile = function Tile(dimension, i, isWall) {
  _classCallCheck(this, Tile);

  this.dimension = dimension;
  this.index = i;
  this.isWall = isWall;
};

/**
 * Defines the game grid within which to build the maze
 */


var Grid = function () {
  /**
   *
   * @param {String} container - querySelector for container element.
   * @param {Number} dimension - height and width value for each square tile.
   */
  function Grid(container, tileDimension) {
    var _this = this;

    _classCallCheck(this, Grid);

    this.container = (0, _util.$)(container);

    // Number of
    this.columns = this.container.clientWidth / tileDimension;
    this.rows = this.container.clientHeight / tileDimension;

    var tileTotal = Math.floor(this.rows * this.columns);

    this.savedMaze = window.localStorage.getItem('maze').split(',') || new Array(area).fill('');

    this.tiles = new Array(tileTotal).fill('').map(function (e, i) {
      return new Tile(tileDimension, i, _this.savedMaze[i] == 1);
    });

    this.render();
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.container.innerHTML = null;
      // this.tiles.forEach(e => (this.container.innerHTML += e.htmlElement));
      this.tiles.forEach(function (e, i) {
        var t = document.createElement('div');
        t.setAttribute('style', 'height:' + e.dimension + 'px;width:' + e.dimension + 'px;');
        t.setAttribute('data-tileIndex', i);
        t.classList.add('tile');
        e.isWall ? t.classList.add(['tile-wall']) : null;
        _this2.container.appendChild(t);
      });
    }
  }]);

  return Grid;
}();

// /**
//  * Defines a save state for a game maze.
//  *
//  * Saves maze by converting to an array of binaries, 1 == wall, 0 == walkable
//  * Loads maze by iterating over saved array to render tiles.
//  */
// class Maze {
//   constructor(gameAreaSelector) {
//     this.gameArea = $(gameAreaSelector);
//     this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
//     $('.edit-maze').addEventListener('click', () => this.isEditing());
//     $('.save-maze').addEventListener('click', () => this.saveMaze());

//     this.loadMaze();
//   }

//   isEditing() {
//     $(this.gameArea).addEventListener('click', event => {
//       let classList = event.target.classList;

//       if (classList.contains('tile')) {
//         classList.toggle('tile-wall');
//       }
//     });
//   }

//   loadMaze() {
//     let tiles = $All('.tile');
//     tiles.forEach((e, i) => {
//       if (this.savedMaze[i] == 1) {
//         e.classList.add('tile-wall');
//       }
//     });
//   }

//   saveMaze() {
//     let tiles = $All('.tile');
//     let newMaze = tiles.map(
//       e => (e.classList.contains('tile-wall') ? '1' : '0')
//     );
//     window.localStorage.setItem('maze', newMaze);
//   }
// }


exports.default = Grid;

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
 * Defines a save state for a game maze.
 *
 * Saves maze by converting to an array of binaries, 1 == wall, 0 == walkable
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
      (0, _util.$)(this.gameArea).addEventListener('click', function (event) {
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
      var newMaze = tiles.map(function (e) {
        return e.classList.contains('tile-wall') ? 1 : 0;
      });
      window.localStorage.setItem('maze', newMaze);
    }
  }]);

  return Maze;
}();

// const DIRECTION_ROTATION = {
//   'N': 0,
//   'S': 180,
//   'E': 90,
//   'W': 270
// }

// *
//  * @type {Number} length - must be less than board height-playerwidth.
//  * @type {Number} xstart - x coordinate of start point.
//  * @type {Number} ystart - y coordinate of start point.
//  * @type {string} orientation - direction to place wall (N,S,E,W).

// class Wall {
//   constructor(length, xstart, ystart, orientation) {
//     this.length = length;
//     this.x = xstart;
//     this.y = ystart;
//     this.direction = directionLookup.
//       find('name', orientation.toUpperCase())
//         .rotation;
//     this.walkable = false;
//   }
// }


exports.default = Maze;

/***/ }),
/* 5 */
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
 *
 * @param {String} name
 * @param {String} grid - CSS selector for parent grid
 * @param {Array} position - coordinate array for starting position. e.g. [0,4]
 */
var Character = function () {
  function Character(name, startPosition, grid) {
    var _this = this;

    _classCallCheck(this, Character);

    this.name = name;
    this.position = startPosition;
    this.gridWidth = grid.columns;
    this.tiles = grid.tiles;

    this.render();
    document.addEventListener('keypress', function (event) {
      return _this.moveOne(event.key);
    });
  }

  _createClass(Character, [{
    key: 'render',
    value: function render() {
      var newPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position;
      var oldPosition = arguments[1];

      if (oldPosition) {
        (0, _util.$All)('.tile').item(oldPosition).innerHTML = null;
      }
      (0, _util.$All)('.tile').item(newPosition).innerHTML = '<div class="' + this.name + '"></div>';
    }
  }, {
    key: 'moveOne',
    value: function moveOne(key) {
      if (!_util.isValidKey) {
        return;
      }

      var initialPosition = this.position;
      var finalPosition = _util.moves[key](initialPosition, this.gridWidth);

      if (!this.tiles[finalPosition] || this.tiles[finalPosition].isWall) {
        return;
      }

      this.position = finalPosition;
      this.render(finalPosition, initialPosition);
    }
  }]);

  return Character;
}();

exports.default = Character;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map