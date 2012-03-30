var Store = function(key) {
  this.background = chrome.extension.getBackgroundPage();
  this.key = key;
  this.backgroundStore = this.background.BackgroundStore.create(this.key);
};

Store.prototype.retrieve = function() {
  return this.backgroundStore.retrieve();
};

Store.prototype.store = function(data) {
  return this.backgroundStore.store(data);
};