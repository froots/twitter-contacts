var ContactsList = Backbone.Collection.extend({
  model: Contact,

  initialize: function(models, options) {
    _.bindAll(this, 'createUserLookup', 'fetchLookup');
    this.user = options.user;
    this.userIds = options.userIds;
    this.requestCount = 0;
    this.blockCount = 0;
    this.userIds.on('change:ids', this.handleUserIdReset, this);
  },

  handleUserIdReset: function() {
    this.loadAll();
  },

  loadAll: function() {
    var divided = this.userIds.getBlocks();
    this.blockCount = divided.length;
    this.reset([]);
    this.requestCount = 0;
    this.userLookups = [];
    this.trigger('start-load', this);
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
    this.requestCount++;
    this.add(lookup.models);
    if (this.requestCount == this.blockCount) {
      this.trigger('complete-load', this);
    }
  }
});