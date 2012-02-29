var ContactsList = Backbone.Collection.extend({
  url: function() {
    return API_ROOT + "friends/ids.json?screen_name=" + this.user.get("screenName");
  },

  initialize: function(models, options) {
    this.user = options.user;
  }
});