var BackgroundStore = function(key) {
  this.key = key;
};

BackgroundStore.create = function(key) {
  return new BackgroundStore(key);
};

BackgroundStore.prototype.retrieve = function() {
  if (!window.localStorage) return false;
  var val = localStorage[this.key];
  try {
    return JSON.parse(val);
  } catch(e) {
    return false;
  }
};

BackgroundStore.prototype.store = function(val) {
  if (!window.localStorage) return false;
  var stringified;
  try {
    stringified = JSON.stringify(val);
  } catch(e) {
    return false;
  }
  localStorage[this.key] = stringified;
  return true;
};