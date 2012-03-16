var ContactsList = Backbone.Collection.extend({
  model: Contact,

  initialize: function(models, options) {
    this.user = options.user;
    this.userIds = options.userIds;
    this.userIds.on('change:ids', this.handleUserIdReset, this);
  },

  handleUserIdReset: function() {
    console.log('start pulling actual contacts', this.userIds.get('ids'));
    // divide userIds into 100 user chunks
    // create a new 'UserLookup' object for each (collection?)
    // fetch each collection
    // when each returns, add to this master contact list
    // show loading status / count / stats as they are returned
    // show full list when all complete
    // store in local storage when all complete
  }
});