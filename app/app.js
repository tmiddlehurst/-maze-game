import { $ } from './modules/util.js';
import Clock from './modules/clock.js';
import Grid from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';
import Baddie from './modules/baddie.js';
import Lights from './modules/lights.js';
import { findJunctions, floodFill, Pathfinder } from './modules/path-finding.js';

window.onload = () => {
  const clock = new Clock();
  const grid = new Grid('.game-area', 50); // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  const maze = new Maze('.game-area');
  const lights = new Lights();
  const player = new Character('player', 112, grid);

  let baddie;

  setTimeout(() => {
    baddie = new Baddie('baddie', 112, grid);
    baddie.toggleWalk.call(baddie);
    locatePlayerEvery(275);
  }, 2000);

  document.addEventListener('keypress', event => {
    event.preventDefault();
    const key = event.key;

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
    const findingPlayerInterval = setInterval(() => {
      if (player.position !== baddie.position) {
        baddie.path = floodFill(grid, baddie.position, player.position);
      } else {
        alert("you have been caught");
        baddie.toggleWalk();
        clearInterval(findingPlayerInterval);
      }
    }, miliseconds);
  }


};