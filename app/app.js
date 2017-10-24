import { $, lightsOff } from './modules/util.js';
import Clock from './modules/clock.js';
import Grid from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';

window.onload = () => {
  const gameClock = new Clock('.clock-start_stop', '.clock-face');
  // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  const gameGrid = new Grid('.game-area', 50);
  const gameMaze = new Maze();
  const player = new Character('player', 112, gameGrid);

  $('.lightswitch').addEventListener('click', function() {
    lightsOff('.game-area');
  });
};
