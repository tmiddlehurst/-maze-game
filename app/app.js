import { $ } from './modules/util.js';
import Clock from './modules/clock.js';
import Grid from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';
import Lights from './modules/lights.js';

window.onload = () => {
  const clock = new Clock();
  const grid = new Grid('.game-area', 50); // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  const maze = new Maze();
  const player = new Character('player', 112, grid);
  const baddie = new Character('baddie', 139, grid);
  const lights = new Lights();

  document.addEventListener('keypress', function(event) {
    const key = event.key;

    if (key == ' ') {
      lights.toggleOnOff.call(lights);
      clock.toggleStartStop.call(clock);
      return;
    }

    if (['w', 'a', 's', 'd'].includes(key)) {
      player.move.call(player, null, key);
    }
  });

  clock.toggleStartStop();
};
