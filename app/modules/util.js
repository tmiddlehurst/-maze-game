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

export { $, $All, findTile, isEven };
