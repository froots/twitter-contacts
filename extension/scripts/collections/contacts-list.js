var ContactsList = Backbone.Collection.extend({
  model: Contact,

  initialize: function(models, options) {
    this.user = options.user;
    this.userIds = options.userIds;
    this.userIds.on('change:ids', this.handleUserIdReset, this);
  },

  handleUserIdReset: function() {
    console.log('start pulling actual contacts', this.userIds.get('ids'));
  }
});