var recipes = {};

function updateObjectWithKeyAndValue(obj, name, ingredient) {
  var newObj = Object.assign({}, obj, {[name]:ingredient});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, name, ingredient) {
  Object.assign(obj, {[name]:ingredient});
  return obj;
}

function deleteFromObjectByKey(obj, name) {
  delete(obj.name)
  return obj;
}