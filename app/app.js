import Clock from './modules/clock.js';
import Grid from './modules/grid.js';
import Maze from './modules/maze.js';
import Character from './modules/character.js';

window.onload = () => {
  const gameClock = new Clock();
  const gameGrid = new Grid('.game-area', 50);
  const gameMaze = new Maze();
  const player = new Character('player', 112, gameGrid);

  // gameGrid.render();
  // gameMaze.loadMaze();
  // player.render(112);
};
/* TODO: HTML custom elements? e.g. (class Wall extends HTMLElement)
  On this line... create a 'cell' element, which has data-xcoord and data-ycoord...
  ... Each cell has a property of 'aboveCell', 'rightCell', 'belowCell', 'leftCell'
*/
