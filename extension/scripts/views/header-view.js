var HeaderView = Backbone.View.extend({
  
  tagName: 'header',

  initialize: function() {
    this.template = _.template($('#_HeaderView').html());
  },

  render: function() {
    this.data = (_.isUndefined(this.model)) ? { screenName: '' } : this.model.toJSON();
    this.$el.html(this.template(this.data));
    return this;
  }

});