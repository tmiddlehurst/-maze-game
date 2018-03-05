import { $ } from './modules/util.js';
import Clock from './modules/clock.js';
import { Grid, MazeFeatures } from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';
import Baddie from './modules/baddie.js';
import Lights from './modules/lights.js';
import { findJunctions, floodFillPathFinder } from './modules/path-finding.js';

window.onload = () => {
  const clock = new Clock();
  const grid = new Grid('.game-area', 50); // TODO: Refactor gameGrid constructor to take {number of tiles} - integer and still produce a grid of square tiles.
  const maze = new Maze('.game-area');
  const lights = new Lights();
  const player = new Character('player', 114, grid);
  const baddie = new Baddie('baddie', 112, grid);
  const mazeFeatures = new MazeFeatures();

  setTimeout(() => {
    baddie.toggleWalk.call(baddie);
    locatePlayerEvery(200);
  }, 5000);


  //KeyPress Handler
  document.addEventListener('keydown', event => {
    // event.preventDefault();
    const key = event.key;

    if (key === ' ') {
      lights.toggleOnOff();
      clock.toggleStartStop();
      baddie.toggleWalk();
      return;
    }

    if (['w', 'a', 's', 'd', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown' ].includes(key)) {
      player.setMoveDirection.call(player, key);
    }
  });

  clock.toggleStartStop();

  function locatePlayerEvery(miliseconds) {
    const findingPlayerInterval = setInterval(() => {
      if (player.position !== baddie.position) {
        baddie.path = floodFillPathFinder(grid, baddie.position, player.position);
      } else {
        alert("you have been caught");
        baddie.toggleWalk();
        clearInterval(findingPlayerInterval);
      }
    }, miliseconds);
  }


};