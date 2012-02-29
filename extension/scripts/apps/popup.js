var PopupApp = function(options) {
  this.el = options.el;
  this.$el = $(this.el);
  this.views = {};
  this.background = chrome.extension.getBackgroundPage();
};

PopupApp.prototype.init = function(){
  this.views.userForm = new UserForm();
  this.$el.append(this.views.userForm.render());
};

PopupApp.prototype.broadcast = function(name, data) {
  console.log('broadcasting', name, data);
  this.background.backgroundApp.receive(name, data);
};

var popupApp = new PopupApp({
  el: document.getElementById('app')
});

popupApp.init();