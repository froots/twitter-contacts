var ContactsList = Backbone.Collection.extend({
  model: Contact,

  url: function() {
    return API_ROOT + "friends/ids.json?screen_name=" + this.user.get("screenName");
  },

  initialize: function(models, options) {
    this.user = options.user;
  },

  parse: function(response) {
    console.log('Parser', response);
  }
});