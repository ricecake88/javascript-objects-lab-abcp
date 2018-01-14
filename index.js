var recipes = {};

function updateObjectWithKeyAndValue(obj, name, ingredient) {
  var newObj = Object.assign({}, obj, {[name]:ingredient});
  return newObj;
}