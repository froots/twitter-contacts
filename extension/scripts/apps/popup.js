var PopupApp = Backbone.View.extend({
  initialize: function(options) {
    this.background = options.background;
    this.components = {
      header: new HeaderView()
    };
    this.$el.append(this.components.header.render().el);
    this.addUserForm();
  },

  addUserForm: function() {
    this.components.userForm = new UserForm();
    this.$el.append(this.components.userForm.render().el);
    radio('submitUserForm').subscribe([this.onUserFormSubmit, this]);
  },

  removeUserForm: function() {
    this.components.userForm.remove();
    radio('submitUserForm').unsubscribe();
  },

  onUserFormSubmit: function(screenName) {
    this.initializeNewDownload(screenName);
  },

  onContactsListComplete: function(contacts) {
    this.removeUserForm();
  },

  initializeNewDownload: function(screenName) {
    this.userIds = new UserIds({ screenName: screenName });
    this.user = new User({
      screenName: screenName
    });
    this.contactsList = new ContactsList([], {
      user: this.user,
      userIds: this.userIds
    });
    this.components.contactsView = new ContactsView({
      collection: this.contactsList
    });
    this.$el.append(this.components.contactsView.render().el);
    this.userIds.fetch();
    radio('ContactsList:complete-load').subscribe([this.onContactsListComplete, this]);
  }
});

$(function() {
  var popup = new PopupApp({
    el: $('#popup-app')[0],
    background: chrome.extension.getBackgroundPage()
  });
});