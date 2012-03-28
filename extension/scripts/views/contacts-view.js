var ContactsView = Backbone.View.extend({
  tagName: "div",

  className: "contacts-view",

  initialize: function() {
    this.template = _.template($('#_ContactsView').html());
    this.collection.on('start-load', this.onStartLoad, this);
  },

  onStartLoad: function() {
    if (!this.loadView) {
      this.loadView = new ContactsLoadingView({
        collection: this.collection
      });
    }
    this.$el.append(this.loadView.render().el);
  },

  render: function() {
    return this;
  }
});