var ContactsView = Backbone.View.extend({
  tagName: "div",

  className: "contacts-view",

  initialize: function() {
    this.template = _.template($('#_ContactsView').html());
    this.collection.on('start-load', this.onStartLoad, this);
    this.collection.on('complete-load', this.onCompleteLoad, this);
  },

  render: function() {
    return this;
  },

  onStartLoad: function() {
    this.createLoadingView();
  },

  onCompleteLoad: function() {
    this.destroyLoadingView();
  },

  createLoadingView: function() {
    if (!this.loadView) {
      this.loadView = new ContactsLoadingView({
        collection: this.collection
      });
    }
    this.$el.append(this.loadView.render().el);
  },

  destroyLoadingView: function() {
    if (this.loadView) {
      this.loadView.remove();
    }
  }
});