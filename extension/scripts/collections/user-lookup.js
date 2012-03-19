var UserLookup = Backbone.Collection.extend({
  model: Contact,

  url: function() {
    return API_ROOT + 'users/lookup.json';
  },

  initialize: function(models, options) {
    this.ids = options.ids;
  },

  getPostData: function() {
    return {
      'user_id': this.ids.join(','),
      'include_entities': false
    };
  },

  postFetch: function(options) {
    var fetchOptions = _.extend((options || {}), {
      type: 'POST',
      data: this.getPostData()
    });
    this.fetch(fetchOptions);
  },

  parse: function(response) {
    return response.map(function(contact) {
      delete contact.status;
      return contact;
    });
  }
});