var UserIds = Backbone.Model.extend({
  url: function() {
    return API_ROOT + "friends/ids.json?screen_name=" + this.get("screenName");
  }
});