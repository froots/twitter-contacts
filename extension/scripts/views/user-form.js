var UserForm = Backbone.View.extend({
  className: 'user-form container',

  initialize: function() {
    this.template = _.template($('#_UserForm').html());
  },

  events: {
    "submit form": "handleSubmit"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleSubmit: function(ev) {
    ev.preventDefault();
    var screenName = this.$('input[name=screen-name]').val();
    radio('submitUserForm').broadcast(screenName);
  }
});