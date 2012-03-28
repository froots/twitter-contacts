var ContactView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.template = _.template($('#_ContactView').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});