var BackgroundApp = function() {
  this.user = new User();
	this.contacts = new ContactsList([], { user: this.user });
};

BackgroundApp.prototype.init = function() {};

BackgroundApp.prototype.receive = function(event, data) {
  console.log('Received', event, data);
  this[event](data);
};

BackgroundApp.prototype.downloadContacts = function(screenName) {
  this.user.set({ 'screenName': screenName });
  this.contacts.fetch();
};

var backgroundApp = new BackgroundApp();
backgroundApp.init();