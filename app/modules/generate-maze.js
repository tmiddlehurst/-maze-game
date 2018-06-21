import { randomIntBetween } from './util.js'


/**
 * Generate a random maze of specified width and height
 *
 * @param {Integer} mazeWidth
 * @param {Integer} mazeHeight
 */
export function generateMaze(mazeWidth, mazeHeight) {

  let maze = [];
  let moves = [];

  // build the 3d 'matrix' for the grid, an array of arrays
  for (let i = 0; i < mazeHeight; i++) {
    maze[i] = [];
    for (let j = 0; j < mazeWidth; j++) {
      maze[i][j] = 0;
    }
  }

  // starts at [1,1] instead of [0,0] to make a 1-wide wall around the maze?
  let posX = 1;
  let posY = 1;

  maze[1][0] = 1;
  maze[posX][posY] = 1;

  moves.push(posY + posY * mazeWidth); // 1+1*81 = 82,  [82]

  // game.time.events.loop(Phaser.Timer.SECOND / 25, function () {
  while (moves.length) {

    // String containing possible move directions
    let possibleDirections = "";

    // Build directions string by concatenating possible directions
    if (posX + 2 > 0 && posX + 2 < mazeHeight - 1 && maze[posX + 2][posY] === 0) {
      possibleDirections += "S";
    }

    if (posY + 2 > 0 && posY + 2 < mazeWidth - 1 && maze[posX][posY + 2] === 0) {
      possibleDirections += "E";
    }

    if (posX - 2 > 0 && posX - 2 < mazeHeight - 1 && maze[posX - 2][posY] === 0) {
      possibleDirections += "N";
    }

    if (posY - 2 > 0 && posY - 2 < mazeWidth - 1 && maze[posX][posY - 2] === 0) {
      possibleDirections += "W";
    }

    // If there are possible directions, choose a random move
    if (possibleDirections) {

      let move = randomIntBetween(0, (possibleDirections.length - 1))

      switch (possibleDirections[move]) {
        case "N":
          maze[posX - 2][posY] = 1;
          maze[posX - 1][posY] = 1;
          posX -= 2;
          break;
        case "S":
          maze[posX + 2][posY] = 1;
          maze[posX + 1][posY] = 1;
          posX += 2;
          break;
        case "W":
          maze[posX][posY - 2] = 1;
          maze[posX][posY - 1] = 1;
          posY -= 2;
          break;
        case "E":
          maze[posX][posY + 2] = 1;
          maze[posX][posY + 1] = 1;
          posY += 2;
          break;
      }
      moves.push(posY + posX * mazeWidth);
    }
    else {
      let back = moves.pop();
      posX = Math.floor(back / mazeWidth);
      posY = back % mazeWidth;
    }
  }

  // maze[(mazeHeight - 2)][(mazeWidth -2)] = 1; // end tile?
  // maze[(mazeHeight - 2)][(mazeWidth -1)] = 1; // end tile?
  console.log(maze);
  return maze;
}