var HeaderView = Backbone.View.extend({
  
  tagName: 'header',

  initialize: function() {
    this.template = _.template($('#_HeaderView').html());
    this.model.on('change:screenName', this.render, this);
  },

  render: function() {
    this.data = this.model.toJSON();
    this.$el.html(this.template(this.data));
    return this;
  }

});