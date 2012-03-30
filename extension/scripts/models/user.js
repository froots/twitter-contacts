var User = Backbone.Model.extend({
  initialize: function() {
    this.on('change', this.store, this);
  },

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
  },

  store: function() {
    var storage = new Store('user');
    return storage.store(this.toJSON());
  }
});