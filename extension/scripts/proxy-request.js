var ProxyRequest = function(requestObject) {
  this.requestObject = requestObject;
};

ProxyRequest.create = function(requestObject) {
  return new ProxyRequest(requestObject);
};

ProxyRequest.prototype.send = function() {
  this.ajaxRequest = $.ajax(this.requestObject);
  return this;
};