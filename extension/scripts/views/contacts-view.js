var ContactsView = Backbone.View.extend({
  tagName: "div",

  className: "contacts-view",

  events: {
    "keyup .contacts-search": "searchChange",
    "submit .contacts-filter": "searchSubmit"
  },

  initialize: function() {
    _.bindAll(this, 'renderContact');
    this.template = _.template($('#_ContactsView').html());
    this.collection.on('start-load', this.onStartLoad, this);
    this.collection.on('complete-load', this.onCompleteLoad, this);
    this.collection.on('reset', this.onCompleteLoad, this);
    this.filter = "";
  },

  render: function() {
    this.$el.html(this.template());
    this.renderList(this.collection);
    return this;
  },

  renderList: function(collection) {
    this.$('.contact-list').empty();
    collection.forEach(this.renderContact);
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
  },

  searchChange: function(ev) {
    var searchTerm = $(ev.currentTarget).val();
    if (this.filter !== searchTerm) {
      this.renderList(this.collection.search(searchTerm));
    }
  },

  searchSubmit: function(ev) {
    ev.preventDefault();
  }
});