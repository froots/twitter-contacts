var User = Backbone.Model.extend({
  defaults: {
    'screenName': ''
  },

  fetchFromLocal: function() {
    var storage = new Store('user'),
      model = storage.retrieve();
    if (model) {
      this.set(model);
      return model;
    } else {
      return false;
    }
  }
});