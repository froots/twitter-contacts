var Dispatcher = function(requestObject) {
  var background = chrome.extension.getBackgroundPage();
  this.requestObject = requestObject;
  this.proxyRequest = background.ProxyRequest.create(requestObject);
};

Dispatcher.prototype.send = function() {
  this.proxyRequest.send();
};