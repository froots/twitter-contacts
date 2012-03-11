(function(window, Backbone) {

  var sync = function(method, model, options) {
    var requestObj = {
      url: model.url(),
      dataType: 'json'
    };
    var dispatcher = new Dispatcher(_.extend(requestObj, options));
    dispatcher.send();
    return dispatcher;
  };

  Backbone.sync = sync;

}(this, this.Backbone));