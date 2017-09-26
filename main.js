const $ = (selector) => document.querySelector(selector);
// const $all = (selector) => document.querySelectorAll(selector);


// function toggleClass(element, className) {
//   if element.classList.contains()
//   element.classList.toggle(className);
// }

class Clock {
  constructor() {
    this.time = 0;
    this.intervalId;
  }

  _updateClock(clock, time){
    clock.innerHTML = time
  }

  start() {
    let intervalId = setInterval(() => {
      this.time += 0.1;
      this._updateClock($('.clock-face'), this.time.toFixed(1));
    }, 100);
    this.intervalId = intervalId;
    console.log(this.intervalId);
  }

  pause() {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
    console.log(this.intervalId);
  }
}

class Tile {
  constructor(dimension) {
    this.htmlElement = `<div class="tile" style="height:${dimension}px;width:${dimension}px"><div>`;
  }
}

/**
 * @type {String} container - querySelector for container element.
 * @type {Number} tileDimension - height and width property for each square tile.
 */
class Grid {
  constructor(container, tileDimension) {
    this.container = $(container);
    this.binaryArray;

    const width = this.container.clientWidth/tileDimension;
    const height = this.container.clientHeight/tileDimension;
    const area = Math.floor(height * width);

    this.tiles = new Array(area).fill(new Tile(tileDimension).htmlElement);
  }
  render() {
    this.container.innerHTML = null;
    this.tiles.forEach(i => this.container.innerHTML += i);
  }

}

window.onload = () => {
  const gameClock = new Clock;
  const gameGrid = new Grid('.game-area', 50);
  // gameClock.start();
  gameGrid.render();
  $('.game-area').addEventListener("click", event => {
    let classList = event.target.classList;
    
    if (classList.contains('tile')) {
      classList.toggle('tile-wall');
    }
  });
  $('.clock-start_btn').addEventListener('click', gameClock.start.bind(gameClock));
  $('.clock-pause_btn').addEventListener('click', gameClock.pause.bind(gameClock));
}

// class gridState {

//   memoryToGrid(container, tileDimension, wallClassName, memoryArray) {
//   // do i need to ensure that tileDimension is equal to the tile dimension previously used???

//     memoryArray.map(i => {
//       if (i == 1) {
//         return i =  new Tile(tileDimension);
//       }
//     });
//   }

//   gridToMemoryArr() {
//     let arr = [];

//     this.tiles.forEach(i => arr.push(i));

//     arr.map(t => {
//       if (t.classList.includes(wallClassName)) {
//         return t = 1;
//       }
//       else {
//         return t = 0;
//       }
//     });
//   }
// }



// Time √
// Generate a grid √
// Generate a maze in a grid (random?);
// Prevent walking through walls;
// Lights on/off;
// AI baddie which can find its way through the maze;
//





/*

const moveRight = function(e) {
  return function(distance) {
    let translation = distance;
    const target = e.target;
    target.style.transform = `translateX(${translation}pxr)`;
  }
}
*/