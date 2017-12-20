const isEven = value => value % 2;

function $(selector) {
  return document.querySelector(selector);
}
function $All(selector) {
  return document.querySelectorAll(selector);
}

export { $, $All, isEven };

// export const moveFromKey = {
//   a: function(position) {
//     return (position -= 1);
//   },
//   d: function(position) {
//     return (position += 1);
//   },
//   w: function(position, width) {
//     return (position -= width);
//   },
//   s: function(position, width) {
//     return (position += width);
//   }
// };
