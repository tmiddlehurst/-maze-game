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
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $All = function $All(selector) {
  return document.querySelectorAll(selector);
};
var isEven = function isEven(value) {
  return value % 2;
};

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

exports.$ = $;
exports.$All = $All;
exports.isEven = isEven;
exports.moves = moves;
exports.isValidKey = isValidKey;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  var gameClock = new _clock2.default();
  var gameGrid = new _grid2.default('.game-area', 50);
  var gameMaze = new _maze2.default();
  var player = new _character2.default('player', 112, gameGrid);

  // gameGrid.render();
  // gameMaze.loadMaze();
  // player.render(112);
};
/* TODO: HTML custom elements? e.g. (class Wall extends HTMLElement)
  On this line... create a 'cell' element, which has data-xcoord and data-ycoord...
  ... Each cell has a property of 'aboveCell', 'rightCell', 'belowCell', 'leftCell'
*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = function () {
  function Clock() {
    _classCallCheck(this, Clock);

    this.time = 0;
    this.intervalId;

    util.$('.clock-start_btn').addEventListener('click', this.start.bind(this));
    util.$('.clock-pause_btn').addEventListener('click', this.pause.bind(this));
  }

  _createClass(Clock, [{
    key: '_updateClock',
    value: function _updateClock(clock, time) {
      clock.innerHTML = time;
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      this.intervalId = setInterval(function () {
        _this.time += 0.1;
        _this._updateClock(util.$('.clock-face'), _this.time.toFixed(1));
      }, 100);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearInterval(this.intervalId);
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

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  // this.htmlElement =
  //   `<div
  //     class="tile ${wallClass}"
  //     data-tileIndex="${i}"
  //     style="height:${dimension}px;width:${dimension}px">
  //   <div>`;
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

    this.container = util.$(container);

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

      // e => (this.container.innerHTML += e.htmlElement));
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

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

    this.gameArea = util.$(gameAreaSelector);
    this.savedMaze = window.localStorage.getItem('maze').split(',') || [];
    util.$('.edit-maze').addEventListener('click', function () {
      return _this.isEditing();
    });
    util.$('.save-maze').addEventListener('click', function () {
      return _this.saveMaze();
    });
  }

  _createClass(Maze, [{
    key: 'isEditing',
    value: function isEditing() {
      util.$(this.gameArea).addEventListener('click', function (event) {
        var classList = event.target.classList;

        if (classList.contains('tile')) {
          classList.toggle('tile-wall');
        }
      });
    }
  }, {
    key: 'saveMaze',
    value: function saveMaze() {
      var tiles = util.$All('.tile');
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

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
        util.$All('.tile').item(oldPosition).innerHTML = null;
      }
      util.$All('.tile').item(newPosition).innerHTML = '<div class="' + this.name + '"></div>';
    }
  }, {
    key: 'moveOne',
    value: function moveOne(key) {
      if (!util.isValidKey) {
        return;
      }

      var initialPosition = this.position;
      var finalPosition = util.moves[key](initialPosition, this.gridWidth);

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