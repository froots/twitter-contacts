var PopupApp = Backbone.View.extend({
  initialize: function(options) {
    this.background = options.background;
    this.components = {};
    this.addUserForm();
  },

  addUserForm: function() {
    this.components.userForm = new UserForm();
    this.$el.append(this.components.userForm.render().el);
    radio('submitUserForm').subscribe([this.submitsUserForm, this]);
  },

  submitsUserForm: function(screenName) {
    this.userIds = new UserIds({ screenName: screenName });
    this.user = new User({
      screenName: screenName
    });
    this.contactsList = new ContactsList([], {
      user: this.user,
      userIds: this.userIds
    });
    this.contactsView = new ContactsView({
      collection: this.contactsList
    });
    this.$el.append(this.contactsView.render().el);
    this.userIds.fetch();
  }
});

$(function() {
  var popup = new PopupApp({
    el: $('#popup-app')[0],
    background: chrome.extension.getBackgroundPage()
  });
});