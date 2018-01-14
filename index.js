var recipes = {};

function updateObjectWithKeyAndValue(obj, name, ingredient) {
  Object.assign(obj, {[name]:ingredient});
  return obj;
}