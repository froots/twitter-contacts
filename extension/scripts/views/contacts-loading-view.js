var ContactsLoadingView = Backbone.View.extend({

  tagName: 'div',

  className: 'contacts-loading',

  initialize: function() {
    this.template = _.template($('#_ContactsLoadingView').html());
    this.collection.on('add', this.onAdd, this);
    this.collection.on('complete-load', this.onCompleteLoad, this);
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
  },

  onAdd: function() {
    this.render();
  },

  onCompleteLoad: function() {
    alert('done'); 
  }

});