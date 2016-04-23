module.exports = function deepEqual(obj1, obj2) {
  if (obj1 === null && obj2 === null) {
    return true;
  } else if (obj1 === null || obj2 === null) {
    return false;
  }
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
    }
    for (var prop in obj1) {
      if (obj2[prop] === null && obj1[prop] !== null) {
        return false
      }
      if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object') {
        return deepEqual(obj1[prop], obj2[prop])
      } else if (obj1[prop] !== obj2[prop]) {
        return false
      }
    }
  }
  return true
};

