var ContactsView = Backbone.View.extend({
  tagName: "div",

  className: "contacts-view", 

  initialize: function() {
    this.template = _.template($('#_ContactsView').html());
    this.collection.on('start-load', this.startLoad, this);
    this.collection.on('add', this.render, this);
  },

  startLoad: function() {
    this.render();
  },

  render: function() {
    var data = this.getData();
    this.$el.html(this.template(data));
    return this;
  },

  getData: function() {
    var userIdLength = (this.collection.userIds.get('ids')) ? this.collection.userIds.get('ids').length : 0;
    return {
      length: this.collection.length,
      userIdLength: userIdLength,
      user: this.collection.user.toJSON(),
      requestCount: this.collection.requestCount,
      blockCount: this.collection.blockCount
    };
  }
});