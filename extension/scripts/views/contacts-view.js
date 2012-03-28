var ContactsView = Backbone.View.extend({
  tagName: "div",

  className: "contacts-view",

  initialize: function() {
    _.bindAll(this, 'renderContact');
    this.template = _.template($('#_ContactsView').html());
    this.collection.on('start-load', this.onStartLoad, this);
    this.collection.on('complete-load', this.onCompleteLoad, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.forEach(this.renderContact);
    return this;
  },

  renderContact: function(contact) {
    var contactView = new ContactView({ model: contact });
    this.$('.contact-list').append(contactView.render().el);
  },

  onStartLoad: function() {
    this.createLoadingView();
  },

  onCompleteLoad: function() {
    this.destroyLoadingView();
    this.render();
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