import { $ } from './modules/util.js';
import Clock from './modules/clock.js';
import Grid from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';
import Lights from './modules/lights.js';

window.onload = () => {
  const clock = new Clock();
  // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  const grid = new Grid('.game-area', 50);
  const maze = new Maze();
  const player = new Character('player', 112, grid);
  const lights = new Lights();

  document.addEventListener('keypress', function(event) {
    actionKeymap[event.key]()

    if (event.key == ' ') {
      lights.toggle();
      clock.toggleStartStop.call(clock);
    }

    let direction = actionKeymap[event.key];
    let moveFunction = grid.movementMap[direction];
    let tile = moveFunction.call(grid, player.position);

    if (grid.tiles[tile].isWall || !grid.tiles[tile]) {
      return;
    }
    player.moveTo.call(player, tile);
  });

  // clock.start();
  // const baddie = new Character('baddie', 112, gameGrid);
};
