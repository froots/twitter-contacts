var UserForm = Backbone.View.extend({
  className: 'user-form',

  initialize: function() {
    this.template = _.template($('#_UserForm').html());
  },

  events: {
    "submit form": "handleSubmit"
  },

  render: function() {
    this.$el.html(this.template());
    return this.el;
  },

  handleSubmit: function(ev) {
    ev.preventDefault();
    console.log(this.$('input[name=screen-name]').val());
  }
});