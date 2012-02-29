var PopupApp = function(options) {
  this.el = options.el;
  this.$el = $(this.el);
  this.views = {};
};

PopupApp.prototype.init = function(){
  this.views.userForm = new UserForm();
  this.$el.append(this.views.userForm.render());
};

var popupApp = new PopupApp({
  el: document.getElementById('app')
});

popupApp.init();