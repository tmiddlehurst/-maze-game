const isEven = value => value % 2;

function $(selector) {
  return document.querySelector(selector);
}
function $All(selector) {
  return document.querySelectorAll(selector);
}
function findTile(n) {
  return $All('.tile').item(n)
}
function occurencesOf(val, arr) {
  occurances = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      nbOcc++;
    }
  }
  return occurances;
}

export { $, $All, findTile, isEven, occurencesOf };
