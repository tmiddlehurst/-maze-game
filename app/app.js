import { renderMaze, MazeFeatures } from './modules/maze.js';
import { generateMaze } from './modules/generate-maze';
import { isWalkable, pathFinder } from './modules/path-finding.js';
import Character from './modules/character.js';
import Baddie from './modules/baddie.js';
import Lights from './modules/lights.js';

// CORE GAME FUNCTION
window.onload = () => {
  const LIGHTS = new Lights();
  const INPUT_HANDLER = inputHandler();

  let PLAYER;
  let BADDIE;
  let MAZE;

  (function newGame() {
    MAZE = generateMaze(32, 16);
    PLAYER = new Character('player', MAZE);
    BADDIE = new Baddie('baddie', MAZE, PLAYER);

    renderMaze('.game-area', MAZE);
    PLAYER.spawn([1, 0]);

    setTimeout(() => {
      BADDIE.spawn([1, 0]);
      BADDIE.toggleWalk(75);
    }, 5000);
  })();

  //KeyPress Handler
  function inputHandler() {
    return document.addEventListener('keydown', event => {
      const actionMap = {
        'ArrowUp': () => playerMove('N'),
        'ArrowRight': () => playerMove('E'),
        'ArrowDown': () => playerMove('S'),
        'ArrowLeft': () => playerMove('W'),
        'w': () => playerMove('N'),
        'd': () => playerMove('E'),
        's': () => playerMove('S'),
        'a': () => playerMove('W'),
        ' ': () => toggleLight(),
      }
      const action = actionMap[event.key];

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