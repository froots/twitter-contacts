var ContactsList = Backbone.Collection.extend({
  model: Contact,

  initialize: function(models, options) {
    _.bindAll(this, 'createUserLookup', 'fetchLookup');
    this.user = options.user;
    this.userIds = options.userIds;
    this.userIds.on('change:ids', this.handleUserIdReset, this);
  },

  handleUserIdReset: function() {
    this.loadAll();
  },

  loadAll: function() {
    var divided = this.userIds.getBlocks();
    this.reset([]);
    this.userLookups = [];
    _.each(divided, this.createUserLookup);
    this.fetchAllLookups();
  },

  createUserLookup: function(block) {
    var lookup = new UserLookup({}, { ids: block });
    lookup.on('reset', this.handleLookup, this);
    this.userLookups.push(lookup);
  },

  fetchAllLookups: function() {
    _.each(this.userLookups, this.fetchLookup);
  },

  fetchLookup: function(lookup) {
    lookup.postFetch();
  },

  handleLookup: function(lookup) {
    this.add(lookup.models);
    console.log(this.length);
  }
});